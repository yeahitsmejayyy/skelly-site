export interface BenefitItem {
    title: string
    description?: string
}

export interface BenefitsData {
    eyebrow?: string
    headline: string
    description?: string

    items: BenefitItem[]
}
