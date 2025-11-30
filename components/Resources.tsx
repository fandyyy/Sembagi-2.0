
import React, { useState } from 'react';
import { RESOURCES } from '../constants';
import { Search, FileText, Download, Sparkles, FolderOpen, ArrowUpRight } from 'lucide-react';

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
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500" id="resources">
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-bold tracking-widest uppercase border border-blue-100 dark:border-blue-800">
            <Sparkles size={14} className="animate-pulse" />
            Pusat Unduhan
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Pusat Data & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Informasi</span>
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Akses cepat ke ribuan dokumen pendidikan, modul ajar, bank soal, dan materi pengembangan kompetensi guru.
          </p>

          {/* Search & Filter */}
          <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-2 mt-8">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Cari dokumen..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-transparent rounded-xl outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 font-medium"
              />
            </div>
            <div className="hidden md:flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Mobile Filters */}
            <div className="flex md:hidden overflow-x-auto pb-2 gap-2 hide-scrollbar px-1">
               {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a 
                key={idx} 
                href={item.link}
                className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`}></div>

                {/* Top Section: Icon & Action */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon size={28} className="text-white drop-shadow-md" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow relative z-10">
                  {/* Tag removed here */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                    <FileText size={14} />
                    <span>Akses File</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
                    Unduh Sekarang
                  </span>
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
