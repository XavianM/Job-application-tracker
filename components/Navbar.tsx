import { Briefcase, Calendar, Settings, PencilLine } from 'lucide-react';

export default function Navbar() {
  return (
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
  );
}