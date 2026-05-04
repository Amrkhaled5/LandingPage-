import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import UnitCards from "@/components/UnitCards";
import Lifestyle from "@/components/Lifestyle";
import Amenities from "@/components/Amenities";
import Finishes from "@/components/Finishes";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <UnitCards />
        <Lifestyle />
        <Amenities />
        <Finishes />
        <ContactForm />
      </main>
      <Footer />

      <FloatingButtons />
      <CookieBanner />
    </>
  );
}
