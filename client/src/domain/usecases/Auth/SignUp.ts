import { AccountModel } from 'domain/models'

export interface ISignUp {
    signUp: (params: SignUp.Params) => Promise<SignUp.Model>
}

export namespace SignUp {
    export type Params = {
        name: string
        email: string
        password: string
        passwordConfirmation: string
    }

    export type Model = AccountModel
}