import type { ComponentType } from "react"
import { sectionRegistry } from "./registry"

type SectionRegistry = typeof sectionRegistry
type SectionType = keyof SectionRegistry

interface SectionProps<T extends SectionType> {
    type: T
    variant: keyof SectionRegistry[T]
    data: unknown
}

export function Section<T extends SectionType>({
    type,
    variant,
    data,
}: SectionProps<T>) {
    const Component = sectionRegistry[type][variant] as ComponentType<{
        data: unknown
    }>

    if (!Component) {
        if (import.meta.env.DEV) {
            return (
                <div style={{ border: "1px solid red", padding: 12 }}>
                    Missing section: {type} / {String(variant)}
                </div>
            )
        }
        return null
    }

    return <Component data={data} />
}
