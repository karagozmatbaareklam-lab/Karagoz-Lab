import About from '@/components/About';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Hakkımızda | Bergama Reklam Tabela, Matbaa ve Baskı Atölyesi",
  description: "Yenilikçi makine parkurumuz ve uzman ekibimizle Bergama, Dikili, Kınık ve çevre bölgelerde matbaa, reklam tabela ve dijital baskı hizmeti sunuyoruz.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <ScrollReveal direction="up" delay={0.1}>
        <About />
      </ScrollReveal>
    </main>
  );
}
