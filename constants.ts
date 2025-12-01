import { FileText, BookOpen, Briefcase, Share2, MessageCircle, Image, Database, PenTool } from 'lucide-react';
import { Official, Captain, Teacher, ResourceItem, Korwil, CoCaptain } from './types';

export const OFFICIALS: Official[] = [
  { name: "Mustadi, S.Sos., M.M", role: "Kepala Dinas Pendidikan", image: "images/Mustadi.jpg" },
  { name: "Sri Adi Marsanto, S.T., M.A.", role: "Sekretaris Dinas Pendidikan", image: "images/Adi.jpg" },
  { name: "Rira Meuthia, S.E., M.Pd.", role: "Kepala Bidang Pembinaan SD", image: "images/Rira.jpg" },
  { name: "Akhmad Ritaudin, S.Pd., M.Pd.", role: "Kasi Kurikulum & Kesiswaan SD", image: "images/Uud.jpg" },
];

export const CAPTAINS: Captain[] = [
  { name: "Ahyar Nasukha", role: "Kapten", image: "images/Ahyar.jpg" },
  { name: "Irvan Andi Wiranata", role: "Kapten", image: "images/Andi.jpg" },
  { name: "Nur Taufik", role: "Kapten", image: "images/NT.jpg" },
  { name: "Mitsbah El Noor", role: "Kapten", image: "images/Mitsbah.jpg" },
];

export const KORWILS: Korwil[] = [
  { name: "Supriyati Basuki Rahayu", role: "Korwil", area: "Kapanewon Berbah", image: "images/SBR.png" },
  { name: "Rahayu Setyaningsih", role: "Korwil", area: "Kapanewon Depok", image: "images/Rahayu.png" },
  { name: "Sulisratmi", role: "Korwil", area: "Kapanewon Turi", image: "images/Sulis.png" },
  { name: "Mundiharto", role: "Korwil", area: "Kapanewon Gamping", image: "images/Mundi.png" },
  { name: "Susy Ernawati", role: "Pengawas", area: "Kapanewon Gamping", image: "images/Susy.png" },
  { name: "Kunto Wijayandani", role: "Korwil", area: "Kapanewon Seyegan", image: "images/Kunto.png" },
  { name: "Sarwoto", role: "Korwil", area: "Kapanewon Kalasan", image: "images/Sarwoto.png" },
  { name: "Eny Farida", role: "Korwil", area: "Kapanewon Minggir", image: "images/Eny.png" },
  { name: "Nur Suharyanto", role: "Korwil", area: "Kapanewon Mlati", image: "images/Nur.png" },
  { name: "Bambang Lipuro", role: "Pengawas", area: "Kapanewon Depok", image: "images/Bambang.png" },
  { name: "Suranti", role: "Korwil", area: "Kapanewon Moyudan", image: "images/Suranti.png" },
  { name: "Ismartiningsih", role: "Korwil", area: "Kapanewon Ngaglik", image: "images/Ismarti.png" },
  { name: "Isti Turmiasih", role: "Pengawas", area: "Kapanewon Ngaglik", image: "images/Isti.png" },
  { name: "Sri Maryati", role: "Korwil", area: "Kapanewon Ngemplak", image: "images/Sri.png" },
  { name: "Hatri Andari", role: "Korwil", area: "Kapanewon Pakem", image: "images/Hatri.png" },
  { name: "Rumiyatun", role: "Korwil", area: "Kapanewon Prambanan", image: "images/Rumiyatun.png" },
  { name: "Yamahsari", role: "Pengawas", area: "Kapanewon Prambanan", image: "images/Yamahsari.png" },
  { name: "Tuginem", role: "Korwil", area: "Kapanewon Godean", image: "images/Tuginem.png" },
  { name: "Yuni Lestari", role: "Pengawas", area: "Kapanewon Godean", image: "images/Yuni.png" },
  { name: "Ponimin", role: "Korwil", area: "Kapanewon Sleman", image: "images/Ponimin.png" },
  { name: "Tri Harti", role: "Korwil", area: "Kapanewon Cangkringan", image: "images/Tri.png" },
  { name: "Nurhayati", role: "Korwil", area: "Kapanewon Tempel", image: "images/Nurhayati.png" },
];

