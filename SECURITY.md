# 🔒 Security Best Practices

## API Key Management

**IMPORTANT:** Never commit your API key to GitHub!

### For Development (Local Testing)

You have two options:

#### Option 1: Direct in Code (Quick but less secure)
Replace the placeholder in `src/App.jsx` line 27:
```javascript
const API_KEY = 'your_actual_api_key_here';
```

⚠️ **Warning:** If you do this, never push to GitHub! Keep your key private.

#### Option 2: Environment Variables (Recommended)

1. Create a `.env` file in the project root:
```bash
VITE_NEWSAPI_KEY=your_actual_api_key_here
```

2. Update `src/App.jsx` line 27:
```javascript
const API_KEY = import.meta.env.VITE_NEWSAPI_KEY || 'YOUR_API_KEY_HERE';
```

3. The `.env` file is already in `.gitignore`, so it won't be committed.

### For Production (Deployment)

When deploying to Vercel or Netlify:

1. **DO NOT** hardcode your API key in the source code
2. Add it as an environment variable in the deployment platform:
   - **Vercel:** Settings → Environment Variables → Add
   - **Netlify:** Site Settings → Environment Variables → Add
3. Name: `VITE_NEWSAPI_KEY`
4. Value: Your actual API key

### If You Accidentally Commit Your API Key

If you accidentally push your API key to GitHub:

1. **Immediately regenerate your API key** at [newsapi.org](https://newsapi.org)
2. Update your local code with the new key
3. Remove the old key from Git history (optional but recommended):
   ```bash
   # This is advanced - only if needed
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch src/App.jsx" \
     --prune-empty --tag-name-filter cat -- --all
   ```
4. Force push (only if you're the sole contributor):
   ```bash
   git push origin --force --all
   ```

## General Security Tips

- ✅ Use environment variables for all secrets
- ✅ Keep `.env` in `.gitignore`
- ✅ Use different API keys for development and production
- ✅ Regularly rotate API keys
- ✅ Monitor API usage for suspicious activity
- ❌ Never commit API keys, passwords, or tokens
- ❌ Never share API keys in screenshots or documentation
- ❌ Never log API keys to the console

## Checking for Exposed Secrets

Before pushing to GitHub, always check:
```bash
# Search for potential API keys in your code
grep -r "apiKey\|API_KEY" src/
```

## Rate Limiting

The free NewsAPI tier has a limit of 100 requests/day. To avoid hitting this limit:

- Use the built-in caching (15-minute cache per category)
- Don't spam the refresh button
- Consider upgrading if you need more requests

## Support

If you have questions about security, open an issue on GitHub (but never include your actual API key in the issue!).

---

Stay secure! 🔒

