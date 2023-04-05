export interface IUrlUtils {
    getFullUrlWithParams(baseUrl: string, params: { [key: string]: number | string }): string
}

/**
   * @name getFullUrlWithParams
   * @description Returns the full formatted url for an API end-point
   * by replacing parameters placeholder with the actual values.
   * @param baseUrl The base API end-point with the params placeholders like {projectId}
   * @param params The request params object with the key/value entries for each parameter
   * @returns The fully formatted API end-point url with the actual parameter values
   */

export const UrlUtils: IUrlUtils = {
    getFullUrlWithParams: (baseUrl: string, params: { [key: string]: number | string } = {}): string => {
        const keys: string[] = Object.keys(params)
        if ((baseUrl || '').indexOf('[') === -1 || keys.length === 0) {
            return baseUrl
        }
        let fullUrl = baseUrl
        keys.forEach(key => {
            fullUrl = fullUrl.replace(`[${key}]`, (params[key] || 'null').toString())
        })
        return fullUrl
    }
}