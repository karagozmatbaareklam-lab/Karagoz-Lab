'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Mail, Phone, Store, Menu, X } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetlerimiz', href: '/#services' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topBarLeft}>
            <span>Profesyonel Baskı ve Reklam Çözümleri</span>
          </div>
          <div className={styles.topBarRight}>
            <a href="mailto:karagozmatbaareklam@gmail.com" className={styles.topBarLink}>
              <Mail size={14} />
              <span>karagozmatbaareklam@gmail.com</span>
            </a>
            <a href="tel:05059965917" className={styles.topBarLink}>
              <Phone size={14} />
              <span>0 505 996 59 17</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/images/logo.png" alt="Karagöz Matbaa & Reklam Logo" className={styles.logoImage} />
            </Link>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <button className={styles.closeMenuBtn} onClick={toggleMenu}>
              <X size={24} />
            </button>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <div className={styles.socialIconsDesktop}>
              <a href="https://www.instagram.com/karagozmatbaareklam/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.google.com/search?q=Karagöz+Matbaa+%26+Reklam" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Google İşletmem">
                <Store size={20} />
              </a>
            </div>
            <Link href="/#contact" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', whiteSpace: 'nowrap', fontWeight: 500 }}>Teklif Al</Link>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
