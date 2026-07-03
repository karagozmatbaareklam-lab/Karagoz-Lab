import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerLayout}>
          <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.logo}>
              <span className={styles.brandName}>KARAGÖZ</span>
              <span className={styles.brandSuffix}>Matbaa & Reklam</span>
            </div>
            <p className={styles.desc}>
              Yenilikçi teknolojilerimiz ve uzman kadromuzla, baskı ve reklam ihtiyaçlarınıza premium çözümler sunuyoruz. Hedefimiz 
              hayallerinizi en yüksek kalitede gerçeğe dönüştürmek.
            </p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/karagozmatbaareklam/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Hızlı Bağlantılar</h4>
            <ul className={styles.links}>
              <li><a href="/">Ana Sayfa</a></li>
              <li><a href="/#services">Hizmetlerimiz</a></li>
              <li><a href="/hakkimizda">Hakkımızda</a></li>
              <li><a href="/#contact">İletişim</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Hizmetlerimiz</h4>
            <ul className={styles.links}>
              <li><a href="/#services">UV Baskı</a></li>
              <li><a href="/#services">Kutu Harf Tabela</a></li>
              <li><a href="/#services">Araç Kaplama</a></li>
              <li><a href="/#services">Dijital Baskı</a></li>
              <li><a href="/#services">Promosyon Ürünler</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Çalışma Saatleri</h4>
            <ul className={styles.links}>
              <li className={styles.hoursRow}>
                <span>Pzt - Cum:</span>
                <span>08:30 - 18:30</span>
              </li>
              <li className={styles.hoursRow}>
                <span>Cumartesi:</span>
                <span>08:30 - 13:00</span>
              </li>
              <li className={`${styles.hoursRow} ${styles.pazar}`}>
                <span>Pazar:</span>
                <span>Kapalı</span>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Karagöz Matbaa & Reklam. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
