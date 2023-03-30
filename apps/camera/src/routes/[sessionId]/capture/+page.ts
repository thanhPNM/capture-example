import { PUBLIC_URL_OPENAPI_HOST } from '$env/static/public'

const PATH_GET_INITIAL_DATA = `${PUBLIC_URL_OPENAPI_HOST}/capture/`

export const load = async ({ params }: { params: { sessionId: string } }) => {
    let data = null;
    await fetch(`${PATH_GET_INITIAL_DATA}${params.sessionId}/start`, {
        method: 'PUT'
    })
        .then(response => response.json())
        .then(response => {
            data = response;
        })

    return data;
}
