# Tanya's Wellness Practice - Website & AI Assistant

A modern, full-stack wellness practice website for booking yoga, martial arts, and meditation classes in Primrose Hill, London. Features an AI assistant powered by Anthropic Claude Haiku 4.5 with RAG and web search capabilities.

![Wellness Practice](https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200)

## Features

### Core Functionality
- ✅ Beautiful, calming UI design with sage green, lavender, and terracotta color palette
- ✅ Responsive layout optimized for all devices
- ✅ Class browsing and schedule viewing
- ✅ User authentication and profiles
- ✅ Class and appointment booking system
- ✅ Secure payment processing with Stripe
- ✅ Admin dashboard for managing classes and bookings

### AI Assistant
- ✅ **Claude Haiku 4.5** integration for natural conversations
- ✅ **RAG (Retrieval-Augmented Generation)** using business knowledge base
- ✅ **Web Search** capability for current wellness information
- ✅ Floating chat interface with smooth animations
- ✅ Context-aware responses about classes, pricing, and schedules
- ✅ Booking assistance and wellness guidance

### Design System
- Custom calming color palette
- Smooth animations and transitions
- Glass morphism effects
- Custom font combinations (Cormorant Garamond, Inter, Raleway)
- Breathing animations for meditation elements
- Accessibility-focused design

## Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom design system
- **shadcn/ui** components (Radix UI)
- **Framer Motion** for animations

### Backend
- **Next.js API Routes**
- **Prisma ORM** with PostgreSQL
- **NextAuth.js** for authentication
- **Stripe** for payments

### AI & ML
- **Anthropic Claude Haiku 4.5** (`claude-haiku-4-20250514`)
- **Custom RAG system** for business knowledge
- **Tavily/Brave** for web search

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or hosted)
- Anthropic API key
- Stripe account (for payments)
- Optional: Tavily or Brave API key (for web search)

### Installation

1. **Clone the repository**
   ```bash
   cd tanya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   ```env
   # Required
   DATABASE_URL="postgresql://user:password@localhost:5432/tanya_wellness"
   NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
   ANTHROPIC_API_KEY="your-anthropic-api-key"
   STRIPE_SECRET_KEY="sk_test_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

   # Optional (for web search)
   TAVILY_API_KEY="your-tavily-api-key"
   ```

4. **Set up the database**
   ```bash
   # Push the schema to your database
   npm run db:push

   # Seed with initial data (optional)
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

### Getting API Keys

#### Anthropic API Key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key
5. Copy and add to `.env` as `ANTHROPIC_API_KEY`

#### Stripe Keys
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Sign up or log in
3. Get your test keys from the Developers section
4. Add both publishable and secret keys to `.env`

