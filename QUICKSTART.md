# Quick Start Guide

Get Tanya's Wellness Practice website running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- Anthropic API key (get it from [console.anthropic.com](https://console.anthropic.com))

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add at minimum:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here"
   ANTHROPIC_API_KEY="your-anthropic-api-key"
   ```

   Generate a secret key:
   ```bash
   openssl rand -base64 32
   ```

3. **Set up the database** (optional for MVP - can use SQLite)
   For quick testing with SQLite, update your `.env`:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

   Then push the schema:
   ```bash
   npm run db:push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## Test the AI Assistant

1. Click the floating chat button in the bottom-right corner
2. Try these questions:
   - "What yoga classes do you offer?"
   - "What are your prices?"
   - "When are classes available?"
   - "What should I bring to my first class?"

## What's Included in This MVP

✅ Beautiful calming UI design
✅ Homepage with hero, features, testimonials
✅ AI chat assistant with Claude Haiku 4.5
✅ RAG system for business knowledge
✅ Web search capability (when API key provided)
✅ Responsive mobile-friendly design
✅ Navigation and footer
✅ Database schema for future features

## Next Steps

### Add Full Features (Optional)

To add booking, payments, and admin features, you'll need:

1. **PostgreSQL Database**
   - Sign up for free at [Supabase](https://supabase.com) or [Neon](https://neon.tech)
   - Update `DATABASE_URL` in `.env`
   - Run `npm run db:push`

2. **Stripe for Payments**
   - Get test keys from [dashboard.stripe.com](https://dashboard.stripe.com)
   - Add to `.env`:
     ```env
     STRIPE_SECRET_KEY="sk_test_..."
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
     ```

3. **Web Search (Optional)**
   - Get Tavily API key from [tavily.com](https://tavily.com)
   - Add to `.env`:
     ```env
     TAVILY_API_KEY="your-tavily-api-key"
     ```

### Customize Content

1. **Update Business Information**
   - Edit `lib/rag.ts` to update the knowledge base
   - Add or modify information about classes, pricing, schedules

2. **Customize Design**
   - Colors: Edit `tailwind.config.ts`
   - Fonts: Edit `app/layout.tsx`
   - Content: Edit `app/page.tsx` and other pages

3. **Configure AI Assistant**
   - Edit `app/api/chat/route.ts` to customize the AI's personality and behavior

## Troubleshooting

### "Cannot find module '@anthropic-ai/sdk'"
```bash
npm install
```

### "Error: Environment variable not found"
Make sure you've created `.env` file with required variables:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `ANTHROPIC_API_KEY`

### AI Chat Not Working
1. Check your Anthropic API key is correct
2. Make sure you have API credits available
3. Check browser console for errors

### Build Errors
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## Deploy to Production

### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

That's it! 🎉

## Need Help?

- Read the full [README.md](./README.md)
- Check [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
- Contact: tanya@tanyawellness.com

---

**Happy building! 🧘‍♀️ 🥋 🧘**
