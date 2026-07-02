import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <img 
              src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800" 
              alt="Matbaa Atölyesi" 
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.experienceBedge}>
              <span className={styles.years}>15+</span>
              <span className={styles.text}>Yıllık<br/>Deneyim</span>
            </div>
          </div>
          <div className={styles.contentCol}>
            <h2 className={styles.title}>Hakkımızda</h2>
            <p className={styles.lead}>
              Karagöz Matbaa & Reklam olarak, markanızın hikayesini en kaliteli materyaller ve kusursuz işçilikle anlatıyoruz.
            </p>
            <p className={styles.text}>
              Sektördeki 15 yılı aşkın deneyimimizle, UV baskıdan kutu harf tabelalara, araç giydirmeden promosyon ürünlerine kadar geniş bir yelpazede hizmet sunuyoruz. Teknolojiyi sanatla harmanlayarak, her bir projeyi markanızın değerine değer katacak şekilde özenle üretiyoruz.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>1500+</h3>
                <p className={styles.statLabel}>Tamamlanan Proje</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>800+</h3>
                <p className={styles.statLabel}>Mutlu Müşteri</p>
              </div>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>%100</h3>
                <p className={styles.statLabel}>Kalite Garantisi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
