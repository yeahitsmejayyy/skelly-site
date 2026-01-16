export interface Pricing1Feature {
    label: string
    tooltip?: string
}

export interface Pricing1Plan {
    id: string
    name: string
    description?: string

    price: {
        amount: string
        interval: string
    }

    highlighted?: boolean
    badge?: string

    cta: {
        label: string
        href: string
        variant?: "default" | "secondary"
    }

    features: Pricing1Feature[]
}

export interface Pricing1Data {
    eyebrow?: string
    headline: string
    description?: string

    showBillingToggle?: boolean

    plans: Pricing1Plan[]
}
