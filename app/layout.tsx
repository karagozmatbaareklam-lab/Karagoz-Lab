import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karagöz Matbaa & Reklam Yeni Tema",
  description: "Bergama'da tabela, matbaa, dijital baskı, UV baskı, araç kaplama, lazer ve CNC kesim çözümleri.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
