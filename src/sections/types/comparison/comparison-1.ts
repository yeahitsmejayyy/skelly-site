export type Comparison1Value =
    | { type: "text"; value: string }
    | { type: "boolean"; value: boolean }

export interface Comparison1Column {
    id: string
    label: string
    icon?: string
}

export interface ComparisonRow {
    label: string
    values: Comparison1Value[]
}

export interface Comparison1Data {
    eyebrow?: string
    headline: string
    description?: string

    columns: Comparison1Column[]
    rows: ComparisonRow[]

    cta?: {
        label: string
        href: string
    }
}
