# ScrollFeed

A minimal, location-based news reader built with React and Vite. Get the latest news from any city or region in the past 2 days.

## Features

- 📍 **Location-based news** - Search any city or region worldwide
- 🕐 **Recent coverage** - Shows news from the past 2 days
- 🆓 **Completely free** - Uses The Guardian API (no rate limits!)
- 🔍 Search and filter articles
- 💾 Smart caching per location for faster load times
- 🌓 Automatic dark/light mode (respects system preferences)
- 📱 Mobile-first, responsive design
- ⚡ Fast and lightweight (~66KB gzipped)
- 🎨 Minimalist design with subtle cityscape header
- 🌍 Global coverage - works for any location

## Why ScrollFeed?

- **Truly free**: The Guardian API has no rate limits for non-commercial use
- **Location-focused**: Perfect for travelers, researchers, or staying informed about specific regions
- **Distraction-free**: Clean interface with no ads or clutter
- **Fast**: Loads in under 1 second, works on any device
- **Privacy-first**: No tracking, no cookies, just news

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SUMMERxKx/ScrollFeed.git
   cd ScrollFeed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your Guardian API key** (Free!)
   - Visit [The Guardian Open Platform](https://open-platform.theguardian.com/access/)
   - Sign up for a free developer key
   - Copy your API key

4. **Configure the API key**
   - Open `src/App.jsx`
   - Find line 14 and replace `YOUR_API_KEY_HERE` with your actual key
   - Or create a `.env` file (recommended, see below)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables (Recommended)

Create a `.env` file in the root directory:

```
VITE_GUARDIAN_API_KEY=your_api_key_here
```

Then update `src/App.jsx` line 14:
```javascript
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY || 'YOUR_API_KEY_HERE';
```

## How to Use

1. Enter a city or region name (e.g., "Vancouver", "London", "Tokyo")
2. Click "Search" to load news from that location
3. Browse articles from the past 2 days
4. Click any article to read the full story
5. Use the search bar to filter results
6. Click refresh to update with latest news

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
   - Name: `VITE_GUARDIAN_API_KEY`
   - Value: Your Guardian API key
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
   - Key: `VITE_GUARDIAN_API_KEY`
   - Value: Your Guardian API key
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
- **API**: The Guardian Open Platform (completely free!)
- **Caching**: localStorage with per-location caching
- **Graphics**: Inline SVG (cityscape)

## Design Philosophy

ScrollFeed embraces "royal minimalism":
- Typography over decoration
- Maximum whitespace and clarity
- System fonts for performance
- Subtle visual elements (minimalist cityscape)
- Clean, timeless aesthetics
- Focus on content, not UI clutter

## Performance

- Bundle size: ~66KB gzipped
- CSS: ~3KB gzipped
- First load: < 1s on 3G
- Cached loads: < 200ms
- Mobile-optimized with touch gestures
- Location-based caching for instant switching

## API Information

**The Guardian Open Platform**
- Completely free for non-commercial use
- No rate limits (fair use policy)
- Global news coverage
- High-quality journalism
- Real-time updates
- Over 2 million articles

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Example Locations to Try

- Major cities: New York, London, Tokyo, Paris, Sydney, Toronto
- Regions: California, Europe, Middle East, Southeast Asia
- Countries: Canada, UK, Japan, Australia, Germany
- Topics: Silicon Valley, Wall Street, Hollywood

## License

MIT

## Credits

News content powered by [The Guardian](https://www.theguardian.com)

---

Built with ❤️ for distraction-free, location-based news reading
