import Header from "@/components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Lifestyle from "@/components/lifestyle";
import Testimonials from "@/components/Testimonials";
import FashionCards from "../components/FashionCards";


export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      <Header/>
      <Hero />
      <Features />
      <Lifestyle/>
      <Testimonials/>
      <FashionCards/>
      <Footer />
    </main>
  );
}
