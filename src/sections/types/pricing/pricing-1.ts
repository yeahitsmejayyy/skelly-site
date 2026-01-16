export interface Pricing1Feature {
    label: string
    tooltip?: string
}

export interface Pricing1Price {
    amount: string
    interval: string
    note?: string
}

export interface Pricing1Plan {
    id: string
    name: string
    description?: string

    prices: {
        monthly: Pricing1Price
        annually: Pricing1Price
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
    defaultBilling?: "monthly" | "annually"

    plans: Pricing1Plan[]
}
