import { FileText, BookOpen, Briefcase, Share2, MessageCircle, Image, Database, PenTool } from 'lucide-react';
import { Official, Captain, Teacher, ResourceItem, Korwil, CoCaptain } from './types';

export const OFFICIALS: Official[] = [
  { name: "Mustadi, S.Sos., M.M", role: "Kepala Dinas Pendidikan", image: "https://picsum.photos/id/1005/400/500" },
  { name: "Sri Adi Marsanto, ST, MA", role: "Sekretaris Dinas Pendidikan", image: "https://picsum.photos/id/1012/400/500" },
  { name: "Rira Meuthia, S.E., M.Pd.", role: "Kepala Bidang Pembinaan SD", image: "https://picsum.photos/id/1027/400/500" },
  { name: "Akhmad Ritaudin, S.Pd., M.Pd", role: "Kasi Kurikulum & Kesiswaan SD", image: "https://picsum.photos/id/1062/400/500" },
];

export const CAPTAINS: Captain[] = [
  { name: "Nur Taufik", role: "Kapten", image: "https://picsum.photos/id/338/300/300" },
  { name: "Mitsbah El Noor", role: "Kapten", image: "https://picsum.photos/id/349/300/300" },
  { name: "Irvan Andi Wiranata", role: "Kapten", image: "https://picsum.photos/id/355/300/300" },
  { name: "Ahyar Nasukha", role: "Kapten", image: "https://picsum.photos/id/366/300/300" },
];

export const KORWILS: Korwil[] = [
  { name: "Supriyati Basuki Rahayu", role: "Korwil", area: "Kapanewon Berbah", image: "https://picsum.photos/id/400/300/300" },
  { name: "Rahayu Setyaningsih", role: "Korwil", area: "Kapanewon Depok", image: "https://picsum.photos/id/401/300/300" },
  { name: "Sulisratmi", role: "Korwil", area: "Kapanewon Turi", image: "https://picsum.photos/id/402/300/300" },
  { name: "Mundiharto", role: "Korwil", area: "Kapanewon Gamping", image: "https://picsum.photos/id/403/300/300" },
  { name: "Susy Ernawati", role: "Pengawas", area: "Kapanewon Gamping", image: "https://picsum.photos/id/404/300/300" },
  { name: "Kunto Wijayandani", role: "Korwil", area: "Kapanewon Seyegan", image: "https://picsum.photos/id/405/300/300" },
  { name: "Sarwoto", role: "Korwil", area: "Kapanewon Kalasan", image: "https://picsum.photos/id/406/300/300" },
  { name: "Eny Farida", role: "Korwil", area: "Kapanewon Minggir", image: "https://picsum.photos/id/407/300/300" },
  { name: "Nur Suharyanto", role: "Korwil", area: "Kapanewon Mlati", image: "https://picsum.photos/id/408/300/300" },
  { name: "Bambang Lipuro", role: "Pengawas", area: "Kapanewon Depok", image: "https://picsum.photos/id/409/300/300" },
  { name: "Suranti", role: "Korwil", area: "Kapanewon Moyudan", image: "https://picsum.photos/id/410/300/300" },
  { name: "Ismartiningsih", role: "Korwil", area: "Kapanewon Ngaglik", image: "https://picsum.photos/id/411/300/300" },
  { name: "Isti Turmiasih", role: "Pengawas", area: "Kapanewon Ngaglik", image: "https://picsum.photos/id/412/300/300" },
  { name: "Sri Maryati", role: "Korwil", area: "Kapanewon Ngemplak", image: "https://picsum.photos/id/413/300/300" },
  { name: "Hatri Andari", role: "Korwil", area: "Kapanewon Pakem", image: "https://picsum.photos/id/414/300/300" },
  { name: "Rumiyatun", role: "Korwil", area: "Kapanewon Prambanan", image: "https://picsum.photos/id/415/300/300" },
  { name: "Yamahsari", role: "Pengawas", area: "Kapanewon Prambanan", image: "https://picsum.photos/id/416/300/300" },
  { name: "Tuginem", role: "Korwil", area: "Kapanewon Godean", image: "https://picsum.photos/id/417/300/300" },
  { name: "Yuni Lestari", role: "Pengawas", area: "Kapanewon Godean", image: "https://picsum.photos/id/418/300/300" },
  { name: "Ponimin", role: "Korwil", area: "Kapanewon Sleman", image: "https://picsum.photos/id/419/300/300" },
  { name: "Pengawas", role: "Pengawas", area: "Kapanewon Sleman", image: "https://picsum.photos/id/420/300/300" },
  { name: "Tri Harti", role: "Korwil", area: "Kapanewon Cangkringan", image: "https://picsum.photos/id/421/300/300" },
  { name: "Nurhayati", role: "Korwil", area: "Kapanewon Tempel", image: "https://picsum.photos/id/423/300/300" },
];

