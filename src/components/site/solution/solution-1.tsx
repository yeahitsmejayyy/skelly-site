// interface Solution1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

// props: Solution1Props 
export default function Solution1() {
    return (
        <div className="w-full flex items-center justify-center border">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-30 gap-y-[48px] w-325 lg:py-50 py-30 lg:px-0 px-12">
                <div className="rounded-lg order-2">
                    <img alt="Placeholder Image" src={'/square-placeholder.png'} className="rounded-lg" />
                </div>

                <div className="order-2 flex flex-col justify-center lg:gap-y-[24px] gap-y-[24px]">
                    <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                    <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8">Headline that shows solution's impact on user success</h1>
                    <p className="text-muted-foreground lg:text-[18px]">
                        Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.
                    </p>
                    <div className="flex flex-col gap-y-2 font-bold">
                        <p className="flex items-center gap-x-2"><Check size={'20'} /> Solution driven feature title</p>
                        <p className="flex items-center gap-x-2"><Check size={'20'} /> Solution driven feature title</p>
                        <p className="flex items-center gap-x-2"><Check size={'20'} /> Solution driven feature title</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Button className="w-fit">Get access</Button>
                        <Button variant={'ghost'} className="w-fit">Learn more <ArrowRight size={'20'} /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}