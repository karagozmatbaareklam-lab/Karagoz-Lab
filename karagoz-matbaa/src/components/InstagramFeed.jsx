import React from 'react';
import styles from './InstagramFeed.module.css';

const igPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600', likes: 124, comments: 12 },
  { id: 2, image: 'https://images.unsplash.com/photo-1588693834169-dcde70da0c76?auto=format&fit=crop&q=80&w=600', likes: 89, comments: 5 },
  { id: 3, image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=600', likes: 256, comments: 34 },
  { id: 4, image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600', likes: 142, comments: 8 },
  { id: 5, image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=600', likes: 67, comments: 2 },
  { id: 6, image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&q=80&w=600', likes: 198, comments: 15 },
];

const InstagramFeed = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Instagram Atölye</h2>
        <p className="section-subtitle">
          Güncel projelerimiz, üretim süreçlerimiz ve atölyemizden özel kesitler için bizi sosyal medya dünyasında takip edin.
        </p>

        <div className={styles.grid}>
          {igPosts.map((post) => (
            <a key={post.id} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.post}>
              <img src={post.image} alt="Instagram Post" loading="lazy" className={styles.image} />
              <div className={styles.overlay}>
                <div className={styles.stats}>
                  <span className={styles.stat}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" width="20" height="20">
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                    </svg>
                    {post.likes}
                  </span>
                  <span className={styles.stat}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" width="20" height="20">
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 22.7 481.1 24 480c0 0 69.1-13.8 127.8-51 32 12.5 66.8 19 104.2 19 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Takip Et
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
