import Link from "next/link";
import { business } from "../lib/business";

export default function ThankYouPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
        Quote request received
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-900">
        Thanks for reaching out!
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        We’ll review your details and follow up quickly with next steps and a
        clear estimate.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="/" className="button-secondary">
          Back to Home
        </Link>
        <a href={`tel:${business.phone}`} className="button-primary">
          Call/Text {business.phoneDisplay}
        </a>
      </div>
    </main>
  );
}
