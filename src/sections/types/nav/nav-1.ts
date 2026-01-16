export interface Nav1Item {
    label: string
    href: string
}

export interface Nav1Data {
    brand?: {
        label?: string
        icon?: string
        href?: string
    }

    links: Nav1Item[]

    cta?: {
        label: string
        href: string
    }
}
