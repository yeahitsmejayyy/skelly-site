export interface HowItWorks1Step {
    title: string
    description?: string
    image?: {
        src: string
        alt?: string
    }
}

export interface HowItWorks1Data {
    eyebrow?: string
    headline: string
    description?: string

    steps: HowItWorks1Step[]
}
