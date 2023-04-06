// file: src/api-client/models/ApiClient.interface.ts

import type { ISessionApiClient } from './session'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface IApiClient {
    session: ISessionApiClient
}
