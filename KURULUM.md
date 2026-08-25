# Karagöz Matbaa & Reklam – Güncel Tema Paketi

Bu paket, güncel kurumsal temanın kaynak dosyalarını ve bütün görsellerini içerir.
Ürün satışı, fiyat, sepet veya e-ticaret bölümü bulunmaz.

## Gereksinimler

- Node.js 22.13 veya daha yeni bir sürüm
- npm
- Linux sunucu

Sürümü kontrol etmek için:

```bash
node -v
npm -v
```

## Güvenli güncelleme

1. Sunucudaki mevcut site klasörünün yedeğini alın.
2. ZIP içindeki dosyaları mevcut projenin ana klasörüne çıkarın ve aynı adlı dosyaların üzerine yazılmasına izin verin.
3. Terminali proje klasöründe açın.
4. Aşağıdaki komutu çalıştırın:

```bash
bash kurulum.sh
```

Bu komut gerekli paketleri temiz biçimde kurar ve üretim sürümünü oluşturur.

## Siteyi yeniden başlatma

Sunucunuzda PM2 kullanılıyorsa mevcut işlem adınızla:

```bash
pm2 restart PROJE_ADI
```

Systemd kullanılıyorsa mevcut servis adınızla:

```bash
sudo systemctl restart SERVIS_ADI
```

Elle çalıştırmak için:

```bash
npm run start
```

## Önemli not

Alan adı, SSL ve sunucu yönlendirmeleri hosting panelinde kalır; bu paket yalnızca sitenin tema ve uygulama dosyalarını günceller. Mevcut sitenizin altyapısı farklıysa, dosyaları yüklemeden önce sunucudaki proje yapısının Node.js/Vinext ile uyumlu olduğunu kontrol edin.

