import type { HowItWorks1Data } from "@/sections/types/how-it-works/how-it-works-1"

interface HowItWorks1Props {
    data: HowItWorks1Data
}

export default function HowItWorks1({ data }: HowItWorks1Props) {
    const { eyebrow, headline, description, steps } = data

    return (
        <div className="w-full border flex flex-col gap-y-10 items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="w-full lg:max-w-150 flex flex-col gap-y-5 text-center mx-auto">
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

            <div className="w-full max-w-325 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-10 gap-y-10">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col gap-y-6">
                        {step.image && (
                            <img
                                src={step.image.src}
                                alt={step.image.alt ?? ""}
                            />
                        )}

                        <div className="text-left">
                            <p className="font-bold text-2xl">{step.title}</p>
                            {step.description && (
                                <p className="text-muted-foreground">
                                    {step.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
