This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to self-host Montserrat, Quicksand, and Noto Sans Arabic.

## Page loading

`Components/layout/WebsiteLoader.tsx` shows a full-page loading screen on the first visit and when the route changes. It waits for the document, fonts, image decoding, and CSS background images before revealing the page. Images below the fold load eagerly so they cannot stall the loader. Failed images let the page open, and visitors without JavaScript can still read and scroll the site. The loading label supports English and Arabic, and its animation respects reduced-motion preferences.

Image quality values 75 and 100 are enabled in `next.config.ts`. Decorative images use sizes matching their containers, and the logo dimensions preserve their original aspect ratio.

## English and Arabic

The navigation language button switches all pages without reloading or clearing form state. Arabic uses a right-to-left layout. The `samatechs-language` cookie remembers the selection for one year and lets the server render the selected language on the next visit.

Arabic copy lives in `lib/i18n/ar.json`, keyed by the English copy. Wrap visible text in the `Trans` component from `lib/i18n/LanguageProvider`. For attributes such as `placeholder`, `alt`, and `aria-label`, use `t` from `useLanguage()` in a client component. Keep form field values and API payloads independent of translated display labels. Calendar dates use a localized Gregorian calendar. No external translation service is loaded.

## Backend

The contact page's Message and Book a time forms use the SamaTechs backend (`SamaTechBackend`) through `lib/api.ts`. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` to the backend's origin (default `http://localhost:4000`). The value is built into the client bundle, so rebuild after changing it.

Booking reads open weekdays and times from `GET /api/availability` and taken times from `GET /api/consultations/booked`; times are Arabia Standard Time. See the backend README for the endpoints and schedule setup.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
