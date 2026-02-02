# Pressure Washing Landing Page

A modern, conversion-focused landing page for a Metro Atlanta pressure washing business.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Customize content

- Update business name, phone, and email in `app/lib/business.ts`.
- Replace sample before/after images in `public/images` with your real photos.
- Update testimonials, services, and pricing in `app/lib/content.ts`.

## Notes

- Sample gallery images and ratings are placeholders and should be replaced with real assets and data.
- Quote form submission uses a stub endpoint in `app/api/quote/route.ts`. Add Resend or Nodemailer credentials to send emails.
