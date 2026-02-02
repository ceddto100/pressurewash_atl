export const business = {
  name: "[YOUR BUSINESS NAME]",
  phone: "[YOUR PHONE]",
  phoneDisplay: "[YOUR PHONE]",
  email: "[YOUR EMAIL]",
  area: "Metro Atlanta, GA",
  suburbs: [
    "Sandy Springs",
    "Marietta",
    "Smyrna",
    "Decatur",
    "Dunwoody",
    "Brookhaven",
    "Alpharetta"
  ],
  address: "Metro Atlanta, GA"
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  image: "/images/og-image.svg",
  url: "https://example.com",
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US"
  },
  areaServed: business.suburbs,
  priceRange: "$149+",
  email: business.email
};
