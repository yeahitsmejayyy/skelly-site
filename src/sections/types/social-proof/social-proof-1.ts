export interface Testimonial1 {
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

export interface SocialProof1Data {
    eyebrow?: string
    headline: string
    description?: string

    testimonials: Testimonial1[]
}
