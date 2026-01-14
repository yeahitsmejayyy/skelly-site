import { Seo } from "@/seo/seo"
import { Section } from "@/sections/section"
import Benefits1 from "@/components/site/benefits/benefits-1"
import Comparison1 from "@/components/site/comparison/comparison-1"
import FAQ1 from "@/components/site/faq/faq-1"
import Features1 from "@/components/site/features/features-1"
import Footer1 from "@/components/site/footer/footer-1"
import HowItWorks1 from "@/components/site/how-it-works/how-it-works-1"
import LeadCapture1 from "@/components/site/lead-capture/lead-capture-1"
import Pricing1 from "@/components/site/pricing/pricing-1"
import SocialProof1 from "@/components/site/social-proof/social-proof-1"
import WhoItsFor1 from "@/components/site/who-its-for/who-its-for-1"

// interface HomeProps {
//   // define props here
// }
// props: HomeProps
export default function Home() {
    return (
        <div>
            <Seo
                title="Home"
                description="Home page..."
            />
            <Section
                type="nav"
                variant="1"
                data={{
                    brand: {
                        icon: "💀",
                        label: "@skelly/site",
                        href: "/",
                    },
                    links: [
                        { label: "How It Works", href: "#how-it-works" },
                        { label: "Features", href: "#features" },
                        { label: "Pricing", href: "#pricing" },
                    ],
                    cta: {
                        label: "Get Started",
                        href: "/signup",
                    },
                }}
            />

            <Section
                type="hero"
                variant="1"
                data={{
                    eyebrow: "Hero Section",
                    headline: "Headline that solves user's main problem",
                    description:
                        "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now.",
                    cta: {
                        label: "Get access",
                        href: "/signup",
                    },
                }}
            />

            <Section
                type="problem"
                variant="1"
                data={{
                    eyebrow: "The Problem",
                    headline: "Headline that shows problem impact on user success",
                    description:
                        "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
                    bullets: [
                        "Problem driven feature title",
                        "Problem driven feature title",
                        "Problem driven feature title",
                    ],
                    primaryCta: {
                        label: "Get access",
                        href: "/signup",
                    },
                    secondaryCta: {
                        label: "Learn more",
                        href: "#features",
                    },
                    image: {
                        src: "/square-placeholder.png",
                        alt: "Product screenshot",
                    },
                }}
            />

            <Section
                type="solution"
                variant="1"
                data={{
                    eyebrow: "The Solution",
                    headline: "Headline that shows solution's impact on user success",
                    description:
                        "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
                    bullets: [
                        "Solution driven feature title",
                        "Solution driven feature title",
                        "Solution driven feature title",
                    ],
                    primaryCta: {
                        label: "Get access",
                        href: "/signup",
                    },
                    secondaryCta: {
                        label: "Learn more",
                        href: "#features",
                    },
                    image: {
                        src: "/square-placeholder.png",
                        alt: "Product screenshot",
                    },
                }}
            />

            <Benefits1 />
            <HowItWorks1 />
            <Features1 />
            <WhoItsFor1 />
            <SocialProof1 />
            <Comparison1 />
            <Pricing1 />
            <FAQ1 />
            <LeadCapture1 />
            <Footer1 />
        </div>
    );
}