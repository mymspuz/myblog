import { AccountModel } from 'domain/models'

export interface ISignIn {
    signIn(params: SignIn.Params): Promise<SignIn.Model>
}

export namespace SignIn {
    export type Params = {
        login: string
        password: string
    }

    export type Model = AccountModel
}