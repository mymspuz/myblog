import { AccountModel } from 'domain/models'
import { makeLocalStorageAdapter } from 'main/factories/cache/LocalStorageAdapter'

export const setCurrentAccountAdapter = (account: AccountModel): void => makeLocalStorageAdapter().set('authBlog', account)

export const getCurrentAccountAdapter = (): AccountModel => makeLocalStorageAdapter().get('authBlog')