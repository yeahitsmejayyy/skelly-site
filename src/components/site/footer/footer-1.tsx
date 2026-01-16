import type { Footer1Data } from "@/sections/types/footer/footer-1"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface Footer1Props {
    data: Footer1Data
}

export default function Footer1({ data }: Footer1Props) {
    const {
        brand,
        newsletter,
        groups,
        copyright,
        metaLinks,
    } = data

    return (
        <div className="w-full flex flex-col gap-y-10 items-center justify-center py-30 px-6">
            <div className="lg:w-325 w-full flex lg:flex-row flex-col items-start gap-x-15">
                {newsletter && (
                    <div className="lg:w-95 w-full shrink-0 flex flex-col gap-y-6 lg:mb-0 mb-15 mx-auto">
                        {brand?.icon && (
                            <span className="w-7.5 h-7.5 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 rounded-md lg:mx-0 mx-auto">
                                {brand.icon}
                            </span>
                        )}

                        <div className="flex flex-col lg:text-left text-center gap-y-0">
                            <p className="font-medium text-[16px]">
                                {newsletter.title}
                            </p>
                            {newsletter.description && (
                                <p className="text-muted-foreground text-[14px]">
                                    {newsletter.description}
                                </p>
                            )}
                        </div>

                        <div className="flex lg:flex-row flex-col items-center lg:gap-x-2 gap-y-3">
                            <Input
                                placeholder={newsletter.placeholder ?? "Enter your email"}
                            />
                            <Button className="lg:w-fit w-full">
                                {newsletter.buttonLabel}
                            </Button>
                        </div>
                    </div>
                )}

                {groups.map((group, idx) => (
                    <div
                        key={idx}
                        className="lg:flex-1 w-full flex flex-col lg:text-left text-center gap-y-4 lg:mb-0 mb-15"
                    >
                        <p className="font-medium text-[16px]">
                            {group.title}
                        </p>
                        {group.links.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            <div className="lg:w-325 w-full px-6">
                <Separator />
            </div>

            <div className="lg:w-325 w-full flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 items-center justify-between">
                <p className="text-muted-foreground lg:order-1 order-2">
                    {copyright}
                </p>

                {metaLinks && (
                    <div className="flex lg:flex-row flex-col items-center lg:gap-x-8 gap-y-4 lg:order-2 order-1">
                        {metaLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
