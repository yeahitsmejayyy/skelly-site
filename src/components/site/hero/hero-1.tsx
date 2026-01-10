// interface Hero1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// props: Hero1Props 
export default function Hero1() {
    return (
        <div className="w-full flex items-center justify-center lg:pt-30 pt-15 lg:px-0 px-12">
            <div className="w-full lg:max-w-150 flex flex-col gap-y-5 text-center mx-auto">
                <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                <h1 className="lg:text-5xl text-3xl font-bold">Headline the solves user's main problem</h1>
                <p className="text-muted-foreground lg:text-[18px]">
                    Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.
                </p>
                <Button className="w-fit mx-auto">Get access <ArrowRight /></Button>
            </div>
        </div>
    );
}