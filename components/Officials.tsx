import React from 'react';
import { OFFICIALS } from '../constants';

const Officials: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300" id="disdik">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-orange-100/40 dark:from-orange-900/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-violet-100/40 dark:from-violet-900/10 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200 dark:border-slate-800">
            Struktural Dinas
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Pimpinan <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-orange-600">Dinas Pendidikan Kabupaten Sleman</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Nakhoda pendidikan yang berdedikasi membawa Sleman menuju era pendidikan yang lebih maju, inklusif, dan berdaya saing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OFFICIALS.map((official, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] w-full cursor-pointer stagger-item"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-slate-900/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-violet-500/20">
                
                {/* Image */}
                <img 
                  src={official.image} 
                  alt={official.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient Overlay - Always visible but darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Animated Border Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden mb-1">
                    <span className="inline-block text-xs font-bold text-orange-400 uppercase tracking-widest translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      Leadership
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {official.name}
                  </h3>
                  <p className="text-slate-300 text-sm font-medium border-l-2 border-violet-500 pl-3">
                    {official.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Officials;