export interface ISession {
    session_key: string,
    theme: string,
    active: boolean,
    status: string,
    redirect_url: string,
    inspect_started_at?: string | null,
    inspect_ended_at?: string | null,
    capture_duration?: number | null,
    created_at: string | null,
    updated_at?: string | null,
    language: string,
    customized: ICustomizedSession,
    languages: ILanguage[],
    branding: IBranding,
    access_token: string
}

export interface ILanguage {
    iso: string,
    label: string,
    language_code: string
}

export interface IBranding {
    logo: string,
    logo_light: string,
    bg_color: string,
    bg_text_color: string,
    logo_light_primary: boolean,
    videos: { default: string }
}

export interface ICustomizedSession {
    skip_vin: boolean,
    skip_interior: boolean,
    skip_odometer: boolean,
    disclosures: boolean,
    announcements: boolean,
    custom_capture_flow: {
        active: boolean,
        form_id: string,
        user_id: number,
    },
    pii_mask: boolean,
    pii_remove: boolean,
    rear_tire: boolean,
    user_form: boolean,
    custom_inspect: {
        photo: string,
        list_inspect: {
            name: string,
            position: string
        }[]
    }[],
    capture_photo_codes: number[],
    capture_photo_screen: string[],
    custom_skip_qc: any,
    capture_4k: boolean,
    cage_branding: boolean
}

export interface ISessionProgress {
    session_key: string,
    inspection_id: string | null,
    status: string,
    isReported: boolean,
    photos: [],
    passQC: boolean,
    ttw: number
}