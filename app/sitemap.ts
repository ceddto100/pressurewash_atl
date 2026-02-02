import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pressurewashofatlanta.com/",
      lastModified: new Date()
    },
    {
      url: "https://pressurewashofatlanta.com/thank-you",
      lastModified: new Date()
    }
  ];
}
