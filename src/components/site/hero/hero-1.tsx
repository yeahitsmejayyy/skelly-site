// interface Hero1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// props: Hero1Props 
export default function Hero1() {
    return (
        <div className="w-full border flex items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="w-full flex flex-col gap-y-5 text-center mx-auto">
                <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                <h1 className="lg:max-w-180 lg:text-6xl text-4xl font-bold mx-auto">Headline the solves user's main problem</h1>
                <p className="lg:max-w-150 text-muted-foreground lg:text-[18px] mx-auto">
                    Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.
                </p>
                <Button className="w-fit mx-auto" size={'lg'}>Get access <ArrowRight /></Button>
            </div>
        </div>
    );
}