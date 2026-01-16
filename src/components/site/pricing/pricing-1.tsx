import { useState } from "react"
import type { Pricing1Data } from "@/sections/types/pricing/pricing-1"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check, Info } from "lucide-react"

interface Pricing1Props {
    data: Pricing1Data
}

export default function Pricing1({ data }: Pricing1Props) {
    const {
        eyebrow,
        headline,
        description,
        showBillingToggle,
        defaultBilling = "monthly",
        plans,
    } = data

    const [billing, setBilling] =
        useState<"monthly" | "annually">(defaultBilling)

    return (
        <div className="w-full border flex flex-col gap-y-10 items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="w-full lg:max-w-150 flex flex-col gap-y-5 text-center mx-auto">
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

                {showBillingToggle && (
                    <div className="flex items-center gap-x-3 mx-auto mt-5">
                        <p
                            className={
                                billing === "monthly"
                                    ? "font-medium"
                                    : "text-muted-foreground"
                            }
                        >
                            Monthly
                        </p>

                        <Switch
                            checked={billing === "annually"}
                            onCheckedChange={(checked) =>
                                setBilling(checked ? "annually" : "monthly")
                            }
                        />

                        <p
                            className={
                                billing === "annually"
                                    ? "font-medium"
                                    : "text-muted-foreground"
                            }
                        >
                            Annually
                        </p>
                    </div>
                )}
            </div>

            <div className="lg:w-325 grid lg:grid-cols-3 grid-cols-1 gap-8">
                {plans.map((plan) => {
                    const price = plan.prices[billing]

                    return (
                        <Card
                            key={plan.id}
                            className={[
                                "p-[32px] flex flex-col gap-y-4",
                                plan.highlighted
                                    ? "border-2 border-neutral-950"
                                    : "",
                            ].join(" ")}
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-[18px] font-semibold">
                                    {plan.name}
                                </p>
                                {plan.badge && <Badge>{plan.badge}</Badge>}
                            </div>

                            {plan.description && (
                                <p className="text-muted-foreground">
                                    {plan.description}
                                </p>
                            )}

                            <div className="flex items-end gap-x-1">
                                <p className="text-4xl font-bold">
                                    {price.amount}
                                </p>
                                <small className="text-[16px] text-muted-foreground">
                                    /{price.interval}
                                </small>
                            </div>

                            {price.note && (
                                <p className="text-sm text-muted-foreground">
                                    {price.note}
                                </p>
                            )}

                            <Button
                                size="lg"
                                variant={plan.cta.variant ?? "secondary"}
                                asChild
                            >
                                <a href={plan.cta.href}>
                                    {plan.cta.label}
                                </a>
                            </Button>

                            <p className="font-semibold">
                                What&apos;s included:
                            </p>

                            {plan.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-x-2">
                                        <Check size={20} />
                                        <p>{feature.label}</p>
                                    </div>
                                    {feature.tooltip && (
                                        <Info className="text-muted-foreground" />
                                    )}
                                </div>
                            ))}
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
