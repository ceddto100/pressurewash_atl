import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Header from "./components/Header";
import QuoteForm from "./components/QuoteForm";
import { business } from "./lib/business";
import { faqs, gallery, services, testimonials } from "./lib/content";

const trustBadges = [
  "Licensed & Insured",
  "Satisfaction Guaranteed",
  "Free Quotes"
];

export default function Home() {
  return (
    <div id="top" className="text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="overflow-hidden">
        <section className="gradient-hero">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                Metro Atlanta Pressure Washing
              </p>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                Restore curb appeal and protect your home with safe, premium
                pressure washing.
              </h1>
              <p className="text-lg text-slate-600">
                Fast scheduling across {business.area}. We remove algae, mildew,
                and stains without damaging surfaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="button-primary">
                  Get a Free Quote
                </a>
                <a
                  href={`tel:${business.phone}`}
                  className="button-secondary"
                >
                  Call/Text {business.phoneDisplay}
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                Starting at $149 minimum service call. Fast scheduling • Upfront
                quotes • Real results.
              </p>
            </div>
            <div className="flex-1">
              <div className="glass-card rounded-3xl p-6">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/images/before-after/driveway-after.svg"
                    alt="Sample pressure washed driveway"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Same-week scheduling
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Quick turnarounds for driveways, siding, patios, and more.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Surface-safe cleaning
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Soft wash options protect paint, siding, and landscaping.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  Replace with your real photos once available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="section-title">Services tailored to your home</h2>
            <p className="section-subtitle">
              Every visit includes careful prep, surface-safe cleaning, and a
              final walkthrough so you know exactly what was done.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Surfaces
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {service.surfaces}
                  </p>
                </div>
                <a href="#quote" className="link-brand mt-6">
                  Get a quote →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="section-title">Before & after results</h2>
              <p className="section-subtitle">
                Sample results shown below. Replace these images with your real
                project photos to build even more trust.
              </p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {gallery.map((item) =>
                item.slider ? (
                  <BeforeAfterSlider
                    key={item.title}
                    before={item.before}
                    after={item.after}
                    title={item.title}
                  />
                ) : (
                  <div
                    key={item.title}
                    className="glass-card overflow-hidden rounded-2xl"
                  >
                    <div className="grid gap-0 sm:grid-cols-2">
                      <div className="relative aspect-video">
                        <Image
                          src={item.before}
                          alt={`${item.title} before pressure washing`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-video">
                        <Image
                          src={item.after}
                          alt={`${item.title} after pressure washing`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Sample results (replace with your photos).
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="section-title">Local homeowners love the results</h2>
              <p className="section-subtitle">
                Sample rating — replace with real numbers once available.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-brand-50 px-6 py-4">
              <p className="text-sm font-semibold text-brand-700">
                5.0 average from 80+ homeowners
              </p>
              <p className="text-xs text-brand-600">Sample rating</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="glass-card flex flex-col gap-4 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {review.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {review.neighborhood}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-slate-600">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-sm text-slate-600">“{review.quote}”</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="section-title">Transparent starting ranges</h2>
              <p className="section-subtitle">
                Clear starting points with flexible bundles based on size and
                surfaces.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="glass-card rounded-2xl p-6">
                <p className="text-sm font-semibold text-slate-500">
                  Minimum service call
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  $149+
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Covers travel, setup, and standard driveway or small patio
                  cleaning.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-sm font-semibold text-slate-500">
                  Driveways & concrete
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  From $149
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Includes rinse, spot treatment, and surface-safe cleaning.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-sm font-semibold text-slate-500">
                  House wash (soft wash)
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  From $199
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Gentle exterior cleaning for siding and trim.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600">
              <p>Bundle discounts available when combining multiple services.</p>
              <p>
                Final price depends on size, staining, access, and surface type.
              </p>
            </div>
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="section-title">Get your fast, free quote</h2>
              <p className="section-subtitle">
                Tell us about the surfaces you want cleaned and we’ll respond
                quickly with a tailored estimate.
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  What happens next?
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>We confirm your availability and service details.</li>
                  <li>We provide a transparent quote and timeline.</li>
                  <li>We schedule and deliver spotless results.</li>
                </ul>
              </div>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-sm text-brand-700">
                <p className="font-semibold">Water source note</p>
                <p className="mt-2">
                  We do not yet have a water tank, so a working exterior spigot is
                  required at the service location.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8">
              <QuoteForm />
            </div>
          </div>
        </section>

        <section id="service-area" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="section-title">Proudly serving Metro Atlanta</h2>
                <p className="section-subtitle">
                  We service homes and small commercial properties across the
                  metro area.
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                  {business.suburbs.map((suburb) => (
                    <li
                      key={suburb}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                    >
                      {suburb}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  Don’t see your neighborhood? Reach out and we’ll confirm
                  availability.
                </p>
              </div>
              <div className="glass-card flex h-full flex-col items-center justify-center rounded-3xl p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-600 text-white">
                  <span className="text-2xl">📍</span>
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-900">
                  Metro Atlanta Service Map
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Replace this card with a Google Map embed once you’re ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-subtitle">
              Clear answers so you can book with confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">
              Need quick answers?
            </p>
            <p className="mt-2">
              Call or text {business.phoneDisplay} and we’ll help you plan the
              right service.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="section-title">Make it yours in minutes</h2>
                <p className="section-subtitle">
                  Swap in real photos, update pricing, and replace sample reviews
                  to match your real customer data.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li>
                    Replace the images in <strong>/public/images</strong> with
                    your real before/after photos.
                  </li>
                  <li>
                    Update testimonials and pricing ranges in
                    <strong> app/lib/content.ts</strong>.
                  </li>
                  <li>
                    Edit business contact info in
                    <strong> app/lib/business.ts</strong>.
                  </li>
                </ul>
              </div>
              <div className="glass-card rounded-3xl p-8 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  Compliance & trust note
                </p>
                <p className="mt-3">
                  Update any claims (like licensing, insurance, ratings) once you
                  have the supporting documentation. Keep your copy accurate to
                  build trust with Metro Atlanta homeowners.
                </p>
                <div className="mt-6">
                  <Link href="#quote" className="button-primary w-full">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 text-sm text-slate-600 sm:px-6 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-slate-900">
              {business.name}
            </p>
            <p className="mt-2">{business.area}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Contact</p>
            <p className="mt-2">{business.phoneDisplay}</p>
            <p className="mt-1">{business.email}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Hours</p>
            <p className="mt-2">Mon–Sat: 8am – 7pm</p>
            <p className="mt-1">Sun: By request</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
