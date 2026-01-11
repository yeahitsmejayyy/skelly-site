// interface FAQ1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// props: FAQ1Props 
export default function FAQ1() {
    return (
        <div className="w-full flex items-center justify-center border">
            <div className="w-325 lg:py-50 py-30 lg:px-0 px-6">
                <div className="grid lg:grid-cols-2 grid-cols-1 mb-15">
                    <div className="flex flex-col justify-center lg:gap-y-[24px] gap-y-[24px] lg:mb-0 mb-8">
                        <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                        <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8">Headline that shows frequently asked questions of users</h1>
                        <p className="text-muted-foreground lg:text-[18px]">
                            We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? Contact us.
                        </p>
                    </div>

                    <div className="flex lg:flex-row flex-col items-end justify-end lg:gap-x-3 gap-y-3">
                        <Button variant={'outline'} className="lg:w-fit w-full">Contact us <ArrowUpRight /></Button>
                        <Button variant={'outline'} className="lg:w-fit w-full">View documentation <ArrowUpRight /></Button>
                    </div>
                </div>


                {/* questions */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div className="flex flex-col items-start gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <p className="font-bold">What is shadcn/ui kit for Figma?</p>
                            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <p className="font-bold">What is shadcn/ui kit for Figma?</p>
                            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <p className="font-bold">What is shadcn/ui kit for Figma?</p>
                            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <p className="font-bold">What is shadcn/ui kit for Figma?</p>
                            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <p className="font-bold">What is shadcn/ui kit for Figma?</p>
                            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-4">
                        <div className="flex flex-col gap-y-1">
                            <p className="font-bold">What is shadcn/ui kit for Figma?</p>
                            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}