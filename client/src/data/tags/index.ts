import {ITags, Tags} from '../../domain/tags'
import {HttpStatusCode, IHttpClient} from "../protocols/http";
import {InvalidCredentialsError, UnexpectedError} from "../../domain/errors";

export class RemoteTags implements ITags {
    constructor(
        private readonly url: string,
        private readonly httpClient: IHttpClient
    ) {}

    async get(): Promise<Tags.TItems[]> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get'
        })

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError()
            default:
                throw new UnexpectedError()
        }
    }
}