# Railway Deployment Troubleshooting Guide

## ✅ Fixed Issues

### Issue 1: date-fns Dependency Conflict (RESOLVED)
**Error:**
```
ERESOLVE unable to resolve dependency tree
Found: date-fns@4.1.0
peer date-fns@"^2.28.0 || ^3.0.0" from react-day-picker@8.10.1
```

**Solution:** ✅ Fixed in commit `2513b3a`
- Updated `date-fns` to version `3.6.0`
- Regenerated `package-lock.json`
- This version is compatible with `react-day-picker@8.10.1`

### Issue 2: Prisma Client Not Generated (RESOLVED)
**Solution:** ✅ Fixed in commit `bfca79f`
- Added `postinstall` script: `prisma generate`
- Updated `build` script: `prisma generate && next build`
- Prisma client will now be generated automatically during Railway deployment

## Common Railway Deployment Issues

### 1. Database Connection Fails

**Error:** "Can't connect to database"

**Solutions:**
1. **Use Railway's reference format:**
   ```env
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   ```
   NOT a hardcoded URL!

2. **Check database service is running:**
   - Go to Railway dashboard
   - Verify PostgreSQL service is active
   - Check it's in the same project

3. **Verify environment variable is linked:**
   - In your app's Variables tab
   - Make sure `DATABASE_URL` shows as connected to Postgres

### 2. Build Succeeds But App Crashes

**Error:** "Application failed to respond"

**Check these:**

1. **Verify all environment variables are set:**
   ```env
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   NEXTAUTH_URL=https://your-app.railway.app
   NEXTAUTH_SECRET=<your-secret>
   ANTHROPIC_API_KEY=<your-key>
   NEXT_PUBLIC_SITE_URL=https://your-app.railway.app
   ```

2. **Check Railway logs:**
   - Click "Deployments" tab
   - Click latest deployment
   - Look for error messages in logs

3. **Common errors in logs:**
   - **"Prisma Client not initialized"**: Should be fixed with our postinstall script
   - **"Invalid API key"**: Check ANTHROPIC_API_KEY is correct
   - **"Cannot find module"**: Try redeploying with cache cleared

### 3. AI Chat Doesn't Work

**Symptoms:** Chat button appears but doesn't respond

**Solutions:**

1. **Verify Anthropic API key:**
   ```bash
   # In Railway Variables tab, check:
   ANTHROPIC_API_KEY=sk-ant-api03-your-actual-key-here
   ```

