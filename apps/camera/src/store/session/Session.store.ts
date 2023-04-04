import * as SvelteStore from 'svelte/store'

import type { ISessionState, ISessionStore, ISessionStoreActions, ISessionStoreGetters } from './models'

const writableSessionStore = SvelteStore.writable<ISessionState>({
    loading: true,
    initialData: null,
    progress: null
})

export function useSessionsStore(): ISessionStore {
    const actions: ISessionStoreActions = {
        getInitialData: async (data) => {
            setTimeout(() => {
                writableSessionStore.update((state) => {
                    state.loading = false
                    state.initialData = data
                    return state
                })
            }, 5000)
            console.log('sessionsStore: getInitialData: state updated')
        },
        getProgess: async () => {

        },
        startSession: async () => {

        },
        uploadPhoto: async (photo) => {

        },
    }

    const loading = SvelteStore.derived(writableSessionStore, ($state) => $state.loading)
    const initialData = SvelteStore.derived(writableSessionStore, ($state) => $state.initialData)
    const progress = SvelteStore.derived(writableSessionStore, ($state) => $state.progress)

    const getters: ISessionStoreGetters = {
        loading,
        initialData,
        progress
    }

    return { actions, getters }
}