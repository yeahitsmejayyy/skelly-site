export interface FooterLink {
    label: string
    href: string
}

export interface FooterLinkGroup {
    title: string
    links: FooterLink[]
}

export interface FooterNewsletter {
    title: string
    description?: string
    placeholder?: string
    buttonLabel: string
}

export interface FooterMetaLink {
    label: string
    href: string
}

export interface FooterData {
    brand?: {
        icon?: string
    }

    newsletter?: FooterNewsletter

    groups: FooterLinkGroup[]

    copyright: string

    metaLinks?: FooterMetaLink[]
}
