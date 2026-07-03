'use client';
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.contactLayout}>
          <div className={styles.grid}>
          <div className={styles.formCol}>
            <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>Projenizi Başlatalım</h2>
            <p className={styles.subtitle}>Vizyonunuzu gerçeğe dönüştürmek için ilk adımı atın. Formu doldurun, size özel premium çözümlerimizi sunalım.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Ad Soyad" 
                  className={styles.input} 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Telefon Numaranız" 
                  className={styles.input} 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <select 
                  name="service" 
                  className={styles.input} 
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Hizmet Seçiniz</option>
                  <option value="UV Baskı">UV Baskı</option>
                  <option value="Kutu Harf Tabela">Kutu Harf Tabela</option>
                  <option value="Araç Giydirme">Araç Giydirme</option>
                  <option value="Dijital Baskı">Dijital Baskı</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea 
                  name="message" 
                  placeholder="Mesajınız veya Proje Detayınız" 
                  className={styles.textarea} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', color: '#000' }}>Mesajı Gönder</button>
            </form>
          </div>
          
          <div className={styles.infoCol}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>E-Posta</h4>
                <p className={styles.infoText}>karagozmatbaareklam@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Arama & WhatsApp</h4>
                <p className={styles.infoText}>0 505 996 59 17</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Atölye</h4>
                <p className={styles.infoText}>İslamsaray Mahallesi 926. Sokak No:5<br/>Bergama / İzmir</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.3L11 11.5V6h2v4.5l3.22 1.9-1.01 1.63z"/></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Çalışma Saatleri</h4>
                <p className={styles.infoText}>Hafta İçi: 08:30 - 18:30<br/>Cumartesi: Saat 13:00'a Kadar</p>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12423.834!2d27.17!3d39.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba488!2zQmVyZ2FtYSwgw4B6bWly!5e0!3m2!1str!2str!4v1712950000000!5m2!1str!2str&q=İslamsaray+Mahallesi+926.+Sokak+No:5+Bergama+İzmir" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/905059965917" target="_blank" rel="noopener noreferrer" className={styles.whatsappFloat} aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff">
          <path d="M16.038 1.84h-.012c-7.818 0-14.168 6.35-14.168 14.168 0 2.502.66 4.939 1.91 7.104l-2.028 7.41 7.57-1.986c2.1.1.18 4.606 6.728 4.606h.012c7.818 0 14.168-6.35 14.168-14.168 0-7.817-6.35-14.167-14.167-14.167zm7.55 20.316c-.32.903-1.85 1.737-2.613 1.83-2.146.262-5.467-.624-8.835-4.004-3.414-3.428-4.32-6.726-4.043-8.877.098-.767.95-2.288 1.865-2.6.435-.148.905-.144 1.25.04.288.156.452.4.678 1.01.21.564.71 1.782.844 2.112.188.46.208 1.05-.11 1.547-.197.31-.418.665-.7 1.002-.27.324-.555.602-.236 1.152.316.544 1.405 2.302 3.013 3.73 2.062 1.833 3.86 2.378 4.417 2.668.528.275 1.05.228 1.343-.092.355-.386.99-1.285 1.4-1.826.313-.414.733-.518 1.188-.344.453.172 2.87 1.353 3.364 1.6.495.25.824.372.946.58.12.207.12.87-.2 1.773z" />
        </svg>
      </a>
    </section>
  );
};

export default Contact;
