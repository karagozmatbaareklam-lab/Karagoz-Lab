import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Karagöz Matbaa & Reklam | Profesyonel Baskı Çözümleri",
  description: "Karagöz Matbaa & Reklam, yüksek kaliteli UV baskı, kutu harf tabela, araç kaplama ve kurumsal tanıtım hizmetleri sunar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${montserrat.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
