// interface Pricing1Props {
//   // define props here
// }

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, Info } from "lucide-react";

// props: Pricing1Props 
export default function Pricing1() {
    return (
        <div className="w-full border flex flex-col gap-y-10 items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="w-full lg:max-w-150 flex flex-col gap-y-5 text-center mx-auto">
                <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                <h1 className="lg:text-5xl text-3xl font-bold">Headline that shows pricing for user success</h1>
                <p className="text-muted-foreground lg:text-[18px]">
                    Add a concise value statement that addresses price sensitivity and showcases plan flexibility. Focus on transformation and results while keeping it under 2 lines. Align with your pricing table options.
                </p>

                <div className="flex items-center gap-x-2 mx-auto mt-5">
                    <p>Monthly</p>
                    <Switch />
                    <p>Annually</p>
                </div>

            </div>
            <div className="lg:w-325 grid lg:grid-cols-3 grid-cols-1 gap-8">
                {/* basic */}
                <Card className="p-[32px]">
                    <p className="text-[18px] font-semibold">Basic</p>
                    <p className="text-muted-foreground">A short benefit statement that highlights the ideal user for this tier. </p>
                    <div className="flex items-end gap-x-1">
                        <p className="text-4xl font-bold">$29</p>
                        <small className="text-[16px] text-muted-foreground">/month</small>
                    </div>
                    <Button variant={'secondary'} size={'lg'}>Purchase plan</Button>
                    <p className="font-semibold">What's included:</p>
                    {/* feature list */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                </Card>

                {/* standard */}
                <Card className="border border-2 border-neutral-950 p-[32px]">
                    <div className="flex items-center justify-between">
                        <p className="text-[18px] font-semibold">Standard</p>
                        <Badge>Most popular</Badge>
                    </div>
                    <p className="text-muted-foreground">A short benefit statement that highlights the ideal user for this tier. </p>
                    <div className="flex items-end gap-x-1">
                        <p className="text-4xl font-bold">$49</p>
                        <small className="text-[16px] text-muted-foreground">/month</small>
                    </div>
                    <Button variant={'default'} size={'lg'}>Purchase plan</Button>
                    <p>Everything in Basic, plus:</p>
                    {/* feature list */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                </Card>

                {/* premium */}
                <Card className="p-[32px]">
                    <p className="text-[18px] font-semibold">Premium</p>
                    <p className="text-muted-foreground">A short benefit statement that highlights the ideal user for this tier. </p>
                    <div className="flex items-end gap-x-1">
                        <p className="text-4xl font-bold">$99</p>
                        <small className="text-[16px] text-muted-foreground">/month</small>
                    </div>
                    <Button variant={'secondary'} size={'lg'}>Purchase plan</Button>
                    <p>Everything in Standard, plus:</p>
                    {/* feature list */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <Check size="20" />
                            <p>Feature Name</p>
                        </div>
                        <Info className="text-muted-foreground" />
                    </div>
                </Card>
            </div>
        </div>
    );
}