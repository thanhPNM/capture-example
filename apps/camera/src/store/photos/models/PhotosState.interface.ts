import type { IPhoto } from 'src/models/photos/Photo.interface'

export interface IPhotosState {
    loading: boolean,
    photos: IPhoto[]
}