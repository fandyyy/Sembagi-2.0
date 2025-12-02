import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CAPTAINS, CO_CAPTAINS, KORWILS, TEACHERS } from '../constants';
import { MapPin, Quote, Zap, Search, XCircle, Crown, MessageCircle, Shield, Award, TrendingUp, Medal, ChevronUp, ChevronDown, Trophy, User, ArrowRight, ArrowLeft, Target, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

const useReveal = (dependency?: any) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
        const elements = document.querySelectorAll('.reveal-up');
        elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
        observer.disconnect();
        clearTimeout(timer);
    };
  }, [dependency]);
};

export const CoreTeam: React.FC = () => {
  useReveal();

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800" id="tim_inti">
      <div className="absolute inset-0 opacity-40 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold tracking-widest uppercase mb-4 border border-violet-200 dark:border-violet-700/50">
            <Zap size={14} className="fill-violet-700 dark:fill-violet-300" />
            Tim Inti
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Kapten <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Sembagi</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Para inovator pendidikan yang mendedikasikan keahlian digital mereka untuk membangun ekosistem berbagi yang berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAPTAINS.map((person, idx) => (
            <div 
              key={idx} 
              className="group relative h-[380px] reveal-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/60 dark:shadow-slate-950/50 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-violet-200/50 dark:group-hover:shadow-violet-900/30 border border-slate-100 dark:border-slate-700 isolate transform-gpu"></div>
              <div className="relative h-full flex flex-col items-center pt-8 pb-8 px-6">
                <div className="relative w-36 h-36 mb-6">
                  <div className="absolute inset-[-8px] border-2 border-dashed border-violet-300 dark:border-violet-600 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full rounded-full p-1 bg-white dark:bg-slate-800 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500 isolate transform-gpu">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-1.5 rounded-full shadow-lg border-[3px] border-white dark:border-slate-800 z-10 group-hover:scale-110 transition-transform duration-300">
                    <Zap size={14} fill="currentColor" />
                  </div>
                </div>
                <div className="text-center w-full">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{person.name}</h3>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">{person.role}</p>
                  <div className="w-12 h-1 bg-slate-100 dark:bg-slate-700 mx-auto mb-6 rounded-full group-hover:bg-violet-200 dark:group-hover:bg-violet-800 transition-colors duration-300"></div>
                  <a 
                    href="https://wa.me/62"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300 shadow-sm group-hover:shadow-violet-200 dark:group-hover:shadow-violet-900/50 reveal-up"
                  >
                    <MessageCircle size={16} />
                    Hubungi
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SupportTeam: React.FC = () => {
  const [showAllCoCaptains, setShowAllCoCaptains] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoCaptains = useMemo(() => searchTerm.trim() === ''
    ? CO_CAPTAINS
    : CO_CAPTAINS.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.area.toLowerCase().includes(searchTerm.toLowerCase())
      ), [searchTerm]);

  const visibleCoCaptains = useMemo(() => (showAllCoCaptains || searchTerm !== '') 
    ? filteredCoCaptains 
    : filteredCoCaptains.slice(0, 8), [showAllCoCaptains, searchTerm, filteredCoCaptains]);

  useReveal(visibleCoCaptains);

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative" id="co_kapten">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-100/50 dark:bg-violet-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8 reveal-up">
          <div className="max-w-2xl">
            <span className="text-violet-600 dark:text-violet-400 font-bold tracking-widest text-xs uppercase mb-2 block flex items-center gap-2">
              <Shield size={14} /> Tim Support
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Co-Kapten <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Kapanewon</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Tim yang turut mengawal implementasi dan membantu penanganan kendala akun Sembagi di setiap Kapanewon.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow sm:flex-grow-0 min-w-[300px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="Cari Nama atau Kapanewon..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm font-medium text-slate-700 dark:text-slate-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <XCircle size={16} />
                    </button>
                )}
            </div>
            {/* Updated Indicator: Darker bg in light mode + Green-500 dot */}
            <div className="px-5 py-3 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-3 whitespace-nowrap">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{filteredCoCaptains.length} Co-Kapten</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {visibleCoCaptains.map((person, idx) => (
            <div 
              key={`${person.name}-${idx}`}
              className="group bg-white dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/50 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal-up flex flex-col gap-4 isolate transform-gpu"
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 w-full">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-600 shadow-sm isolate transform-gpu">
                            <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight line-clamp-2 mb-0.5">{person.name}</h4>
                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Co-Kapten</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between gap-2">
                     <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-2 py-1.5 rounded-lg flex-1">
                        <MapPin size={12} className="shrink-0 text-violet-500" />
                        <span className="leading-tight">{person.area}</span>
                     </div>
                     <a 
                        href="https://wa.me/62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all shadow-sm shrink-0"
                        title="Hubungi via WhatsApp"
                    >
                        <MessageCircle size={16} />
                    </a>
                </div>
            </div>
          ))}
        </div>

        {filteredCoCaptains.length === 0 && (
            <div className="text-center py-12">
                <p className="text-slate-500 dark:text-slate-400">Tidak ada Co-Kapten yang cocok dengan pencarian Anda.</p>
                <button onClick={() => setSearchTerm('')} className="mt-2 text-violet-600 hover:underline text-sm font-bold">Reset Pencarian</button>
            </div>
        )}

        {searchTerm === '' && (
          <div className="flex justify-center reveal-up pt-4">
            <button 
              onClick={() => setShowAllCoCaptains(!showAllCoCaptains)}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:border-violet-300 dark:hover:border-violet-700 text-slate-600 dark:text-slate-300 font-bold text-sm transition-all active:scale-95 group"
            >
              {showAllCoCaptains ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Co-Kapten'}
              {showAllCoCaptains ? (
                <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export const RegionalSupport: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const filteredKorwils = useMemo(() => searchTerm.trim() === '' 
    ? KORWILS 
    : KORWILS.filter((person) => 
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.role.toLowerCase().includes(searchTerm.toLowerCase())
      ), [searchTerm]);

  useReveal(filteredKorwils);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = 300;
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
  };

  // Redesigned Card: Modern Gradient Accent Style (3:4 Ratio)
  const RegionalCard = ({ person }: { person: any }) => {
    const isKorwil = person.role === 'Korwil';
    
    return (
      <div className="group relative aspect-[3/4] w-full cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 isolate transform-gpu">
        {/* Image */}
        <img 
            src={person.image} 
            alt={person.name} 
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Modern Gradient Overlay - Bottom Only (1/2 height, smooth transition) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-500"></div>
        
        {/* Creative Modern Badge */}
        <div className="absolute top-4 right-4 z-20">
             <div className={`relative px-3 py-1.5 overflow-hidden rounded-lg backdrop-blur-md border flex items-center gap-1.5 shadow-lg ${
                isKorwil
                ? 'bg-slate-900/40 border-violet-400/50 text-white'
                : 'bg-slate-900/40 border-orange-400/50 text-white'
             }`}>
                {/* Background Gradient Shine */}
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-r ${
                    isKorwil ? 'from-violet-400 to-fuchsia-400' : 'from-orange-400 to-amber-400'
                }`}></div>
                
                {/* Icon */}
                {isKorwil ? <MapPin size={10} className="fill-current text-violet-400" /> : <Shield size={10} className="fill-current text-orange-400" />}
                
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 text-[10px] font-bold uppercase tracking-wider relative z-10 leading-none">
                    {person.role}
                </span>
             </div>
        </div>

        {/* Content Area */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            {/* Animated Accent Line */}
            <div className={`w-8 group-hover:w-16 h-1 rounded-full mb-3 transition-all duration-500 ${
                isKorwil ? 'bg-violet-500' : 'bg-orange-500'
            }`}></div>

            <h3 className="text-lg font-bold text-white mb-1 leading-tight drop-shadow-md">
                {person.name}
            </h3>
            
            <div className="flex items-center gap-2 text-slate-300 text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
               <MapPin size={12} className={isKorwil ? 'text-violet-400' : 'text-orange-400'} />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-fuchsia-200 font-bold">{person.area}</span>
            </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500 group/section" id="korwil">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <div className="reveal-up space-y-3 flex-1">
            <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-200 dark:border-cyan-700/50">
              Dukungan Wilayah
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Pengawas & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Koordinator Wilayah</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
              Mengenal lebih dekat para pendamping satuan pendidikan yang mengayomi 17 Kapanewon.
            </p>
          </div>
          
          <div className="relative w-full lg:w-auto min-w-[300px] reveal-up shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Search size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Cari Nama atau Kapanewon..." 
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-sm font-medium text-slate-700 dark:text-slate-200 font-light"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      <XCircle size={16} />
                  </button>
              )}
          </div>
        </div>

        {/* Carousel / Grid Logic with added Padding to prevent crop */}
        {searchTerm === '' ? (
            <div className="relative group/carousel">
                 {/* Modern Navigation Arrows (Only on Fine Pointer / Non-Touch) */}
                 <button 
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden [@media(pointer:fine)]:flex items-center justify-center w-12 h-12 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/50 dark:border-slate-700 text-slate-900 dark:text-white rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:scale-110"
                    aria-label="Scroll left"
                 >
                    <ChevronLeft size={24} />
                 </button>
                 <button 
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden [@media(pointer:fine)]:flex items-center justify-center w-12 h-12 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/50 dark:border-slate-700 text-slate-900 dark:text-white rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:scale-110"
                    aria-label="Scroll right"
                 >
                    <ChevronRightIcon size={24} />
                 </button>

                <div 
                    ref={scrollContainerRef}
                    className="relative -mx-4 px-4 pt-4 pb-12 overflow-x-auto hide-scrollbar flex gap-6 snap-x snap-mandatory scroll-smooth"
                >
                     {filteredKorwils.map((person, idx) => (
                        <div key={idx} className="snap-center shrink-0 w-[240px] md:w-[280px] reveal-up" style={{ transitionDelay: `${idx * 50}ms` }}>
                            <RegionalCard person={person} />
                        </div>
                     ))}
                     <div className="snap-center shrink-0 w-8"></div> {/* Right spacer */}
                </div>
            </div>
        ) : (
             <>
                {filteredKorwils.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in zoom-in duration-500 pt-12 pb-12">
                        {filteredKorwils.map((person, idx) => (
                             <RegionalCard key={idx} person={person} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                         <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-4">
                            <Search size={32} />
                         </div>
                         <p className="text-slate-500 dark:text-slate-400 font-medium">Tidak ditemukan hasil untuk "{searchTerm}"</p>
                    </div>
                )}
             </>
        )}

      </div>
    </section>
  );
};

export const Leaderboard: React.FC = () => {
    // Sort teachers by points descending
    const sortedTeachers = [...TEACHERS].sort((a, b) => b.points - a.points);

    useReveal();

    return (
        <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden" id="leaderboard">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-orange-100/40 dark:from-orange-900/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold tracking-widest uppercase mb-6 border border-orange-200 dark:border-orange-700/50 animate-bounce">
                        <Trophy size={14} />
                        Leaderboard
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        Guru <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Teraktif Hari Ini</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Apresiasi bagi pendidik yang aktif berbagi dan/atau memanfaatkan Sembagi.
                    </p>
                </div>

                {/* Horizontal Gallery Layout */}
                <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-4 lg:min-h-[460px]">
                    {sortedTeachers.map((teacher, idx) => {
                        const rank = idx + 1;
                        const isFirst = rank === 1;
                        
                        // Revised dimensions for better responsiveness (90% scale applied)
                        return (
                            <div 
                                key={idx}
                                className={`group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border transition-all duration-500 ease-out hover:-translate-y-2 flex-shrink-0 isolate transform-gpu
                                    ${isFirst 
                                        ? 'w-full md:w-[275px] lg:w-[259px] h-[400px] md:h-[450px] lg:h-[389px] shadow-2xl shadow-orange-500/30 border-orange-500 z-10 order-first lg:order-3' 
                                        : 'w-full sm:w-[calc(50%-12px)] md:w-[243px] lg:w-[211px] h-[350px] md:h-[400px] lg:h-[324px] shadow-xl border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700'
                                    }
                                    ${rank === 2 ? 'lg:h-[356px] lg:order-2' : ''}
                                    ${rank === 3 ? 'lg:h-[356px] lg:order-4' : ''}
                                    ${rank === 4 ? 'lg:h-[324px] lg:order-1' : ''}
                                    ${rank === 5 ? 'lg:h-[324px] lg:order-5' : ''}
                                `}
                            >
                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    <img 
                                        src={teacher.image} 
                                        alt={teacher.name} 
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90" 
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t opacity-90 ${
                                        isFirst 
                                        ? 'from-orange-900 via-orange-900/40 to-transparent' 
                                        : 'from-slate-900 via-slate-900/40 to-transparent'
                                    }`}></div>
                                </div>
                                
                                {/* Rank Badge */}
                                <div className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shadow-lg border-2 ${
                                    isFirst ? 'bg-orange-500 text-white border-white' : 
                                    rank === 2 ? 'bg-slate-300 text-slate-800 border-white' :
                                    rank === 3 ? 'bg-orange-800 text-orange-100 border-white' :
                                    'bg-slate-800/80 backdrop-blur text-white border-slate-600'
                                }`}>
                                    {rank}
                                </div>
                                
                                {isFirst && (
                                    <div className="absolute top-4 right-4 animate-pulse">
                                        <Crown size={32} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="absolute bottom-0 w-full p-6 text-white">
                                    {isFirst && (
                                        <span className="inline-block bg-orange-500/20 backdrop-blur-md border border-orange-500/50 text-orange-200 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                                            Champion
                                        </span>
                                    )}
                                    <h3 className={`font-black leading-tight mb-1 ${isFirst ? 'text-2xl' : 'text-xl'}`}>
                                        {teacher.name}
                                    </h3>
                                    <p className="text-xs text-slate-300 font-medium mb-4 line-clamp-1">
                                        {teacher.school}
                                    </p>
                                    
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${
                                        isFirst 
                                        ? 'bg-orange-600/80 border-orange-400' 
                                        : 'bg-white/10 border-white/20'
                                    }`}>
                                        <Zap size={16} className={isFirst ? 'text-white' : 'text-orange-400'} fill="currentColor" />
                                        <span className="font-bold">{teacher.points} POIN</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};