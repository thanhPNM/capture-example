/**
* @Name SessionApiClientEndpoints
* @description
* Interface for the Session urls used to avoid hard-coded strings */
export interface SessionApiClientEndpoints {
    fetchInitialData: string,
    fetchSessionProgress: string,
    startSession: string
}

/**
 * @Name SessionApiClientOptions
 * @description
 * Interface for the Items api client options (includes endpoints used to avoid hard-coded strings)
 */
export interface SessionApiClientOptions {
    mockDelay?: number
    endpoints: SessionApiClientEndpoints
}