export const CO_CAPTAINS: CoCaptain[] = [
  { name: "Haryono", area: "Kapanewon Berbah", image: "images/kapten1.jpg" },
  { name: "Albertus Kristianta W", area: "Kapanewon Cangkringan", image: "images/kapten2.jpg" },
  { name: "Yustin Paramitha Dewi", area: "Kapanewon Depok", image: "images/kapten3.jpg" },
  { name: "Fanji Riyoko", area: "Kapanewon Depok", image: "images/kapten4.jpg" },
  { name: "Sidiq Pramono", area: "Kapanewon Gamping", image: "images/kapten5.jpg" },
  { name: "Sutrisno", area: "Kapanewon Gamping", image: "images/kapten6.jpg" },
  { name: "Nurul Faikoh", area: "Kapanewon Godean", image: "images/kapten7.jpg" },
  { name: "Hesti Trisnawati", area: "Kapanewon Godean", image: "images/kapten8.jpg" },
  { name: "Septian Dwi Putro S", area: "Kapanewon Kalasan", image: "images/kapten9.jpg" },
  { name: "Arif Darmawan", area: "Kapanewon Kalasan", image: "images/kapten10.jpg" },
  { name: "Karyati", area: "Kapanewon Minggir", image: "images/kapten11.jpg" },
  { name: "Paulus Yuli Suseno", area: "Kapanewon Mlati", image: "images/kapten12.jpg" },
  { name: "Ikhsan Ramadhan", area: "Kapanewon Mlati", image: "images/kapten13.jpg" },
  { name: "R. Kuncoro Aji Laksono", area: "Kapanewon Moyudan", image: "images/kapten14.jpg" },
  { name: "Haryanto", area: "Kapanewon Ngaglik", image: "images/kapten15.jpg" },
  { name: "Andre Budi Pratama", area: "Kapanewon Ngaglik", image: "images/kapten16.jpg" },
  { name: "Anggit Bagus Nugroho", area: "Kapanewon Ngemplak", image: "images/kapten17.jpg" },
  { name: "Fentin Rahmawati", area: "Kapanewon Ngemplak", image: "images/kapten18.jpg" },
  { name: "Wulan Fajarini", area: "Kapanewon Pakem", image: "images/kapten19.jpg" },
  { name: "Novianto Nurnugroho", area: "Kapanewon Prambanan", image: "images/kapten20.jpg" },
  { name: "Anang Nugroho", area: "Kapanewon Prambanan", image: "images/kapten21.jpg" },
  { name: "Bagas Adi Atma", area: "Kapanewon Seyegan", image: "images/kapten22.jpg" },
  { name: "Yusi Tri Astuti", area: "Kapanewon Seyegan", image: "images/kapten23.jpg" },
  { name: "Ari Hermawati", area: "Kapanewon Sleman", image: "images/kapten24.jpg" },
  { name: "Akhmad Rofii Uddiin", area: "Kapanewon Sleman", image: "images/kapten25.jpg" },
  { name: "Alfansi Rouf Noor", area: "Kapanewon Tempel", image: "images/kapten26.jpg" },
  { name: "Aris Widi Purnomo", area: "Kapanewon Tempel", image: "images/kapten27.jpg" },
  { name: "Daru Zona Priyawan", area: "Kapanewon Turi", image: "images/kapten28.jpg" },
];

export const TEACHERS: Teacher[] = [
  { name: "Nat***", points: 1190, school: "SD NEGERI MEJING 1", image: "images/guru1.jpg" },
  { name: "Eko***", points: 728, school: "SD NEGERI RINGINSARI", image: "images/guru2.jpg" },
  { name: "Aha***", points: 660, school: "SD NEGERI MERDIKOREJO", image: "images/guru3.jpg" },
  { name: "Ang***", points: 387, school: "SD NEGERI TAMANAN 3", image: "images/guru4.jpg" },
  { name: "Afr***", points: 135, school: "MI DAARUL ULUM SINAR MELATI", image: "images/guru5.jpg" },
];

export const RESOURCES: ResourceItem[] = [
  { title: "Dokumen Kurikulum", icon: Database, link: "https://sembagi.slemankab.go.id/login.html", color: "from-blue-500 to-blue-600", description: "Arsip lengkap kurikulum satuan pendidikan" },
  { title: "Soal PSAS", icon: FileText, link: "https://sembagi.slemankab.go.id/login.html", color: "from-emerald-500 to-emerald-600", description: "Bank soal penilaian akhir semester" },
  { title: "Soal ASPDBK UTAMA", icon: PenTool, link: "https://sembagi.slemankab.go.id/login.html", color: "from-purple-500 to-purple-600", description: "Kumpulan soal standar daerah" },
  { title: "Hasil Bimtek SD", icon: Briefcase, link: "https://sembagi.slemankab.go.id/login.html", color: "from-orange-500 to-orange-600", description: "Materi dan hasil bimbingan teknis" },
  { title: "Pustaka Soal TKM", icon: BookOpen, link: "https://sembagi.slemankab.go.id/login.html", color: "from-red-500 to-red-600", description: "Referensi soal tes kendali mutu" },
  { title: "Area Berbagi", icon: Share2, link: "https://sembagi.slemankab.go.id/login.html", color: "from-cyan-500 to-cyan-600", description: "Ruang kolaborasi antar pendidik" },
  { title: "Masukan & Saran", icon: MessageCircle, link: "https://sembagi.slemankab.go.id/login.html", color: "from-pink-500 to-pink-600", description: "Saluran aspirasi dan perbaikan" },
  { title: "Galeri Kegiatan", icon: Image, link: "https://sembagi.slemankab.go.id/login.html", color: "from-indigo-500 to-indigo-600", description: "Dokumentasi aktivitas pendidikan" },
];