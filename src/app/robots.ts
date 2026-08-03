import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // There is no official support for Crawl-delay in MetadataRoute.
            // Next.js will not generate this field.
        },
        sitemap: "https://www.backerase.com/sitemap.xml",
    };
}