// interface Features1Props {
//   // define props here
// }

import { Rocket } from "lucide-react";

// props: Features1Props 
export default function Features1() {
    return (
        <div className="w-full flex items-center justify-center border">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-y-[48px] w-325 lg:py-50 py-30 lg:px-0 px-6">
                <div className="flex flex-col justify-center lg:gap-y-[24px] gap-y-[24px]">
                    <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                    <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8">Headline that shows features impact on user success</h1>
                    <p className="text-muted-foreground lg:text-[18px]">
                        Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.
                    </p>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <div className="flex flex-col items-start gap-y-4">
                            <div className="flex items-center justify-center shrink-0 w-[48px] h-[48px] border rounded-md">
                                <Rocket size={'20'} className="shrink-0" />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Feature driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-y-4">
                            <div className="flex items-center justify-center shrink-0 w-[48px] h-[48px] border rounded-md">
                                <Rocket size={'20'} className="shrink-0" />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Feature driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-y-4">
                            <div className="flex items-center justify-center shrink-0 w-[48px] h-[48px] border rounded-md">
                                <Rocket size={'20'} className="shrink-0" />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Feature driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-y-4">
                            <div className="flex items-center justify-center shrink-0 w-[48px] h-[48px] border rounded-md">
                                <Rocket size={'20'} className="shrink-0" />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Feature driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg">
                    <img alt="Placeholder Image" src={'/tall-rectangle-placeholder.png'} className="rounded-lg" />
                </div>
            </div>
        </div>
    );
}