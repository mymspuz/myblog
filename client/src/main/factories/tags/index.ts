import { ITags } from '../../../domain/tags'
import { RemoteTags } from '../../../data/tags'
import { makeApiUrl, makeAxiosHttpClient } from '../http'

export const makeRemoteTags = (): ITags => new RemoteTags(makeApiUrl('tags'), makeAxiosHttpClient())