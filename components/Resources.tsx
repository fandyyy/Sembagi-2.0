import React, { useState } from 'react';
import { RESOURCES } from '../constants';
import { Search, FileText, Download, Sparkles, FolderOpen, ArrowUpRight, ChevronRight, Grid } from 'lucide-react';

const CATEGORIES = ["Semua", "Kurikulum", "Bank Soal", "Materi", "Lainnya"];

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const getCategory = (item: any) => {
    const text = (item.title + item.description).toLowerCase();
    if (text.includes('kurikulum') || text.includes('dokumen')) return 'Kurikulum';
    if (text.includes('soal') || text.includes('asesmen')) return 'Bank Soal';
    if (text.includes('bimtek') || text.includes('materi')) return 'Materi';
    return 'Lainnya';
  };

  const filteredResources = RESOURCES.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || getCategory(item) === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500" id="resources">
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-bold tracking-widest uppercase border border-blue-100 dark:border-blue-800">
            <Sparkles size={14} className="animate-pulse" />
            Dokumen Sembagi
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Pusat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Dokumen & Sumber Daya</span>
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Akses cepat ke ribuan dokumen pendidikan, modul ajar, bank soal, dan materi pengembangan kompetensi guru.
          </p>

          {/* Unified Search & Filter Container */}
          <div className="mt-10 flex justify-center w-full sticky top-24 z-30">
             <div className="w-full max-w-2xl bg-white dark:bg-slate-900 p-2 rounded-full shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200 dark:border-slate-800 flex items-center transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500">
                
                {/* Search Icon */}
                <div className="flex-shrink-0 pl-4 text-slate-400">
                   <Search size={20} />
                </div>
                
                {/* Input */}
                <input 
                  type="text" 
                  placeholder="Cari dokumen..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow min-w-0 h-10 px-3 bg-transparent outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 font-medium"
                />

                {/* Divider (Desktop) */}
                <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>

                {/* Desktop Tabs */}
                <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-full">
                   {CATEGORIES.map((cat) => (
                     <button
                       key={cat}
                       onClick={() => setActiveCategory(cat)}
                       className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                         activeCategory === cat 
                           ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm' 
                           : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                       }`}
                     >
                       {cat}
                     </button>
                   ))}
                </div>

                {/* Search Button (Mobile Only) */}
                <button className="md:hidden flex-shrink-0 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full ml-2">
                   <Search size={18} />
                </button>

             </div>
          </div>
          
          {/* Mobile Tabs (Below Search) */}
          <div className="flex md:hidden justify-center overflow-x-auto pb-2 gap-2 hide-scrollbar px-1 w-full mt-4">
              {CATEGORIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                   activeCategory === cat 
                     ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white' 
                     : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>

        </div>

        {/* Grid - Feature Box Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a 
                key={idx} 
                href={item.link}
                className="group relative flex flex-col p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={32} className="drop-shadow-md" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors">
                   <span className="text-xs font-bold text-slate-400 group-hover:text-blue-500 transition-colors">Akses</span>
                   <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={16} />
                   </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <FolderOpen size={32} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tidak ada data ditemukan</h3>
            <p className="text-slate-500 text-sm mt-1">Silakan coba kata kunci lain atau ubah filter kategori.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('Semua');}}
              className="mt-6 text-blue-600 font-bold text-sm hover:underline"
            >
              Hapus Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Resources;