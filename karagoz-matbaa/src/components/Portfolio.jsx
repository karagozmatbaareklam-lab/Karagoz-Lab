'use client';
import React, { useState } from 'react';
import styles from './Portfolio.module.css';

const portfolioItems = [
  { id: 1, title: 'Işıklı Kutu Harf Tabela', category: 'Tabela', image: 'https://images.unsplash.com/photo-1599339088619-20f78dccc4fe?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Binek Araç Kaplama', category: 'Araç Kaplama', image: 'https://images.unsplash.com/photo-1621213032549-b3a5b3a886b6?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Pleksi Üzeri UV Baskı', category: 'UV Baskı', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Totem Tabela', category: 'Tabela', image: 'https://images.unsplash.com/photo-1542382103-ba4b14dcd295?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Ticari Araç Giydirme', category: 'Araç Kaplama', image: 'https://images.unsplash.com/photo-1554342872-034a06541bad?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Ahşap UV Baskı', category: 'UV Baskı', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['Tümü', 'Tabela', 'Araç Kaplama', 'UV Baskı'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedImage, setSelectedImage] = useState(null);

  const filterItems = activeCategory === 'Tümü' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Nitelikli İşlerimiz</h2>
        <p className="section-subtitle">
          Zanaat ve teknolojiyi birleştirerek hayata geçirdiğimiz prestijli projelerimizi keşfedin.
        </p>

        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filterItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem} onClick={() => setSelectedImage(item.image)}>
              <img src={item.image} alt={item.title} loading="lazy" className={styles.image} />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.zoomIcon}>
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>&times;</button>
          <img src={selectedImage} alt="Large Image" className={styles.lightboxImage} />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
