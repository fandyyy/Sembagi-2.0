import React from 'react';
import { Instagram, Youtube, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-slate-800/50 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
               <Logo className="h-12 w-auto" />
               <div className="flex flex-col">
                 <span className="text-xs text-slate-400 uppercase tracking-widest pl-1">Sembada Berbagi</span>
               </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Platform inovatif Dinas Pendidikan Kabupaten Sleman untuk meningkatkan kualitas pendidikan dasar melalui kolaborasi, teknologi, dan semangat berbagi.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-transparent transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white hover:border-transparent transition-all duration-300">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Kolaborasi */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white">Kolaborasi</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                  <img src="https://picsum.photos/id/100/50/50" alt="Pemkab Sleman" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white">Pemkab Sleman</span>
                  <span className="text-xs text-slate-500">Partner Utama</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center">
                  <img src="https://picsum.photos/id/101/50/50" alt="Kominfo Sleman" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white">Diskominfo</span>
                  <span className="text-xs text-slate-500">Partner Teknologi</span>
                </div>
              </a>
            </div>
          </div>

          {/* Kontak */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-500" />
                <span>Jl. Parasamya, Beran, Tridadi,<br/>Kec. Sleman, Kabupaten Sleman,<br/>Daerah Istimewa Yogyakarta 55511</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-orange-500" />
                <a href="mailto:disdik@slemankab.go.id" className="hover:text-white transition-colors">disdik@slemankab.go.id</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-orange-500" />
                <a href="tel:+62274868512" className="hover:text-white transition-colors">(0274) 868512</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Menu</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#disdik" className="hover:text-orange-500 transition-colors">Profil Pejabat</a></li>
              <li><a href="#co_kapten" className="hover:text-orange-500 transition-colors">Tim Sembagi</a></li>
              <li><a href="#resources" className="hover:text-orange-500 transition-colors">Dokumen</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Login Admin</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Bidang Pembinaan SD - Dinas Pendidikan Sleman.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;