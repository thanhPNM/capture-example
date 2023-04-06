import type * as SvelteStore from 'svelte/store'

import type { ISession, ISessionProgress, ISessionStartApiResponse } from '@models/sessions/Session.interface'
import type { IPhoto } from '@models/photos/Photo.interface'

export interface ISessionStoreActions {
    getInitialData(data: ISession): Promise<void>,
    getProgess(data: ISessionProgress): Promise<void>,
    startSession(data: ISessionStartApiResponse): Promise<void>,
    uploadPhoto(item: IPhoto): Promise<void>
}

export interface ISessionStoreGetters {
    loading: SvelteStore.Readable<boolean>,
    initialData: SvelteStore.Readable<ISession | null>,
    startSessionApiResponse: SvelteStore.Readable<ISessionStartApiResponse | null>,
    progress: SvelteStore.Readable<ISessionProgress | null>
}

export interface ISessionStore {
    actions: ISessionStoreActions,
    getters: ISessionStoreGetters
}