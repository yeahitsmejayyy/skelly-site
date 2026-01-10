// interface Benefits1Props {
//   // define props here
// }

import { Check } from "lucide-react";

// props: Benefits1Props 
export default function Benefits1() {
    return (
        <div className="w-full flex items-center justify-center border">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-y-[48px] w-325 lg:py-50 py-30 lg:px-0 px-12">
                <div className="flex items-start flex-col justify-start lg:gap-y-[24px] gap-y-[24px]">
                    <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                    <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8">Headline that shows benefits impact on user success</h1>
                    <p className="text-muted-foreground lg:text-[18px]">
                        Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-y-10">
                    <div className="flex flex-col lg:gap-y-6 gap-y-10">
                        <div className="flex items-start gap-x-2">
                            <Check size={'20'} className="shrink-0" />
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Benefit driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-2">
                            <Check size={'20'} className="shrink-0" />
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Benefit driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-2">
                            <Check size={'20'} className="shrink-0" />
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Benefit driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:gap-y-6 gap-y-10">
                        <div className="flex items-start gap-x-2">
                            <Check size={'20'} className="shrink-0" />
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Benefit driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-2">
                            <Check size={'20'} className="shrink-0" />
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Benefit driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-2">
                            <Check size={'20'} className="shrink-0" />
                            <div className="flex flex-col gap-y-1">
                                <p className="font-bold">Benefit driven feature title</p>
                                <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}