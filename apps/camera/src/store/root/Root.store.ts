import type { IRootStore } from './models'

import { useScreenshotsStore } from '../photos'
import { useSessionsStore } from '../session'

export function useAppStore(): IRootStore {
    return {
        photosStore: useScreenshotsStore(),
        sessionStore: useSessionsStore()
    }
}