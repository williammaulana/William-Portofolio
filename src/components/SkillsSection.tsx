import { Database, Layout, Server, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: 'en' | 'id';
}

export default function SkillsSection({ lang }: SkillsSectionProps) {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-[#0b0f19] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
            {lang === 'en' ? "Technical Competencies" : "Kompetensi Teknis"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {lang === 'en' ? "Engineering Stack & Tooling" : "Keahlian Teknologi & Tooling"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === 'en'
              ? "Pragmatic mastery of full-stack ecosystems across modern JavaScript/TypeScript (Next.js, React, Node.js), robust PHP frameworks (Laravel, Lumen), REST microservices, and high-volume relational databases."
              : "Penguasaan ekosistem full-stack modern meliputi JavaScript/TypeScript (Next.js, React, Node.js), framework PHP teruji (Laravel, Lumen), microservices REST, serta database relasional berkapasitas tinggi."}
          </p>
        </div>

        {/* 4-Column Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-slate-900/50 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-sm flex items-center justify-center mb-4">
                  {getCategoryIcon(idx)}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {lang === 'en' ? cat.category : cat.categoryId}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                Verified in production
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Architecture Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              {lang === 'en' ? "Architecture Philosophy" : "Prinsip Arsitektur"}
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'en'
                ? "Reliable Business Logic, Seamless Integrations, Measurable Growth"
                : "Logika Bisnis Andal, Integrasi Mulus, Dampak Terukur"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? "Specialized in transactional safety, high-precision commission calculations, tax compliance (LKPP/PPN), and resilient third-party integrations (Midtrans, Mixpanel, RajaOngkir)."
                : "Berfokus pada keandalan transaksi, presisi perhitungan komisi, kepatuhan pajak (LKPP/PPN), dan integrasi pihak ketiga yang tangguh (Midtrans, Mixpanel, RajaOngkir)."}
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 dark:text-white bg-white dark:bg-blue-600 hover:bg-slate-100 dark:hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            {lang === 'en' ? "Discuss Technical Requirements" : "Konsultasi Kebutuhan Teknis"}
          </a>
        </div>

      </div>
    </section>
  );
}