2. **Check API credits:**
   - Go to [console.anthropic.com](https://console.anthropic.com)
   - Verify you have available credits
   - Check usage dashboard

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Common errors:
     - 401: API key invalid
     - 429: Rate limit exceeded
     - 500: Server error

4. **Check Railway logs:**
   - Look for "Anthropic API error" or similar
   - Check for network issues

### 4. Fonts Not Loading

**Symptoms:** Website looks unstyled or uses default fonts

**Solutions:**

1. **Check HTML head is rendering:**
   - View page source
   - Look for Google Fonts links in `<head>`
   - Should see:
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Inter..." />
     ```

2. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

3. **Check CSP headers:**
   - Railway should allow Google Fonts by default
   - If blocked, you'll see errors in browser console

### 5. Pages Load Slowly

**Symptoms:** Long initial load time, white screen

**Solutions:**

1. **Optimize images:**
   - Use Next.js Image component (not implemented yet in MVP)
   - Reduce image sizes

2. **Check Railway region:**
   - Deploy in region closest to users
   - Settings → Change Region

3. **Enable caching:**
   - Already configured in Next.js
   - Check Cache-Control headers in Network tab

### 6. Database Schema Issues

**Error:** "Table does not exist"

**Solutions:**

1. **Run migrations:**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli

   # Login
   railway login

   # Link project
   railway link

   # Push schema
   railway run npx prisma db push
   ```

2. **Or use Prisma Studio via Railway:**
   ```bash
   railway run npx prisma studio
   ```

3. **Check migrations were applied:**
   ```bash
   railway run npx prisma db pull
   ```

### 7. Environment Variable Not Found

**Error:** "Environment variable not found: ANTHROPIC_API_KEY"

**Solutions:**

1. **Add variable in Railway dashboard:**
   - Go to your service
   - Click "Variables" tab
   - Click "New Variable"
   - Add key and value
   - Railway will automatically redeploy

2. **Check variable name spelling:**
   - Must match exactly: `ANTHROPIC_API_KEY`
   - Case-sensitive!

3. **Restart deployment:**
   - Sometimes variables don't apply immediately
   - Trigger new deployment: Settings → Redeploy

### 8. CORS Errors

**Error:** "Access-Control-Allow-Origin" error in browser

**Solutions:**

1. **Update NEXTAUTH_URL:**
   ```env
   NEXTAUTH_URL=https://your-actual-railway-url.railway.app
   ```

2. **Add NEXT_PUBLIC_SITE_URL:**
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-actual-railway-url.railway.app
   ```

3. **Check API routes:**
   - API routes should work on same domain
   - No CORS needed for `/api/*` endpoints

### 9. 404 on All Pages

**Symptoms:** Homepage loads but other pages show 404

**Solutions:**

1. **Check build output:**
   - Look in Railway logs for build errors
   - Verify "Creating an optimized production build" succeeded

2. **Verify Next.js routing:**
   - App directory should be deployed
   - Check Railway logs for "Pages: /" etc.

3. **Try clearing build cache:**
   - Railway dashboard → Settings
   - Click "Reset Build Cache"
   - Redeploy

### 10. Out of Memory During Build

**Error:** "JavaScript heap out of memory"

**Solutions:**

1. **Increase memory limit:**
   - Add to package.json:
     ```json
     "scripts": {
       "build": "NODE_OPTIONS='--max-old-space-size=4096' prisma generate && next build"
     }
     ```

2. **Optimize build:**
   - Remove unused dependencies
   - Check for large files in build

3. **Upgrade Railway plan:**
   - Free tier has limited memory
   - Pro plan provides more resources

## Railway-Specific Commands

```bash
# View logs in real-time
railway logs

# View all environment variables
railway vars

# Add environment variable
railway vars set KEY=value

# Open app in browser
railway open

# Open Railway dashboard
railway

# Run command in production environment
railway run <command>

# Link different project/service
railway link
```

## Debugging Steps

### Step 1: Check Deployment Status
1. Go to Railway dashboard
2. Click "Deployments" tab
3. Look at latest deployment status
4. Check build logs for errors

### Step 2: Verify Environment Variables
1. Click "Variables" tab
2. Ensure all required variables are set:
   - ✅ DATABASE_URL
   - ✅ NEXTAUTH_URL
   - ✅ NEXTAUTH_SECRET
   - ✅ ANTHROPIC_API_KEY
   - ✅ NEXT_PUBLIC_SITE_URL

### Step 3: Check Database Connection
1. Go to PostgreSQL service
2. Click "Data" tab (if available)
3. Or use Railway CLI:
   ```bash
   railway run npx prisma studio
   ```

### Step 4: Test API Endpoints
1. Open browser DevTools
2. Go to Network tab
3. Try loading the site
4. Check for failed API requests
5. Look at response errors

### Step 5: Review Application Logs
1. In Deployments → Click latest
2. Scroll through logs
3. Look for:
   - Error messages
   - Failed database connections
   - Missing environment variables
   - API errors

## Getting Help

### Railway Support
- **Discord**: [discord.gg/railway](https://discord.gg/railway)
- **Docs**: [docs.railway.app](https://docs.railway.app)
- **Community**: Very responsive on Discord

### Debugging Checklist
- [ ] All commits pushed to GitHub
- [ ] Railway project connected to correct repo/branch
- [ ] PostgreSQL database added and running
- [ ] All environment variables configured
- [ ] DATABASE_URL using Railway reference format
- [ ] NEXTAUTH_URL matches your Railway URL
- [ ] ANTHROPIC_API_KEY is correct
- [ ] Build succeeded in Railway dashboard
- [ ] Deployment shows as "Active"
- [ ] Checked application logs for errors
- [ ] Tested site in browser
- [ ] Checked browser console for errors

## Still Having Issues?

### Local Testing
Test locally first to isolate Railway-specific issues:

```bash
# Use .env file
cp .env.example .env
# Add your keys

# Install dependencies
npm install

# Start dev server
npm run dev

# Test at http://localhost:3000
```

If it works locally but not on Railway:
- Compare local .env with Railway variables
- Check for missing environment variables
- Verify Railway is using correct branch

### Contact Information
For this specific project:
- Check `RAILWAY_DEPLOYMENT.md` for deployment guide
- Check `README.md` for full documentation
- Review `MOBILE_RESPONSIVE.md` for mobile issues

## Success Indicators

Your deployment is working when:
- ✅ Railway shows deployment as "Active"
- ✅ Site loads at Railway URL
- ✅ No errors in browser console
- ✅ AI chat button appears and works
- ✅ Pages navigate correctly
- ✅ Fonts load properly
- ✅ Mobile layout works
- ✅ No errors in Railway logs

---

**Most recent fixes applied:**
- ✅ `date-fns` version fixed (v3.6.0)
- ✅ Prisma generate added to build scripts
- ✅ Dependencies resolved
- **Your deployment should now work!**

Try deploying again in Railway - it should succeed now! 🚀
