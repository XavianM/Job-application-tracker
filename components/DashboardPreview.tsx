// components/DashboardPreview.tsx
import { 
  Briefcase, 
  Send, 
  Users, 
  Trophy, 
  Search, 
  Plus, 
  MoreHorizontal, 
  Building2, 
  MapPin, 
  DollarSign 
} from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="w-full">
      <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-xl shadow-neutral-200/40 overflow-hidden">
        
        {/* Dashboard Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-100 flex flex-wrap items-center justify-between gap-4 bg-neutral-50/50">
          <div>
            <h2 className="text-base font-semibold text-neutral-900">Application Pipeline</h2>
            <p className="text-xs text-neutral-500">Manage and track your active job opportunities</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={14} />
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="pl-8 pr-3 py-1.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/5"
                readOnly
              />
            </div>
            <button className="flex items-center gap-1.5 bg-neutral-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors">
              <Plus size={14} />
              <span>Add Job</span>
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-neutral-100 bg-neutral-50/30">
          <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
              <Briefcase size={18} />
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-medium">Total Applied</p>
              <p className="text-lg font-bold text-neutral-900">24</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
              <Send size={18} />
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-medium">In Progress</p>
              <p className="text-lg font-bold text-neutral-900">8</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-purple-50 text-purple-600 rounded-lg">
              <Users size={18} />
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-medium">Interviews</p>
              <p className="text-lg font-bold text-neutral-900">3</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
              <Trophy size={18} />
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-medium">Offers</p>
              <p className="text-lg font-bold text-neutral-900">1</p>
            </div>
          </div>
        </div>

        {/* Kanban Board Layout */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FBFBFC]">
          
          {/* Column 1: Applied */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h3 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Applied (2)
                </h3>
              </div>
              <MoreHorizontal size={14} className="text-neutral-400 cursor-pointer" />
            </div>

            {/* Card 1 */}
            <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-neutral-900">Senior Frontend Dev</span>
                <span className="text-[10px] font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">New</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                <Building2 size={12} />
                <span>Vercel</span>
                <span className="text-neutral-300">•</span>
                <MapPin size={12} />
                <span>Remote</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px] text-neutral-400">
                <span className="flex items-center gap-1"><DollarSign size={11} /> 140k - 160k</span>
                <span>2d ago</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-neutral-900">Product Designer</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                <Building2 size={12} />
                <span>Figma</span>
                <span className="text-neutral-300">•</span>
                <MapPin size={12} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px] text-neutral-400">
                <span className="flex items-center gap-1"><DollarSign size={11} /> 150k - 175k</span>
                <span>4d ago</span>
              </div>
            </div>
          </div>

          {/* Column 2: Interviewing */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <h3 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Interviewing (1)
                </h3>
              </div>
              <MoreHorizontal size={14} className="text-neutral-400 cursor-pointer" />
            </div>

            {/* Card 1 */}
            <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow ring-1 ring-purple-100">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-neutral-900">Fullstack Engineer</span>
                <span className="text-[10px] font-medium bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">Round 2</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                <Building2 size={12} />
                <span>Stripe</span>
                <span className="text-neutral-300">•</span>
                <MapPin size={12} />
                <span>Remote</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px] text-purple-600 font-medium">
                <span>System Design Interview</span>
                <span>Tomorrow</span>
              </div>
            </div>
          </div>

          {/* Column 3: Offer */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Offer Received (1)
                </h3>
              </div>
              <MoreHorizontal size={14} className="text-neutral-400 cursor-pointer" />
            </div>

            {/* Card 1 */}
            <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow ring-1 ring-emerald-100">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-neutral-900">Lead UI/UX Engineer</span>
                <span className="text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">Offer</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                <Building2 size={12} />
                <span>Linear</span>
                <span className="text-neutral-300">•</span>
                <MapPin size={12} />
                <span>Remote</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px] text-emerald-600 font-semibold">
                <span>$165,000 / yr</span>
                <span>Expires in 3d</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}