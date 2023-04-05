import { error } from '@sveltejs/kit';
import { PUBLIC_URL_OPENAPI_HOST } from '$env/static/public'
import { useHttpClient, type IHttpRequestParams, HttpRequestType } from 'src/http-client'

import { validateSessionId } from 'shared-utils';

import { useAppStore } from '@store'

const PATH_GET_INITIAL_DATA = `${PUBLIC_URL_OPENAPI_HOST}/capture/sessions/[sessionId]`

export const load = async ({ params }: { params: { sessionId: string } }) => {
    if (!validateSessionId(params.sessionId)) {
        throw error(404, {
            message: 'Not found'
        });
    }

    const { sessionStore } = useAppStore()

    const requestParams: IHttpRequestParams<any> = {
        endpoint: PATH_GET_INITIAL_DATA,
        requestType: HttpRequestType.get,
        requiresToken: false,
        payload: {
            sessionId: params.sessionId
        }
    }
    const res = await useHttpClient().request(requestParams) as any
    sessionStore.actions.getInitialData(res)

    if (res?.status === 404) {
        throw error(404, {
            message: res?.message ?? 'Not found'
        });
    }

    return { id: params.sessionId, sessionInfo: res }
}
