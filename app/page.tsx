import ImageDisplay from "@/components/ImageDisplay";
import HeroVideoSlider from "@/components/HeroVideoSlider";
import Navbar from "@/components/Navbar";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import UniquelyBottled from "@/components/UniquelyBottled";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-white">
      <Navbar />
      <HeroVideoSlider />
      <ImageDisplay />
      <UniquelyBottled />
      <QuoteSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
