export const business = {
  name: "Pressure Wash of Atlanta",
  phone: "4045096599",
  phoneDisplay: "404-509-6599",
  email: "cartercedric35@gmail.com",
  area: "Metro Atlanta, Georgia",
  suburbs: [
    "Atlanta",
    "Sandy Springs",
    "Marietta",
    "Smyrna",
    "Decatur",
    "Brookhaven",
    "Dunwoody",
    "Alpharetta"
  ],
  address: "Metro Atlanta, Georgia"
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  image: "/images/og-image.svg",
  url: "https://pressurewashofatlanta.com",
  telephone: `+1${business.phone}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US"
  },
  areaServed: ["Metro Atlanta, Georgia", ...business.suburbs],
  priceRange: "$149+",
  email: business.email,
  description:
    "Locally owned and operated exterior cleaning company serving Metro Atlanta with professional pressure washing and soft washing for residential surfaces."
};
