import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Hero1Data } from "@/sections/types/hero/hero-1"

interface Hero1Props {
    data: Hero1Data
}

export default function Hero1({ data }: Hero1Props) {
    const { eyebrow, headline, description, cta } = data

    return (
        <div className="w-full border flex items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="w-full flex flex-col gap-y-5 text-center mx-auto">
                {eyebrow && (
                    <p className="text-muted-foreground lg:text-[14px]">
                        {eyebrow}
                    </p>
                )}

                <h1 className="lg:max-w-180 lg:text-6xl text-4xl font-bold mx-auto">
                    {headline}
                </h1>

                {description && (
                    <p className="lg:max-w-150 text-muted-foreground lg:text-[18px] mx-auto">
                        {description}
                    </p>
                )}

                {cta && (
                    <Button className="w-fit mx-auto" size="lg">
                        {cta.label} <ArrowRight />
                    </Button>
                )}
            </div>
        </div>
    )
}
