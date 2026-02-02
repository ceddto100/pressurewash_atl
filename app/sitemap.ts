import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example.com/",
      lastModified: new Date()
    },
    {
      url: "https://example.com/thank-you",
      lastModified: new Date()
    }
  ];
}
