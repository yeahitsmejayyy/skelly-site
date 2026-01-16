import type { SectionRenderer } from "./types"

import Nav1 from "@/components/site/nav/nav-1"
import type { Nav1Data } from "@/sections/types/nav/nav-1"

import Hero1 from "@/components/site/hero/hero-1"
import type { Hero1Data } from "@/sections/types/hero/hero-1"

import Problem1 from "@/components/site/problem/problem-1"
import type { Problem1Data } from "@/sections/types/problem/problem-1"

import Solution1 from "@/components/site/solution/solution-1"
import type { Solution1Data } from "@/sections/types/solution/solution-1"

import Benefits1 from "@/components/site/benefits/benefits-1"
import type { Benefits1Data } from "@/sections/types/benefits/benefits-1"

import HowItWorks1 from "@/components/site/how-it-works/how-it-works-1"
import type { HowItWorks1Data } from "@/sections/types/how-it-works/how-it-works-1"

import Features1 from "@/components/site/features/features-1"
import type { Features1Data } from "@/sections/types/features/features-1"

import WhoItsFor1 from "@/components/site/who-its-for/who-its-for-1"
import type { WhoItsFor1Data } from "@/sections/types/who-its-for/who-its-for-1"

import SocialProof1 from "@/components/site/social-proof/social-proof-1"
import type { SocialProof1Data } from "@/sections/types/social-proof/social-proof-1"

import Comparison1 from "@/components/site/comparison/comparison-1"
import type { Comparison1Data } from "@/sections/types/comparison/comparison-1"

import Pricing1 from "@/components/site/pricing/pricing-1"
import type { Pricing1Data } from "@/sections/types/pricing/pricing-1"

import FAQ1 from "@/components/site/faq/faq-1"
import type { FAQ1Data } from "@/sections/types/faq/faq-1"

import LeadCapture1 from "@/components/site/lead-capture/lead-capture-1"
import type { LeadCapture1Data } from "@/sections/types/lead-capture/lead-capture-1"

import Footer1 from "@/components/site/footer/footer-1"
import type { Footer1Data } from "@/sections/types/footer/footer-1"

export const sectionRegistry = {
    nav: {
        "1": Nav1 satisfies SectionRenderer<Nav1Data>,
    },
    hero: {
        "1": Hero1 satisfies SectionRenderer<Hero1Data>,
    },
    problem: {
        "1": Problem1 satisfies SectionRenderer<Problem1Data>,
    },
    solution: {
        "1": Solution1 satisfies SectionRenderer<Solution1Data>,
    },
    benefits: {
        "1": Benefits1 satisfies SectionRenderer<Benefits1Data>,
    },
    "how-it-works": {
        "1": HowItWorks1 satisfies SectionRenderer<HowItWorks1Data>,
    },
    features: {
        "1": Features1 satisfies SectionRenderer<Features1Data>,
    },
    "who-its-for": {
        "1": WhoItsFor1 satisfies SectionRenderer<WhoItsFor1Data>,
    },
    "social-proof": {
        "1": SocialProof1 satisfies SectionRenderer<SocialProof1Data>,
    },
    comparison: {
        "1": Comparison1 satisfies SectionRenderer<Comparison1Data>,
    },
    pricing: {
        "1": Pricing1 satisfies SectionRenderer<Pricing1Data>,
    },
    faq: {
        "1": FAQ1 satisfies SectionRenderer<FAQ1Data>,
    },
    "lead-capture": {
        "1": LeadCapture1 satisfies SectionRenderer<LeadCapture1Data>,
    },
    footer: {
        "1": Footer1 satisfies SectionRenderer<Footer1Data>,
    },
} as const
