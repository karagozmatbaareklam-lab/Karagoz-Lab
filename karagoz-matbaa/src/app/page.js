import Hero from "@/components/Hero";
import Services from "@/components/Services";
import References from "@/components/References";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      
      <ScrollReveal direction="up" delay={0.1}>
        <Services />
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.1}>
        <References />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <InstagramFeed />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Contact />
      </ScrollReveal>
    </main>
  );
}