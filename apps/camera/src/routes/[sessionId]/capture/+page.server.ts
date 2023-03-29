import { URL_OPENAPI_HOST } from '$env/static/private'

const PATH_GET_INITIAL_DATA = `${URL_OPENAPI_HOST}/capture/`

export const load = async ({ params }: { params: { sessionId: string } }) => {
    console.log("🚀 ~ file: +page.server.ts:6 ~ load ~ params:", params)
    let data = null;
    await fetch(`${PATH_GET_INITIAL_DATA}${params.sessionId}/start`, {
        method: 'PUT'
    })
        .then(response => response.json())
        .then(response => {
            console.log("🚀 ~ file: +page.server.ts:11 ~ load ~ response:", response)
            data = response;
        })

    return data;
}