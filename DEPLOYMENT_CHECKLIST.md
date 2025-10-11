# 🚀 Deployment Checklist

## Before Deploying

- [ ] Get GNews API key from [gnews.io](https://gnews.io/register)
- [ ] Test the app locally with `npm run dev`
- [ ] Run production build with `npm run build`
- [ ] Test production build with `npm run preview`
- [ ] Verify all features work (search, refresh, click-through)

## Deploy to Vercel (Recommended)

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SUMMERxKx/ScrollFeed)

### Manual Steps
1. - [ ] Go to [vercel.com](https://vercel.com)
2. - [ ] Sign in with GitHub
3. - [ ] Click "Add New" → "Project"
4. - [ ] Import your ScrollFeed repository
5. - [ ] Framework: Vite (auto-detected)
6. - [ ] Build Command: `npm run build`
7. - [ ] Output Directory: `dist`
8. - [ ] Add Environment Variable:
   - Name: `VITE_GNEWS_API_KEY`
   - Value: `[your-api-key]`
9. - [ ] Click "Deploy"
10. - [ ] Wait ~2 minutes for deployment
11. - [ ] Visit your live site!

## Deploy to Netlify

1. - [ ] Go to [netlify.com](https://netlify.com)
2. - [ ] Sign in with GitHub
3. - [ ] Click "Add new site" → "Import an existing project"
4. - [ ] Select your ScrollFeed repository
5. - [ ] Build Command: `npm run build`
6. - [ ] Publish Directory: `dist`
7. - [ ] Click "Advanced" → "New variable"
8. - [ ] Add Environment Variable:
   - Key: `VITE_GNEWS_API_KEY`
   - Value: `[your-api-key]`
9. - [ ] Click "Deploy site"
10. - [ ] Wait ~2 minutes for deployment
11. - [ ] Visit your live site!

## Post-Deployment

- [ ] Test the live site on desktop
- [ ] Test the live site on mobile
- [ ] Try the search feature
- [ ] Test the refresh button
- [ ] Click a few articles to verify links work
- [ ] Check dark/light mode switching
- [ ] Verify caching is working (check Network tab)
- [ ] Test on different browsers (Chrome, Safari, Firefox)

## Optional: Custom Domain

1. - [ ] Purchase a domain (Namecheap, Google Domains, etc.)
2. - [ ] In Vercel/Netlify, go to Settings → Domains
3. - [ ] Click "Add Domain"
4. - [ ] Enter your domain name
5. - [ ] Update DNS records (A/CNAME) as instructed
6. - [ ] Wait for DNS propagation (5-30 minutes)
7. - [ ] SSL certificate will be auto-provisioned
8. - [ ] Test your custom domain

## Optional: Analytics

### Vercel Analytics
- [ ] In Vercel dashboard, go to Analytics tab
- [ ] Click "Enable Analytics"
- [ ] Free tier includes 10k events/month

### Google Analytics
- [ ] Create a GA4 property
- [ ] Add tracking code to `index.html`
- [ ] Verify tracking in GA dashboard

## Optional: PWA Setup

- [ ] Add icon files (`icon-192.png`, `icon-512.png`) to `/public`
- [ ] Test PWA install prompt on mobile
- [ ] Verify offline caching works

## Monitoring

- [ ] Check API usage on [gnews.io](https://gnews.io) dashboard
- [ ] Monitor for any errors in browser console
- [ ] Set up uptime monitoring (UptimeRobot, etc.)

## API Limits (Free Tier)

- 100 requests per day
- Resets at midnight UTC
- Each user request = 1 API call (with 15min cache)
- ~100 unique visitors per day before hitting limit

## Troubleshooting

### Build fails
- Check Node.js version (20.19+ or 22.12+)
- Try: `rm -rf node_modules && npm install`

### API errors
- Verify API key is correct
- Check you haven't exceeded rate limit
- Ensure environment variable is set correctly

### App not loading
- Check browser console for errors
- Verify build completed successfully
- Check deployment logs

## Next Steps

- [ ] Share with friends!
- [ ] Add to your bookmarks/home screen
- [ ] Consider upgrading API plan if needed
- [ ] Customize styling to your preference
- [ ] Add new features (see README for ideas)

---

## 🎉 You're Done!

Your ScrollFeed app is now live and ready to use!

**Live URL:** `https://your-project.vercel.app`

Share it with the world! 🌍

