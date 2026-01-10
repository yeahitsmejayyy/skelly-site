// interface Nav1Props {
//   // define props here
// }

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// props: Nav1Props 
export default function Nav1() {
    return (
        <div className="sticky lg:top-4 top-0 w-full h-16.25 max-w-215 mx-auto px-5 flex items-center justify-between border lg:rounded-lg bg-background lg:shadow-md">
            <div className="flex items-center gap-1">
                <div className="flex items-center gap-x-1">
                    <span>💀</span>
                    <span className="font-bold lg:block hidden">@skelly/site</span>
                </div>
            </div>

            <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-2 lg:block hidden">
                    <Button variant={'link'}>How It Works</Button>
                    <Button variant={'link'}>Pricing</Button>
                    <Button variant={'link'}>Features</Button>
                    <Button>Get Started</Button>
                </div>
                <div className="lg:block hidden">
                    <ModeToggle />
                </div>
                <Button variant={'ghost'} size={'icon'} className="lg:hidden flex"><Menu size={'20px'} /></Button>
            </div>
        </div>
    );
}