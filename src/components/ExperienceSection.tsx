import { CheckCircle2, GraduationCap, Building2 } from 'lucide-react';
import { WORK_EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: 'en' | 'id';
}

export default function ExperienceSection({ lang }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 dark:bg-[#090d16] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
            {lang === 'en' ? "Career Chronology" : "Kronologi Karier"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {lang === 'en' ? "Professional Experience & Company Track Record" : "Pengalaman Profesional & Rekam Jejak Perusahaan"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === 'en'
              ? "Over 7 continuous years delivering production software across distinguished agencies and enterprise tech teams, including PT Smooets Technology Outsourcing and Webhade Creative."
              : "Lebih dari 7 tahun berkarya membangun sistem produksi di agensi teknologi dan tim enterprise, termasuk PT Smooets Technology Outsourcing dan Webhade Creative."}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                
                {/* Left: Role, Company and Project Context */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.role}</span>
                    {exp.company && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1 font-bold text-slate-800 dark:text-slate-200">
                          <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          {lang === 'en' ? exp.company : (exp.companyId || exp.company)}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {exp.project}
                  </h3>
                </div>

                {/* Right: Unboxed Tech tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                  {exp.tech.map((t, tIdx) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{t}</span>
                      {tIdx < exp.tech.length - 1 && <span className="text-slate-300 dark:text-slate-700">/</span>}
                    </span>
                  ))}
                </div>

              </div>

              {/* Responsibilities list */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {(lang === 'en' ? exp.points : exp.pointsId).map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Milestone Card */}
        <div className="mt-8 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {lang === 'en' ? "Formal Education" : "Pendidikan Formal"}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.education.institution}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {PERSONAL_INFO.education.location} · {PERSONAL_INFO.education.focus}
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Bandung, Jawa Barat
          </div>
        </div>

      </div>
    </section>
  );
}
