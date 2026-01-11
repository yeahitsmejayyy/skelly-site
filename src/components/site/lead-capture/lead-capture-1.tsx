// interface LeadCapture1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// props: LeadCapture1Props 
export default function LeadCapture1() {
    return (
        <div className="w-full flex items-center justify-center lg:py-20 py-0">
            <div className="w-325 lg:rounded-lg bg-accent-foreground lg:pl-15 pl-8 pt-15">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-15">
                    <div className="flex flex-col lg:gap-0 gap-y-6 lg:justify-between  lg:pb-15 pe-15">
                        <div className="flex flex-col gap-y-6">
                            <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                            <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8 text-accent">Headline that shows frequently asked questions of users</h1>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <p className="text-muted-foreground lg:text-[18px]">
                                We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? Contact us.
                            </p>
                            <Button variant={'secondary'} className="w-fit">Get started <ArrowRight /></Button>
                        </div>
                    </div>
                    <div>
                        <img alt="Lead Capture Image" src="/lead-capture-placeholder.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}