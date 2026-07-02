import React from 'react';
import styles from './References.module.css';

const references = [
  { id: 1, name: 'Özdemir İnşaat' },
  { id: 2, name: 'Yıldız Lojistik' },
  { id: 3, name: 'Mega Teknoloji' },
  { id: 4, name: 'Anadolu Grup' },
  { id: 5, name: 'Kuzey Mimarlık' },
  { id: 6, name: 'Ege Enerji' },
  { id: 7, name: 'Vista Gayrimenkul' },
  { id: 8, name: 'Pınar Otomotiv' },
  { id: 9, name: 'Zirve Holding' },
  { id: 10, name: 'Akasya Tekstil' },
];

const References = () => {
  // We duplicate the list to create a seamless infinite loop
  const displayReferences = [...references, ...references];

  return (
    <section className={styles.referencesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Değer Kattığımız Referanslarımız</h2>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {displayReferences.map((ref, index) => (
              <div key={`${ref.id}-${index}`} className={styles.refItem}>
                <span className={styles.refName}>{ref.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
