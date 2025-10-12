import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  // The Guardian API - Completely FREE with no rate limits for non-commercial use!
  // Get your key from: https://open-platform.theguardian.com/access/
  const GUARDIAN_API_KEY = 'YOUR_API_KEY_HERE';

  useEffect(() => {
    // Load saved location from localStorage
    const savedLocation = localStorage.getItem('scrollfeed_location');
    if (savedLocation) {
      setLocation(savedLocation);
      setInputLocation(savedLocation);
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetchNews();
    }
  }, [location]);

  const fetchNews = async (forceRefresh = false) => {
    if (!location) return;

    try {
      setLoading(true);
      setError(null);
      
      // Check localStorage for cached data
      const cacheKey = `scrollfeed_articles_${location.toLowerCase()}`;
      const cacheTimeKey = `scrollfeed_cache_time_${location.toLowerCase()}`;
      const cachedData = localStorage.getItem(cacheKey);
      const cacheTime = localStorage.getItem(cacheTimeKey);
      const now = Date.now();
      
      // Use cache if it's less than 15 minutes old and not forcing refresh
      if (!forceRefresh && cachedData && cacheTime && (now - parseInt(cacheTime)) < 900000) {
        setArticles(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      // Calculate date for last 2 days
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const fromDate = twoDaysAgo.toISOString().split('T')[0];

      // The Guardian API endpoint with location search
      const API_URL = `https://content.guardianapis.com/search?q=${encodeURIComponent(location)}&from-date=${fromDate}&page-size=50&show-fields=headline,thumbnail,trailText,shortUrl&order-by=newest&api-key=${GUARDIAN_API_KEY}`;

      // Fetch fresh data
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      
      if (data.response.status === 'error') {
        throw new Error(data.response.message || 'API Error');
      }
      
      const fetchedArticles = (data.response.results || []).map(article => ({
        title: article.webTitle,
        description: article.fields?.trailText || '',
        url: article.webUrl,
        publishedAt: article.webPublicationDate,
        source: {
          name: article.sectionName || 'The Guardian'
        },
        urlToImage: article.fields?.thumbnail || null
      }));
      
      setArticles(fetchedArticles);
      
      // Cache the data
      localStorage.setItem(cacheKey, JSON.stringify(fetchedArticles));
      localStorage.setItem(cacheTimeKey, now.toString());
      
      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      setRefreshing(false);
      
      // Try to use any cached data on error
      const cacheKey = `scrollfeed_articles_${location.toLowerCase()}`;
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        setArticles(JSON.parse(cachedData));
      }
    }
  };

  const handleRefresh = () => {
    if (!location) return;
    setRefreshing(true);
    fetchNews(true);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (inputLocation.trim()) {
      const trimmedLocation = inputLocation.trim();
      setLocation(trimmedLocation);
      localStorage.setItem('scrollfeed_location', trimmedLocation);
      setSearchTerm(''); // Clear search when changing location
    }
  };

  const filteredArticles = articles.filter(article => {
    if (!article.title) return false;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.description || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays === 2) return '2 days ago';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="app">
      {/* Minimalist header graphic */}
      <div className="header-graphic">
        <svg viewBox="0 0 1200 100" className="cityscape">
          <rect x="50" y="40" width="80" height="60" className="building" />
          <rect x="150" y="20" width="70" height="80" className="building" />
          <rect x="240" y="50" width="60" height="50" className="building" />
          <rect x="320" y="30" width="90" height="70" className="building" />
          <rect x="430" y="45" width="75" height="55" className="building" />
          <rect x="525" y="25" width="65" height="75" className="building" />
          <rect x="610" y="35" width="80" height="65" className="building" />
          <rect x="710" y="50" width="70" height="50" className="building" />
          <rect x="800" y="20" width="85" height="80" className="building" />
          <rect x="905" y="40" width="75" height="60" className="building" />
          <rect x="1000" y="30" width="80" height="70" className="building" />
          <rect x="1100" y="45" width="70" height="55" className="building" />
        </svg>
      </div>

      <header className="header">
        <div className="header-content">
          <div>
            <h1 className="title">📍 ScrollFeed</h1>
            <p className="subtitle">Local news reader · Last 2 days</p>
          </div>
          {location && (
            <button 
              onClick={handleRefresh} 
              className="refresh-btn"
              disabled={loading || refreshing}
              aria-label="Refresh news"
            >
              <svg 
                className={refreshing ? 'refresh-icon spinning' : 'refresh-icon'} 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* Location Input */}
      <div className="location-section">
        <form onSubmit={handleLocationSubmit} className="location-form">
          <div className="location-input-wrapper">
            <span className="location-icon">📍</span>
            <input
              type="text"
              className="location-input"
              placeholder="Enter city or region (e.g., Vancouver, London, Tokyo)"
              value={inputLocation}
              onChange={(e) => setInputLocation(e.target.value)}
            />
            <button 
              type="submit" 
              className="location-submit-btn"
              disabled={!inputLocation.trim()}
            >
              {location ? 'Update' : 'Search'}
            </button>
          </div>
        </form>
        {location && (
          <div className="current-location">
            <span className="location-badge">
              Currently showing: <strong>{location}</strong>
            </span>
          </div>
        )}
      </div>

      {/* Search Bar */}
      {articles.length > 0 && (
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Filter articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <main className="main">
        {!location && !loading && (
          <div className="welcome-message">
            <div className="welcome-icon">🌍</div>
            <h2>Welcome to ScrollFeed</h2>
            <p>Enter your city or region above to see the latest local news from the past 2 days.</p>
            <div className="example-locations">
              <p className="example-label">Try these locations:</p>
              <div className="example-buttons">
                {['New York', 'London', 'Tokyo', 'Paris', 'Sydney'].map(city => (
                  <button
                    key={city}
                    className="example-btn"
                    onClick={() => {
                      setInputLocation(city);
                      setLocation(city);
                      localStorage.setItem('scrollfeed_location', city);
                    }}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {loading && !articles.length && (
          <div className="feed">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="article-card skeleton">
                <div className="skeleton-title"></div>
                <div className="skeleton-description"></div>
                <div className="skeleton-meta"></div>
              </div>
            ))}
          </div>
        )}

        {error && !articles.length && !loading && (
          <div className="error">
            <p>Unable to fetch news for "{location}". Please try a different location or check your API key.</p>
            <button onClick={() => fetchNews(true)} className="retry-btn">Retry</button>
          </div>
        )}

        {!loading && filteredArticles.length === 0 && articles.length > 0 && (
          <div className="no-results">No articles match your search.</div>
        )}

        {!loading && articles.length === 0 && location && !error && (
          <div className="no-results">
            <p>No recent news found for "{location}".</p>
            <p className="suggestion">Try a different location or check back later.</p>
          </div>
        )}

        {articles.length > 0 && (
          <div className="feed">
            {filteredArticles.map((article, index) => (
              <article 
                key={index} 
                className="article-card"
                onClick={() => window.open(article.url, '_blank')}
              >
                <div className="article-content">
                  <div className="article-text">
                    <h2 className="article-title">{article.title}</h2>
                    {article.description && (
                      <p className="article-description">{article.description}</p>
                    )}
                    <div className="article-meta">
                      <span className="article-source">{article.source?.name || 'The Guardian'}</span>
                      <span className="article-divider">·</span>
                      <span className="article-date">{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {refreshing && articles.length > 0 && (
          <div className="refresh-indicator">Refreshing {location}...</div>
        )}
      </main>

      <footer className="footer">
        <p>Powered by <a href="https://www.theguardian.com" target="_blank" rel="noopener noreferrer">The Guardian</a></p>
        <p className="footer-note">Free & open-source news reader</p>
      </footer>
    </div>
  );
}

export default App;
