export interface FAQ1Item {
    question: string
    answer: string
}

export interface FAQ1Cta {
    label: string
    href: string
}

export interface FAQ1Data {
    eyebrow?: string
    headline: string
    description?: string

    ctas?: FAQ1Cta[]

    items: FAQ1Item[]
}
