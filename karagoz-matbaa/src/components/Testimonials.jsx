'use client';
import React, { useRef } from 'react';
import styles from './Testimonials.module.css';

const reviews = [
  { id: 1, name: 'ESAT YILDIZ', text: 'Karagöz Reklam Bergama ile çalışmak gerçekten çok memnun ediciydi. Gerek ilgi ve alakaları, gerekse iş teslimindeki titizlikleri sayesinde tüm süreci gönül rahatlığıyla yürüttüm. İhtiyacım olan baskı ve tabela işlerim için iletişime geçeceğim tek adres.', rating: 5, date: '9 ay önce' },
  { id: 2, name: 'Makbule PAYTAR', text: 'Sonuna kadar güvenebileceğiniz çok özenli ve titiz çalışan bir işletme. Beklenenden fazlasını yapıyorlar :) Samimiyetleriyle kendimizi çok rahat hissettiğimiz bir çekim oldu. Her şey çok güzeldi elinize emeğinize sağlık :) kesinlikle herkese tavsiye ediyorum, şüphe etmeyin..', rating: 5, date: '4 yıl önce' },
  { id: 3, name: 'Gizem Genç', text: 'Son derece özenli çalışan, istekleri ön plana koyan, içinize sinip istediğiniz olana kadar uğraşan profesyonel bir işletme. Çalışmalarından ve tasarımlarından çok memnun kaldım.', rating: 5, date: '4 yıl önce' },
  { id: 4, name: 'Çetin Ergül', text: 'Tasarım alanında size yeni ufuklar açabilecek anlayışlı özverili bir firma. Kerem beye sonuna kadar güvenilirsiniz çünkü sizin işinize kendi işi gibi sahip çıkabileceğinden emin olabilirsiniz 👍', rating: 5, date: '4 yıl önce' },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% of visible width
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="section-title" style={{ margin: 0 }}>Müşteri Deneyimleri</h2>
            <a href="https://share.google/z3knlX50t8y03AFEh" target="_blank" rel="noopener noreferrer" className={styles.googleRating} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <span className={styles.score}>5.0 / 5</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} fill="#fbbc05" width="20" height="20" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <span className={styles.reviewCount} style={{ textDecoration: 'underline' }}>Google'da değerlendirmeleri gör</span>
            </a>
          </div>
          <div className={styles.controls}>
            <button className={styles.controlBtn} onClick={() => scroll('left')} aria-label="Önceki">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button className={styles.controlBtn} onClick={() => scroll('right')} aria-label="Sonraki">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        </div>

        <div className={styles.sliderContainer} ref={scrollRef}>
          <div className={styles.sliderTrack}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.avatar}>{review.name.charAt(0)}</div>
                    <div>
                      <h4 className={styles.name}>{review.name}</h4>
                      <div className={styles.meta}>
                        <span className={styles.starsSmall}>
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} fill="#fbbc05" width="14" height="14" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </span>
                        <span className={styles.date}>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.text}>"{review.text}"</p>
                  <div className={styles.googleIcon}>
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
