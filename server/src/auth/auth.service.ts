import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    NotFoundException,
    UnauthorizedException
} from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import { AuthSignInDto } from './dto/auth.dto'
import { jwtSecret } from '../utils/constants'


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    hashPassword = async (password: string) => await bcrypt.hash(password, 10)
    comparePasswords = async (args: { hash: string, password: string }) => await bcrypt.compare(args.password, args.hash)
    signToken = async (args: { userId: number, login: string }) => await this.jwt.signAsync({id: args.userId, login: args.login}, {secret: jwtSecret, expiresIn: 60 * 60})

    async user(userData: AuthSignInDto, res: Response): Promise<Response> {
        const { login, password } = userData

        let foundUser: User | never

        if (login.indexOf('@') === -1) {
            foundUser = await this.prisma.user.findUnique({where: {login}})
        } else {
            foundUser = await this.prisma.user.findUnique({where: {email: login}})
        }

        if (!foundUser) {
            throw new NotFoundException('Not found user')
        }

        const compareSuccess = await this.comparePasswords({
            password,
            hash: foundUser.password,
        })

        if (!compareSuccess) {
            throw new UnauthorizedException('Wrong credentials')
        }

        const token = await this.signToken({userId: foundUser.id, login: foundUser.login})

        if (!token) {
            throw new ForbiddenException('Could not signin')
        }

        res.cookie('token', token, {})

        return res.send(foundUser)
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const { login, email, password } = data

        const userExists = await this.prisma.user.findFirst({
            where: {
                OR: [
                    {login: {contains: login}},
                    {email: {contains: email}}
                ],
            },
        })

        if (userExists) {
            throw new BadRequestException('Login/Email already exists')
        }

        const hashedPassword = await this.hashPassword(password)

        return await this.prisma.user.create({
            data: {
                login,
                email,
                password: hashedPassword
            }
        })
    }

    async users(params: {
        skip?: number
        take?: number
        cursor?: Prisma.UserWhereUniqueInput
        where?: Prisma.UserWhereInput
        orderBy?: Prisma.UserOrderByWithRelationInput
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params

        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput
        data: Prisma.UserUpdateInput
    }): Promise<User> {
        const { where, data } = params
        return this.prisma.user.update({
            data,
            where,
        })
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        })
    }
}