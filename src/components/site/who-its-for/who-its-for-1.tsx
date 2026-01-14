import type { WhoItsForData } from "@/sections/types/who-its-for"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface WhoItsFor1Props {
    data: WhoItsForData
}

export default function WhoItsFor1({ data }: WhoItsFor1Props) {
    const {
        eyebrow,
        headline,
        description,
        primaryCta,
        secondaryCta,
        image,
    } = data

    return (
        <div className="w-full flex items-center justify-center border">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-30 gap-y-[48px] w-325 lg:py-50 py-30 lg:px-0 px-6">
                {image && (
                    <div className="rounded-lg order-2">
                        <img
                            src={image.src}
                            alt={image.alt ?? ""}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <div className="order-2 flex flex-col justify-center lg:gap-y-[24px] gap-y-[24px]">
                    {eyebrow && (
                        <p className="text-muted-foreground lg:text-[14px]">
                            {eyebrow}
                        </p>
                    )}

                    <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8">
                        {headline}
                    </h1>

                    {description && (
                        <p className="text-muted-foreground lg:text-[18px]">
                            {description}
                        </p>
                    )}

                    {(primaryCta || secondaryCta) && (
                        <div className="flex items-center gap-x-2">
                            {primaryCta && (
                                <Button asChild>
                                    <a href={primaryCta.href}>{primaryCta.label}</a>
                                </Button>
                            )}

                            {secondaryCta && (
                                <Button variant="ghost" asChild>
                                    <a href={secondaryCta.href}>
                                        {secondaryCta.label} <ArrowRight size={20} />
                                    </a>
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
