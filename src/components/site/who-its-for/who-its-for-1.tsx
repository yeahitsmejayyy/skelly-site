// interface WhoItsFor1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// props: WhoItsFor1Props 
export default function WhoItsFor1() {
    return (
        <div className="w-full border flex flex-col gap-y-12 items-center justify-center lg:py-50 py-30 lg:px-0 px-12">
            <div className="w-full lg:max-w-170 flex flex-col gap-y-5 text-center mx-auto">
                <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                <h1 className="lg:text-5xl text-3xl font-bold">Headline that shows testimonails for user success</h1>
                <p className="text-muted-foreground lg:text-[18px]">
                    Write a brief introduction that sets up your testimonials' credibility. Mention key outcomes, industry relevance, or the scale of your success.
                </p>
            </div>
            <div className="lg:w-325 grid lg:grid-cols-3 grid-cols-1 gap-4">
                <Card className="p-6">
                    <p>"Shadcn UI Kit for Figma has completely transformed our design process. It’s incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable.”</p>

                    <div className="flex items-center gap-x-2">
                        <img alt="Avatar Image" src={'/avatar.png'} className="w-[42px] h-[42px] rounded-full" />
                        <div className="flex flex-col gap-y-0">
                            <p className="font-bold">Jack Bauer</p>
                            <p>Founder at Acme Inc</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <p>"Shadcn UI Kit for Figma has completely transformed our design process. It’s incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable.”</p>

                    <div className="flex items-center gap-x-2">
                        <img alt="Avatar Image" src={'/avatar.png'} className="w-[42px] h-[42px] rounded-full" />
                        <div className="flex flex-col gap-y-0">
                            <p className="font-bold">Jack Bauer</p>
                            <p>Founder at Acme Inc</p>
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <p>"Shadcn UI Kit for Figma has completely transformed our design process. It’s incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable.”</p>

                    <div className="flex items-center gap-x-2">
                        <img alt="Avatar Image" src={'/avatar.png'} className="w-[42px] h-[42px] rounded-full" />
                        <div className="flex flex-col gap-y-0">
                            <p className="font-bold">Jack Bauer</p>
                            <p>Founder at Acme Inc</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}