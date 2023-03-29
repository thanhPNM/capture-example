import { error } from '@sveltejs/kit';
import { URL_OPENAPI_HOST } from '$env/static/private'

import { validateSessionId } from 'shared-utils';

const PATH_GET_INITIAL_DATA = `${URL_OPENAPI_HOST}/capture/sessions/`

export const load = async ({ params }: { params: { sessionId: string } }) => {
    console.log("🚀 ~ file: +page.server.ts:9 ~ load ~ sessionId:", params.sessionId)
    if (!validateSessionId(params.sessionId)) {
        throw error(404, {
            message: 'Not found'
        });
    }

    let res = {} as any;

    await fetch(`${PATH_GET_INITIAL_DATA}${params.sessionId}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => {
            console.log("response -->", response)
            res = response

        })

    if (res?.code === 404) {
        throw error(404, {
            message: res?.message ?? 'Not found'
        });
    }

    return { id: params.sessionId, sessionInfo: res }
}
