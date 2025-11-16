# Deployment Guide - Vercel

## Pre-Deployment Checklist

### 1. Environment Variables Setup

Copy `.env.example` to `.env.local` and fill in production values:

```bash
cp .env.example .env.local
```

**Required Variables:**

- `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., https://yourdomain.com)
- `NEXT_PUBLIC_API_URL` - Your API endpoint
- `API_SECRET_KEY` - Backend API secret
- Additional variables as needed

### 2. Code Quality Check

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format

# Run all checks
npm run test
```

### 3. Build Test

```bash
# Clean build
rm -rf .next

# Install dependencies
npm install

# Build
npm run build

# Test production build locally
npm run start
```

Visit http://localhost:3000 and verify everything works.

---

## Deployment Steps

### Step 1: Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: Initial production deployment"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**

2. **Sign in with GitHub**

3. **Click "New Project"**

4. **Import your repository:**
   - Select your GitHub repository
   - Click "Import"

5. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

6. **Add Environment Variables:**
   Click "Environment Variables" and add each variable from your `.env.local`:

   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://your-project.vercel.app (or custom domain)
   Environments: Production, Preview, Development
   ```

   Add all other required variables:
   - NEXT_PUBLIC_API_URL
   - API_SECRET_KEY
   - etc.

7. **Deploy:**
   - Click "Deploy"
   - Wait 2-5 minutes for build
   - Check build logs for errors

8. **Get Deployment URL:**
   - Deployment URL: `https://your-project.vercel.app`
   - Visit and test the site

### Step 3: Custom Domain (Optional)

1. **Add Domain:**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `globaltradedata.com`)

2. **Configure DNS:**

   **Option A - Vercel Nameservers (Recommended):**
   - Copy Vercel nameservers from dashboard
   - Update at your domain registrar
   - Wait for DNS propagation (up to 48 hours)

   **Option B - A/CNAME Records:**
   - Add A record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`

3. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - Wait for "Certificate Valid" status

4. **Redirects:**
   - Configure www → non-www (or vice versa)
   - Settings → Domains → Redirect

---

## Post-Deployment Validation

### Immediate Checks

```bash
# Test production URL
curl -I https://your-domain.com

# Check SSL
curl -I https://your-domain.com | grep SSL
```

### Critical Tests

- [ ] Homepage loads
- [ ] No console errors
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Search functionality works
- [ ] Images load correctly
- [ ] Mobile responsive

### Performance Tests

1. **Google PageSpeed Insights:**
   - Visit: https://pagespeed.web.dev/
   - Enter your URL
   - Target scores: 90+ mobile, 95+ desktop

2. **Lighthouse (Chrome DevTools):**
   - Open DevTools → Lighthouse
   - Run audit
   - Check all 4 categories

### SEO Setup

1. **Google Search Console:**
   - Visit: https://search.google.com/search-console
   - Add property (your domain)
   - Verify ownership
   - Submit sitemap: `https://your-domain.com/sitemap.xml`

2. **Schema Validation:**
   - https://search.google.com/test/rich-results
   - Enter your URL
   - Verify structured data

---

## Continuous Deployment

Vercel automatically redeploys when you push to main:

```bash
# Make changes
git add .
git commit -m "feat: your changes"
git push origin main

# Vercel automatically deploys
```

### Branch Previews

Every pull request gets a preview URL:

- Create branch: `git checkout -b feature/new-feature`
- Push: `git push origin feature/new-feature`
- Create PR on GitHub
- Vercel creates preview URL

---

## Monitoring & Analytics

### 1. Vercel Analytics (Built-in)

- Go to Project → Analytics
- Monitor:
  - Page views
  - Top pages
  - User location
  - Devices
  - Core Web Vitals

### 2. Google Analytics 4

Add to environment variables:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Error Tracking (Sentry)

```bash
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs
```

Add to environment:

```
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### 4. Uptime Monitoring

Use services like:

- Vercel monitoring (built-in)
- UptimeRobot (free tier available)
- Pingdom

---

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies
3. Test locally: `npm run build`

### Site Not Loading

1. Check Vercel status: https://www.vercel-status.com/
2. Verify DNS configuration
3. Check SSL certificate status
4. Review function logs

### Slow Performance

1. Run Lighthouse audit
2. Check bundle size: `npm run analyze`
3. Optimize images
4. Review lazy loading
5. Check API response times

---

## Rollback

If deployment has issues:

1. **In Vercel Dashboard:**
   - Go to Deployments
   - Find last working deployment
   - Click "..." → "Promote to Production"

2. **Via Git:**
   ```bash
   git revert HEAD
   git push origin main
   ```

---

## Environment-Specific Settings

### Development

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Production

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## Security Best Practices

1. **Never commit:**
   - `.env.local`
   - API keys
   - Secrets
   - Credentials

2. **Use environment variables for:**
   - API endpoints
   - API keys
   - Feature flags
   - Sensitive data

3. **Enable security headers:**
   - Already configured in `next.config.js`
   - HTTPS enforced by Vercel

4. **Regular updates:**
   ```bash
   npm audit
   npm audit fix
   npm update
   ```

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Community:** https://github.com/vercel/next.js/discussions
- **Vercel Support:** https://vercel.com/support

---

**Deployment completed!** 🎉

Your site is now live at: `https://your-domain.com`
