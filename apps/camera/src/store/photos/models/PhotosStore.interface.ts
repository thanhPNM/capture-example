import type * as SvelteStore from 'svelte/store'

import type { IPhoto } from 'src/models/photos/Photo.interface'

/**
 * @name IPhotosStoreActions
 * @description Interface represents our Items state actions
 */

export interface IPhotosStoreActions {
    loadScreenshots(): Promise<void>
    uploadPicture(item: IPhoto): Promise<void>
}

/**
 * @name IPhotosStoreGetters
 * @description Interface represents our store getters
 * Getters will be used to consume the data from the store.
 */
export interface IPhotosStoreGetters {
    // note: we have to use type SvelteStore.Readable on these properties
    loading: SvelteStore.Readable<boolean>
    photos: SvelteStore.Readable<IPhoto[]>
}

/**
 * @name IPhotosStore
 * @description Interface represents our Screenshots store module
 */
export interface IPhotosStore {
    actions: IPhotosStoreActions, getters: IPhotosStoreGetters
}
