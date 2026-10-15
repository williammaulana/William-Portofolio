import { X, CheckCircle2, Shield } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export default function ProjectDetailModal({ project, isOpen, onClose, lang }: ProjectDetailModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 my-8 max-h-[90vh] flex flex-col transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.period}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Project Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Optional Project Visual */}
          {project.image && (
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-72 bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Unboxed Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
              {lang === 'en' ? "Technology & Stack" : "Teknologi & Tools"}
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
              {project.stack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="text-slate-900 dark:text-slate-200 font-semibold">{tech}</span>
                  {i < project.stack.length - 1 && <span className="text-slate-300 dark:text-slate-700">/</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Summary / Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              {lang === 'en' ? "System Architecture & Overview" : "Ringkasan Arsitektur Sistem"}
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'en' ? project.summary : project.summaryId}
            </p>
          </div>

          {/* Key Deliverables & Implementation Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              {lang === 'en' ? "Key Engineering Deliverables" : "Pencapaian & Fungsionalitas Utama"}
            </h4>
            <ul className="space-y-2.5">
              {(lang === 'en' ? project.highlights : project.highlightsId).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Notes if available */}
          {project.architectureNotes && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-200">
                <Shield className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{lang === 'en' ? "Production Reliability & Design Decisions" : "Pertimbangan Desain & Reliabilitas"}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === 'en' ? project.architectureNotes : project.architectureNotesId}
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            ID: {project.id}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'en' ? "Close" : "Tutup"}
          </button>
        </div>

      </div>
    </div>
  );
}
