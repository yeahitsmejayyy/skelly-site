import type { LeadCaptureData } from "@/sections/types/lead-capture"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface LeadCapture1Props {
    data: LeadCaptureData
}

export default function LeadCapture1({ data }: LeadCapture1Props) {
    const { eyebrow, headline, description, cta, image } = data

    return (
        <div className="w-full flex items-center justify-center lg:py-20 py-0">
            <div className="w-325 lg:rounded-lg bg-accent-foreground lg:pl-15 pl-8 pt-15">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-15">
                    <div className="flex flex-col lg:gap-0 gap-y-6 lg:justify-between lg:pb-15 pe-15">
                        <div className="flex flex-col gap-y-6">
                            {eyebrow && (
                                <p className="text-muted-foreground lg:text-[14px]">
                                    {eyebrow}
                                </p>
                            )}

                            <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8 text-accent">
                                {headline}
                            </h1>
                        </div>

                        <div className="flex flex-col gap-y-6">
                            {description && (
                                <p className="text-muted-foreground lg:text-[18px]">
                                    {description}
                                </p>
                            )}

                            {cta && (
                                <Button
                                    variant="secondary"
                                    className="w-fit"
                                    asChild
                                >
                                    <a href={cta.href}>
                                        {cta.label} <ArrowRight />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>

                    {image && (
                        <div>
                            <img
                                src={image.src}
                                alt={image.alt ?? ""}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
