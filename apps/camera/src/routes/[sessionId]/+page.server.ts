import { error } from '@sveltejs/kit';
import { validateSessionId, isMobileBrowser } from 'shared-utils';

import { apiClient } from 'src/api'
import { useAppStore } from '@store'

export const load = async ({ params }: { fetch: any, params: { sessionId: string } }) => {
    if (!validateSessionId(params.sessionId)) {
        throw error(404, {
            message: 'Not found'
        });
    }

    const { sessionStore } = useAppStore()
    let initialData: unknown, captureFlow: unknown;
    try {
        const promiseAllResponse = await Promise.all([
            apiClient.session.fetchInitialData(params.sessionId),
            apiClient.session.fetchCaptureFlow(params.sessionId)
        ])

        const [initialDataRes, captureFlowRes] = promiseAllResponse;
        sessionStore.actions.getInitialData(initialDataRes)
        initialData = initialDataRes;
        captureFlow = captureFlowRes
    } catch (error: any) {
        if (error?.status === 404) {
            throw error(404, {
                message: error?.message ?? 'Not found'
            });
        }
    }

    return { id: params.sessionId, sessionInfo: initialData, captureFlow }
}