export const CO_CAPTAINS: CoCaptain[] = [
  { name: "Haryono", area: "Kapanewon Berbah", image: "https://picsum.photos/id/500/300/300" },
  { name: "Albertus Kristianta W", area: "Kapanewon Cangkringan", image: "https://picsum.photos/id/501/300/300" },
  { name: "Yustin Paramitha Dewi", area: "Kapanewon Depok", image: "https://picsum.photos/id/502/300/300" },
  { name: "Fanji Riyoko", area: "Kapanewon Depok", image: "https://picsum.photos/id/503/300/300" },
  { name: "Sidiq Pramono", area: "Kapanewon Gamping", image: "https://picsum.photos/id/504/300/300" },
  { name: "Sutrisno", area: "Kapanewon Gamping", image: "https://picsum.photos/id/505/300/300" },
  { name: "Nurul Faikoh", area: "Kapanewon Godean", image: "https://picsum.photos/id/506/300/300" },
  { name: "Hesti Trisnawati", area: "Kapanewon Godean", image: "https://picsum.photos/id/507/300/300" },
  { name: "Septian Dwi Putro S", area: "Kapanewon Kalasan", image: "https://picsum.photos/id/508/300/300" },
  { name: "Arif Darmawan", area: "Kapanewon Kalasan", image: "https://picsum.photos/id/509/300/300" },
  { name: "Karyati", area: "Kapanewon Minggir", image: "https://picsum.photos/id/510/300/300" },
  { name: "Paulus Yuli Suseno", area: "Kapanewon Mlati", image: "https://picsum.photos/id/511/300/300" },
  { name: "Ikhsan Ramadhan", area: "Kapanewon Mlati", image: "https://picsum.photos/id/512/300/300" },
  { name: "R. Kuncoro Aji Laksono", area: "Kapanewon Moyudan", image: "https://picsum.photos/id/513/300/300" },
  { name: "Haryanto", area: "Kapanewon Ngaglik", image: "https://picsum.photos/id/514/300/300" },
  { name: "Andre Budi Pratama", area: "Kapanewon Ngaglik", image: "https://picsum.photos/id/515/300/300" },
  { name: "Anggit Bagus Nugroho", area: "Kapanewon Ngemplak", image: "https://picsum.photos/id/516/300/300" },
  { name: "Fentin Rahmawati", area: "Kapanewon Ngemplak", image: "https://picsum.photos/id/517/300/300" },
  { name: "Wulan Fajarini", area: "Kapanewon Pakem", image: "https://picsum.photos/id/518/300/300" },
  { name: "Novianto Nurnugroho", area: "Kapanewon Prambanan", image: "https://picsum.photos/id/519/300/300" },
  { name: "Anang Nugroho", area: "Kapanewon Prambanan", image: "https://picsum.photos/id/520/300/300" },
  { name: "Bagas Adi Atma", area: "Kapanewon Seyegan", image: "https://picsum.photos/id/521/300/300" },
  { name: "Yusi Tri Astuti", area: "Kapanewon Seyegan", image: "https://picsum.photos/id/522/300/300" },
  { name: "Ari Hermawati", area: "Kapanewon Sleman", image: "https://picsum.photos/id/523/300/300" },
  { name: "Akhmad Rofii Uddiin", area: "Kapanewon Sleman", image: "https://picsum.photos/id/524/300/300" },
  { name: "Alfansi Rouf Noor", area: "Kapanewon Tempel", image: "https://picsum.photos/id/525/300/300" },
  { name: "Aris Widi Purnomo", area: "Kapanewon Tempel", image: "https://picsum.photos/id/526/300/300" },
  { name: "Daru Zona Priyawan", area: "Kapanewon Turi", image: "https://picsum.photos/id/527/300/300" },
];

export const TEACHERS: Teacher[] = [
  { name: "NUR***", points: 1558, school: "SD NEGERI TUNJUNGSARI 2", image: "https://picsum.photos/id/64/300/300" },
  { name: "Jam***", points: 75, school: "SD NEGERI PATRAN", image: "https://picsum.photos/id/65/300/300" },
  { name: "SAM***", points: 157, school: "SD IT HIDAYATULLAH", image: "https://picsum.photos/id/91/300/300" },
  { name: "San***", points: 114, school: "SD NEGERI KARANGNONGKO 2", image: "https://picsum.photos/id/177/300/300" },
];

export const RESOURCES: ResourceItem[] = [
  { title: "Dokumen Kurikulum", icon: Database, link: "#", color: "from-blue-500 to-blue-600", description: "Arsip lengkap kurikulum satuan pendidikan" },
  { title: "Soal PSAS", icon: FileText, link: "#", color: "from-emerald-500 to-emerald-600", description: "Bank soal penilaian akhir semester" },
  { title: "Soal ASPDBK UTAMA", icon: PenTool, link: "#", color: "from-purple-500 to-purple-600", description: "Kumpulan soal standar daerah" },
  { title: "Hasil Bimtek SD", icon: Briefcase, link: "#", color: "from-orange-500 to-orange-600", description: "Materi dan hasil bimbingan teknis" },
  { title: "Pustaka Soal TKM", icon: BookOpen, link: "#", color: "from-red-500 to-red-600", description: "Referensi soal tes kendali mutu" },
  { title: "Area Berbagi", icon: Share2, link: "#", color: "from-cyan-500 to-cyan-600", description: "Ruang kolaborasi antar pendidik" },
  { title: "Masukan & Saran", icon: MessageCircle, link: "#", color: "from-pink-500 to-pink-600", description: "Saluran aspirasi dan perbaikan" },
  { title: "Galeri Kegiatan", icon: Image, link: "#", color: "from-indigo-500 to-indigo-600", description: "Dokumentasi aktivitas pendidikan" },
];