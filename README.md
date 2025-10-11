# ScrollFeed

A minimal, elegant news reader built with React and Vite. Features a clean, distraction-free interface inspired by royal minimalism.

## Features

- 📰 Real-time news headlines from GNews API
- 🔍 Search and filter articles
- 💾 Local caching for faster load times
- 🌓 Automatic dark/light mode (respects system preferences)
- 📱 Mobile-first, responsive design
- ⚡ Fast and lightweight
- 🎨 Royal minimalist UI

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

3. **Get your GNews API key**
   - Visit [https://gnews.io](https://gnews.io)
   - Sign up for a free account (100 requests/day)
   - Copy your API key

4. **Configure the API key**
   - Open `src/App.jsx`
   - Replace `YOUR_API_KEY_HERE` with your actual API key
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
VITE_GNEWS_API_KEY=your_api_key_here
```

Then update `src/App.jsx` to use:
```javascript
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Add your API key as an environment variable
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Import your repository at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy!

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Pure CSS (no frameworks)
- **API**: GNews.io
- **Caching**: localStorage

## Design Philosophy

ScrollFeed embraces "royal minimalism":
- Typography over decoration
- Maximum whitespace and clarity
- System fonts for performance
- Clean, timeless aesthetics
- Focus on content, not UI clutter

## Performance

- Bundle size: < 150KB gzipped
- First load: < 1s on 3G
- Cached loads: < 200ms
- Mobile-optimized with touch gestures

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

---

Built with ❤️ for distraction-free reading
