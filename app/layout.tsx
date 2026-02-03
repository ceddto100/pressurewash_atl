import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business, businessSchema } from "./lib/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pressure Wash of Atlanta | Metro Atlanta Pressure Washing",
  description:
    "Pressure Wash of Atlanta delivers residential pressure washing and soft washing across Metro Atlanta. Boost curb appeal with fast quotes and surface-safe cleaning.",
  openGraph: {
    title: "Pressure Wash of Atlanta | Metro Atlanta Pressure Washing",
    description:
      "Pressure Wash of Atlanta delivers residential pressure washing and soft washing across Metro Atlanta. Boost curb appeal with fast quotes and surface-safe cleaning.",
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
  metadataBase: new URL("https://pressurewashofatlanta.com"),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    shortcut: ["/images/favicon.ico"]
  },
  manifest: "/images/site.webmanifest"
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
