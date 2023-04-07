import type * as SvelteStore from 'svelte/store'

import type { ISessionInitialData, ISessionProgress, ISessionStartApiResponse } from '@models/sessions/Session.interface'
import type { IPhoto } from '@models/photos/Photo.interface'

export interface ISessionStoreActions {
    getInitialData(data: ISessionInitialData): Promise<void>,
    getProgess(data: ISessionProgress): Promise<void>,
    startSession(data: ISessionStartApiResponse): Promise<void>,
    uploadPhoto(item: IPhoto): Promise<void>
}

export interface ISessionStoreGetters {
    loading: SvelteStore.Readable<boolean>,
    initialData: SvelteStore.Readable<ISessionInitialData | null>,
    startSessionApiResponse: SvelteStore.Readable<ISessionStartApiResponse | null>,
    progress: SvelteStore.Readable<ISessionProgress | null>
}

export interface ISessionStore {
    actions: ISessionStoreActions,
    getters: ISessionStoreGetters
}