export type ComparisonValue =
    | { type: "text"; value: string }
    | { type: "boolean"; value: boolean }

export interface ComparisonColumn {
    id: string
    label: string
    icon?: string
}

export interface ComparisonRow {
    label: string
    values: ComparisonValue[]
}

export interface ComparisonData {
    eyebrow?: string
    headline: string
    description?: string

    columns: ComparisonColumn[]
    rows: ComparisonRow[]

    cta?: {
        label: string
        href: string
    }
}
