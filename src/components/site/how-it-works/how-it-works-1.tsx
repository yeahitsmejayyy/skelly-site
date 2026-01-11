// interface HowItWorks1Props {
//   // define props here
// }
// props: HowItWorks1Props 
export default function HowItWorks1() {
    return (
        <div className="w-full border flex flex-col gap-y-10 items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="w-full lg:max-w-150 flex flex-col gap-y-5 text-center mx-auto">
                <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                <h1 className="lg:text-[38px] text-[30px] font-bold lg:leading-11 leading-8">Headline that shows how it works for user success</h1>
                <p className="text-muted-foreground lg:text-[18px]">
                    Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes. Focus on the end benefits that matter most to your target audience. Keep it clear and compelling.
                </p>
            </div>
            <div className="w-full max-w-325 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-10 gap-y-10">
                <div className="flex flex-col gap-y-6">
                    <img alt="How It Works Step 1" src={'/rectangle-placeholder.png'} />
                    <div className="text-left">
                        <p className="font-bold text-2xl">Step 1</p>
                        <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on user’s benefits not on technical details.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <img alt="How It Works Step 1" src={'/rectangle-placeholder.png'} />
                    <div className="text-left">
                        <p className="font-bold text-2xl">Step 2</p>
                        <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on user’s benefits not on technical details.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <img alt="How It Works Step 1" src={'/rectangle-placeholder.png'} />
                    <div className="text-left">
                        <p className="font-bold text-2xl">Step 3</p>
                        <p className="text-muted-foreground">Shortly describe how this feature solves a specific user problem. Focus on user’s benefits not on technical details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}