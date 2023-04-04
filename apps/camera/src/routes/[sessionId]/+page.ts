import { error } from '@sveltejs/kit';
import { PUBLIC_URL_OPENAPI_HOST } from '$env/static/public'

import { validateSessionId } from 'shared-utils';

import { useAppStore } from '@store'

const PATH_GET_INITIAL_DATA = `${PUBLIC_URL_OPENAPI_HOST}/capture/sessions/`

export const load = async ({ params }: { params: { sessionId: string } }) => {
    if (!validateSessionId(params.sessionId)) {
        throw error(404, {
            message: 'Not found'
        });
    }

    const { sessionStore } = useAppStore()

    let res = {} as any;

    await fetch(`${PATH_GET_INITIAL_DATA}${params.sessionId}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => {
            console.log("response -->", response)
            res = response
            sessionStore.actions.getInitialData(response)
        })

    if (res?.code === 404) {
        throw error(404, {
            message: res?.message ?? 'Not found'
        });
    }

    return { id: params.sessionId, sessionInfo: res }
}
