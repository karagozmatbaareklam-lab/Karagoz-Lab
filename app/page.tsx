const services = [
  { no: "01", title: "UV Baskı", text: "Ahşap, cam, metal ve pleksi gibi sert zeminlere yüksek çözünürlüklü ve kalıcı UV baskı uygulamaları." },
  { no: "02", title: "Kutu Harf Tabela", text: "Paslanmaz, pleksi veya alüminyum malzemelerden üretilen ışıklı ve ışıksız kurumsal tabela çözümleri." },
  { no: "03", title: "Araç Kaplama", text: "Binek ve ticari araç filoları için profesyonel cast folyo kaplama ve estetik dijital tasarım hizmeti." },
  { no: "04", title: "Dijital Baskı", text: "İç ve dış mekân için branda, folyo ve one way vision yüksek çözünürlüklü geniş format baskı çözümleri." },
  { no: "05", title: "Ofset Baskı", text: "Kartvizit, broşür, katalog ve kurumsal evrakların yüksek adetli, kaliteli ve hızlı üretimi." },
  { no: "06", title: "Açık Hava Reklam", text: "Totem, pilon, bina giydirme ve reklam panoları ile markanızın görünürlüğünü yükselten uygulamalar." },
  { no: "07", title: "Lazer Kesim", text: "Ahşap ve pleksi malzemelerin milimetrik hassasiyetle kesimi ve estetik desen kazıma işlemleri." },
  { no: "08", title: "Promosyon Ürünleri", text: "Markanızı her an hatırlatacak kalem, ajanda, kupa ve kurumsal hediye çözümleri." },
  { no: "09", title: "Display Sistemleri", text: "Fuar ve organizasyonlar için roll-up, örümcek stand ve hızlı kurulumlu tanıtım sistemleri." },
  { no: "10", title: "Kurumsal Kimlik", text: "Logodan basılı materyallere kadar markanızın tüm görsel dilini bütünlüklü biçimde tasarlıyoruz." },
  { no: "11", title: "Katalog & Broşür", text: "Ürün ve hizmetlerinizi şık biçimde sunan kaliteli kâğıt ve özel baskı teknikli tanıtım materyalleri." },
  { no: "12", title: "Özel Üretim", text: "Mimari projelere ve kreatif fikirlere uygun butik reklam, dekorasyon ve stand çözümleri." },
];

const applications = [
  { image: "/images/services/tabela.png", title: "Kutu Harf & Tabela", tag: "Kurumsal Görünürlük" },
  { image: "/images/services/arac.png", title: "Araç Giydirme", tag: "Mobil Reklam" },
  { image: "/images/services/uv.png", title: "UV Baskı Uygulamaları", tag: "Doğrudan Baskı" },
  { image: "/images/services/outdoor.png", title: "Açık Hava Reklam", tag: "Dış Mekân" },
  { image: "/images/services/dijital.png", title: "Dijital Baskı", tag: "Geniş Format" },
  { image: "/images/services/kurumsal.png", title: "Kurumsal Kimlik", tag: "Marka Tasarımı" },
];

const references = [
  "Altındaş Mutfak", "Meşhur Ciğerci Cihan Usta", "Örenli Kasap", "Bergama İlkler Turizm", "Önder Klima İklimsa",
  "Bergama Şoförler Odası", "Lidya Kuyumculuk", "Bergama Demirciler Odası", "Merkez Eczanesi", "Ayaskent Eczanesi",
  "Emrah Gençoğlu Hair Studio", "Karaosmanoğlu Kasap", "Ala Otomotiv", "Prime Fitness Bergama", "Yusuf Otomotiv",
  "Pilot Garage Bergama", "Atasun Optik Bergama", "Defy", "Mr Sneakers", "Hafız Lokantası", "Bergama Tavuk Evi",
  "Murat Et", "Kilim Düğün & Davet", "Egeoto Ortaklar Hasar Servisi", "Karaman Mühendislik", "Amerikan Kültür Bergama",
  "İkra FK İnşaat ve Dekorasyon", "Beyzade", "Elit Mutfak", "Üçkemer Düğün Salonu", "Kahraman Kardeşler",
  "Güzeloğulları", "Solista Beach", "Proses Özel Eğitim Kurumları",
];

const reviews = [
  { name: "Esat Yıldız", time: "9 ay önce", text: "İlgi, iletişim ve iş teslimindeki titizlikleriyle memnuniyet veren profesyonel bir ekip." },
  { name: "Makbule Paytar", time: "4 yıl önce", text: "Güvenebileceğiniz, özenli çalışan ve beklenenden fazlasını sunan bir işletme." },
  { name: "Gizem Genç", time: "4 yıl önce", text: "İstekleri ön plana koyan, içinize sinene kadar özenle çalışan profesyonel bir işletme." },
  { name: "Çetin Ergül", time: "4 yıl önce", text: "Tasarım alanında yeni ufuklar açan, anlayışlı, özverili ve güvenilir bir firma." },
];

