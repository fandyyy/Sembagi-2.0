import React from 'react';
import { Instagram, Youtube, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-8 border-t border-blue-900">
      <div className="container mx-auto px-8 md:px-0">
        {/* Main Grid - Equal 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-blue-900/50 pb-12">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <Logo className="h-12 w-auto" isWhite={true} />
               <div className="flex flex-col">
                  <span className="text-xs text-blue-200 uppercase tracking-widest">Sembada Berbagi</span>
               </div>
            </div>
            
            <div className="bg-blue-900/30 border border-blue-800 rounded-xl p-4">
               <p className="font-display font-bold text-orange-400 italic mb-2">
                 "Bergerak Bersama, Belajar Bersama, Maju Bersama"
               </p>
               <div className="flex items-center gap-2">
                 <div className="h-px bg-blue-700 flex-grow"></div>
                 <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Bidang Pembinaan SD</span>
               </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed pr-6">
              Platform inovatif Dinas Pendidikan Kabupaten Sleman untuk meningkatkan kualitas pendidikan dasar melalui kolaborasi, teknologi, dan semangat berbagi.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/disdiksleman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-800 flex items-center justify-center text-blue-300 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@sembadabelajar6085" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-800 flex items-center justify-center text-blue-300 hover:bg-red-600 hover:text-white hover:border-transparent transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="https://disdik.slemankab.go.id/sembagi-platform-digital-inovatif-untuk-pendidikan-dasar-di-sleman/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-800 flex items-center justify-center text-blue-300 hover:bg-blue-500 hover:text-white hover:border-transparent transition-all duration-300">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Kolaborasi - Added right padding */}
          <div className="flex flex-col lg:pr-12">
            <h4 className="font-bold text-lg mb-6 text-white border-b border-blue-900/50 pb-2 inline-block w-fit">Kolaborasi</h4>
            <div className="space-y-4">
              <a href="https://disdik.slemankab.go.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-blue-900/30 p-4 rounded-xl border border-blue-900 hover:border-blue-700 transition-all group">
                <div className="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Seal_of_Sleman_Regency.svg" alt="Disdik Sleman" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-blue-100 group-hover:text-white">Dinas Pendidikan Kabupaten Sleman</span>
                  <span className="text-xs text-blue-400">Partner Utama</span>
                </div>
              </a>
              <a href="https://kominfo.slemankab.go.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-blue-900/30 p-4 rounded-xl border border-blue-900 hover:border-blue-700 transition-all group">
                <div className="w-12 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_of_Ministry_of_Communication_and_Information_Technology_of_the_Republic_of_Indonesia.svg" alt="Kominfo Sleman" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-blue-100 group-hover:text-white">Dinas Komunikasi dan Informatika Kabupaten Sleman</span>
                  <span className="text-xs text-blue-400">Partner Teknologi</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Kontak */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-blue-900/50 pb-2 inline-block w-fit">Hubungi Kami</h4>
            <ul className="space-y-5 text-blue-200 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-orange-400 shrink-0">
                   <MapPin size={16} />
                </div>
                <span className="leading-relaxed">Jl. Parasamya, Beran, Tridadi,<br/>Kec. Sleman, Kabupaten Sleman,<br/>Daerah Istimewa Yogyakarta 55511</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-orange-400 shrink-0">
                   <Mail size={16} />
                </div>
                <a href="mailto:disdik@slemankab.go.id" className="hover:text-white transition-colors">disdik@slemankab.go.id</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-orange-400 shrink-0">
                   <Phone size={16} />
                </div>
                <a href="tel:+62274868512" className="hover:text-white transition-colors">(0274) 868512</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-blue-400 text-sm">
          <p>© {new Date().getFullYear()} Bidang Pembinaan SD - Dinas Pendidikan Sleman.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;