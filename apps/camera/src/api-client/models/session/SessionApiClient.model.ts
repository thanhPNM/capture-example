import type { SessionApiClientEndpoints, SessionApiClientOptions } from './SessionApiClientOptions.interface'
import type { ISessionApiClient } from './SessionApiClient.interface'
import type { ISession, ISessionProgress, ISessionStartApiResponse } from '@models/sessions/Session.interface'

import { useHttpClient, type IHttpRequestParams, HttpRequestType } from 'src/http-client'

export class SessionApiClientModel implements ISessionApiClient {
    private readonly endPoints!: SessionApiClientEndpoints
    private readonly mockDelay: number = 0

    constructor (options: SessionApiClientOptions) {
        console.log("🚀 ~ file: SessionApiClient.model.ts:12 ~ SessionApiClientModel ~ constructor ~ options:", options)
        this.endPoints = options.endpoints
        if (options.mockDelay) {
            this.mockDelay = options.mockDelay
        }
    }

    fetchInitialData(sessionId: string): Promise<ISession> {
        const requestParams: IHttpRequestParams<{ sessionId: string }> = {
            requestType: HttpRequestType.get,
            endpoint: this.endPoints.fetchInitialData,
            requiresToken: false,
            payload: {
                sessionId: sessionId
            }
        };
        return useHttpClient().request(requestParams)
    }

    fetchSessionProgress(sessionId: string): Promise<ISessionProgress> {
        const requestParams: IHttpRequestParams<{ sessionId: string }> = {
            requestType: HttpRequestType.get,
            endpoint: this.endPoints.fetchSessionProgress,
            requiresToken: false,
            payload: {
                sessionId: sessionId
            }
        };

        return useHttpClient().request(requestParams)
    }

    startSesson(sessionId: string): Promise<ISessionStartApiResponse> {
        const requestParams: IHttpRequestParams<{ sessionId: string }> = {
            requestType: HttpRequestType.put,
            endpoint: this.endPoints.startSession,
            requiresToken: false,
            payload: {
                sessionId: sessionId
            }
        };

        return useHttpClient().request(requestParams)
    }
}