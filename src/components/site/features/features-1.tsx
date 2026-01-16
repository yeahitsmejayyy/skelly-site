import type { Features1Data } from "@/sections/types/features/features-1"
import { Rocket } from "lucide-react"

interface Features1Props {
    data: Features1Data
}

const iconMap = {
    rocket: Rocket,
}

export default function Features1({ data }: Features1Props) {
    const { eyebrow, headline, description, features, image } = data

    return (
        <div className="w-full flex items-center justify-center border">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-y-[48px] w-325 lg:py-50 py-30 lg:px-0 px-6">
                <div className="flex flex-col justify-center lg:gap-y-[24px] gap-y-[24px]">
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

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon
                                ? iconMap[feature.icon as keyof typeof iconMap]
                                : null

                            return (
                                <div
                                    key={idx}
                                    className="flex flex-col items-start gap-y-4"
                                >
                                    <div className="flex items-center justify-center shrink-0 w-[48px] h-[48px] border rounded-md">
                                        {Icon && <Icon size={20} className="shrink-0" />}
                                    </div>

                                    <div className="flex flex-col gap-y-1">
                                        <p className="font-bold">{feature.title}</p>
                                        {feature.description && (
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {image && (
                    <div className="rounded-lg">
                        <img
                            src={image.src}
                            alt={image.alt ?? ""}
                            className="rounded-lg"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
