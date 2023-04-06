/* eslint-disable @typescript-eslint/no-empty-function */
import * as SvelteStore from 'svelte/store'

import type { ISessionState, ISessionStore, ISessionStoreActions, ISessionStoreGetters } from './models'

const writableSessionStore = SvelteStore.writable<ISessionState>({
    loading: true,
    initialData: null,
    startSessionApiResponse: null,
    progress: null
})

export function useSessionsStore(): ISessionStore {
    const actions: ISessionStoreActions = {
        getInitialData: async (data) => {
            setTimeout(() => {
                writableSessionStore.update((state: ISessionState) => {
                    state.loading = false
                    state.initialData = data
                    return state
                })
            }, 1000)
            console.log('sessionsStore: getInitialData: state updated')
        },
        getProgess: async (data) => {
            writableSessionStore.update((state: ISessionState) => {
                state.progress = data
                return state
            })
            console.log('sessionsStore: getProgess: state updated')

        },
        startSession: async (data) => {
            writableSessionStore.update((state: ISessionState) => {
                state.startSessionApiResponse = data
                return state
            })
            console.log('sessionsStore: startSession: state updated')

        },
        uploadPhoto: async (photo) => {

        },
    }

    const loading = SvelteStore.derived(writableSessionStore, ($state) => $state.loading)
    const initialData = SvelteStore.derived(writableSessionStore, ($state) => $state.initialData)
    const startSessionApiResponse = SvelteStore.derived(writableSessionStore, (($state) => $state.startSessionApiResponse))
    const progress = SvelteStore.derived(writableSessionStore, ($state) => $state.progress)

    const getters: ISessionStoreGetters = {
        loading,
        initialData,
        startSessionApiResponse,
        progress
    }

    return { actions, getters }
}