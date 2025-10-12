# ScrollFeed - Quick Setup Guide

## 🚀 Getting Started (5 minutes)

### Step 1: Get Your API Key
1. Visit [https://newsapi.org/register](https://newsapi.org/register)
2. Sign up with your email
3. Verify your email
4. Copy your API key from the dashboard

### Step 2: Configure the App
Open `src/App.jsx` (line 27) and replace the API key with your actual key.

**Note:** The demo key is already in place for testing. Replace it with your own key for production use.

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Run the App
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## ✨ Features to Try

1. **Categories** - Switch between World, Tech, Business, Sports, Science, Entertainment, Health
2. **Search** - Use the search bar to filter articles by keyword
3. **Click** - Click any headline to read the full article
4. **Refresh** - Click the refresh button to get the latest news
5. **Dark Mode** - Your system theme is automatically detected
6. **Mobile** - Try it on your phone - it's fully responsive!
7. **Donation** - Support the project via the footer link

## 🔧 Advanced Configuration

### Using Environment Variables (Recommended for production)

Create a `.env` file:
```bash
VITE_NEWSAPI_KEY=your_api_key_here
```

Update `src/App.jsx`:
```javascript
const API_KEY = import.meta.env.VITE_NEWSAPI_KEY || 'YOUR_API_KEY_HERE';
```

This keeps your API key secure and separate from your code.

## 📱 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deploying to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Add your API key as an environment variable
6. Click "Deploy"

That's it! Your app will be live in ~2 minutes.

## 🐛 Troubleshooting

### "Failed to fetch news"
- Check that your API key is correct
- Ensure you haven't exceeded the free tier limit (100 requests/day)
- Check your internet connection

### Articles not showing
- Wait 15 minutes for the cache to expire
- Click the refresh button to force a new fetch
- Check browser console for errors

### Build errors
- Delete `node_modules` and run `npm install` again
- Ensure you're using Node.js 18 or higher

## 📊 API Limits

Free tier includes:
- 100 requests per day
- Top headlines across 7 categories
- Article content and metadata
- Real-time updates
- 50 articles per request

Smart caching means you use fewer API requests:
- Each category is cached for 15 minutes
- Switching between cached categories = 0 API requests
- Typical user might only use 5-10 requests per day!

If you need more, check [NewsAPI pricing](https://newsapi.org/pricing).

## 🎨 Customization Ideas

- Change the cache duration (currently 15 minutes in App.jsx line 46)
- Customize category icons (edit categoryIcons object in App.jsx)
- Change colors in `src/App.css` and `src/DonationPage.css`
- Add more categories (NewsAPI supports: general, business, entertainment, health, science, sports, technology)
- Add pagination for more articles
- Implement "save for later" functionality
- Customize donation page links (edit DonationPage.jsx)

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

Need help? Open an issue on GitHub!

