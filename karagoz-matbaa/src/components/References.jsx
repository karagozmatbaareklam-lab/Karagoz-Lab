import React from 'react';
import styles from './References.module.css';

const references = [
  { id: 1, name: 'Bergama Belediyesi' },
  { id: 2, name: 'Bergama Ticaret Odası' },
  { id: 3, name: 'Has Bergama Seyahat' },
  { id: 4, name: 'Akropolis Otel & Cafe' },
  { id: 5, name: 'Kozak Yapı İnşaat' },
  { id: 6, name: 'Ege Eczanesi' },
  { id: 7, name: 'BerKM Kültür Merkezi' },
  { id: 8, name: 'Dikili Belediyesi' },
  { id: 9, name: 'Kınık Belediyesi' },
  { id: 10, name: 'Gözde Optik' },
  { id: 11, name: 'Özgür Mimarlık' },
  { id: 12, name: 'Eren Tarım' },
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
