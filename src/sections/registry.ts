import type { SectionRenderer } from "./types"

import Hero1 from "@/components/site/hero/hero-1"
import type { HeroData } from "@/sections/types/hero"

import Nav1 from "@/components/site/nav/nav-1"
import type { NavData } from "@/sections/types/nav"

export const sectionRegistry = {
    hero: {
        "1": Hero1 satisfies SectionRenderer<HeroData>,
    },
    nav: {
        "1": Nav1 satisfies SectionRenderer<NavData>,
    }
} as const
