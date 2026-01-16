import type { Comparison1Data, Comparison1Value } from "@/sections/types/comparison/comparison-1"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Box, Check, X } from "lucide-react"

interface Comparison1Props {
    data: Comparison1Data
}

const iconMap = {
    box: Box,
}

function renderValue(value: Comparison1Value) {
    if (value.type === "boolean") {
        return value.value ? (
            <Check size={20} className="text-green-600" />
        ) : (
            <X size={20} className="text-red-600" />
        )
    }

    return <p>{value.value}</p>
}

export default function Comparison1({ data }: Comparison1Props) {
    const { eyebrow, headline, description, columns, rows, cta } = data

    const primary = columns[0]
    const secondary = columns[1]

    const PrimaryIcon = primary.icon
        ? iconMap[primary.icon as keyof typeof iconMap]
        : null

    const SecondaryIcon = secondary.icon
        ? iconMap[secondary.icon as keyof typeof iconMap]
        : null

    return (
        <div className="w-full border flex flex-col gap-y-12 items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="flex flex-col gap-y-5 text-center mx-auto">
                {eyebrow && (
                    <p className="text-muted-foreground lg:text-[14px]">
                        {eyebrow}
                    </p>
                )}

                <h1 className="w-full lg:max-w-190 mx-auto lg:text-5xl text-3xl font-bold">
                    {headline}
                </h1>

                {description && (
                    <p className="w-full lg:max-w-150 mx-auto text-muted-foreground lg:text-[18px]">
                        {description}
                    </p>
                )}
            </div>

            {/* Desktop */}
            <div className="w-325 lg:grid grid-cols-3 hidden">
                <div className="flex flex-col">
                    <div className="h-[56px] border-b" />
                    {rows.map((row, idx) => (
                        <div key={idx} className="flex items-center h-[56px] border-b">
                            <p className="font-bold">{row.label}</p>
                        </div>
                    ))}
                </div>

                {[primary, secondary].map((col, colIdx) => {
                    const Icon =
                        colIdx === 0 ? PrimaryIcon : SecondaryIcon

                    return (
                        <div key={col.id} className="flex flex-col">
                            <div className="flex items-center justify-center h-[56px] border-b">
                                {Icon ? <Icon /> : <span>{col.label}</span>}
                            </div>

                            {rows.map((row, rowIdx) => (
                                <div
                                    key={rowIdx}
                                    className="flex items-center justify-center h-[56px] border-b"
                                >
                                    {renderValue(row.values[colIdx])}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>

            {/* Mobile */}
            <div className="w-full lg:hidden flex flex-col gap-y-4">
                <div className="grid grid-cols-2">
                    <div className="flex items-center justify-center h-[56px] border-b">
                        {PrimaryIcon ? <PrimaryIcon /> : primary.label}
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        {SecondaryIcon ? <SecondaryIcon /> : secondary.label}
                    </div>
                </div>

                {rows.map((row, idx) => (
                    <Card key={idx} className="pt-0">
                        <div className="flex items-center h-[56px] border-b px-4">
                            <p className="font-bold">{row.label}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex items-center justify-center h-[56px]">
                                {renderValue(row.values[0])}
                            </div>
                            <div className="flex items-center justify-center h-[56px]">
                                {renderValue(row.values[1])}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {cta && (
                <Button asChild>
                    <a href={cta.href}>{cta.label}</a>
                </Button>
            )}
        </div>
    )
}
