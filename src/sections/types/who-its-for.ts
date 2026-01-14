export interface WhoItsForData {
    eyebrow?: string
    headline: string
    description?: string

    primaryCta?: {
        label: string
        href: string
    }

    secondaryCta?: {
        label: string
        href: string
    }

    image?: {
        src: string
        alt?: string
    }
}
