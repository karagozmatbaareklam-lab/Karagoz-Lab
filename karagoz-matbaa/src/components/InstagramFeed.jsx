import React from 'react';
import Script from 'next/script';
import styles from './InstagramFeed.module.css';

const InstagramFeed = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Instagram Atölye</h2>
        <p className="section-subtitle">
          Güncel projelerimiz, üretim süreçlerimiz ve atölyemizden özel kesitler için bizi sosyal medya dünyasında takip edin.
        </p>

        <div className={styles.widgetContainer}>
          <Script 
            src="https://cdn.lightwidget.com/widgets/lightwidget.js" 
            strategy="lazyOnload" 
          />
          <iframe 
            src="https://lightwidget.com/widgets/ecf0ab1dc116583393a9bb7a90309125.html" 
            scrolling="no" 
            allowTransparency={true} 
            className="lightwidget-widget" 
            style={{ width: '100%', border: 0, overflow: 'hidden' }}
          />
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://www.instagram.com/karagozmatbaareklam/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram'da Takip Et
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