#### Tavily API Key (Optional)
1. Go to [tavily.com](https://tavily.com)
2. Sign up for an account
3. Get your API key from the dashboard
4. Add to `.env` as `TAVILY_API_KEY`

### Database Setup

#### Local PostgreSQL
```bash
# Install PostgreSQL (macOS)
brew install postgresql

# Start PostgreSQL
brew services start postgresql

# Create database
createdb tanya_wellness

# Update DATABASE_URL in .env
DATABASE_URL="postgresql://localhost:5432/tanya_wellness"
```

#### Hosted PostgreSQL (Recommended for Production)
- **Supabase**: [supabase.com](https://supabase.com) - Free tier available
- **Neon**: [neon.tech](https://neon.tech) - Serverless PostgreSQL
- **Railway**: [railway.app](https://railway.app) - Easy deployment

## Project Structure

```
tanya/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── chat/            # AI assistant chat endpoint
│   │   ├── bookings/        # Booking management
│   │   └── payments/        # Stripe integration
│   ├── (auth)/              # Authentication pages
│   ├── (dashboard)/         # User/admin dashboards
│   ├── classes/             # Class listing pages
│   ├── book/                # Booking flow
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Base UI components
│   ├── navigation/          # Header, footer
│   ├── chat/                # AI chat assistant
│   └── booking/             # Booking components
├── lib/                     # Utilities and helpers
│   ├── utils.ts             # General utilities
│   ├── rag.ts               # RAG system
│   └── web-search.ts        # Web search integration
├── prisma/                  # Database
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Seed data
├── public/                  # Static assets
├── ARCHITECTURE.md          # Architecture documentation
└── README.md                # This file
```

## Usage

### Using the AI Assistant

The AI assistant appears as a floating button in the bottom-right corner of every page.

**What the assistant can help with:**
- Answer questions about classes and schedules
- Explain different yoga styles and martial arts
- Provide pricing information
- Guide through the booking process
- Share wellness tips and advice
- Search for current wellness trends (when web search is enabled)

**Example questions:**
- "What yoga classes do you offer?"
- "How much does a 10-class package cost?"
- "When is the next Vinyasa Flow class?"
- "What should I bring to my first class?"
- "What are the benefits of Tai Chi?"
- "What are the latest wellness trends?" (triggers web search)

### Booking a Class

1. Browse classes on the homepage or Classes page
2. Click "Book Now" or select a specific class
3. Choose a date and time from the schedule
4. Sign in or create an account
5. Confirm booking and proceed to payment
6. Receive booking confirmation

### Admin Features

Admin users can:
- Create and manage class schedules
- View and manage all bookings
- Update class information
- View analytics and reports
- Manage customer accounts
- Update business information for the AI assistant

Access the admin panel at `/admin` (requires admin role).

## Configuration

### Customizing the Knowledge Base

The AI assistant's knowledge base is defined in `lib/rag.ts`. To add or update information:

1. Open `lib/rag.ts`
2. Add new items to the `knowledgeBase` array
3. Each item should have:
   - `id`: Unique identifier
   - `title`: Short title
   - `content`: Detailed information
   - `category`: Category (classes, pricing, policies, etc.)

Example:
```typescript
{
  id: "13",
  title: "New Workshop Series",
  content: `Information about the workshop...`,
  category: "classes",
}
```

### Customizing the Color Scheme

Colors are defined in `tailwind.config.ts`. The current palette:
- **Sage Green**: Primary color for calmness
- **Lavender**: Secondary color for tranquility
- **Terracotta**: Accent color for warmth
- **Cream**: Background tones

To change colors, modify the color definitions in the `extend.colors` section.

### Customizing the AI Behavior

The AI assistant's personality and behavior are defined in the `SYSTEM_PROMPT` in `app/api/chat/route.ts`. Modify this prompt to change:
- Tone and personality
- Response style
- Specific guidance
- Booking flow behavior

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

Vercel will automatically:
- Build your Next.js app
- Set up serverless functions
- Configure edge caching
- Provide HTTPS

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- Database URL (use production database)
- API keys (Anthropic, Stripe, etc.)
- NextAuth secret (generate a new one for production)
- Set `NEXTAUTH_URL` to your production domain

### Database Migrations

```bash
# Generate migration
npx prisma migrate dev --name your_migration_name

# Apply migrations in production
npx prisma migrate deploy
```

## Development

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Use functional components with hooks
- Keep components small and focused
- Write descriptive variable names

### Adding New Features

1. Update Prisma schema if needed
2. Generate Prisma client: `npm run db:push`
3. Create API routes in `app/api/`
4. Create UI components in `components/`
5. Add pages in `app/`
6. Update knowledge base in `lib/rag.ts` if AI needs to know about it

### Testing

```bash
# Run linter
npm run lint

# Build for production (checks for errors)
npm run build

# Test the production build
npm run start
```

## Troubleshooting

### Database Connection Issues
- Check your `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Check firewall/network settings
- Try `npm run db:push` again

### Anthropic API Errors
- Verify your API key is correct
- Check your API quota/credits
- Ensure you're using the correct model name
- Check the Anthropic status page

### Build Errors
- Delete `.next` folder and rebuild
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run build`

### Chat Assistant Not Working
- Check browser console for errors
- Verify Anthropic API key in environment
- Test the `/api/chat` endpoint directly
- Check network tab for failed requests

## Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/yourusername/tanya/issues)
- Email: tanya@tanyawellness.com
- Documentation: See `ARCHITECTURE.md` for detailed architecture

## Roadmap

### MVP (Current)
- ✅ Core website with booking
- ✅ AI assistant with RAG and web search
- ✅ Payment processing
- ✅ Admin dashboard

### Future Enhancements
- [ ] Email notifications for bookings
- [ ] SMS reminders
- [ ] Mobile app (React Native)
- [ ] Video streaming for online classes
- [ ] Advanced AI with function calling for direct bookings
- [ ] Membership management
- [ ] Waitlist functionality
- [ ] Community features
- [ ] Integration with calendar apps
- [ ] Multi-language support

## License

Copyright © 2024 Tanya's Wellness Practice. All rights reserved.

## Acknowledgments

- Design inspired by nature and wellness practices
- Built with Next.js, Tailwind CSS, and shadcn/ui
- AI powered by Anthropic Claude
- Icons from Lucide React
- Images from Unsplash

---

**Built with ♥ in Primrose Hill, London**
