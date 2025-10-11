import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  // GNews API - You'll need to get your own API key from https://gnews.io/
  const API_KEY = 'YOUR_API_KEY_HERE';
  const API_URL = `https://gnews.io/api/v4/top-headlines?lang=en&token=${API_KEY}`;

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check localStorage for cached data
      const cachedData = localStorage.getItem('scrollfeed_articles');
      const cacheTime = localStorage.getItem('scrollfeed_cache_time');
      const now = Date.now();
      
      // Use cache if it's less than 15 minutes old and not forcing refresh
      if (!forceRefresh && cachedData && cacheTime && (now - parseInt(cacheTime)) < 900000) {
        setArticles(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      // Fetch fresh data
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      const fetchedArticles = data.articles || [];
      
      setArticles(fetchedArticles);
      
      // Cache the data
      localStorage.setItem('scrollfeed_articles', JSON.stringify(fetchedArticles));
      localStorage.setItem('scrollfeed_cache_time', now.toString());
      
      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      setRefreshing(false);
      
      // Try to use any cached data on error
      const cachedData = localStorage.getItem('scrollfeed_articles');
      if (cachedData) {
        setArticles(JSON.parse(cachedData));
      }
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNews(true);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.source.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div>
            <h1 className="title">ScrollFeed</h1>
            <p className="subtitle">Minimal news reader</p>
          </div>
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
        </div>
      </header>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search headlines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <main className="main">
        {loading && !articles.length && (
          <div className="feed">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="article-card skeleton">
                <div className="skeleton-title"></div>
                <div className="skeleton-meta"></div>
              </div>
            ))}
          </div>
        )}

        {error && !articles.length && !loading && (
          <div className="error">
            <p>Unable to fetch news. Please check your API key.</p>
            <button onClick={() => fetchNews(true)} className="retry-btn">Retry</button>
          </div>
        )}

        {!loading && filteredArticles.length === 0 && articles.length > 0 && (
          <div className="no-results">No articles match your search.</div>
        )}

        {articles.length > 0 && (
          <div className="feed">
            {filteredArticles.map((article, index) => (
              <article 
                key={index} 
                className="article-card"
                onClick={() => window.open(article.url, '_blank')}
              >
                <h2 className="article-title">{article.title}</h2>
                <div className="article-meta">
                  <span className="article-source">{article.source.name}</span>
                  <span className="article-divider">·</span>
                  <span className="article-date">{formatDate(article.publishedAt)}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        {refreshing && articles.length > 0 && (
          <div className="refresh-indicator">Refreshing...</div>
        )}
      </main>

      <footer className="footer">
        <p>Powered by <a href="https://gnews.io" target="_blank" rel="noopener noreferrer">GNews</a></p>
      </footer>
    </div>
  );
}

export default App;
