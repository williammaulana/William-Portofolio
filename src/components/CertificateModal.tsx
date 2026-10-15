import { useEffect } from 'react';
import { X, Award, ShieldCheck, Printer, CheckCircle } from 'lucide-react';
import { CERTIFICATE_INFO } from '../data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export default function CertificateModal({ isOpen, onClose, lang }: CertificateModalProps) {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 my-auto max-h-[94vh] flex flex-col transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Top Header Bar with Prominent Close Button */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/90 no-print shrink-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">
            <Award className="w-4 h-4 text-amber-500 shrink-0" />
            <span id="cert-modal-title" className="truncate">
              PaDi UMKM Tech Hackathon Certificate
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Print Action */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print Certificate"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'en' ? "Print / PDF" : "Cetak PDF"}</span>
            </button>

            {/* Clear Primary Top Close Button */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label={lang === 'en' ? "Close modal" : "Tutup modal"}
            >
              <X className="w-4 h-4" />
              <span>{lang === 'en' ? "Close" : "Tutup"}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Certificate Sheet (Pure Code & Typography - Zero Images) */}
        <div className="p-3 sm:p-6 md:p-8 overflow-y-auto bg-slate-100/60 dark:bg-slate-950/60">
          <div className="relative border-2 sm:border-4 border-double border-slate-300 dark:border-slate-700 p-5 sm:p-8 md:p-12 rounded-xl bg-gradient-to-br from-white via-slate-50/70 to-sky-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-sky-950/40 overflow-hidden shadow-inner">
            
            {/* Vector circuit network decoration (SVG - No raster images) */}
            <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-sky-600/10 dark:from-sky-500/10 to-transparent pointer-events-none" />
            <svg className="absolute -right-12 -top-12 w-56 h-56 sm:w-72 sm:h-72 text-sky-600/10 dark:text-sky-400/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M10 10 H90 V90 H10 Z" strokeWidth="0.5" />
              <path d="M20 20 H80 V80 H20 Z" strokeWidth="0.5" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
              <path d="M50 10 V90 M10 50 H90" strokeWidth="0.5" />
            </svg>

            {/* Header: Title and PaDi UMKM Logo Lockup (Rendered with pure HTML/CSS) */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 relative z-10 border-b border-slate-200/70 dark:border-slate-800 pb-6 sm:pb-8">
              <div className="space-y-0.5 sm:space-y-1">
                <span className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white block leading-none">
                  TECH
                </span>
                <span className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-sky-800 dark:text-sky-400 block leading-none">
                  HACKATHON
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 block uppercase pt-1">
                  CERTIFICATE
                </span>
              </div>

              {/* PaDi UMKM Logo rendered in pure HTML / CSS */}
              <div className="flex flex-col items-start sm:items-end shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-sky-900 text-white font-bold text-sm sm:text-base tracking-tight shadow">
                  <span className="text-sky-300 font-semibold text-xs sm:text-sm">PaDi</span>
                  <span className="text-white font-extrabold tracking-wider">UMKM</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-1 uppercase tracking-wider">
                  Kementerian BUMN & Telkom
                </div>
              </div>
            </div>

            {/* Recipient Notice */}
            <div className="my-8 sm:my-10 text-center relative z-10">
              <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase mb-3 sm:mb-4">
                THIS CERTIFICATE IS PROUDLY PRESENTED TO
              </p>
              
              <div className="inline-block border-b-2 border-slate-900 dark:border-white pb-1.5 sm:pb-2 px-4 sm:px-8 max-w-full">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display break-words">
                  {CERTIFICATE_INFO.recipient}
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 mt-5 sm:mt-6 max-w-xl mx-auto leading-relaxed px-2">
                Congratulations and thank you for participating in our <strong className="font-semibold text-slate-900 dark:text-white">Hackathon</strong> conducted on <span className="font-semibold text-slate-900 dark:text-white">{CERTIFICATE_INFO.date}</span>.
              </p>
            </div>

            {/* Signatory & Official Verification */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
                  <div className="font-semibold text-slate-900 dark:text-white">Official PaDi UMKM Credential</div>
                  <div>Issued August 11, 2023 · Jakarta, ID</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500">Awarded to William Maulana Yusup</div>
                </div>
              </div>

              <div className="w-full sm:w-auto text-left sm:text-right space-y-1">
                {/* Handwritten Calligraphic Signature */}
                <div className="font-serif italic text-xl sm:text-2xl text-slate-900 dark:text-slate-100 select-none pb-1">
                  Jimmy Karisma Ramadhan
                </div>
                <div className="w-40 sm:w-48 h-0.5 bg-slate-900 dark:bg-white sm:ml-auto" />
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white pt-1">
                  {CERTIFICATE_INFO.signatory}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {CERTIFICATE_INFO.signatoryTitle}
                </div>
              </div>
            </div>

          </div>

          {/* Verification Details Strip */}
          <div className="mt-4 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{lang === 'en' ? "Verified Hackathon Achievement" : "Prestasi Hackathon Terverifikasi"}</span>
            </div>
            <p className="leading-relaxed">
              {CERTIFICATE_INFO.verificationNote}
            </p>
          </div>
        </div>

        {/* Modal Footer with Primary Close Button */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 no-print shrink-0">
          <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
            {lang === 'en' ? "Press ESC or click outside to close" : "Tekan ESC atau klik di luar untuk menutup"}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {lang === 'en' ? "Print / Save PDF" : "Cetak / Simpan PDF"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
            >
              {lang === 'en' ? "Close Certificate" : "Tutup Sertifikat"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
