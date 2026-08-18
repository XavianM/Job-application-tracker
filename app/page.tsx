// app/page.tsx
import NavBar from '@/components/Navbar';
import HeroHeader from '@/components/HeroHeader';
import DashboardPreview from '@/components/DashboardPreview';
import StatWheel from '@/components/StatWheel';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9FB] text-neutral-900 font-sans antialiased">
      {/* 1. Header Navigation */}
      <NavBar />

      {/* 2. Main Page Content */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24 space-y-20">
        {/* Hero Section (Headlines + How It Works) */}
        <HeroHeader />

        {/* Dashboard Preview */}
        <DashboardPreview />

        {/* Stats Wheel */}
        <StatWheel />
      </main>
    </div>
  );
}