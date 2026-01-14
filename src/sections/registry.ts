import type { SectionRenderer } from "./types"

import Nav1 from "@/components/site/nav/nav-1"
import type { NavData } from "@/sections/types/nav"

import Hero1 from "@/components/site/hero/hero-1"
import type { HeroData } from "@/sections/types/hero"

import Problem1 from "@/components/site/problem/problem-1"
import type { ProblemData } from "@/sections/types/problem"

import Solution1 from "@/components/site/solution/solution-1"
import type { SolutionData } from "@/sections/types/solution"

import Benefits1 from "@/components/site/benefits/benefits-1"
import type { BenefitsData } from "@/sections/types/benefits"

export const sectionRegistry = {
    nav: {
        "1": Nav1 satisfies SectionRenderer<NavData>,
    },
    hero: {
        "1": Hero1 satisfies SectionRenderer<HeroData>,
    },
    problem: {
        "1": Problem1 satisfies SectionRenderer<ProblemData>,
    },
    solution: {
        "1": Solution1 satisfies SectionRenderer<SolutionData>,
    },
    benefits: {
        "1": Benefits1 satisfies SectionRenderer<BenefitsData>,
    },
} as const
