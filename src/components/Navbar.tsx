import { useState } from 'react';
import { Menu, X, FileText, Globe, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: 'en' | 'id';
  isDark: boolean;
  onToggleLang: () => void;
  onToggleDark: () => void;
  onOpenResume: () => void;
}

export default function Navbar({
  lang,
  isDark,
  onToggleLang,
  onToggleDark,
  onOpenResume,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: lang === 'en' ? "Projects" : "Proyek" },
    { href: "#experience", label: lang === 'en' ? "Experience" : "Pengalaman" },
    { href: "#skills", label: lang === 'en' ? "Skills" : "Keahlian" },
    { href: "#hackathon", label: lang === 'en' ? "Hackathon Award" : "Sertifikat" },
    { href: "#contact", label: lang === 'en' ? "Contact" : "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Dark Mode Toggle, Language Switcher & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={onToggleDark}
            className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? (lang === 'en' ? "Switch to Light Theme" : "Beralih ke Mode Terang") : (lang === 'en' ? "Switch to Dark Theme" : "Beralih ke Mode Gelap")}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors whitespace-nowrap cursor-pointer"
            title={lang === 'en' ? "Ubah ke Bahasa Indonesia" : "Switch to English"}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span className="font-semibold">{lang === 'en' ? 'ID' : 'EN'}</span>
          </button>

          {/* Resume Quick Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:border dark:border-slate-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'View CV' : 'Lihat CV'}</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            {lang === 'en' ? 'Get in Touch' : 'Hubungi Saya'}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-4 shadow-xl space-y-3">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 py-1 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'View Resume / CV' : 'Lihat Resume / CV'}</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button
                onClick={onToggleDark}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 cursor-pointer"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>

              <button
                onClick={onToggleLang}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
