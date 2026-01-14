export interface NavItem {
    label: string
    href: string
}

export interface NavData {
    brand?: {
        label?: string
        icon?: string
        href?: string
    }

    links: NavItem[]

    cta?: {
        label: string
        href: string
    }
}
