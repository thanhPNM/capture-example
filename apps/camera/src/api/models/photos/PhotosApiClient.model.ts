import axios from 'axios'

import type { PhotosApiClientEndpoints, PhotosApiClientOptions } from './PhotosApiClientOptions.interface'
import type { IPhotosApiClient } from './PhotosApiClient.interface'
import type { IPhoto } from '@models/photos/Photo.interface'

import { useHttpClient, type IHttpRequestParams, HttpRequestType } from 'http-client'

export class PhotosApiClientModel implements IPhotosApiClient {
    private readonly endPoints!: PhotosApiClientEndpoints
    private readonly mockDelay: number = 0

    constructor (options: PhotosApiClientOptions) {
        this.endPoints = options.endpoints
        if (options.mockDelay) {
            this.mockDelay = options.mockDelay
        }
    }

    uploadPhoto(sessionId: string, photo: IPhoto): Promise<void> {
        const formData = new FormData()
        formData.append('photo_code', photo.photo_code)
        formData.append('image', photo.image ?? "")

        const requestParams: IHttpRequestParams = {
            requestType: HttpRequestType.post,
            endpoint: this.endPoints.uploadPhoto,
            requiresToken: false,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            pathParameters: {
                sessionId: sessionId
            },
            payload: formData
        };
        return useHttpClient().request(requestParams)
    }
}