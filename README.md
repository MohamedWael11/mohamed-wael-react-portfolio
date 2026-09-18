# Mohamed Wael — React Portfolio

A professional, responsive portfolio website built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Contact form setup

The contact form uses a Vercel serverless function to save messages in Supabase and notify `mwael3834@gmail.com` through Resend.

1. Create the `contact_messages` table by running [`supabase/schema.sql`](./supabase/schema.sql) in the Supabase SQL Editor.
2. Copy [`.env.example`](./.env.example) to `.env.local` and fill in the Supabase and Resend values.
3. Add the same environment variables to the Vercel project settings before deploying.
4. Verify a sender domain in Resend, then set `RESEND_FROM_EMAIL` to an address on that domain.

Never expose `SUPABASE_SERVICE_ROLE_KEY` in frontend code.

The `/api/contact` endpoint is a Vercel Serverless Function, so the complete contact flow is available after deploying to Vercel with the environment variables configured. The plain Vite development server does not execute files in `api/`.

## Customize

Edit `src/main.jsx` to update:
- Email address
- About text
- Projects
- GitHub / LinkedIn links
- Skills

Edit `src/styles.css` to change the visual design.
