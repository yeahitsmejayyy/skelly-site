import type { FAQ1Data } from "@/sections/types/faq/faq-1"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface FAQ1Props {
    data: FAQ1Data
}

export default function FAQ1({ data }: FAQ1Props) {
    const { eyebrow, headline, description, ctas, items } = data

    return (
        <div className="w-full flex items-center justify-center border">
            <div className="w-325 lg:py-50 py-30 lg:px-0 px-6">
                <div className="grid lg:grid-cols-2 grid-cols-1 mb-15">
                    <div className="flex flex-col justify-center lg:gap-y-[24px] gap-y-[24px] lg:mb-0 mb-8">
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
                    </div>

                    {ctas && ctas.length > 0 && (
                        <div className="flex lg:flex-row flex-col items-end justify-end lg:gap-x-3 gap-y-3">
                            {ctas.map((cta, idx) => (
                                <Button
                                    key={idx}
                                    variant="outline"
                                    className="lg:w-fit w-full"
                                    asChild
                                >
                                    <a href={cta.href}>
                                        {cta.label} <ArrowUpRight />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-start gap-y-4">
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">{item.question}</p>
                                <p className="text-muted-foreground">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
