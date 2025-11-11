# Tanya's Wellness Practice - Architecture Design

## Overview
A modern wellness practice website for Yoga, Martial Arts, and holistic wellness services in Primrose Hill, London. Features include class booking, appointment scheduling, payment processing, and an AI assistant powered by Anthropic Claude Haiku 4.5.

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom calming design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: React Context + Server Components
- **Forms**: React Hook Form with Zod validation

### Backend
- **API**: Next.js API Routes (serverless functions)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payment**: Stripe
- **File Storage**: AWS S3 or Cloudflare R2

### AI Assistant
- **Model**: Anthropic Claude Haiku 4.5
- **RAG**: Vector embeddings with Pinecone or pgvector
- **Web Search**: Tavily API or Brave Search API
- **Embeddings**: Voyage AI or OpenAI embeddings

### Infrastructure
- **Hosting**: Vercel
- **Database**: Supabase or Neon
- **CDN**: Vercel Edge Network
- **Environment**: Node.js 18+

## Design System

### Color Palette (Calming Theme)
```css
Primary: Sage Green (#A8B5A0)
Secondary: Soft Lavender (#C5B4E3)
Accent: Warm Terracotta (#D4A59A)
Neutral: Soft Cream (#FAF7F0)
Text: Charcoal (#2C3333)
Background: Off-White (#F8F6F4)
```

### Typography
- Headings: Cormorant Garamond (serif, elegant)
- Body: Inter (sans-serif, readable)
- Accent: Raleway (for buttons and CTAs)

### Design Principles
- Minimalist, uncluttered layouts
- Generous white space
- Soft shadows and rounded corners
- Nature-inspired imagery
- Smooth transitions and animations
- Mobile-first responsive design

## Core Features

### 1. Public Pages
- **Homepage**: Hero section, class highlights, testimonials, CTA
- **Classes**: Schedule, class types (Yoga, Martial Arts), descriptions
- **About**: Tanya's story, qualifications, philosophy
- **Contact**: Location (Primrose Hill), contact form, map
- **Pricing**: Transparent pricing, packages, memberships

### 2. User Features
- **User Registration/Login**: Email/password and social auth
- **Class Booking**: Browse schedule, book classes, view booking history
- **Appointment Booking**: 1-on-1 sessions with calendar integration
- **Payment**: Secure checkout with Stripe (cards, Apple Pay, Google Pay)
- **User Dashboard**: Upcoming classes, booking history, payment history
- **Profile Management**: Update personal info, preferences

### 3. AI Assistant
- **Chat Interface**: Floating chat bubble, expandable panel
- **Capabilities**:
  - Answer questions about classes, pricing, schedule
  - Help with booking process
  - Provide wellness tips and guidance
  - Search web for current wellness information
  - RAG-based responses using business knowledge base
- **Context Awareness**: Remembers conversation history
- **Handoff**: Option to contact human (Tanya) directly

### 4. Admin Panel
- **Dashboard**: Overview of bookings, revenue, upcoming classes
- **Class Management**: Create, edit, delete classes
- **Schedule Management**: Set class times, capacity, recurring events
- **Booking Management**: View, modify, cancel bookings
- **Customer Management**: View customer profiles, booking history
- **Content Management**: Update business information for RAG
- **Analytics**: Booking trends, popular classes, revenue reports

## Database Schema

### Users
```typescript
- id: string (UUID)
- email: string (unique)
- name: string
- phone: string?
- role: enum (customer, admin)
- createdAt: DateTime
- updatedAt: DateTime
```

### Classes
```typescript
- id: string (UUID)
- title: string
- description: string
- type: enum (yoga, martial_arts, meditation, workshop)
- duration: number (minutes)
- capacity: number
- price: number
- imageUrl: string?
- isActive: boolean
- createdAt: DateTime
- updatedAt: DateTime
```

### ClassSchedules
```typescript
- id: string (UUID)
- classId: string (FK)
- startTime: DateTime
- endTime: DateTime
- availableSpots: number
- status: enum (scheduled, cancelled, completed)
- createdAt: DateTime
- updatedAt: DateTime
```

### Bookings
```typescript
- id: string (UUID)
- userId: string (FK)
- scheduleId: string (FK)
- status: enum (pending, confirmed, cancelled, completed)
- paymentStatus: enum (pending, paid, refunded)
- paymentIntentId: string?
- amount: number
- createdAt: DateTime
- updatedAt: DateTime
```

### Appointments
```typescript
- id: string (UUID)
- userId: string (FK)
- type: enum (private_session, consultation)
- dateTime: DateTime
- duration: number
- status: enum (pending, confirmed, cancelled, completed)
- paymentStatus: enum (pending, paid, refunded)
- amount: number
- notes: string?
- createdAt: DateTime
- updatedAt: DateTime
```

