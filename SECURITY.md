# 🔒 Security Best Practices

## API Key Management

**IMPORTANT:** Never commit your API key to GitHub!

### For Development (Local Testing)

You have two options:

#### Option 1: Direct in Code (Quick but less secure)
Replace the placeholder in `src/App.jsx` line 14:
```javascript
const GUARDIAN_API_KEY = 'your_actual_api_key_here';
```

⚠️ **Warning:** If you do this, never push to GitHub! Keep your key private.

#### Option 2: Environment Variables (Recommended)

1. Create a `.env` file in the project root:
```bash
VITE_GUARDIAN_API_KEY=your_actual_api_key_here
```

2. Update `src/App.jsx` line 14:
```javascript
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY || 'YOUR_API_KEY_HERE';
```

3. The `.env` file is already in `.gitignore`, so it won't be committed.

### For Production (Deployment)

When deploying to Vercel or Netlify:

1. **DO NOT** hardcode your API key in the source code
2. Add it as an environment variable in the deployment platform:
   - **Vercel:** Settings → Environment Variables → Add
   - **Netlify:** Site Settings → Environment Variables → Add
3. Name: `VITE_GUARDIAN_API_KEY`
4. Value: Your actual API key

### If You Accidentally Commit Your API Key

If you accidentally push your API key to GitHub:

1. **Request a new API key** at [The Guardian Open Platform](https://open-platform.theguardian.com/access/)
2. Update your local code with the new key
3. Optionally remove the old key from Git history:
   ```bash
   # Advanced - only if you're concerned about key exposure
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch src/App.jsx" \
     --prune-empty --tag-name-filter cat -- --all
   ```

**Note:** The Guardian API is relatively low-risk since it's free and read-only, but it's still good practice to keep keys private.

## General Security Tips

- ✅ Use environment variables for all API keys
- ✅ Keep `.env` in `.gitignore`
- ✅ Use different API keys for development and production
- ✅ Regularly rotate API keys (every 6-12 months)
- ✅ Monitor API usage for suspicious activity
- ❌ Never commit API keys, passwords, or tokens
- ❌ Never share API keys in screenshots or documentation
- ❌ Never log API keys to the console

## Checking for Exposed Secrets

Before pushing to GitHub, always check:
```bash
# Search for potential API keys in your code
grep -r "apiKey\|API_KEY" src/

# Check what files are staged
git diff --cached

# Search staged files for keys
git diff --cached | grep -i "guardian"
```

## The Guardian API Information

**Good news:** The Guardian API is:
- Free for non-commercial use
- Read-only (can't modify or delete data)
- No rate limits for fair use
- Low security risk compared to payment or data-modification APIs

**However**, you should still:
- Keep your key private (prevents abuse)
- Don't share in public repos
- Use environment variables in production

## Fair Use Policy

The Guardian API has no hard rate limits, but:
- Don't make excessive requests (be reasonable)
- Cache responses when possible (our app does this automatically)
- Don't hammer the API with rapid-fire requests
- Don't use for commercial purposes without permission

Our app is designed for fair use:
- 15-minute cache per location
- Reasonable request frequency
- Non-commercial personal use

## Privacy

ScrollFeed is privacy-focused:
- No user tracking
- No cookies
- No analytics (unless you add them)
- No data collection
- Locations stored only in local browser storage
- All data stays on your device

## Reporting Security Issues

If you find a security vulnerability:
1. **DO NOT** open a public GitHub issue
2. Email the repository owner privately
3. Describe the issue and potential impact
4. Wait for acknowledgment before public disclosure

## Additional Security Measures

### Content Security Policy (CSP)
Consider adding to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self'; 
               style-src 'self' 'unsafe-inline'; 
               connect-src 'self' https://content.guardianapis.com;">
```

### HTTPS Only
Always deploy with HTTPS:
- Vercel and Netlify provide this automatically
- Never serve API keys over HTTP
- Modern browsers enforce HTTPS for security features

### Regular Updates
Keep dependencies updated:
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Audit for security issues
npm audit
```

## Best Practices Checklist

Before deploying:
- [ ] API key is not in source code
- [ ] Using environment variables
- [ ] `.env` is in `.gitignore`
- [ ] Tested build process
- [ ] Verified no keys in commit history
- [ ] HTTPS enabled on deployment
- [ ] Fair use guidelines understood

---

Stay secure and enjoy building with ScrollFeed! 🔒
