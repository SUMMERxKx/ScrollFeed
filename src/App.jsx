import { useState, useEffect } from 'react';
import './App.css';
import DonationPage from './DonationPage';

// Category icons (emoji-based, zero bandwidth)
const categoryIcons = {
  'world': '🌍',
  'technology': '💻',
  'business': '💼',
  'sports': '⚽',
  'science': '🔬',
  'entertainment': '🎬',
  'health': '🏥'
};

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState('world');
  const [showDonation, setShowDonation] = useState(false);

  // NewsAPI.org - Free tier: 100 requests/day (same as GNews but more reliable)
  // Get your key from: https://newsapi.org/register
  const API_KEY = 'YOUR_API_KEY_HERE';

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check localStorage for cached data per category
      const cacheKey = `scrollfeed_articles_${category}`;
      const cacheTimeKey = `scrollfeed_cache_time_${category}`;
      const cachedData = localStorage.getItem(cacheKey);
      const cacheTime = localStorage.getItem(cacheTimeKey);
      const now = Date.now();
      
      // Use cache if it's less than 15 minutes old and not forcing refresh
      if (!forceRefresh && cachedData && cacheTime && (now - parseInt(cacheTime)) < 900000) {
        setArticles(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      // NewsAPI.org endpoint
      const API_URL = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=50&apiKey=${API_KEY}`;

      // Fetch fresh data
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      
      if (data.status === 'error') {
        throw new Error(data.message || 'API Error');
      }
      
      const fetchedArticles = (data.articles || []).map(article => ({
        ...article,
        // Add category icon to each article
        categoryIcon: categoryIcons[category] || '📰'
      }));
      
      setArticles(fetchedArticles);
      
      // Cache the data per category
      localStorage.setItem(cacheKey, JSON.stringify(fetchedArticles));
      localStorage.setItem(cacheTimeKey, now.toString());
      
      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      setRefreshing(false);
      
      // Try to use any cached data on error
      const cacheKey = `scrollfeed_articles_${category}`;
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        setArticles(JSON.parse(cachedData));
      }
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNews(true);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchTerm(''); // Clear search when changing category
  };

  const filteredArticles = articles.filter(article => {
    if (!article.title) return false;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.source?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (showDonation) {
    return <DonationPage onClose={() => setShowDonation(false)} />;
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div>
            <h1 className="title">📰 ScrollFeed</h1>
            <p className="subtitle">Minimal news reader · Ad-free</p>
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

      {/* Category Selection */}
      <div className="category-bar">
        {Object.keys(categoryIcons).map((cat) => (
          <button
            key={cat}
            className={`category-btn ${category === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            <span className="category-icon">{categoryIcons[cat]}</span>
            <span className="category-label">{cat}</span>
          </button>
        ))}
      </div>

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
                <div className="article-content">
                  <span className="article-category-icon">{article.categoryIcon}</span>
                  <div className="article-text">
                    <h2 className="article-title">{article.title}</h2>
                    {article.description && (
                      <p className="article-description">{article.description}</p>
                    )}
                    <div className="article-meta">
                      <span className="article-source">{article.source?.name || 'Unknown'}</span>
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
          <div className="refresh-indicator">Refreshing...</div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Powered by <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">NewsAPI</a></p>
          <button className="donate-link" onClick={() => setShowDonation(true)}>
            ☕ Support This Project
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
