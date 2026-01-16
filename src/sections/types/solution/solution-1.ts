export interface Solution1Data {
    eyebrow?: string
    headline: string
    description?: string

    bullets?: string[]

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
