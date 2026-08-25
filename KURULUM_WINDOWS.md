# Karagöz Matbaa – Windows Next.js Güncellemesi

Bu paket `karagozmatbaareklam.tr` adresinde çalışan mevcut Next.js yapısına uygun hazırlanmıştır.

## Kurulum sırası

1. Eski siteyi çalıştıran terminal penceresinde `Ctrl + C` tuşlarına basarak çalışan siteyi durdurun.
2. Mevcut proje klasörünün yedeğini alın.
3. Bu ZIP içindeki bütün dosyaları mevcut proje klasörüne çıkarın ve aynı adlı dosyaların üzerine yazın.
4. PowerShell'i proje klasöründe açın.
5. Güncel temayı kurup derleyin:

```powershell
.\kurulum.bat
```

6. Kurulum tamamlandıktan sonra siteyi yeniden başlatın:

```powershell
.\baslat.bat
```

`baslat.bat` ile açılan pencere site yayınlandığı sürece açık kalmalıdır.

## Komutları elle çalıştırma

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run start
```

## PM2 kullanıyorsanız

Eski işlemi kendi işlem adınızla yeniden başlatın:

```powershell
pm2 restart PROJE_ADI
```

## Gereksinim

Node.js 22.13 veya daha yeni bir sürüm gereklidir:

```powershell
node -v
npm.cmd -v
```
