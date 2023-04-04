import type { IPhotosStore } from 'src/store/photos/models/PhotosStore.interface'
import type { ISessionStore } from '@store/session/models/SessionStore.interface'

export interface IRootStore {
    photosStore: IPhotosStore
    sessionStore: ISessionStore
}