import { useState, useEffect } from 'react';
import './DonationPage.css';

function DonationPage({ onClose }) {
  const [stats, setStats] = useState({
    articlesServed: 0,
    categoriesAvailable: 7,
    apiRequestsToday: 0,
    dailyLimit: 100
  });

  useEffect(() => {
    // Calculate stats from localStorage
    const categories = ['world', 'technology', 'business', 'sports', 'science', 'entertainment', 'health'];
    let totalArticles = 0;
    
    categories.forEach(cat => {
      const cached = localStorage.getItem(`scrollfeed_articles_${cat}`);
      if (cached) {
        totalArticles += JSON.parse(cached).length;
      }
    });

    setStats(prev => ({
      ...prev,
      articlesServed: totalArticles
    }));
  }, []);

  return (
    <div className="donation-page">
      <div className="donation-container">
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
        
        <div className="donation-header">
          <h1 className="donation-title">☕ Support ScrollFeed</h1>
          <p className="donation-subtitle">Keep this app ad-free and independent</p>
        </div>

        <div className="donation-message">
          <p>
            ScrollFeed is a passion project built to provide a clean, distraction-free 
            news reading experience. If you enjoy using this app and want to help keep 
            it running, consider buying me a coffee! ☕
          </p>
          <p>
            Your support helps cover API costs and motivates continued development of 
            new features while keeping the app completely free and ad-free for everyone.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{stats.articlesServed}+</div>
            <div className="stat-label">Articles Cached</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.categoriesAvailable}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{stats.dailyLimit}</div>
            <div className="stat-label">Daily API Limit</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100%</div>
            <div className="stat-label">Ad-Free</div>
          </div>
        </div>

        <div className="donation-buttons">
          <a 
            href="https://www.buymeacoffee.com/scrollfeed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="donate-btn primary"
          >
            <span className="btn-icon">☕</span>
            <span>Buy Me a Coffee</span>
          </a>
          
          <a 
            href="https://ko-fi.com/scrollfeed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="donate-btn secondary"
          >
            <span className="btn-icon">💖</span>
            <span>Support on Ko-fi</span>
          </a>
          
          <a 
            href="https://github.com/SUMMERxKx/ScrollFeed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="donate-btn tertiary"
          >
            <span className="btn-icon">⭐</span>
            <span>Star on GitHub</span>
          </a>
        </div>

        <div className="donation-footer">
          <p className="footer-note">
            🙏 Even if you can't donate, sharing ScrollFeed with friends or starring 
            the project on GitHub means the world!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;

