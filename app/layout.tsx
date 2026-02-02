import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business, businessSchema } from "./lib/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${business.name} | Premium Pressure Washing in Metro Atlanta`,
  description:
    "Premium pressure washing and soft washing for Metro Atlanta homes. Fast scheduling, honest quotes, and surface-safe cleaning.",
  openGraph: {
    title: `${business.name} | Premium Pressure Washing in Metro Atlanta`,
    description:
      "Premium pressure washing and soft washing for Metro Atlanta homes. Fast scheduling, honest quotes, and surface-safe cleaning.",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pressure washing services in Metro Atlanta"
      }
    ]
  },
  metadataBase: new URL("https://example.com"),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema)
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
