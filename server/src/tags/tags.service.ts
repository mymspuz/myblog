import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

import { PrismaService } from '../../prisma/prisma.service'

type TTags = {
    id: number
    name: string
}
@Injectable()
export class TagsService {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<TTags[] | null> {
        try {
            return await this.prisma.tags.findMany({
                select: {id: true, name: true},
                orderBy: {name: 'asc'}
            })
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}