import { Helmet } from "react-helmet-async";
import { seoDefaults } from "./seo-defaults";

type SeoProps = {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    noIndex?: boolean;
};

export function Seo({
    title,
    description,
    image,
    url,
    noIndex = false,
}: SeoProps) {
    const metaDescription =
        description ?? seoDefaults.description;
    const metaImage = image ?? seoDefaults.image;
    const metaUrl = url ?? seoDefaults.url;

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={metaDescription} />

            {noIndex && (
                <meta name="robots" content="noindex, nofollow" />
            )}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content={metaDescription}
            />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
}