export default function Home() {
  return <main>
    <div className="topline"><div className="shell topline-inner"><span>Profesyonel Baskı ve Reklam Çözümleri</span><div><a href="mailto:karagozmatbaareklam@gmail.com">karagozmatbaareklam@gmail.com</a><a href="tel:05059965917">0 505 996 59 17</a></div></div></div>

    <header className="header"><div className="shell nav-wrap">
      <a className="brand" href="#top" aria-label="Karagöz Matbaa ve Reklam ana sayfa"><img src="/images/logo.png" alt="Karagöz Matbaa & Reklam" /></a>
      <nav className="desktop-nav" aria-label="Ana menü"><a href="#services">Hizmetlerimiz</a><a href="#applications">Uygulamalar</a><a href="#production">Üretim Gücü</a><a href="#references">Referanslar</a><a href="#reviews">Yorumlar</a></nav>
      <a className="button button-small" href="#contact">Teklif Al <span>↗</span></a>
      <details className="mobile-menu"><summary aria-label="Menüyü aç"><span></span><span></span><span></span></summary><nav><a href="#services">Hizmetlerimiz</a><a href="#applications">Uygulamalar</a><a href="#production">Üretim Gücü</a><a href="#references">Referanslar</a><a href="#reviews">Yorumlar</a><a href="#contact">İletişim</a></nav></details>
    </div></header>

    <section className="hero" id="top"><div className="shell hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span></span> MATBAA • TABELA • DİJİTAL BASKI</p><h1>Markanızı<br /><em>görünür</em> kılan<br />çözümler.</h1><p className="hero-lead">Tabela, matbaa, dijital baskı, araç kaplama ve özel üretim süreçlerini tasarımdan uygulamaya tek çatı altında yönetiyoruz.</p><div className="hero-actions"><a className="button" href="#contact">Hemen teklif al <span>↗</span></a><a className="text-link" href="#services">Hizmetlerimizi incele <span>↓</span></a></div><div className="hero-proof"><div><strong>Tasarım + Üretim</strong><span>Fikirden uygulamaya tek ekip</span></div><div><strong>Bergama / İzmir</strong><span>Yerinde keşif ve montaj</span></div></div></div>
      <div className="hero-visual" data-brand="karagoz"><div className="hero-main-image"><img src="/images/slider-outdoor-karagoz.png" alt="Karagöz Matbaa ve Reklam kurumsal dış mekân uygulaması" /></div><div className="hero-mini-card"><span>REKLAM ÇÖZÜMLERİ</span><strong>TABELA • BASKI • UYGULAMA</strong><small>Markanız için bütünlüklü görünürlük.</small></div><div className="hero-stamp"><strong>360°</strong><span>ÜRETİM &<br />UYGULAMA</span></div></div>
    </div></section>

    <section className="trust-strip"><div className="shell trust-grid"><p>Kurumsal ihtiyaçlarınız için:</p><span>UV BASKI</span><i></i><span>KUTU HARF</span><i></i><span>ARAÇ KAPLAMA</span><i></i><span>OFSET BASKI</span></div></section>

    <section className="section services" id="services"><div className="shell"><div className="section-head center-head"><p className="eyebrow"><span></span> HİZMETLERİMİZ</p><h2>İhtiyacınıza uygun<br /><em>profesyonel çözümler.</em></h2><p className="section-intro">İhtiyacınıza uygun yenilikçi, kaliteli ve profesyonel çözümler sunuyoruz. İşimizi sanat gibi işliyoruz.</p></div><div className="service-grid">{services.map(service => <article className="service-card" key={service.no}><span className="service-no">{service.no}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Teklif iste <b>↗</b></a></article>)}</div></div></section>

    <section className="section applications" id="applications"><div className="shell"><div className="section-head split-head"><div><p className="eyebrow"><span></span> UYGULAMA ALANLARI</p><h2>Markanızı her alanda<br />görünür kılıyoruz.</h2></div><p>İç ve dış mekân reklam uygulamalarında tasarımı, doğru malzemeyi ve profesyonel işçiliği bir araya getiriyoruz.</p></div><div className="project-grid">{applications.map((item,index)=><article className={`project-card project-${index+1}`} key={item.title}><div className="project-image"><img src={item.image} alt={item.title}/></div><div className="project-meta"><div><span>{item.tag}</span><h3>{item.title}</h3></div><b>↗</b></div></article>)}</div></div></section>

    <section className="section production" id="production"><div className="shell production-grid"><div className="production-copy"><p className="eyebrow light"><span></span> ÜRETİM GÜCÜ</p><h2>Tasarımı yalnızca<br />çizmiyor, <em>üretiyoruz.</em></h2><p>UV baskıdan CNC ve lazer kesime, geniş format baskıdan tabela uygulamalarına kadar tüm süreci kendi atölyemizde yönetiyoruz.</p><div className="capabilities"><span>UV Flatbed Baskı</span><span>Kutu Harf Tabela</span><span>CO₂ Lazer Kesim</span><span>Dijital Baskı</span><span>Ofset Baskı</span><span>Montaj & Uygulama</span></div><a className="button button-light" href="#contact">Projenizi başlatalım <span>↗</span></a></div><div className="production-images"><img className="production-large" src="/images/production-signage.webp" alt="Tabela üretim alanı"/><img className="production-small" src="/images/production-print.webp" alt="Baskı üretim alanı"/></div></div></section>

    <section className="section references" id="references"><div className="shell"><div className="section-head split-head reference-head"><div><p className="eyebrow"><span></span> REFERANSLARIMIZ</p><h2>Değer kattığımız<br />markalardan bazıları.</h2></div><div className="rating"><strong>5.0</strong><div><span>★★★★★</span><small>Google müşteri değerlendirmesi</small></div></div></div><div className="reference-grid">{references.map(reference=><div key={reference}>{reference}</div>)}</div></div></section>

    <section className="section reviews-section" id="reviews"><div className="shell"><div className="section-head center-head"><p className="eyebrow"><span></span> MÜŞTERİ DENEYİMLERİ</p><h2>İşimizin en güçlü<br /><em>referansı memnuniyet.</em></h2></div><div className="reviews-grid">{reviews.map(review=><article className="review-card" key={review.name}><div className="review-stars">★★★★★</div><p>“{review.text}”</p><div><strong>{review.name}</strong><span>{review.time}</span></div></article>)}</div><a className="google-link" href="https://share.google/z3knlX50t8y03AFEh" target="_blank" rel="noreferrer">Tüm Google yorumlarını incele <b>↗</b></a></div></section>

    <section className="instagram"><div className="shell instagram-grid"><div><p className="eyebrow"><span></span> INSTAGRAM ATÖLYE</p><h2>Üretim süreçlerimizi<br />yakından takip edin.</h2><p>Güncel projelerimiz, üretim süreçlerimiz ve atölyemizden özel kesitler için bizi Instagram&apos;da takip edin.</p><a className="button" href="https://www.instagram.com/karagozmatbaareklam/" target="_blank" rel="noreferrer">Instagram&apos;da takip et <span>↗</span></a></div><div className="instagram-images"><img src="/images/production-corporate.webp" alt="Karagöz Matbaa kurumsal üretim"/><img src="/images/production-custom.webp" alt="Karagöz Matbaa özel üretim"/></div></div></section>

    <section className="contact" id="contact"><div className="shell contact-grid"><div className="contact-copy"><p className="eyebrow light"><span></span> PROJENİZİ BAŞLATALIM</p><h2>Vizyonunuzu<br />gerçeğe <em>dönüştürelim.</em></h2><p>Projenizin ölçüsünü, adetini veya fikrini paylaşın. Size uygun üretim yöntemini ve çözümü birlikte belirleyelim.</p><div className="contact-buttons"><a className="button button-light" href="https://wa.me/905059965917?text=Merhaba%2C%20projem%20i%C3%A7in%20teklif%20almak%20istiyorum." target="_blank" rel="noreferrer">WhatsApp&apos;tan teklif al <span>↗</span></a><a className="outline-button" href="tel:05059965917">Hemen ara</a></div></div><div className="contact-card"><div><span>E-POSTA</span><a href="mailto:karagozmatbaareklam@gmail.com">karagozmatbaareklam@gmail.com</a></div><div><span>ARAMA & WHATSAPP</span><a href="tel:05059965917">0 505 996 59 17</a></div><div><span>ATÖLYE</span><p>İslamsaray Mahallesi 926. Sokak No:5<br/>Bergama / İzmir</p></div><div><span>ÇALIŞMA SAATLERİ</span><p>Hafta içi 08:30–18:30<br/>Cumartesi 08:30–13:00<br/>Pazar kapalı</p></div></div></div></section>

    <footer><div className="shell footer-main"><img src="/images/logo.png" alt="Karagöz Matbaa & Reklam"/><p>Yenilikçi teknolojilerimiz ve uzman kadromuzla baskı ve reklam ihtiyaçlarınıza profesyonel çözümler sunuyoruz.</p><div><a href="#services">Hizmetlerimiz</a><a href="https://www.instagram.com/karagozmatbaareklam/" target="_blank" rel="noreferrer">Instagram</a><a href="#contact">İletişim</a></div></div><div className="shell footer-bottom"><span>© 2026 Karagöz Matbaa & Reklam. Tüm hakları saklıdır.</span><span>Bergama / İzmir</span></div></footer>
    <div className="mobile-actions"><a href="tel:05059965917">Ara</a><a href="https://wa.me/905059965917" target="_blank" rel="noreferrer">WhatsApp</a><a href="#contact">Teklif Al</a></div>
  </main>;
}
