'use client';
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Görünür Kılan',
    highlight: 'Dış Mekan',
    subtitle: 'Prestiji',
    description: 'Totem tabela, araç giydirme ve cephe tasarımlarıyla markanızı aydınlık ve etkileyici bir görünüme kavuşturuyoruz.',
    image: '/images/slider-outdoor-ferah.png'
  },
  {
    id: 2,
    title: 'Yeni Nesil',
    highlight: 'Dijital Baskı',
    subtitle: 'Zarafeti',
    description: 'UV baskı, folyo ve kanvas dokunuşlarla projelerinizi yüksek kaliteli teknolojinin ferahlığıyla buluşturuyoruz.',
    image: '/images/slider-digital-ferah.png'
  },
  {
    id: 3,
    title: 'Seçkin',
    highlight: 'Kurumsal',
    subtitle: 'Kimlik Estetiği',
    description: 'Özel tasarım kartvizit ve kurumsal dökümanlarla markanıza tertemiz ve profesyonel bir imaj katın.',
    image: '/images/slider-offset-ferah.png'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero" className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <div
            className={`${styles.slideBackground} ${index === currentSlide ? styles.zoomEffect : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={styles.overlay}></div>
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                {slide.title}<br />
                <span className={styles.highlight}>{slide.highlight}</span><br />
                {slide.subtitle}
              </h1>
              <p className={styles.description}>
                {slide.description}
              </p>
              <div className={styles.buttonGroup}>
                <a href="#contact" className="btn btn-primary">Hemen Teklif Al</a>
                <a href="#portfolio" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>İşlerimizi İncele</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide} aria-label="Geri">
        <ChevronLeft size={32} />
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide} aria-label="İleri">
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;