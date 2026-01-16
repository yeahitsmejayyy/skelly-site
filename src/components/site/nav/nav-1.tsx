import type { Nav1Data } from "@/sections/types/nav/nav-1"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Menu } from "lucide-react"

interface Nav1Props {
    data: Nav1Data
}

export default function Nav1({ data }: Nav1Props) {
    const { brand, links, cta } = data

    return (
        <div className="fixed right-0 left-0 lg:top-10 top-0 w-full h-16.25 max-w-215 mx-auto px-5 flex items-center justify-between lg:bg-background/60 bg-background/85 backdrop-blur-md backdrop-saturate-150
border border-border/50
lg:rounded-lg lg:shadow-lg">
            <div className="flex items-center gap-1">
                <a href={brand?.href ?? "/"} className="flex items-center gap-x-1">
                    {brand?.icon && (
                        <span className="w-7.5 h-7.5 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 rounded-md">
                            {brand.icon}
                        </span>
                    )}
                    {brand?.label && (
                        <span className="font-bold lg:block hidden">
                            {brand.label}
                        </span>
                    )}
                </a>
            </div>

            <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-2 lg:block hidden">
                    {links.map(link => (
                        <Button key={link.href} variant="link" asChild>
                            <a href={link.href}>{link.label}</a>
                        </Button>
                    ))}
                    {cta && (
                        <Button asChild>
                            <a href={cta.href}>{cta.label}</a>
                        </Button>
                    )}
                </div>

                <div className="lg:flex lg:items-center lg:gap-x-2 hidden">
                    <ModeToggle />
                </div>

                <div className="lg:hidden block">
                    <ModeToggle />
                </div>

                <Sheet>
                    <SheetTrigger>
                        <Button variant="ghost" size="icon" className="lg:hidden flex">
                            <Menu size="20px" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="p-6 flex flex-col gap-4">
                        {links.map(link => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                        {cta && (
                            <Button className="w-full" asChild>
                                <a href={cta.href}>{cta.label}</a>
                            </Button>
                        )}
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
