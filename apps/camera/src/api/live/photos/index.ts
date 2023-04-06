import { PUBLIC_URL_OPENAPI_HOST } from '$env/static/public'

import { PhotosApiClientModel, type IPhotosApiClient, type PhotosApiClientOptions } from '../../models/photos'

const options: PhotosApiClientOptions = {
    endpoints: {
        uploadPhoto: `${PUBLIC_URL_OPENAPI_HOST}/capture/photos/[sessionId]`
    }
}

const photosApiClient: IPhotosApiClient = new PhotosApiClientModel(options);

export {
    photosApiClient
}