import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: 'en' | 'id';
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectsSection({ lang, onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'fintech' | 'enterprise' | 'logistics' | 'automation'>('all');

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Systems (13)' : 'Semua Sistem (13)' },
    { id: 'ecommerce', label: lang === 'en' ? 'E-Commerce' : 'E-Commerce' },
    { id: 'fintech', label: lang === 'en' ? 'FinTech & Affiliate' : 'FinTech & Afiliasi' },
    { id: 'enterprise', label: lang === 'en' ? 'Enterprise & Gov' : 'Enterprise & Gov' },
    { id: 'logistics', label: lang === 'en' ? 'Logistics' : 'Logistik' },
    { id: 'automation', label: lang === 'en' ? 'Automation' : 'Otomasi' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-[#0b0f19] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
              {lang === 'en' ? "Engineering Portfolio" : "Portofolio Rekayasa Perangkat Lunak"}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              {lang === 'en' ? "Selected Systems & Commercial Work" : "Sistem & Aplikasi Produksi Pilihan"}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {lang === 'en'
                ? "Thirteen mission-critical platforms built across e-commerce, automated trading, international freight, and government procurement ecosystems."
                : "Tiga belas sistem berskala produksi yang dirancang mencakup e-commerce, automasi trading, logistik internasional, dan pengadaan instansi pemerintah."}
            </p>
          </div>

          {/* Interactive filter controls (functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200/60 dark:border-slate-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeaturedHero = project.featured && idx < 2;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-400/90 dark:hover:border-blue-500/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeaturedHero ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Visual Preview for projects with images */}
                  {project.image && (
                    <div className="relative aspect-video sm:aspect-[21/9] overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Quiet metadata on image */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="font-semibold">{project.client}</span>
                        <span className="font-mono text-[11px] opacity-80">{project.period}</span>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Unboxed Metadata Header: No pills */}
                    {!project.image && (
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{project.client}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.period}</span>
                      </div>
                    )}

                    {/* Title */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="p-1 rounded-md text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Subtitle / summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                      {lang === 'en' ? project.summary : project.summaryId}
                    </p>

                    {/* Key accomplishments checklist */}
                    <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {(lang === 'en' ? project.highlights : project.highlightsId).slice(0, 2).map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">›</span>
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Unboxed clean stack items */}
                <div className="px-6 py-3.5 bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                    {project.stack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tech} className="flex items-center gap-1.5">
                        <span className="text-slate-800 dark:text-slate-200 font-medium">{tech}</span>
                        {tIdx < Math.min(project.stack.length, 3) - 1 && <span className="text-slate-300 dark:text-slate-700">/</span>}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-slate-400 dark:text-slate-500 font-sans text-[11px]">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                    {lang === 'en' ? "Details" : "Detail"} →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
