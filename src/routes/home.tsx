import { Seo } from "@/seo/seo"
import { Section } from "@/sections/section"

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

            <Section
                type="pricing"
                variant="1"
                data={{
                    eyebrow: "Pricing",
                    headline: "Headline that shows pricing for user success",
                    description:
                        "Add a concise value statement that addresses price sensitivity and showcases plan flexibility.",
                    showBillingToggle: true,
                    plans: [
                        {
                            id: "basic",
                            name: "Basic",
                            description:
                                "A short benefit statement that highlights the ideal user for this tier.",
                            price: {
                                amount: "$29",
                                interval: "month",
                            },
                            cta: {
                                label: "Purchase plan",
                                href: "/checkout/basic",
                                variant: "secondary",
                            },
                            features: [
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                            ],
                        },
                        {
                            id: "standard",
                            name: "Standard",
                            badge: "Most popular",
                            highlighted: true,
                            description:
                                "A short benefit statement that highlights the ideal user for this tier.",
                            price: {
                                amount: "$49",
                                interval: "month",
                            },
                            cta: {
                                label: "Purchase plan",
                                href: "/checkout/standard",
                                variant: "default",
                            },
                            features: [
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                            ],
                        },
                        {
                            id: "premium",
                            name: "Premium",
                            description:
                                "A short benefit statement that highlights the ideal user for this tier.",
                            price: {
                                amount: "$99",
                                interval: "month",
                            },
                            cta: {
                                label: "Purchase plan",
                                href: "/checkout/premium",
                                variant: "secondary",
                            },
                            features: [
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                                { label: "Feature Name" },
                            ],
                        },
                    ],
                }}
            />

            <Section
                type="faq"
                variant="1"
                data={{
                    eyebrow: "FAQ",
                    headline: "Headline that shows frequently asked questions of users",
                    description:
                        "We've compiled the most important information to help you get the most out of your experience.",
                    ctas: [
                        {
                            label: "Contact us",
                            href: "/contact",
                        },
                        {
                            label: "View documentation",
                            href: "/docs",
                        },
                    ],
                    items: [
                        {
                            question: "What is shadcn/ui kit for Figma?",
                            answer:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
                        },
                        {
                            question: "What is shadcn/ui kit for Figma?",
                            answer:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
                        },
                        {
                            question: "What is shadcn/ui kit for Figma?",
                            answer:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
                        },
                        {
                            question: "What is shadcn/ui kit for Figma?",
                            answer:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
                        },
                        {
                            question: "What is shadcn/ui kit for Figma?",
                            answer:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
                        },
                        {
                            question: "What is shadcn/ui kit for Figma?",
                            answer:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
                        },
                    ],
                }}
            />

            <Section
                type="lead-capture"
                variant="1"
                data={{
                    eyebrow: "Get Started",
                    headline: "Headline that shows frequently asked questions of users",
                    description:
                        "We've compiled the most important information to help you get the most out of your experience.",
                    cta: {
                        label: "Get started",
                        href: "/signup",
                    },
                    image: {
                        src: "/lead-capture-placeholder.png",
                        alt: "Lead capture illustration",
                    },
                }}
            />

            <Section
                type="footer"
                variant="1"
                data={{
                    brand: {
                        icon: "💀",
                    },
                    newsletter: {
                        title: "Subscribe to our newsletter",
                        description:
                            "Get the latest news and updates from our team.",
                        placeholder: "Enter your email",
                        buttonLabel: "Subscribe",
                    },
                    groups: [
                        {
                            title: "Company",
                            links: [
                                { label: "About Us", href: "/about" },
                                { label: "Blog", href: "/blog" },
                                { label: "Careers", href: "/careers" },
                                { label: "Partners", href: "/partners" },
                                { label: "Contact", href: "/contact" },
                            ],
                        },
                        {
                            title: "Resources",
                            links: [
                                { label: "Guides", href: "/guides" },
                                { label: "Tutorials", href: "/tutorials" },
                                { label: "FAQ", href: "/faq" },
                                { label: "Downloads", href: "/downloads" },
                                { label: "Support", href: "/support" },
                            ],
                        },
                        {
                            title: "Account",
                            links: [
                                { label: "Your Account", href: "/account" },
                                { label: "Settings", href: "/settings" },
                                { label: "Accessibility", href: "/accessibility" },
                                { label: "Terms", href: "/terms" },
                            ],
                        },
                    ],
                    copyright:
                        "Copyright © 2026 skellyui.com. All rights reserved.",
                    metaLinks: [
                        { label: "Privacy Policy", href: "/privacy" },
                        { label: "Terms of Service", href: "/terms" },
                        { label: "Cookie Settings", href: "#" },
                    ],
                }}
            />

        </div>
    );
}