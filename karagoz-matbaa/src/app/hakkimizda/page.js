import About from '@/components/About';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Hakkımızda | Karagöz Matbaa & Reklam",
  description: "15 yılı aşkın tecrübemizle matbaa ve reklam sektöründe öncü çözümler sunuyoruz.",
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
