// interface Footer1Props {
//   // define props here
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// props: Footer1Props 
export default function Footer1() {
    return (
        <div className="w-full flex flex-col gap-y-10 items-center justify-center py-30 px-6">
            <div className="lg:w-325 w-full flex lg:flex-row flex-col items-start gap-x-15">
                <div className="lg:w-95 w-full shrink-0 flex flex-col gap-y-6 lg:mb-0 mb-15 mx-auto">
                    <span className="w-7.5 h-7.5 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 rounded-md lg:mx-0 mx-auto">💀</span>
                    <div className="flex flex-col lg:text-left text-center gap-y-0">
                        <p className="font-medium text-[16px]">Subscribe to our newsletter</p>
                        <p className="text-muted-foreground text-[14px]">Get the latest news and updates from our team.</p>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center lg:gap-x-2 gap-y-3">
                        <Input placeholder="Enter your email" />
                        <Button className="lg:w-fit w-full">Subscribe</Button>
                    </div>
                </div>
                <div className="lg:flex-1 w-full flex flex-col lg:text-left text-center lg:justify-start justify-center gap-y-4 lg:mb-0 mb-15">
                    <p className="font-medium text-[16px]">Company</p>
                    <a href="#" className="text-muted-foreground">About Us</a>
                    <a href="#" className="text-muted-foreground">Blog</a>
                    <a href="#" className="text-muted-foreground">Careers</a>
                    <a href="#" className="text-muted-foreground">Partners</a>
                    <a href="#" className="text-muted-foreground">Contact</a>
                </div>
                <div className="lg:flex-1 w-full flex flex-col lg:text-left text-center lg:justify-start justify-center gap-y-4 lg:mb-0 mb-15">
                    <p className="font-medium text-[16px]">Resources</p>
                    <a href="#" className="text-muted-foreground">Guides</a>
                    <a href="#" className="text-muted-foreground">Tutorials</a>
                    <a href="#" className="text-muted-foreground">FAQ</a>
                    <a href="#" className="text-muted-foreground">Downloads</a>
                    <a href="#" className="text-muted-foreground">Support</a>
                </div>
                <div className="lg:flex-1 w-full flex flex-col lg:text-left text-center lg:justify-start justify-center gap-y-4 lg:mb-0 mb-0">
                    <p className="font-medium text-[16px]">Account</p>
                    <a href="#" className="text-muted-foreground">Your Account</a>
                    <a href="#" className="text-muted-foreground">Settings</a>
                    <a href="#" className="text-muted-foreground">Accessibility</a>
                    <a href="#" className="text-muted-foreground">Terms</a>
                </div>
            </div>
            <div className="lg:w-325 w-full px-6">
                <Separator />
            </div>
            <div className="lg:w-325 w-full flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 items-center justify-between">
                <p className="text-muted-foreground lg:order-1 order-2">Copyright &copy; 2026 skellyui.com All rights reserved</p>
                <div className="flex lg:flex-row flex-col items-center lg:gap-x-8 gap-y-4 lg:order-2 order-1">
                    <a href="#" className="text-muted-foreground">Privacy Policy</a>
                    <a href="#" className="text-muted-foreground">Terms of Service</a>
                    <a href="#" className="text-muted-foreground">Cookies Settings</a>
                </div>
            </div>
        </div>
    );
}