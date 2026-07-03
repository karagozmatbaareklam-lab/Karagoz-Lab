import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://www.karagozmatbaareklam.tr'),
  title: {
    default: "Karagöz Matbaa & Tabela | Bergama Reklam & Baskı Çözümleri",
    template: "%s | Karagöz Matbaa & Reklam"
  },
  description: "Bergama, Dikili, Kınık ve çevresinde premium matbaa, reklam, tabela ve UV baskı hizmetleri. Kutu harf tabela, araç kaplama ve kurumsal tanıtım çözümleri.",
  keywords: [
    "bergama matbaa", "bergama tabela", "bergama reklam", "bergama dijital baskı",
    "dikili tabela", "kınık matbaa", "dikili reklam", "bergama araç kaplama",
    "bergama kartvizit", "izmir tabela", "uv baskı bergama", "kutu harf bergama",
    "bergama afiş baskı", "bergama broşür", "reklam tabela bergama", "matbaacı bergama"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Karagöz Matbaa & Tabela | Bergama Reklam & Baskı Çözümleri",
    description: "Bergama, Dikili, Kınık ve çevresinde premium matbaa, reklam, tabela ve UV baskı çözümleri.",
    url: "https://www.karagozmatbaareklam.tr",
    siteName: "Karagöz Matbaa & Reklam",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Karagöz Matbaa & Reklam",
    "image": "https://www.karagozmatbaareklam.tr/images/logo.png",
    "@id": "https://www.karagozmatbaareklam.tr",
    "url": "https://www.karagozmatbaareklam.tr",
    "telephone": "+905059965917",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İslamsaray Mahallesi 926. Sokak No:5",
      "addressLocality": "Bergama",
      "addressRegion": "İzmir",
      "postalCode": "35700",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.1171,
      "longitude": 27.1782
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:30",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/karagozmatbaareklam/"
    ]
  };

  return (
    <html lang="tr" className={`${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
