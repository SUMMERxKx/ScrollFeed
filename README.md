# ScrollFeed

A minimal, elegant news reader built with React and Vite. Features a clean, distraction-free interface inspired by royal minimalism.

## Features

- 📰 Real-time news headlines from NewsAPI
- 🏷️ **NEW:** Category selection (World, Tech, Business, Sports, Science, Entertainment, Health)
- 🎨 **NEW:** Visual category icons for better UX
- 🔍 Search and filter articles
- 💾 Smart caching per category for faster load times
- 🌓 Automatic dark/light mode (respects system preferences)
- 📱 Mobile-first, responsive design
- ⚡ Fast and lightweight (~66KB gzipped)
- ☕ **NEW:** Donation page to support the project
- 🎨 Royal minimalist UI with emoji-based icons (zero bandwidth)

## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd scroll-feed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your NewsAPI key**
   - Visit [https://newsapi.org/register](https://newsapi.org/register)
   - Sign up for a free account (100 requests/day)
   - Copy your API key

4. **Configure the API key**
   - Open `src/App.jsx`
   - Find line 27 and replace the API key with your actual key
   - Or create a `.env` file (see below)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables (Optional)

Create a `.env` file in the root directory:

```
VITE_NEWSAPI_KEY=your_api_key_here
```

Then update `src/App.jsx` to use:
```javascript
const API_KEY = import.meta.env.VITE_NEWSAPI_KEY || 'YOUR_API_KEY_HERE';
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variable:
   - Name: `VITE_NEWSAPI_KEY`
   - Value: Your NewsAPI key
7. Click "Deploy"
8. Your app will be live at `https://your-project.vercel.app`

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Advanced" → "New variable":
   - Key: `VITE_NEWSAPI_KEY`
   - Value: Your NewsAPI key
7. Click "Deploy site"
8. Your app will be live at `https://your-project.netlify.app`

### Custom Domain (Optional)
Both Vercel and Netlify support custom domains:
- Purchase a domain from Namecheap, Google Domains, etc.
- Add domain in your deployment platform's settings
- Update DNS records as instructed
- SSL certificate is automatically provided

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Pure CSS (no frameworks)
- **API**: NewsAPI.org (free tier, 100 req/day)
- **Caching**: localStorage with per-category caching
- **Icons**: Emoji-based (zero bandwidth)

## Design Philosophy

ScrollFeed embraces "royal minimalism":
- Typography over decoration
- Maximum whitespace and clarity
- System fonts for performance
- Clean, timeless aesthetics
- Focus on content, not UI clutter

## Performance

- Bundle size: ~66KB gzipped
- CSS: 2.45KB gzipped
- First load: < 1s on 3G
- Cached loads: < 200ms
- Mobile-optimized with touch gestures
- Category-based caching for better performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

---

Built with ❤️ for distraction-free reading
