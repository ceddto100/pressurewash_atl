import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pressurewash-atl.vercel.app/",
      lastModified: new Date()
    },
    {
      url: "https://pressurewash-atl.vercel.app/thank-you",
      lastModified: new Date()
    }
  ];
}
