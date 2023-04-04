import type * as SvelteStore from 'svelte/store'

import type { ISession, ISessionProgress } from '@models/sessions/Session.interface'
import type { IPhoto } from '@models/photos/Photo.interface'

export interface ISessionStoreActions {
    getInitialData(data: ISession): Promise<void>,
    getProgess(data: ISessionProgress): Promise<void>,
    startSession(): Promise<void>,
    uploadPhoto(item: IPhoto): Promise<void>
}

export interface ISessionStoreGetters {
    loading: SvelteStore.Readable<boolean>,
    initialData: SvelteStore.Readable<ISession | null>,
    progress: SvelteStore.Readable<ISessionProgress | null>
}

export interface ISessionStore {
    actions: ISessionStoreActions,
    getters: ISessionStoreGetters
}