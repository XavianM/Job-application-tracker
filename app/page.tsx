import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
{/*import HowItWorks from "@/components/howitworks";
import TrackerSection from "@/components/trackerSection";
import FinalCTA from "@/components/finalCTA";
import Footer from "@/components/footer";*/}
import MovingGradient from "@/components/movingGradient";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <MovingGradient />

      <Navbar />

      <main>
        <Hero />
      </main>

      
    </div>
  );
}