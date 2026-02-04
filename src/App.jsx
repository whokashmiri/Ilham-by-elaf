import Hero from "./components/Hero";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Navbar from "./components/Navbar";
import AppBackground from "./components/AppBackground";
import ServicesSection from "./components/ServicesSection";
import ClientBaseCarousel from "./components/ClientBaseCarousel";
import ResultsCaseStudy from "./components/ResultsCaseStudy";
import PricingSection from "./components/PricingSection";
import ClientSuccess from "./components/ClientSuccess";
import Footer from "./components/Footer";
import TestimonialsGrid from "./components/TestimonialsGrid";


export default function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
        <AppBackground>
      <Navbar />
      <Hero />
      {/* <TestimonialsCarousel/> */}
      </AppBackground>
      <ServicesSection />
      <ClientBaseCarousel/>
      <ResultsCaseStudy/>
      <ClientSuccess/>
      <PricingSection/>
      <TestimonialsGrid/>
      <Footer/>
    </main>
  );
}
