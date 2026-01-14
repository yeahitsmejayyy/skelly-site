import type { ComponentType } from "react"

export type SectionRenderer<TData = unknown> = ComponentType<{
    data: TData
}>
