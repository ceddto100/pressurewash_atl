import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business, businessSchema } from "./lib/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pressure Wash of Atlanta | Metro Atlanta Pressure Washing",
  description:
    "Pressure Wash of Atlanta delivers residential pressure washing and soft washing across Metro Atlanta. Boost curb appeal with fast quotes and surface-safe cleaning.",
  keywords: [
    "pressure washing",
    "pressure washing atlanta",
    "soft washing",
    "house washing",
    "driveway cleaning",
    "roof washing",
    "deck cleaning",
    "fence cleaning",
    "residential pressure washing",
    "exterior cleaning",
    "metro atlanta pressure washing",
    "pressure wash of atlanta"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Pressure Wash of Atlanta | Metro Atlanta Pressure Washing",
    description:
      "Pressure Wash of Atlanta delivers residential pressure washing and soft washing across Metro Atlanta. Boost curb appeal with fast quotes and surface-safe cleaning.",
    type: "website",
    url: "https://pressurewash-atl.vercel.app",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pressure washing services in Metro Atlanta"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Wash of Atlanta | Metro Atlanta Pressure Washing",
    description:
      "Pressure Wash of Atlanta delivers residential pressure washing and soft washing across Metro Atlanta. Boost curb appeal with fast quotes and surface-safe cleaning.",
    images: ["/images/og-image.svg"]
  },
  metadataBase: new URL("https://pressurewash-atl.vercel.app"),
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
        <meta
          name="google-site-verification"
          content="37phJmyuXxTXi3Yb7Qf-Nx1q2Re6Kr9JL4ZWFYdJtpI"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema)
          }}
        />
        <meta name="apple-mobile-web-app-title" content="Pressure Wash" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
