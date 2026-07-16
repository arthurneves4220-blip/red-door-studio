import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Location />
        <Gallery />
        <Testimonials />
        <Instagram />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
