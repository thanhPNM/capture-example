import type { ISessionProgress } from '@models/sessions/Session.interface'

import { apiClient } from '@api'
import { useAppStore } from '@store'

export const load = async ({ params }: { params: { sessionId: string } }) => {
    let progress: ISessionProgress | null = null;
    const { sessionStore } = useAppStore()
    try {
        const res = await apiClient.session.fetchSessionProgress(params.sessionId)
        progress = res
        sessionStore.actions.getProgess(res)
    } catch (error: any) {
        if (error?.status === 404) {
            throw error(404, {
                message: error?.message ?? 'Not found'
            });
        }
    }

    return { sessionId: params.sessionId, progress: progress };
}
