import type { Benefits1Data } from "@/sections/types/benefits/benefits-1"
import { Check } from "lucide-react"

interface Benefits1Props {
    data: Benefits1Data
}

export default function Benefits1({ data }: Benefits1Props) {
    const { eyebrow, headline, description, items } = data

    // split items into two columns (renderer concern)
    const midpoint = Math.ceil(items.length / 2)
    const left = items.slice(0, midpoint)
    const right = items.slice(midpoint)

    return (
        <div className="w-full flex items-center justify-center border">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-y-[48px] w-325 lg:py-50 py-30 lg:px-0 px-6">
                <div className="flex items-start flex-col justify-start lg:gap-y-[24px] gap-y-[24px]">
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

                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-y-10">
                    {[left, right].map((column, colIdx) => (
                        <div key={colIdx} className="flex flex-col lg:gap-y-6 gap-y-10">
                            {column.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-x-2">
                                    <Check size={20} className="shrink-0" />
                                    <div className="flex flex-col gap-y-1">
                                        <p className="font-bold">{item.title}</p>
                                        {item.description && (
                                            <p className="text-muted-foreground">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
