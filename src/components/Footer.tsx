import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: 'en' | 'id';
  onOpenResume: () => void;
  onOpenCertModal: () => void;
}

export default function Footer({ lang, onOpenResume, onOpenCertModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 py-12 text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-sm font-bold text-slate-900 dark:text-white">
            {PERSONAL_INFO.name}
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-600 dark:text-slate-400">
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {lang === 'en' ? "Projects" : "Proyek"}
          </a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {lang === 'en' ? "Experience" : "Pengalaman"}
          </a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            {lang === 'en' ? "Skills" : "Keahlian"}
          </a>
          <button
            onClick={onOpenCertModal}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {lang === 'en' ? "PaDi UMKM Certificate" : "Sertifikat PaDi UMKM"}
          </button>
          <button
            onClick={onOpenResume}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {lang === 'en' ? "Resume / CV" : "CV Lengkap"}
          </button>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            title="Scroll to top"
          >
            <span>{lang === 'en' ? "Back to Top" : "Kembali ke Atas"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 text-center text-slate-400 dark:text-slate-500 text-[11px]">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All engineering rights and production systems documented from official resume & PaDi UMKM Hackathon credential.
      </div>
    </footer>
  );
}
