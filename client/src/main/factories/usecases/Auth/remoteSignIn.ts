import { RemoteSignIn } from 'data/usecases/'
import { ISignIn } from 'domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from 'main/factories/http'

export const makeRemoteSignIn = (): ISignIn => new RemoteSignIn(makeApiUrl('auth/signin'), makeAxiosHttpClient())