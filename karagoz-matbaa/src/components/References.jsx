import React from 'react';
import styles from './References.module.css';

const references = [
  { id: 1, name: 'ALTINDAŞ MUTFAK' },
  { id: 2, name: 'MEŞHUR CİĞERCİ CİHAN USTA' },
  { id: 3, name: 'ÖRENLİ KASAP' },
  { id: 4, name: 'BERGAMA İLKLER TURİZM' },
  { id: 5, name: 'ÖNDER KLİMA İKLİMSA' },
  { id: 6, name: 'BERGAMA ŞOFÖRLER ODASI' },
  { id: 7, name: 'LİDYA KUYUMCULUK' },
  { id: 8, name: 'BERGAMA DEMİRCİLER ODASI' },
  { id: 9, name: 'MERKEZ ECZANESİ' },
  { id: 10, name: 'AYASKENT ECZANESİ' },
  { id: 11, name: 'EMRAH GENÇOĞLU HAİR STUDIO' },
  { id: 12, name: 'KARAOOSMANOĞLU KASAP' },
  { id: 13, name: 'ALA OTOMOTİV' },
  { id: 14, name: 'PRİME FITNESS BERGAMA' },
  { id: 15, name: 'YUSUF OTOMOTİV' },
  { id: 16, name: 'PİLOT GARAGE BERGAMA' },
  { id: 17, name: 'ATASUN OPTİK BERGAMA' },
  { id: 18, name: 'DEFY' },
  { id: 19, name: 'MR SNEAKERS' },
  { id: 20, name: 'HAFIZ LOKANTASI' },
  { id: 21, name: 'BERGAMA TAVUK EVİ' },
  { id: 22, name: 'MURAT ET' },
  { id: 23, name: 'KİLİM DÜĞÜN & DAVET' },
  { id: 24, name: 'EGEOTO ORTAKLAR HASAR SERVİSİ' },
  { id: 25, name: 'KARAMAN MÜHENDİSLİK - YAPI - İNŞAAT' },
  { id: 26, name: 'AMERİKAN KÜLTÜR YABANCI DİL KURSU BERGAMA' },
  { id: 27, name: 'İKRA FK İNŞAAT VE DEKORASYOON' },
  { id: 28, name: 'BEYZADE' },
  { id: 29, name: 'ELİT MUTFAK' },
  { id: 30, name: 'ÜÇKEMER DÜĞÜN SALONU' },
  { id: 31, name: 'KAHRAMAN KARDEŞLER' },
  { id: 32, name: 'GÜZELOĞULLARI' },
  { id: 33, name: 'SOLİSTA BEACH' },
  { id: 34, name: 'PROSES ÖZEL EĞİTİM KURUMLARI' },
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
