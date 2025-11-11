# Deploy to Railway.app - Step by Step Guide

This guide will walk you through deploying Tanya's Wellness Practice website to Railway.app.

## Prerequisites

- GitHub account
- Railway.app account (sign up at [railway.app](https://railway.app))
- Your Anthropic API key

## Step 1: Prepare Your Repository

1. **Push your code to GitHub** (if not already done)
   ```bash
   git push origin main
   ```

2. **Make sure `.env` is in `.gitignore`** (already done)
   - Never commit API keys to Git!

## Step 2: Create a Railway Project

1. **Go to [railway.app](https://railway.app)**

2. **Click "Start a New Project"**

3. **Choose "Deploy from GitHub repo"**

4. **Select your repository** (`tanya`)

5. **Railway will automatically detect it's a Next.js app**

## Step 3: Add PostgreSQL Database

1. **In your Railway project, click "New Service"**

2. **Select "Database" → "PostgreSQL"**

3. **Railway will provision a PostgreSQL database**

4. **Copy the connection string**:
   - Go to your PostgreSQL service
   - Click "Variables" tab
   - Copy the `DATABASE_URL`

## Step 4: Configure Environment Variables

In your Railway project, go to your Next.js app service:

1. **Click "Variables" tab**

2. **Add these environment variables**:

```env
# Database (automatically provided by Railway)
DATABASE_URL=${{Postgres.DATABASE_URL}}

# NextAuth
NEXTAUTH_URL=https://your-app-name.railway.app
NEXTAUTH_SECRET=your-generated-secret-here

# Anthropic API (use your own key)
ANTHROPIC_API_KEY=sk-ant-api03-your-anthropic-api-key-here

# Stripe (optional for MVP)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret

# Web Search (optional)
TAVILY_API_KEY=your_tavily_key

# Site URL (will be your Railway URL)
NEXT_PUBLIC_SITE_URL=https://your-app-name.railway.app

# Admin Email
ADMIN_EMAIL=tanya@tanyawellness.com
```

### Generate NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

Or use: https://generate-secret.vercel.app/32

### Important Notes:

- **DATABASE_URL**: Use Railway's reference format `${{Postgres.DATABASE_URL}}` to automatically link to your PostgreSQL database
- **NEXTAUTH_URL**: Replace with your actual Railway URL (you'll get this after deployment)
- **ANTHROPIC_API_KEY**: Use the one you provided
- Leave Stripe keys empty if not using payments yet

## Step 5: Update NEXTAUTH_URL After First Deploy

1. **After the first deployment**, Railway will give you a URL like:
   ```
   https://tanya-production-xxxx.up.railway.app
   ```

2. **Update the NEXTAUTH_URL variable** with this URL

3. **Railway will automatically redeploy**

## Step 6: Set Up Database

Railway will automatically run your build, but you need to set up the database schema.

### Option 1: Automatic (Recommended)

Add a postinstall script to your `package.json`:

```json
{
  "scripts": {
    "postinstall": "prisma generate && prisma db push"
  }
}
```

Railway will run this automatically on every deploy.

### Option 2: Manual

Use Railway's CLI:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Run migrations
railway run npm run db:push
```

## Step 7: Deploy

Railway will automatically deploy when you push to GitHub!

```bash
git add .
git commit -m "Configure for Railway deployment"
git push
```

Railway will:
1. Pull your code
2. Install dependencies
3. Build your Next.js app
4. Deploy to production

## Step 8: Custom Domain (Optional)

1. **Go to your Railway project**

2. **Click "Settings"**

3. **Scroll to "Domains"**

4. **Click "Generate Domain"** for a free Railway domain
   OR
   **Click "Custom Domain"** to use your own domain

5. **If using custom domain**, add these DNS records:
   ```
   Type: CNAME
   Name: @ (or www)
   Value: your-app.railway.app
   ```

## Monitoring and Logs

### View Logs

1. Go to your Railway project
2. Click "Deployments"
3. Click on the latest deployment
4. View real-time logs

### Monitor Usage

- Railway dashboard shows:
  - CPU usage
  - Memory usage
  - Network traffic
  - Database size

## Costs

Railway pricing:
- **Free trial**: $5 credit
- **Pro plan**: $5/month + usage
  - ~$0.000463 per GB-hour for compute
  - Database included

For a small wellness website:
- Expected cost: ~$5-15/month
- Scales automatically with traffic

## Troubleshooting

### Build Fails

**Error**: "Module not found"
```bash
# Solution: Clear build cache
# In Railway dashboard: Settings → Reset Build Cache
```

**Error**: "Out of memory"
```json
// Add to next.config.js
module.exports = {
  experimental: {
    outputStandalone: true,
  }
}
```

### Database Connection Issues

**Error**: "Can't reach database"
```bash
# Check DATABASE_URL format
# Should be: ${{Postgres.DATABASE_URL}}
# NOT a hardcoded URL
```

### AI Chat Not Working

1. **Verify Anthropic API key** in Railway variables
2. **Check logs** for API errors
3. **Test API key locally** first

### Fonts Not Loading

Fonts load from Google Fonts CDN - should work fine on Railway.
If issues occur, check that your HTML head has the font links.

## Post-Deployment Checklist

- [ ] Website loads at Railway URL
- [ ] AI chat assistant works
- [ ] Database connection successful
- [ ] No console errors
- [ ] Mobile responsive (test on phone)
- [ ] All environment variables set
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (automatic on Railway)

## Updating Your Deployment

Simply push to GitHub:

```bash
git add .
git commit -m "Your update message"
git push
```

Railway will automatically:
1. Detect the push
2. Build the new version
3. Deploy with zero downtime

## Railway CLI Commands

```bash
# View logs
railway logs

# Open app
railway open

# Run command in production
railway run npm run db:push

# View environment variables
railway vars

# Add environment variable
railway vars set KEY=value

# Link to different project
railway link
```

## Support

- **Railway Docs**: https://docs.railway.app
- **Railway Discord**: https://discord.gg/railway
- **Next.js on Railway**: https://docs.railway.app/guides/nextjs

## Alternative: Quick Deploy Button

Add this to your README for one-click deployment:

```markdown
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/yourusername/tanya)
```

## Security Best Practices

1. ✅ Never commit `.env` file
2. ✅ Use Railway's secret management
3. ✅ Rotate API keys regularly
4. ✅ Use Railway's built-in SSL
5. ✅ Enable Railway's firewall rules
6. ✅ Monitor logs for suspicious activity

## Performance Optimization

1. **Enable caching** in next.config.js
2. **Use Railway's CDN** for static assets
3. **Optimize images** with Next.js Image component
4. **Monitor Prisma queries** for slow database operations

---

🚂 **You're all set! Your wellness website is now live on Railway!** 🧘‍♀️

Need help? Check the Railway docs or reach out to their excellent support team.
