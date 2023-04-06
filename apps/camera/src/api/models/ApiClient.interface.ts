import type { ISessionApiClient } from './session'
import type { IPhotosApiClient } from './photos'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface IApiClient {
    session: ISessionApiClient
    photos: IPhotosApiClient
}
