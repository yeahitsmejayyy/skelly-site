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

import HowItWorks1 from "@/components/site/how-it-works/how-it-works-1"
import type { HowItWorksData } from "@/sections/types/how-it-works"

import Features1 from "@/components/site/features/features-1"
import type { FeaturesData } from "@/sections/types/features"

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
    "how-it-works": {
        "1": HowItWorks1 satisfies SectionRenderer<HowItWorksData>,
    },
    features: {
        "1": Features1 satisfies SectionRenderer<FeaturesData>,
    },
} as const
