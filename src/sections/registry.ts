import type { SectionRenderer } from "./types"
import Hero1 from "@/components/site/hero/hero-1"
import type { HeroData } from "@/sections/types/hero"

export const sectionRegistry = {
    hero: {
        "1": Hero1 satisfies SectionRenderer<HeroData>,
    },
} as const
