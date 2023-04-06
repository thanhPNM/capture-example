import type { IPhoto } from '@models/photos/Photo.interface'

/**
 * @Name IPhotosApiClient
 * @description
 * Interface for the Photos api client module
 */
export interface IPhotosApiClient {
    uploadPhoto: (sessionId: string, photo: IPhoto) => Promise<void>
}