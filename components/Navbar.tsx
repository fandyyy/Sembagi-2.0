import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, ChevronRight, Moon, Sun } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo Area */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
          </a>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center p-1.5 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-slate-100/50 dark:bg-slate-800/50' 
              : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-sm border border-white/50 dark:border-slate-700/50'
          }`}>
            <div className="flex px-2">
              {[
                ['Pimpinan', '#disdik'],
                ['Tim Kami', '#co_kapten'],
                ['Dokumen', '#resources'],
              ].map(([label, href]) => (
                <a 
                  key={label}
                  href={href} 
                  className="px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-orange-500 dark:hover:text-yellow-400 transition-all mr-2"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-violet-600 dark:hover:bg-violet-200 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-white/10">
              <LogIn size={16} />
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
                onClick={toggleTheme}
                className="p-3 text-slate-900 dark:text-white bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="p-3 text-slate-900 dark:text-white bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white dark:bg-slate-950 transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-6 gap-6 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          {[
            ['Profil Pejabat', '#disdik'],
            ['Tim Sembagi', '#co_kapten'],
            ['Pusat Dokumen', '#resources'],
          ].map(([label, href]) => (
            <a 
              key={label}
              href={href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-lg font-bold text-slate-900 dark:text-white active:scale-95 transition-transform"
            >
              {label} <ChevronRight size={20} className="text-slate-400" />
            </a>
          ))}
        </div>
        
        <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-violet-500/30 flex items-center justify-center gap-3 mt-auto mb-10 active:scale-95 transition-transform">
          <LogIn size={24} /> Masuk Sistem
        </button>
      </div>
    </>
  );
};

export default Navbar;