# ScrollFeed - Quick Setup Guide

## 🚀 Getting Started (5 minutes)

### Step 1: Get Your API Key
1. Visit [https://gnews.io/register](https://gnews.io/register)
2. Sign up with your email
3. Verify your email
4. Copy your API key from the dashboard

### Step 2: Configure the App
Open `src/App.jsx` and replace this line:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

With your actual API key:
```javascript
const API_KEY = 'abc123xyz456yourkeyhere';
```

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

1. **Search** - Use the search bar to filter articles by keyword
2. **Click** - Click any headline to read the full article
3. **Refresh** - Click the refresh button to get the latest news
4. **Dark Mode** - Your system theme is automatically detected
5. **Mobile** - Try it on your phone - it's fully responsive!

## 🔧 Advanced Configuration

### Using Environment Variables (Recommended for production)

Create a `.env` file:
```bash
VITE_GNEWS_API_KEY=your_api_key_here
```

Update `src/App.jsx`:
```javascript
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY || 'YOUR_API_KEY_HERE';
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
- Top headlines from 60+ countries
- Article content and metadata
- Real-time updates

If you need more, check [GNews pricing](https://gnews.io/pricing).

## 🎨 Customization Ideas

- Change the cache duration (currently 15 minutes)
- Add more sources or categories
- Customize colors in `src/App.css`
- Add pagination for more articles
- Implement "save for later" functionality

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GNews API Documentation](https://gnews.io/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

Need help? Open an issue on GitHub!

