import { PUBLIC_URL_OPENAPI_HOST } from '$env/static/public'
import { useHttpClient, type IHttpRequestParams, HttpRequestType } from 'src/http-client'

const CAPTURE_API_ENDPOINT = `${PUBLIC_URL_OPENAPI_HOST}/capture/`

export const load = async ({ params }: { params: { sessionId: string } }) => {
    const startRequestParams: IHttpRequestParams<any> = {
        endpoint: `${CAPTURE_API_ENDPOINT}[sessionId]/start`,
        requestType: HttpRequestType.put,
        requiresToken: false,
        payload: {
            sessionId: params.sessionId
        }
    }

    const progressRequestParams: IHttpRequestParams<any> = {
        endpoint: `${CAPTURE_API_ENDPOINT}sessions/[sessionId]/progress`,
        requestType: HttpRequestType.get,
        requiresToken: false,
        payload: {
            sessionId: params.sessionId
        }
    }

    const data = await useHttpClient().request(startRequestParams)
    const progress = await useHttpClient().request(progressRequestParams)

    return { data, progress };
}
