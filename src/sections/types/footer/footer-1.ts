export interface Footer1Link {
    label: string
    href: string
}

export interface Footer1LinkGroup {
    title: string
    links: Footer1Link[]
}

export interface Footer1Newsletter {
    title: string
    description?: string
    placeholder?: string
    buttonLabel: string
}

export interface Footer1MetaLink {
    label: string
    href: string
}

export interface Footer1Data {
    brand?: {
        icon?: string
    }

    newsletter?: Footer1Newsletter

    groups: Footer1LinkGroup[]

    copyright: string

    metaLinks?: Footer1MetaLink[]
}
