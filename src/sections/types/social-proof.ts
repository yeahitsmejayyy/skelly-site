export interface Testimonial {
    quote: string

    author: {
        name: string
        title?: string
        avatar?: {
            src: string
            alt?: string
        }
    }
}

export interface SocialProofData {
    eyebrow?: string
    headline: string
    description?: string

    testimonials: Testimonial[]
}
