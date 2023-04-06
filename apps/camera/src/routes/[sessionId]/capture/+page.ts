import { apiClient } from '@api'
import type { ISessionProgress } from '@models/sessions/Session.interface'

export const load = async ({ params }: { params: { sessionId: string } }) => {
    let progress: ISessionProgress | null = null;

    try {
        const res = await apiClient.session.fetchSessionProgress(params.sessionId)
        progress = res
    } catch (error: any) {
        if (error?.status === 404) {
            throw error(404, {
                message: error?.message ?? 'Not found'
            });
        }
    }

    return { sessionId: params.sessionId, progress: progress };
}
