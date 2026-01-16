export interface LeadCapture1Data {
    eyebrow?: string
    headline: string
    description?: string

    cta?: {
        label: string
        href: string
    }

    image?: {
        src: string
        alt?: string
    }
}
