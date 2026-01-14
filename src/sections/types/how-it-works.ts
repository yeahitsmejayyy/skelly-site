export interface HowItWorksStep {
    title: string
    description?: string
    image?: {
        src: string
        alt?: string
    }
}

export interface HowItWorksData {
    eyebrow?: string
    headline: string
    description?: string

    steps: HowItWorksStep[]
}
