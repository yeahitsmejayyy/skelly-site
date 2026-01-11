// interface WhoItsFor1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// props: WhoItsFor1Props 
export default function WhoItsFor1() {
    return (
        <div className="w-full flex items-center justify-center border">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-30 gap-y-[48px] w-325 lg:py-50 py-30 lg:px-0 px-6">
                <div className="rounded-lg order-2">
                    <img alt="Placeholder Image" src={'/square-placeholder.png'} className="rounded-lg" />
                </div>

                <div className="order-2 flex flex-col justify-center lg:gap-y-[24px] gap-y-[24px]">
                    <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                    <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8">Headline that shows who it's for and the user success</h1>
                    <p className="text-muted-foreground lg:text-[18px]">
                        Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.
                    </p>
                    <div className="flex items-center gap-x-2">
                        <Button className="w-fit">Get access</Button>
                        <Button variant={'ghost'} className="w-fit">Learn more <ArrowRight size={'20'} /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}