# 🚀 Deployment Checklist

## Before Deploying

- [ ] Get Guardian API key from [The Guardian Open Platform](https://open-platform.theguardian.com/access/)
- [ ] Test the app locally with `npm run dev`
- [ ] Test location search with multiple cities
- [ ] Run production build with `npm run build`
- [ ] Test production build with `npm run preview`
- [ ] Verify all features work (location search, articles, refresh)

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
   - Name: `VITE_GUARDIAN_API_KEY`
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
   - Key: `VITE_GUARDIAN_API_KEY`
   - Value: `[your-api-key]`
9. - [ ] Click "Deploy site"
10. - [ ] Wait ~2 minutes for deployment
11. - [ ] Visit your live site!

## Post-Deployment Testing

- [ ] Test the live site on desktop browser
- [ ] Test on mobile device (iOS or Android)
- [ ] Enter a location and verify articles load
- [ ] Try multiple locations (New York, London, Tokyo, etc.)
- [ ] Test the search/filter feature
- [ ] Click an article to verify external links work
- [ ] Test the refresh button
- [ ] Verify dark mode works (if system supports it)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)
- [ ] Check page load speed (should be < 2s)

## Optional: Custom Domain

1. - [ ] Purchase a domain (Namecheap, Google Domains, Cloudflare, etc.)
2. - [ ] In Vercel/Netlify, go to Settings → Domains
3. - [ ] Click "Add Domain"
4. - [ ] Enter your domain name
5. - [ ] Update DNS records (A/CNAME) as instructed
6. - [ ] Wait for DNS propagation (5-30 minutes)
7. - [ ] SSL certificate will be auto-provisioned
8. - [ ] Test your custom domain
9. - [ ] Update GitHub repo description with new URL

## Optional: Analytics & Monitoring

### Vercel Analytics
- [ ] In Vercel dashboard, go to Analytics tab
- [ ] Click "Enable Analytics"
- [ ] Free tier includes 10k events/month

### Google Analytics (if needed)
- [ ] Create a GA4 property
- [ ] Add tracking code to `index.html`
- [ ] Verify tracking in GA dashboard

### Uptime Monitoring
- [ ] Set up [UptimeRobot](https://uptimerobot.com) (free)
- [ ] Add your site URL
- [ ] Configure email alerts
- [ ] Set check interval (5-15 minutes)

## API Usage Monitoring

- [ ] Check your Guardian API dashboard periodically
- [ ] Monitor for any unusual activity
- [ ] Ensure requests are being cached properly
- [ ] Review error logs in deployment platform

## API Information (The Guardian)

**Free Tier Benefits:**
- ✅ No rate limits (fair use policy)
- ✅ Over 2 million articles
- ✅ Global coverage
- ✅ Real-time updates
- ✅ High-quality journalism

**Fair Use Policy:**
- Our caching ensures minimal API usage
- Each location cached for 15 minutes
- Typical user generates very few requests
- Well within fair use guidelines

## Security Checklist

- [ ] API key is NOT in source code ✅
- [ ] Environment variable is set in deployment platform
- [ ] `.env` file is in `.gitignore`
- [ ] No sensitive data in Git history
- [ ] HTTPS is enabled (automatic on Vercel/Netlify)
- [ ] CSP headers configured (optional)

## Troubleshooting

### Build fails
- Check Node.js version (20.19+ or 22.12+)
- Try: `rm -rf node_modules && npm install`
- Check for typos in environment variable names

### API errors on live site
- Verify environment variable is set correctly in deployment platform
- Name must be exactly: `VITE_GUARDIAN_API_KEY`
- Try redeploying after setting variables
- Check deployment logs for errors

### Articles not loading
- Verify Guardian API key is valid
- Check browser console for error messages
- Try different location names
- Ensure API key has appropriate permissions

### Slow performance
- Check Vercel/Netlify analytics
- Verify caching is working (check Network tab)
- Consider enabling CDN (usually automatic)
- Check if location has many results

## Performance Goals

- [ ] First contentful paint: < 1.5s
- [ ] Time to interactive: < 2.5s
- [ ] Lighthouse score: > 90
- [ ] Bundle size: < 100KB gzipped
- [ ] Location search response: < 1s

## Maintenance

### Weekly
- [ ] Check for any reported issues
- [ ] Monitor API usage
- [ ] Review error logs

### Monthly  
- [ ] Check for npm security updates: `npm audit`
- [ ] Update dependencies if needed: `npm update`
- [ ] Test on latest browsers
- [ ] Review and improve documentation

### Quarterly
- [ ] Consider rotating API key
- [ ] Review and optimize performance
- [ ] Update any deprecated packages
- [ ] Consider new features based on feedback

## 🎉 You're Done!

Your ScrollFeed app is now live and ready for the world!

**Share it:**
- Post on social media
- Share with friends and family
- Submit to news aggregator lists
- Write a blog post about your project

**Next Steps:**
- [ ] Add your live URL to README
- [ ] Update GitHub repo description
- [ ] Create a project showcase
- [ ] Consider contributing improvements

---

## 📋 Quick Reference

**Vercel Dashboard:** https://vercel.com/dashboard
**Netlify Dashboard:** https://app.netlify.com
**Guardian API:** https://open-platform.theguardian.com
**GitHub Repo:** https://github.com/SUMMERxKx/ScrollFeed

Enjoy your deployed news reader! 🌍📰
