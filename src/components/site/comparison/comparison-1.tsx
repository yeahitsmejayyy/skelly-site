// interface Comparison1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, Check, X } from "lucide-react";

// props: Comparison1Props 
export default function Comparison1() {
    return (
        <div className="w-full border flex flex-col gap-y-12 items-center justify-center lg:py-50 py-30 lg:px-0 px-6">
            <div className="flex flex-col gap-y-5 text-center mx-auto">
                <p className="text-muted-foreground lg:text-[14px]">Hero Section</p>
                <h1 className="w-full lg:max-w-190 mx-auto lg:text-5xl text-3xl font-bold">Headline that shows comparison for user success</h1>
                <p className="w-full lg:max-w-150 mx-auto text-muted-foreground lg:text-[18px]">
                    Explain in one or two concise sentences how your solution compares to a competitor. Keep it clear and compelling.
                </p>
            </div>
            {/* desktop comparison ui */}
            <div className="w-325 lg:grid grid-cols-3 hidden">
                {/* feature list */}
                <div className="flex flex-col gap-y-0">
                    <div className="flex items-center h-[56px] border-b"></div>
                    <div className="flex items-center h-[56px] border-b">
                        <p className="font-bold">Projects</p>
                    </div>
                    <div className="flex items-center h-[56px] border-b">
                        <p className="font-bold">Custom components</p>
                    </div>
                    <div className="flex items-center h-[56px] border-b">
                        <p className="font-bold">Design tokens</p>
                    </div>
                    <div className="flex items-center h-[56px] border-b">
                        <p className="font-bold">Team permissions</p>
                    </div>
                    <div className="flex items-center h-[56px] border-b">
                        <p className="font-bold">Audit logs</p>
                    </div>
                </div>

                {/* your feature checks */}
                <div className="flex flex-col gap-y-0">
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <span className="w-7.5 h-7.5 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 rounded-md">💀</span>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p>Unlimitted</p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><Check size={'20'} className="text-green-600" /></p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><Check size={'20'} className="text-green-600" /></p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><Check size={'20'} className="text-green-600" /></p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><Check size={'20'} className="text-green-600" /></p>
                    </div>
                </div>

                {/* competitor feature checks */}
                <div className="flex flex-col gap-y-0">
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <Box />
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p>10</p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><Check size={'20'} className="text-green-600" /></p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><Check size={'20'} className="text-green-600" /></p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><X size={'20'} className="text-red-600" /></p>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <p className="font-bold"><X size={'20'} className="text-red-600" /></p>
                    </div>
                </div>
            </div>

            {/* mobile comparison ui */}
            <div className="w-full lg:hidden flex flex-col gap-y-4">
                {/* comparison header */}
                <div className="w-full grid grid-cols-2">
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <span className="w-7.5 h-7.5 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 rounded-md">💀</span>
                    </div>
                    <div className="flex items-center justify-center h-[56px] border-b">
                        <Box />
                    </div>
                </div>

                <Card className="pt-0">
                    <div className="flex items-center h-[56px] border-b px-4">
                        <p className="font-bold">Projects</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center h-[5px]">
                            <p>Unlimitted</p>
                        </div>
                        <div className="flex items-center justify-center h-[5px]">
                            <p>2</p>
                        </div>
                    </div>
                </Card>
                <Card className="pt-0">
                    <div className="flex items-center h-[56px] border-b px-4">
                        <p className="font-bold">Custom components</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center h-[5px]">
                            <Check size={'20'} className="text-green-600" />
                        </div>
                        <div className="flex items-center justify-center h-[5px]">
                            <Check size={'20'} className="text-green-600" />
                        </div>
                    </div>
                </Card>
                <Card className="pt-0">
                    <div className="flex items-center h-[56px] border-b px-4">
                        <p className="font-bold">Design tokens</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center h-[5px]">
                            <Check size={'20'} className="text-green-600" />
                        </div>
                        <div className="flex items-center justify-center h-[5px]">
                            <Check size={'20'} className="text-green-600" />
                        </div>
                    </div>
                </Card>
                <Card className="pt-0">
                    <div className="flex items-center h-[56px] border-b px-4">
                        <p className="font-bold">Team permissions</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center h-[5px]">
                            <Check size={'20'} className="text-green-600" />
                        </div>
                        <div className="flex items-center justify-center h-[5px]">
                            <X size={'20'} className="text-red-600" />
                        </div>
                    </div>
                </Card>
                <Card className="pt-0">
                    <div className="flex items-center h-[56px] border-b px-4">
                        <p className="font-bold">Audit logs</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center h-[5px]">
                            <Check size={'20'} className="text-green-600" />
                        </div>
                        <div className="flex items-center justify-center h-[5px]">
                            <X size={'20'} className="text-red-600" />
                        </div>
                    </div>
                </Card>
            </div>

            <Button>Get started</Button>
        </div>
    );
}