export interface IUploadedPhoto {
    photo_code: number,
    image: Blob | null
}

export interface IProcessingPhoto {
    photoCode: string,
    status: string,
    message: { accepted: string },
    rejectedCount: number
}
