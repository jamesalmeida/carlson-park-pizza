# 🍕 Save Carlson Park Pizza Wednesdays

Community organizing landing page to save [Windsor Hills Pizza](https://windsorhillspizza.com/)'s Wednesday pizza nights at Carlson Park in Culver City, CA.

## What's This About?

For 4 years, Windsor Hills Pizza has set up their truck near Carlson Park every Wednesday, becoming a beloved neighborhood tradition. Culver City Code Enforcement recently cited them for selling within 300ft of a public park. Council Member Dan O'Brien has requested the issue be put on the agenda for the next city council meeting, where they'll vote on adjusting the law.

This site collects email signups from neighbors who want to support the effort and attend the council meeting.

## Tech Stack

- **Next.js 15** + TypeScript + Tailwind CSS
- **Supabase** for email signup storage
- **Vercel** for hosting

## Live Site

**[carlson-park-pizza.vercel.app](https://carlson-park-pizza.vercel.app)**

## Development

```bash
pnpm install
pnpm dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
