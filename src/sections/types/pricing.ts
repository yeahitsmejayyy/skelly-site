export interface PricingFeature {
    label: string
    tooltip?: string
}

export interface PricingPlan {
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

    features: PricingFeature[]
}

export interface PricingData {
    eyebrow?: string
    headline: string
    description?: string

    showBillingToggle?: boolean

    plans: PricingPlan[]
}