### BusinessKnowledge (for RAG)
```typescript
- id: string (UUID)
- title: string
- content: string
- category: enum (classes, pricing, policies, wellness_tips)
- embedding: vector (1536 dimensions)
- metadata: JSON
- createdAt: DateTime
- updatedAt: DateTime
```

### ChatHistory
```typescript
- id: string (UUID)
- userId: string? (FK)
- sessionId: string
- messages: JSON
- createdAt: DateTime
- updatedAt: DateTime
```

## AI Assistant Architecture

### RAG System
1. **Knowledge Base**: Store business information (classes, policies, wellness content)
2. **Embedding Generation**: Create vector embeddings for all content
3. **Vector Store**: Use pgvector or Pinecone for similarity search
4. **Retrieval**: Find relevant context based on user query
5. **Augmentation**: Inject retrieved context into Claude prompt
6. **Generation**: Claude generates contextual response

### Web Search Integration
- Use Tavily API for current wellness/health information
- Fallback to cached information if search fails
- Cite sources in responses

### Chat Flow
```
User Query →
  ↓
Classify Intent (booking, info, general) →
  ↓
If booking → Direct to booking flow
If info → RAG retrieval + Web search (if needed) →
  ↓
Generate response with Claude Haiku 4.5 →
  ↓
Return response with actions (buttons for booking, etc.)
```

## API Endpoints

### Public Endpoints
- `GET /api/classes` - List all active classes
- `GET /api/classes/[id]` - Get class details
- `GET /api/schedule` - Get class schedule
- `POST /api/contact` - Contact form submission
- `POST /api/chat` - AI assistant chat

### Protected Endpoints (Authenticated)
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `DELETE /api/bookings/[id]` - Cancel booking
- `POST /api/appointments` - Schedule appointment
- `POST /api/payments/create-intent` - Create Stripe payment intent
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Admin Endpoints
- `POST /api/admin/classes` - Create class
- `PUT /api/admin/classes/[id]` - Update class
- `DELETE /api/admin/classes/[id]` - Delete class
- `POST /api/admin/schedule` - Create class schedule
- `GET /api/admin/bookings` - Get all bookings
- `PUT /api/admin/bookings/[id]` - Update booking
- `POST /api/admin/knowledge` - Add knowledge base content
- `GET /api/admin/analytics` - Get analytics data

## Security Considerations

- HTTPS only in production
- JWT-based authentication with httpOnly cookies
- Rate limiting on API endpoints
- Input validation with Zod schemas
- SQL injection prevention with Prisma ORM
- XSS protection with React's built-in escaping
- CSRF protection with NextAuth.js
- Secure Stripe webhook validation
- Environment variables for all secrets
- Role-based access control (RBAC)

## Performance Optimizations

- Server-side rendering for SEO
- Image optimization with Next.js Image
- Code splitting and lazy loading
- React Server Components for reduced JS bundle
- CDN for static assets
- Database query optimization with indexes
- Caching with React Server Components
- Optimistic UI updates

## Deployment

### Environment Variables
```
# Database
DATABASE_URL=

# Auth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Anthropic
ANTHROPIC_API_KEY=

# Stripe
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Vector DB
PINECONE_API_KEY=
PINECONE_ENVIRONMENT=

# Search
TAVILY_API_KEY=

# Storage
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET_NAME=
```

### Deployment Steps
1. Push code to GitHub
2. Connect Vercel to repository
3. Configure environment variables
4. Set up database (Supabase/Neon)
5. Run Prisma migrations
6. Seed initial data
7. Configure Stripe webhooks
8. Deploy to production

## Future Enhancements (Post-MVP)

- Mobile app (React Native)
- Calendar integration (Google Calendar, Apple Calendar)
- Email notifications and reminders
- SMS notifications via Twilio
- Waitlist functionality for full classes
- Membership packages with recurring billing
- Gift cards and vouchers
- Referral program
- Video streaming for online classes
- Integration with fitness tracking apps
- Multi-language support
- Advanced analytics and reporting
- AI assistant with function calling for bookings
- Personalized class recommendations
- Community features (forum, social feed)

## MVP Scope (Initial Release)

For the MVP, we'll implement:
1. ✅ Homepage, Classes, About, Contact pages
2. ✅ User registration and login
3. ✅ Class schedule and browsing
4. ✅ Class booking system
5. ✅ Basic payment with Stripe
6. ✅ AI assistant with RAG and web search
7. ✅ Admin panel for class and booking management
8. ✅ Responsive, calming design
9. ✅ Basic analytics

Not in MVP:
- Advanced appointment scheduling (use simple form)
- Membership packages (single payment only)
- Email/SMS notifications
- Video streaming
- Mobile app
