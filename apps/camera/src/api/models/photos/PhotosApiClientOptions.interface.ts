/**
* @Name PhotosApiClientEndpoints
* @description
* Interface for the Photos urls used to avoid hard-coded strings */
export interface PhotosApiClientEndpoints {
    uploadPhoto: string
}

/**
 * @Name PhotosApiClientOptions
 * @description
 * Interface for the Items api client options (includes endpoints used to avoid hard-coded strings)
 */
export interface PhotosApiClientOptions {
    mockDelay?: number
    endpoints: PhotosApiClientEndpoints
}
