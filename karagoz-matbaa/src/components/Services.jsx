import React from 'react';
import styles from './Services.module.css';
import { 
  Zap, 
  Box, 
  Truck, 
  Printer, 
  Layers, 
  Map, 
  Scissors, 
  Gift, 
  Monitor, 
  Briefcase, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: 'UV Baskı',
    desc: 'Ahşap, cam, metal ve pleksi gibi sert zeminlere yüksek çözünürlüklü ve kalıcı UV baskı uygulamaları.',
    icon: <Zap size={32} strokeWidth={1.5} />,
    bg: '/images/services/uv.png'
  },
  {
    id: 2,
    title: 'Kutu Harf Tabela',
    desc: 'Paslanmaz, pleksi veya alüminyum malzemelerden üretilen ışıklı ve ışıksız kurumsal tabela çözümleri.',
    icon: <Box size={32} strokeWidth={1.5} />,
    bg: '/images/services/tabela.png'
  },
  {
    id: 3,
    title: 'Araç Kaplama',
    desc: 'Binek ve ticari araç filolarınız için profesyonel cast folyo kaplama ve estetik dijital tasarım hizmeti.',
    icon: <Truck size={32} strokeWidth={1.5} />,
    bg: '/images/services/arac.png'
  },
  {
    id: 4,
    title: 'Dijital Baskı',
    desc: 'İç ve dış mekan için branda, folyo ve one way vision yüksek çözünürlüklü geniş format baskı çözümleri.',
    icon: <Printer size={32} strokeWidth={1.5} />,
    bg: '/images/services/dijital.png'
  },
  {
    id: 5,
    title: 'Ofset Baskı',
    desc: 'Kartvizit, broşür, katalog ve kurumsal evrakların yüksek adetli, kaliteli ve hızlı üretim merkezi.',
    icon: <Layers size={32} strokeWidth={1.5} />,
    bg: '/images/services/ofset.png'
  },
  {
    id: 6,
    title: 'Açık Hava Reklam',
    desc: 'Totem, pilon, bina giydirme ve dev reklam panoları ile markanızın görünürlüğünü zirveye taşıyoruz.',
    icon: <Map size={32} strokeWidth={1.5} />,
    bg: '/images/services/outdoor.png'
  },
  {
    id: 7,
    title: 'Lazer Kesim',
    desc: 'Ahşap ve pleksi malzemelerin milimetrik hassasiyetle kesimi ve estetik desen kazıma işlemleri.',
    icon: <Scissors size={32} strokeWidth={1.5} />,
    bg: '/images/services/lazer.png'
  },
  {
    id: 8,
    title: 'Promosyon Ürünleri',
    desc: 'Markanızı her an hatırlatacak kalem, ajanda, kupa ve teknolojik kurumsal hediye koleksiyonu.',
    icon: <Gift size={32} strokeWidth={1.5} />,
    bg: '/images/services/promosyon.png'
  },
  {
    id: 9,
    title: 'Display Sistemleri',
    desc: 'Fuar ve organizasyonlar için roll-up, örümcek stand ve hızlı kurulumlu tanıtım sistemleri.',
    icon: <Monitor size={32} strokeWidth={1.5} />,
    bg: '/images/services/display.png'
  },
  {
    id: 10,
    title: 'Kurumsal Kimlik',
    desc: 'Logonuzdan tüm basılı materyallerinize kadar markanızın tüm görsel dilini baştan tasarlıyoruz.',
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    bg: '/images/services/kimlik.png'
  },
  {
    id: 11,
    title: 'Katalog & Broşür',
    desc: 'Ürünlerinizi en şık şekilde sunacak kaliteli kağıt ve özel baskı teknikli tanıtım materyalleri.',
    icon: <BookOpen size={32} strokeWidth={1.5} />,
    bg: '/images/services/editorial.png'
  },
  {
    id: 12,
    title: 'Özel Üretim',
    desc: 'Mimari projelerinize veya kreatif fikirlerinize uygun butik reklam ve stand çözümleri üretiyoruz.',
    icon: <Sparkles size={32} strokeWidth={1.5} />,
    bg: '/images/services/ozel.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Hizmetlerimiz</h2>
        <p className="section-subtitle">
          İhtiyacınıza uygun yenilikçi, kaliteli ve profesyonel çözümler sunuyoruz. İşimizi sanat gibi işliyoruz.
        </p>

        <div className={styles.grid}>
          {servicesList.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardBg} style={{ backgroundImage: `url(${service.bg})` }}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
              <div className={styles.cardHoverBar}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
