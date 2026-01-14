import type { PricingData } from "@/sections/types/pricing"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check, Info } from "lucide-react"

interface Pricing1Props {
    data: PricingData
}

export default function Pricing1({ data }: Pricing1Props) {
    const {
        eyebrow,
        headline,
        description,
        showBillingToggle,
        plans,
    } = data

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
                    <div className="flex items-center gap-x-2 mx-auto mt-5">
                        <p>Monthly</p>
                        <Switch />
                        <p>Annually</p>
                    </div>
                )}
            </div>

            <div className="lg:w-325 grid lg:grid-cols-3 grid-cols-1 gap-8">
                {plans.map(plan => (
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
                                {plan.price.amount}
                            </p>
                            <small className="text-[16px] text-muted-foreground">
                                /{plan.price.interval}
                            </small>
                        </div>

                        <Button
                            size="lg"
                            variant={plan.cta.variant ?? "secondary"}
                            asChild
                        >
                            <a href={plan.cta.href}>{plan.cta.label}</a>
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
                ))}
            </div>
        </div>
    )
}
