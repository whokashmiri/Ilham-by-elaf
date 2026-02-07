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
import RecentWorks from "./components/RecentWorks";
import ImpactSection from "./components/ImpactSection";
import MeditationCreativeFlow from "./components/MeditationCreativeFlow";
import WorkshopFormats from "./components/WorkshopFormats";
import AboutElafShah from "./components/AboutElafShah";
import GetInTouch from "./components/GetInTouch";


export default function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
        <AppBackground>
      <Navbar />
      <Hero />
      {/* <TestimonialsCarousel/> */}
      
      <ServicesSection />
      <RecentWorks/>
      <ImpactSection/>
      <MeditationCreativeFlow/>
      <WorkshopFormats/>
      <AboutElafShah/>
      {/* <ClientBaseCarousel/> */}
      {/* <ResultsCaseStudy/> */}
      {/* <ClientSuccess/> */}
      <PricingSection/>
      {/* <TestimonialsGrid/> */}
      <GetInTouch/>
      </AppBackground>
      <Footer/>
    </main>
  );
}
