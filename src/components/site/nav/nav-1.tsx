// interface Nav1Props {
//   // define props here
// }

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

// props: Nav1Props 
export default function Nav1() {
    return (
        <div className="fixed right-0 left-0 lg:top-4 top-0 w-full h-16.25 max-w-215 mx-auto px-5 flex items-center justify-between lg:bg-background/60 bg-background/85 backdrop-blur-md backdrop-saturate-150
border border-border/50
lg:rounded-lg lg:shadow-lg">
            <div className="flex items-center gap-1">
                <div className="flex items-center gap-x-1">
                    <span className="w-7.5 h-7.5 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 rounded-md">💀</span>
                    {/* optional: typelogo */}
                    {/* <span className="font-bold lg:block hidden">@skelly/site</span> */}
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
                <div className="lg:hidden block">
                    <ModeToggle />
                </div>
                <Sheet>
                    <SheetTrigger>
                        <Button variant={'ghost'} size={'icon'} className="lg:hidden flex"><Menu size={'20px'} /></Button>
                    </SheetTrigger>
                    <SheetContent className="p-6">
                        <a href="#">How It Works</a>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <Button className="w-full">Get started</Button>
                        {/* <DropdownMenuItem className="outline-none">How It Works</DropdownMenuItem>
                        <DropdownMenuItem className="outline-none">Features</DropdownMenuItem>
                        <DropdownMenuItem className="outline-none">Pricing</DropdownMenuItem>
                        <DropdownMenuItem className="outline-none">
                            <Button className="flex" size={'lg'}>Get Started</Button>
                        </DropdownMenuItem> */}
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}