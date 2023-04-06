import { apiClient } from 'src/api'

export const load = async ({ params }: { params: { sessionId: string } }) => {
    let progress: any
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

    return { progress };
}
