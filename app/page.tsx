
import { Briefcase, Calendar, Settings, PencilLine } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9FB] text-neutral-900 font-sans antialiased">
      {/* Navigation Header */}
      <header className="w-full max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 font-bold text-lg tracking-tight">
          <div className="w-6 h-6 bg-black flex items-center justify-center rounded-[2px]">
            <PencilLine size={14} color="white" />
          </div>
          <span>JobTrace</span>
        </div>

        {/* Center Nav Links */}
        <nav className="flex items-center gap-8 text-sm font-medium text-neutral-700">
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
            <Briefcase size={16} />
            <span>Applications</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
            <Calendar size={16} />
            <span>Calendar</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
            <Settings size={16} />
            <span>Settings</span>
          </a>
        </nav>

        {/* CTA Button */}
        <div>
          <button className="bg-[#FF6B00] hover:bg-[#E05E00] text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm">
            Log in
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24">
        {/* Hero Headlines */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-[84px] leading-[0.95] tracking-tight font-normal text-neutral-900 mb-8">
            The go to place to <br />
            track your applications
          </h1>
          <p className="font-serif text-2xl text-neutral-700 max-w-xl leading-relaxed">
            Stay on top of every application, interview, and deadline — all from one beautifully organized dashboard.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mt-28">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF6B00]">
              HOW IT WORKS
            </span>
          </div>

          <div className="flex items-stretch justify-between gap-4 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex-1 bg-[#FDCB92] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm text-neutral-900 mb-2">
                  Track your applications
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Add every role, source, and deadline in one focused place.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center px-2">
              <div className="w-8 h-[2px] bg-neutral-900" />
            </div>

            {/* Step 2 */}
            <div className="flex-1 bg-[#FFE3C5] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm text-neutral-900 mb-2">
                  Stay in the loop
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Monitor interviews, notes, and progress with a clear next step.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center px-2">
              <div className="w-8 h-[2px] bg-neutral-900" />
            </div>

            {/* Step 3 */}
            <div className="flex-1 bg-[#FDCB92] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm text-neutral-900 mb-2">
                  Connect your inbox
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Pull in updates automatically and keep every opportunity moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}