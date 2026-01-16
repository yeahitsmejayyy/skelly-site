import type { SocialProof1Data } from "@/sections/types/social-proof/social-proof-1"
import { Card } from "@/components/ui/card"

interface SocialProof1Props {
    data: SocialProof1Data
}

export default function SocialProof1({ data }: SocialProof1Props) {
    const { eyebrow, headline, description, testimonials } = data

    return (
        <div className="w-full border flex flex-col gap-y-12 items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="w-full lg:max-w-170 flex flex-col gap-y-5 text-center mx-auto">
                {eyebrow && (
                    <p className="text-muted-foreground lg:text-[14px]">
                        {eyebrow}
                    </p>
                )}

                <h1 className="lg:text-5xl text-3xl font-bold">
                    {headline}
                </h1>

                {description && (
                    <p className="text-muted-foreground lg:text-[18px]">
                        {description}
                    </p>
                )}
            </div>

            <div className="lg:w-325 grid lg:grid-cols-3 grid-cols-1 gap-4">
                {testimonials.map((t, idx) => (
                    <Card key={idx} className="p-6 flex flex-col gap-y-6">
                        <p>“{t.quote}”</p>

                        <div className="flex items-center gap-x-2">
                            {t.author.avatar && (
                                <img
                                    src={t.author.avatar.src}
                                    alt={t.author.avatar.alt ?? ""}
                                    className="w-[42px] h-[42px] rounded-full"
                                />
                            )}

                            <div className="flex flex-col gap-y-0">
                                <p className="font-bold">{t.author.name}</p>
                                {t.author.title && (
                                    <p>{t.author.title}</p>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
