export interface FeatureItem {
    title: string
    description?: string
    icon?: string
}

export interface FeaturesData {
    eyebrow?: string
    headline: string
    description?: string

    features: FeatureItem[]

    image?: {
        src: string
        alt?: string
    }
}
