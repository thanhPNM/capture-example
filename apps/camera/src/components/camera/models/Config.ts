export const CameraConstraintResolution = {
    Default: {
        width: 1920,
        height: 1080,
        facingMode: 'environment',
    } as MediaTrackConstraints,
    _2K: {
        width: {
            min: 1280,
            ideal: 2048,
            max: 3840,
        },
        height: {
            min: 720,
            ideal: 1080,
            max: 2160,
        },
        facingMode: 'environment',
    } as MediaTrackConstraints,
    _4K: {
        width: {
            min: 1920,
            ideal: 3840,
            max: 3840,
        },
        height: {
            min: 1080,
            ideal: 2160,
            max: 2160,
        },
        facingMode: 'environment',
    } as MediaTrackConstraints
}

export const screenshotQuality = 0.92
export const screenshotFormat = 'image/jpeg'
