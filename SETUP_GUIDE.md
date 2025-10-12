# ScrollFeed - Quick Setup Guide

## 🚀 Getting Started (5 minutes)

### Step 1: Get Your Free Guardian API Key
1. Visit [The Guardian Open Platform](https://open-platform.theguardian.com/access/)
2. Click "Register for a developer key"
3. Fill out the form (describe as "personal news reader project")
4. Check your email and copy your API key

**Note:** The Guardian API is completely free with no rate limits for non-commercial use!

### Step 2: Configure the App
Open `src/App.jsx` (line 14) and replace the API key with your actual key.

**Note:** Keep your key private - use `.env` for production (see below).

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

1. **Enter a location** - Type any city or region in the search box
2. **Browse news** - See articles from the past 2 days for that location
3. **Click articles** - Read full stories on The Guardian website
4. **Filter results** - Use the search bar to find specific topics
5. **Try different locations** - Click example cities or type your own
6. **Refresh** - Get the latest updates for your location
7. **Dark mode** - Your system theme is automatically detected
8. **Mobile** - Try it on your phone - fully responsive!

## 🔧 Advanced Configuration

### Using Environment Variables (Recommended for production)

Create a `.env` file:
```bash
VITE_GUARDIAN_API_KEY=your_api_key_here
```

Update `src/App.jsx`:
```javascript
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY || 'YOUR_API_KEY_HERE';
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
5. Add your API key as environment variable: `VITE_GUARDIAN_API_KEY`
6. Click "Deploy"

That's it! Your app will be live in ~2 minutes.

## 🐛 Troubleshooting

### "Failed to fetch news"
- Check that your Guardian API key is correct
- Ensure you have internet connection
- Try a different location name
- Check browser console for detailed errors

### No articles showing
- Try a more specific location (city name instead of country)
- Some locations may have less coverage
- Try popular cities: London, New York, Sydney

### Build errors
- Delete `node_modules` and run `npm install` again
- Ensure you're using Node.js 18 or higher
- Run `npm run build` to see specific errors

## 📊 API Information

**The Guardian Open Platform:**
- ✅ Completely free
- ✅ No rate limits (fair use policy)
- ✅ Over 2 million articles
- ✅ Global coverage
- ✅ High-quality journalism
- ✅ Real-time updates

**Smart Caching:**
- Each location is cached for 15 minutes
- Switching between cached locations = instant load
- Typical user: almost no waiting!

## 🌍 Location Tips

**What works well:**
- City names: "Vancouver", "London", "Tokyo"
- Regions: "Silicon Valley", "Middle East"
- Countries: "Canada", "Australia", "Japan"
- Neighborhoods: "Manhattan", "Westminster"

**What to try:**
- Be specific: "San Francisco" works better than "California"
- Use common names: "New York" instead of "NYC"
- Try variations if no results appear

## 🎨 Customization Ideas

- Change the cache duration (App.jsx line 47: currently 15 minutes)
- Modify the cityscape graphic (App.jsx lines 151-165)
- Adjust colors in `src/App.css` CSS variables
- Change "past 2 days" to more/less (App.jsx line 57)
- Add your own example locations (App.jsx lines 243-247)
- Customize the date range for results

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [The Guardian API Docs](https://open-platform.theguardian.com/documentation/)
- [Vercel Documentation](https://vercel.com/docs)

## 💡 Pro Tips

1. **Bookmark your favorite locations** - The app remembers your last location
2. **Try broad terms** - "Europe", "Asia", "Americas" for regional news
3. **Combine with search** - Enter a location, then filter by topic
4. **Mobile use** - Add to home screen for quick access
5. **Share locations** - Send friends interesting location URLs

## 🌟 Example Searches

Try these to see the power of location-based news:

- **Technology**: "Silicon Valley", "Seattle", "Bangalore"
- **Finance**: "Wall Street", "London", "Hong Kong"
- **Entertainment**: "Hollywood", "Cannes", "Bollywood"
- **Sports**: "Manchester", "Barcelona", "Melbourne"
- **Politics**: "Washington DC", "Brussels", "Ottawa"

---

Need help? Open an issue on GitHub!

Enjoy discovering news from around the world! 🌍
