import * as SvelteStore from 'svelte/store'

import type { IPhotosState, IPhotosStore, IPhotosStoreActions, IPhotosStoreGetters } from './models'

import type { IPhoto } from 'src/models/photos/Photo.interface'

const writablePhotosStore = SvelteStore.writable<IPhotosState>({
    loading: false,
    photos: []
})

export function useScreenshotsStore(): IPhotosStore {
    const actions: IPhotosStoreActions = {
        loadScreenshots: async () => {
            writablePhotosStore.update((state) => {
                state.loading = true
                state.photos = []
                return state
            })

            let mockData: IPhoto[] = [
                {
                    image: null,
                    photo_code: 1
                },
                {
                    image: null,
                    photo_code: 2
                }
            ]

            setTimeout(() => {
                writablePhotosStore.update((state) => {
                    state.photos = mockData
                    state.loading = false
                    return state
                })
                console.log('screenshotsStore: loadScreenshots: state updated')
            }, 2000)
        },
        uploadPicture: async (item) => {

        },
    }

    const loading = SvelteStore.derived(writablePhotosStore, ($state) => $state.loading)
    const photos = SvelteStore.derived(writablePhotosStore, ($state) => $state.photos)

    const getters: IPhotosStoreGetters = {
        loading,
        photos
    }

    return {
        actions, getters
    }
}

