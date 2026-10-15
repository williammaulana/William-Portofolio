import { Award, CheckCircle2, ZoomIn, ShieldCheck, Building } from 'lucide-react';
import { CERTIFICATE_INFO } from '../data/portfolioData';

interface CertificateSectionProps {
  lang: 'en' | 'id';
  onOpenCertModal: () => void;
}

export default function CertificateSection({ lang, onOpenCertModal }: CertificateSectionProps) {
  return (
    <section id="hackathon" className="py-16 md:py-24 bg-slate-50 dark:bg-[#090d16] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
            <Award className="w-4 h-4" />
            <span>{lang === 'en' ? "Verified Achievement & Recognition" : "Prestasi & Pengakuan Terverifikasi"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {lang === 'en' ? "PaDi UMKM Tech Hackathon Finalist" : "Finalis PaDi UMKM Tech Hackathon"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === 'en'
              ? "Official recognition awarded by Jimmy Karisma Ramadhan (CEO PaDi UMKM) for high-caliber participation and engineering execution in the national MSME digital procurement ecosystem hackathon."
              : "Penghargaan resmi yang ditandatangani oleh Jimmy Karisma Ramadhan (CEO PaDi UMKM) atas partisipasi dan keahlian rekayasa perangkat lunak dalam hackathon ekosistem pengadaan digital BUMN untuk UMKM."}
          </p>
        </div>

        {/* Certificate Card & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Certificate Graphical Render (Pure Code, Typography & Vector CSS - Zero Images) */}
          <div className="lg:col-span-7">
            <div 
              onClick={onOpenCertModal}
              className="relative group cursor-pointer bg-white dark:bg-slate-900/60 rounded-2xl shadow-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500"
            >
              {/* Certificate Inner Canvas Styled precisely after the official document */}
              <div className="relative p-5 sm:p-8 md:p-10 bg-gradient-to-br from-white via-slate-50/50 to-cyan-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-sky-950/40 overflow-hidden min-h-[340px] flex flex-col justify-between">
                
                {/* Background circuit geometric watermarks (Vector SVG only) */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-cyan-600/10 dark:from-sky-500/10 to-transparent pointer-events-none" />
                <svg className="absolute -right-12 -top-12 w-64 h-64 text-cyan-600/10 dark:text-sky-500/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <path d="M10 10 H90 V90 H10 Z" strokeWidth="0.5" />
                  <path d="M20 20 H80 V80 H20 Z" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
                  <path d="M50 10 V90 M10 50 H90" strokeWidth="0.5" />
                </svg>

                {/* Top Row: PaDi UMKM Logo Lockup (CSS & Typography) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 relative z-10 border-b border-slate-200/60 dark:border-slate-800 pb-5">
                  <div className="space-y-0.5">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white block leading-none">
                      TECH
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-sky-800 dark:text-sky-400 block leading-none">
                      HACKATHON
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 block uppercase pt-0.5">
                      CERTIFICATE
                    </span>
                  </div>

                  {/* PaDi UMKM Brand Logo Box */}
                  <div className="flex flex-col items-start sm:items-end shrink-0">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-900 text-white font-bold text-xs sm:text-sm tracking-tight shadow-sm">
                      <span className="text-xs text-sky-200 font-medium">PaDi</span>
                      <span className="text-white font-extrabold tracking-wider">UMKM</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-1">
                      Telkom Indonesia / BUMN
                    </span>
                  </div>
                </div>

                {/* Center: Recipient */}
                <div className="my-6 sm:my-8 relative z-10">
                  <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">
                    THIS CERTIFICATE IS PROUDLY PRESENTED TO
                  </p>
                  <div className="inline-block border-b-2 border-slate-900 dark:border-white pb-1 pr-4 sm:pr-8 max-w-full">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white break-words">
                      William Maulana Yusup
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 sm:mt-4 max-w-lg leading-relaxed">
                    Congratulations and thank you for participating in our <strong className="font-semibold text-slate-900 dark:text-white">Hackathon</strong> conducted on <span className="font-semibold text-slate-900 dark:text-white">10th & 11th of August 2023</span>.
                  </p>
                </div>

                {/* Bottom Row: Signatory */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 relative z-10">
                  <div className="space-y-0.5">
                    {/* Simulated Signature */}
                    <div className="font-serif italic text-lg sm:text-xl text-slate-800 dark:text-slate-200 tracking-wide select-none">
                      ✍️ Jimmy Karisma Ramadhan
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white pt-0.5">
                      Jimmy Karisma Ramadhan
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      CEO PaDi UMKM
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200/60 dark:border-sky-800/60 px-2.5 py-1 rounded">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
                      <span>Verified August 2023</span>
                    </div>
                  </div>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm">
                  <ZoomIn className="w-5 h-5" />
                  <span>{lang === 'en' ? "Click to Expand Full Certificate" : "Klik untuk Perbesar Sertifikat"}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Context & Practical Implementation Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900/70 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{lang === 'en' ? "About PaDi UMKM Ecosystem" : "Tentang Ekosistem PaDi UMKM"}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? "PaDi UMKM (Pasar Digital Usaha Mikro, Kecil, dan Menengah) is a centralized marketplace connecting Indonesian state-owned enterprises (BUMN) with verified local suppliers and micro-businesses."
                  : "PaDi UMKM adalah platform marketplace pengadaan B2B terpusat yang menghubungkan BUMN Indonesia dengan ribuan pelaku usaha mikro, kecil, dan menengah (UMKM)."}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  {lang === 'en' ? "Direct Engineering Contributions:" : "Kontribusi Engineering Terkait:"}
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Product Tax Counting:</strong> Algorithmic tax computation for B2B transactions compliant with government LKPP standards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Jasa Marketplace Module:</strong> Services catalog engine allowing UMKM service providers to register, edit, and offer services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>User Tracking & Analytics:</strong> Mixpanel funnel tracking across user registration, authentication, and buyer dashboard.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>NPWP & SEO:</strong> Tax registration verification for LKPP accounts and canonical SEO structure on buyer portals.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCertModal}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 dark:text-slate-100 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>{lang === 'en' ? "Inspect Certificate Details" : "Lihat Detail Sertifikat"}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
