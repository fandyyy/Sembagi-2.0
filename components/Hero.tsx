import React from 'react';
import { Play, ArrowRight, Zap, Building2, Users, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-white dark:bg-slate-950 overflow-hidden pt-20 lg:pt-0 transition-colors duration-300">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-bl-[200px] -z-10 opacity-60 blur-3xl transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-t from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-tr-[200px] -z-10 opacity-60 blur-3xl transition-colors duration-300"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white rounded-full text-white dark:text-slate-900 text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Zap size={14} className="text-yellow-400 fill-yellow-400 dark:text-orange-500 dark:fill-orange-500" />
              <span>Inovasi Pendidikan Sleman</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Membangun <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-600">Semangat Berbagi</span> <br/>
              Bersama Sembagi.
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Platform kolaborasi digital Dinas Pendidikan Kabupaten Sleman. Akselerasi kualitas pendidikan melalui berbagi materi, ide, dan semangat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 group">
                Mulai Sekarang
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center justify-center gap-3">
                <Play size={20} className="text-slate-900 dark:text-white fill-slate-900 dark:fill-white" />
                Tonton Video
              </button>
            </div>
          </div>

          {/* Right Content / Visuals - Redesigned */}
          <div className="relative h-[500px] lg:h-[650px] w-full flex items-center justify-center animate-in zoom-in fade-in duration-1000 delay-300">
            
             {/* Decorative Background Blob */}
             <div className="absolute w-[450px] h-[450px] bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>

             {/* Main Image Container */}
             <div className="relative z-10 w-72 h-96 lg:w-96 lg:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl shadow-violet-500/20 border-[8px] border-white dark:border-slate-800 transform -rotate-3 hover:rotate-0 transition-all duration-700 ease-out">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Education" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
             </div>

             {/* Floating Badge 1: Schools */}
             <div className="absolute top-12 left-0 lg:-left-6 bg-white dark:bg-slate-800 p-4 pr-6 rounded-2xl shadow-[0_15px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-4 animate-float hover:scale-105 transition-transform cursor-default z-20">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                   <Building2 size={24} />
                </div>
                <div>
                   <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">500+</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">Sekolah Bergabung</p>
                </div>
             </div>

             {/* Floating Badge 2: Teachers */}
             <div className="absolute bottom-24 -right-2 lg:-right-8 bg-white dark:bg-slate-800 p-4 pr-6 rounded-2xl shadow-[0_15px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-4 animate-float hover:scale-105 transition-transform cursor-default z-20" style={{ animationDelay: '2s' }}>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                   <Users size={24} />
                </div>
                <div>
                   <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">4.000+</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">Guru Terdaftar</p>
                </div>
             </div>

             {/* Floating Badge 3: Files */}
             <div className="absolute bottom-4 left-4 lg:left-2 bg-white dark:bg-slate-800 p-4 pr-6 rounded-2xl shadow-[0_15px_30px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-4 animate-float hover:scale-105 transition-transform cursor-default z-20" style={{ animationDelay: '4s' }}>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                   <FileText size={24} />
                </div>
                <div>
                   <p className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">100.000+</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">File Diupload</p>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;