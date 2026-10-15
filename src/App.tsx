/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import CertificateSection from './components/CertificateSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import CertificateModal from './components/CertificateModal';
import ResumeModal from './components/ResumeModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar with 3-Zone Contract & Dark Mode Toggle */}
      <Navbar
        lang={lang}
        isDark={isDark}
        onToggleLang={toggleLanguage}
        onToggleDark={toggleTheme}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Split Screen & Key Metrics */}
        <HeroSection
          lang={lang}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenCertModal={() => setIsCertModalOpen(true)}
        />

        {/* Selected Systems & Commercial Work (Bento Grid + Filter) */}
        <ProjectsSection
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Dedicated PaDi UMKM Tech Hackathon Certificate Showcase */}
        <CertificateSection
          lang={lang}
          onOpenCertModal={() => setIsCertModalOpen(true)}
        />

        {/* Professional Career & Timeline */}
        <ExperienceSection lang={lang} />

        {/* Technical Stack & Architecture Philosophy */}
        <SkillsSection lang={lang} />

        {/* Contact & Project Inquiry Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCertModal={() => setIsCertModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        lang={lang}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
