import { ArrowRight, Award, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATE_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  lang: 'en' | 'id';
  onOpenResume: () => void;
  onOpenCertModal: () => void;
}

export default function HeroSection({ lang, onOpenResume, onOpenCertModal }: HeroSectionProps) {
  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Kicker: Clean unboxed metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                <span className="text-slate-700 dark:text-slate-300 font-semibold">{PERSONAL_INFO.title}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  {PERSONAL_INFO.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Available for Hire</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6 text-balance">
                {lang === 'en' ? (
                  <>
                    Engineering scalable <span className="text-blue-600 dark:text-blue-400">e-commerce platforms</span>, affiliate engines & mission-critical web systems.
                  </>
                ) : (
                  <>
                    Membangun platform <span className="text-blue-600 dark:text-blue-400">e-commerce berskala tinggi</span>, sistem afiliasi & aplikasi web enterprise.
                  </>
                )}
              </h1>

              {/* Lead Copy */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
                {lang === 'en' ? PERSONAL_INFO.bio : PERSONAL_INFO.bioId}
              </p>

              {/* Contact meta strip */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 mb-8 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a
                  href={`https://wa.me/6281553939041`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{PERSONAL_INFO.phoneDisplay}</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <span>Education:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{PERSONAL_INFO.education.institution}</span>
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              >
                <span>{lang === 'en' ? "Explore Featured Work" : "Lihat Portofolio Proyek"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCertModal}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border dark:border-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>{lang === 'en' ? "PaDi UMKM Hackathon Award" : "Sertifikat Hackathon"}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              >
                <span>{lang === 'en' ? "View Resume / CV" : "Lihat CV Lengkap"}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container at Matching Height */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-xl group">
              <img
                src="/src/assets/images/hero_dev_workspace_1792051436328.jpg"
                alt="William Maulana Yusuf developer workstation"
                className="w-full h-80 sm:h-96 lg:h-full min-h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Bottom overlay badge info */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                  <span>Developer & Architecture</span>
                  <span>Bandung · Remote</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  William Maulana Yusuf
                </p>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Specializing in Next.js, Java Spring Boot, Laravel, Golang, and automated transaction engines.
                </p>
                
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                  <button 
                    onClick={onOpenCertModal}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-medium cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Verified PaDi UMKM Hackathon Finalist</span>
                  </button>
                  <span className="text-[11px] text-slate-400 font-mono">2019 - Present</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-column KPI strip below hero split */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {lang === 'en' ? stat.label : stat.labelId}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
