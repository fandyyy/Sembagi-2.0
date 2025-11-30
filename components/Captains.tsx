
import React, { useState, useEffect } from 'react';
import { CAPTAINS, CO_CAPTAINS, KORWILS, TEACHERS } from '../constants';
import { MapPin, CheckCircle2, Quote, Zap, Search, XCircle, Crown, MessageCircle, Trophy, Award, Flame, Star, Medal } from 'lucide-react';

const Captains: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Reveal Animation Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredKorwils = KORWILS.filter((person) => 
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-950 overflow-hidden" id="co_kapten">
      
      {/* --- SECTION 1: KAPTEN (THE ELITE 4) --- */}
      <section className="py-24 relative bg-white dark:bg-slate-900">
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
              Empat pilar utama yang mendedikasikan diri untuk memimpin transformasi digital pendidikan di Kabupaten Sleman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAPTAINS.map((person, idx) => (
              <div 
                key={idx} 
                className="group relative h-[420px] reveal-up"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/60 dark:shadow-slate-950/50 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-violet-200/50 dark:group-hover:shadow-violet-900/30 border border-slate-100 dark:border-slate-700"></div>
                <div className="relative h-full flex flex-col items-center pt-10 pb-8 px-6">
                  <div className="relative w-44 h-44 mb-8">
                    <div className="absolute inset-[-8px] border-2 border-dashed border-violet-300 dark:border-violet-600 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full rounded-full p-1 bg-white dark:bg-slate-800 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                       <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-2 rounded-full shadow-lg border-[3px] border-white dark:border-slate-800 z-10 group-hover:scale-110 transition-transform duration-300">
                      <Zap size={16} fill="currentColor" />
                    </div>
                  </div>
                  <div className="text-center w-full">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{person.name}</h3>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">{person.role}</p>
                    <div className="w-12 h-1 bg-slate-100 dark:bg-slate-700 mx-auto mb-6 rounded-full group-hover:bg-violet-200 dark:group-hover:bg-violet-800 transition-colors duration-300"></div>
                    <button className="w-full py-3 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300 shadow-sm group-hover:shadow-violet-200 dark:group-hover:shadow-violet-900/50 reveal-up">
                      <MessageCircle size={16} />
                      Hubungi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KORWIL & PENGAWAS --- */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="reveal-up">
              <span className="text-cyan-400 font-bold tracking-wider text-xs uppercase mb-2 block">Dukungan Wilayah</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Tak Kenal Maka <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tak Sayang</span></h2>
              <p className="text-slate-400 text-lg max-w-2xl">Korwil dan Pengawas yang senantiasa mendampingi dan mengawasi perkembangan pendidikan di setiap Kapanewon.</p>
            </div>
            
            <div className="w-full md:w-auto min-w-[320px] relative z-20 reveal-up" style={{transitionDelay: '200ms'}}>
              <div className="relative group p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-60 blur-md transition duration-500"></div>
                <div className="relative flex items-center bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-700/50 group-hover:border-cyan-500/50 transition-all shadow-lg overflow-hidden">
                  <div className="pl-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors">
                    <Search size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Cari Nama / Wilayah..." 
                    className="bg-transparent text-white placeholder-slate-500 px-4 py-3.5 outline-none w-full font-medium text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="pr-5 text-slate-500 hover:text-white transition-colors">
                      <XCircle size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {filteredKorwils.length > 0 ? (
          <div className="flex overflow-x-auto pb-12 pt-4 px-4 md:px-8 gap-6 snap-x snap-mandatory hide-scrollbar">
            {filteredKorwils.map((person, idx) => (
              <div 
                key={idx} 
                className="snap-center shrink-0 w-72 md:w-80 group cursor-pointer reveal-up"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="relative h-[450px] bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 group-hover:border-cyan-500/50 transition-all duration-500 shadow-xl shadow-black/20">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <Quote className="text-cyan-400 fill-cyan-400/20" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{person.name}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-3">
                        <MapPin size={16} />
                        {person.area}
                      </div>
                      <div className="h-0.5 w-12 bg-slate-700 group-hover:w-full group-hover:bg-cyan-500 transition-all duration-500 mb-3"></div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">{person.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-8 shrink-0"></div>
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/50 mx-4 rounded-[2rem] border border-slate-800 border-dashed reveal-up">
            <h3 className="text-xl font-bold text-white mb-2">Tidak ditemukan hasil</h3>
            <button onClick={() => setSearchTerm('')} className="mt-4 px-6 py-2 rounded-full bg-cyan-600/20 text-cyan-400 font-bold text-sm">Reset Pencarian</button>
          </div>
        )}
      </section>

      {/* --- SECTION 3: CO-KAPTEN --- */}
      <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto reveal-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Co-Kapten Kewilayahan</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Para pemimpin lapangan yang memastikan semangat berbagi Sembagi tersalurkan hingga ke seluruh penjuru sekolah.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CO_CAPTAINS.map((person, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-500 hover:shadow-lg hover:shadow-violet-100 dark:hover:shadow-none transition-all duration-300 flex items-center gap-4 group reveal-up"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-700">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors mb-1 truncate">{person.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-green-500 shrink-0" />
                    <span className="truncate font-medium">{person.area}</span>
                  </p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MessageCircle size={16} className="text-violet-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GURU LEADERBOARD (REDESIGNED) --- */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden text-white border-t border-slate-800">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          
          <div className="flex flex-col items-center text-center mb-20 reveal-up">
             <span className="text-amber-400 font-bold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
               <Crown size={14} /> Weekly Top Performance
             </span>
             <h2 className="text-4xl md:text-6xl font-black mb-6">Hall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">Fame</span></h2>
             <p className="text-slate-400 text-lg max-w-2xl">Apresiasi tertinggi bagi pendidik yang memberikan kontribusi luar biasa dalam ekosistem Sembagi minggu ini.</p>
          </div>

          {/* Top 3 Podium Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-end max-w-5xl mx-auto mb-16">
            
            {/* Rank 2 */}
            {TEACHERS[1] && (
               <div className="order-2 lg:order-1 relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 p-6 flex flex-col items-center text-center group hover:border-slate-500 transition-all duration-300 reveal-up" style={{ transitionDelay: '100ms' }}>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-bold border border-slate-600">Rank #2</div>
                  <div className="w-24 h-24 rounded-full border-4 border-slate-300 overflow-hidden mb-4 shadow-lg shadow-slate-300/10 relative">
                     <img src={TEACHERS[1].image} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-slate-400/20 mix-blend-overlay"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">{TEACHERS[1].name}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-4">{TEACHERS[1].school}</p>
                  <div className="flex items-center gap-1.5 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-700/50">
                    <Star size={14} className="text-slate-400 fill-slate-400" />
                    <span className="font-mono font-bold text-lg">{TEACHERS[1].points}</span>
                    <span className="text-[10px] text-slate-500">XP</span>
                  </div>
               </div>
            )}

            {/* Rank 1 (Gold) */}
            {TEACHERS[0] && (
               <div className="order-1 lg:order-2 relative bg-gradient-to-b from-amber-900/20 to-slate-900/80 backdrop-blur-md rounded-[2.5rem] border border-amber-500/30 p-8 flex flex-col items-center text-center shadow-2xl shadow-amber-500/10 transform scale-105 z-10 reveal-up">
                  <div className="absolute -top-6 animate-bounce">
                    <Crown size={48} className="text-amber-400 fill-amber-400 drop-shadow-lg" />
                  </div>
                  <div className="w-32 h-32 rounded-full border-[6px] border-amber-400 overflow-hidden mb-5 shadow-[0_0_40px_rgba(251,191,36,0.3)] relative group-hover:scale-105 transition-transform duration-500">
                     <img src={TEACHERS[0].image} className="w-full h-full object-cover" />
                     {/* Shine Effect */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">{TEACHERS[0].name}</h3>
                  <p className="text-sm text-amber-200/80 font-medium mb-6 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {TEACHERS[0].school}
                  </p>
                  <div className="w-full bg-gradient-to-r from-amber-500 to-orange-600 p-[1px] rounded-2xl">
                    <div className="bg-slate-900/90 rounded-2xl py-3 px-6 flex items-center justify-center gap-3">
                       <Trophy size={20} className="text-amber-400" />
                       <div className="flex flex-col items-start leading-none">
                          <span className="text-[10px] text-slate-400 uppercase font-bold">Total Score</span>
                          <span className="text-2xl font-black text-white">{TEACHERS[0].points}</span>
                       </div>
                    </div>
                  </div>
               </div>
            )}

            {/* Rank 3 */}
            {TEACHERS[2] && (
               <div className="order-3 lg:order-3 relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 p-6 flex flex-col items-center text-center group hover:border-orange-800 transition-all duration-300 reveal-up" style={{ transitionDelay: '200ms' }}>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-bold border border-slate-600">Rank #3</div>
                  <div className="w-24 h-24 rounded-full border-4 border-orange-700 overflow-hidden mb-4 shadow-lg shadow-orange-900/20 relative">
                     <img src={TEACHERS[2].image} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">{TEACHERS[2].name}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-4">{TEACHERS[2].school}</p>
                  <div className="flex items-center gap-1.5 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-700/50">
                    <Star size={14} className="text-orange-700 fill-orange-700" />
                    <span className="font-mono font-bold text-lg">{TEACHERS[2].points}</span>
                    <span className="text-[10px] text-slate-500">XP</span>
                  </div>
               </div>
            )}
          </div>

          {/* Leaderboard List */}
          {TEACHERS.length > 3 && (
            <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden reveal-up" style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center justify-between p-6 bg-slate-800/50 border-b border-slate-700">
                 <h4 className="font-bold text-slate-200 flex items-center gap-2">
                   <Award size={18} className="text-blue-500" /> Honorable Mentions
                 </h4>
                 <span className="text-xs text-slate-500 font-mono">Updated: Just now</span>
              </div>
              <div className="divide-y divide-slate-800">
                {TEACHERS.slice(3).map((teacher, idx) => (
                  <div key={idx} className="flex items-center p-4 hover:bg-slate-800/50 transition-colors gap-4">
                    <div className="w-8 text-center font-mono font-bold text-slate-500">#{idx + 4}</div>
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-700">
                      <img src={teacher.image} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-200 text-sm">{teacher.name}</h5>
                      <p className="text-xs text-slate-500">{teacher.school}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">
                       <Flame size={12} className="text-orange-500" />
                       <span className="font-mono font-bold text-sm">{teacher.points}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Captains;
