export interface Feature1Item {
    title: string
    description?: string
    icon?: string
}

export interface Features1Data {
    eyebrow?: string
    headline: string
    description?: string

    features: Feature1Item[]

    image?: {
        src: string
        alt?: string
    }
}
