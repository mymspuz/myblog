import { HttpStatusCode, IHttpClient } from 'data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from 'domain/errors'
import { ISignIn, SignIn } from 'domain/usecases'

export class RemoteSignIn implements ISignIn {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: IHttpClient
    ) {}

    async signIn(
        params: SignIn.Params
    ): Promise<RemoteSignInNamespace.Model> {
        const httpResponse = await this.httpPostClient.request({
            url: this.url,
            method: 'post',
            body: params,
        })

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError()
            case HttpStatusCode.notFound:
                throw new UnexpectedError('User not found!')
            default:
                throw new UnexpectedError()
        }
    }
}

export namespace RemoteSignInNamespace {
    export type Model = SignIn.Model
}