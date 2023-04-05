/**
 * @name HttpRequestType
 * @description
 * The type of http request we need to execute in our HttpClient request method
 */
export const enum HttpRequestType {
    get,
    post,
    put,
    delete,
    patch
}

export const HttpContentTypes = Object.freeze({
    applicationJson: 'application/json',
    formUrlEncoded: 'application/x-www-urlencoded;charset=UTF-8'
})

export const HttpRequestMethods = Object.freeze({
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH'
})