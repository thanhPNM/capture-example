import { error } from '@sveltejs/kit';
import { validateSessionId } from 'shared-utils';

import { apiClient } from 'src/api'
import { useAppStore } from '@store'

export const load = async ({ params }: { params: { sessionId: string } }) => {
    if (!validateSessionId(params.sessionId)) {
        throw error(404, {
            message: 'Not found'
        });
    }

    const { sessionStore } = useAppStore()
    let data: unknown;
    try {
        const res = await apiClient.session.fetchInitialData(params.sessionId)
        sessionStore.actions.getInitialData(res)
        data = res;
    } catch (error: any) {
        if (error?.status === 404) {
            throw error(404, {
                message: error?.message ?? 'Not found'
            });
        }
    }

    return { id: params.sessionId, sessionInfo: data }
}
