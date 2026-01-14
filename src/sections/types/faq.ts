export interface FAQItem {
    question: string
    answer: string
}

export interface FAQCta {
    label: string
    href: string
}

export interface FAQData {
    eyebrow?: string
    headline: string
    description?: string

    ctas?: FAQCta[]

    items: FAQItem[]
}
