import { Seo } from "@/seo/seo"
import { Section } from "@/sections/section"
import FAQ1 from "@/components/site/faq/faq-1"
import Footer1 from "@/components/site/footer/footer-1"
import LeadCapture1 from "@/components/site/lead-capture/lead-capture-1"
import Pricing1 from "@/components/site/pricing/pricing-1"

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

            <Section
                type="benefits"
                variant="1"
                data={{
                    eyebrow: "Benefits",
                    headline: "Headline that shows benefits impact on user success",
                    description:
                        "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
                    items: [
                        {
                            title: "Benefit driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            title: "Benefit driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            title: "Benefit driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            title: "Benefit driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            title: "Benefit driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            title: "Benefit driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                    ],
                }}
            />

            <Section
                type="how-it-works"
                variant="1"
                data={{
                    eyebrow: "How It Works",
                    headline: "Headline that shows how it works for user success",
                    description:
                        "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
                    steps: [
                        {
                            title: "Step 1",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                            image: {
                                src: "/rectangle-placeholder.png",
                                alt: "How it works step 1",
                            },
                        },
                        {
                            title: "Step 2",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                            image: {
                                src: "/rectangle-placeholder.png",
                                alt: "How it works step 2",
                            },
                        },
                        {
                            title: "Step 3",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                            image: {
                                src: "/rectangle-placeholder.png",
                                alt: "How it works step 3",
                            },
                        },
                    ],
                }}
            />

            <Section
                type="features"
                variant="1"
                data={{
                    eyebrow: "Features",
                    headline: "Headline that shows features impact on user success",
                    description:
                        "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
                    features: [
                        {
                            icon: "rocket",
                            title: "Feature driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            icon: "rocket",
                            title: "Feature driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            icon: "rocket",
                            title: "Feature driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                        {
                            icon: "rocket",
                            title: "Feature driven feature title",
                            description:
                                "Shortly describe how this feature solves a specific user problem.",
                        },
                    ],
                    image: {
                        src: "/tall-rectangle-placeholder.png",
                        alt: "Product screenshot",
                    },
                }}
            />

            <Section
                type="who-its-for"
                variant="1"
                data={{
                    eyebrow: "Who It’s For",
                    headline: "Headline that shows who it's for and the user success",
                    description:
                        "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
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
                        alt: "Target audience illustration",
                    },
                }}
            />

            <Section
                type="social-proof"
                variant="1"
                data={{
                    eyebrow: "Testimonials",
                    headline: "Headline that shows testimonials for user success",
                    description:
                        "Write a brief introduction that sets up your testimonials' credibility.",
                    testimonials: [
                        {
                            quote:
                                "Shadcn UI Kit for Figma has completely transformed our design process. It’s incredibly intuitive and saves us so much time.",
                            author: {
                                name: "Jack Bauer",
                                title: "Founder at Acme Inc",
                                avatar: {
                                    src: "/avatar.png",
                                    alt: "Jack Bauer",
                                },
                            },
                        },
                        {
                            quote:
                                "The components are beautifully crafted and incredibly easy to customize. It’s become a core part of our workflow.",
                            author: {
                                name: "Jack Bauer",
                                title: "Founder at Acme Inc",
                                avatar: {
                                    src: "/avatar.png",
                                    alt: "Jack Bauer",
                                },
                            },
                        },
                        {
                            quote:
                                "We ship faster and with more confidence thanks to this system. It’s a huge productivity win.",
                            author: {
                                name: "Jack Bauer",
                                title: "Founder at Acme Inc",
                                avatar: {
                                    src: "/avatar.png",
                                    alt: "Jack Bauer",
                                },
                            },
                        },
                    ],
                }}
            />

            <Section
                type="comparison"
                variant="1"
                data={{
                    eyebrow: "Comparison",
                    headline: "Headline that shows comparison for user success",
                    description:
                        "Explain in one or two concise sentences how your solution compares to a competitor.",
                    columns: [
                        {
                            id: "skelly",
                            label: "Skelly",
                            icon: "skull",
                        },
                        {
                            id: "competitor",
                            label: "Competitor",
                            icon: "box",
                        },
                    ],
                    rows: [
                        {
                            label: "Projects",
                            values: [
                                { type: "text", value: "Unlimited" },
                                { type: "text", value: "10" },
                            ],
                        },
                        {
                            label: "Custom components",
                            values: [
                                { type: "boolean", value: true },
                                { type: "boolean", value: true },
                            ],
                        },
                        {
                            label: "Design tokens",
                            values: [
                                { type: "boolean", value: true },
                                { type: "boolean", value: true },
                            ],
                        },
                        {
                            label: "Team permissions",
                            values: [
                                { type: "boolean", value: true },
                                { type: "boolean", value: false },
                            ],
                        },
                        {
                            label: "Audit logs",
                            values: [
                                { type: "boolean", value: true },
                                { type: "boolean", value: false },
                            ],
                        },
                    ],
                    cta: {
                        label: "Get started",
                        href: "/signup",
                    },
                }}
            />

            <Pricing1 />
            <FAQ1 />
            <LeadCapture1 />
            <Footer1 />
        </div>
    );
}