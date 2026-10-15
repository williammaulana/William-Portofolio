import { useState } from 'react';
import { X, Printer, Mail, Phone, MapPin, Copy, Check, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export default function ResumeModal({ isOpen, onClose, lang }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 my-6 max-h-[92vh] flex flex-col transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar (no-print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 no-print shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {lang === 'en' ? "Curriculum Vitae / Resume" : "Resume / CV Lengkap"}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              William Maulana Yusuf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'en' ? "Copied!" : "Disalin!") : (lang === 'en' ? "Copy Email" : "Salin Email")}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? "Print / Save PDF" : "Cetak / Simpan PDF"}</span>
            </button>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
              <span>{lang === 'en' ? "Close" : "Tutup"}</span>
            </button>
          </div>
        </div>

        {/* Scrollable ATS-Friendly Resume Content */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 print:bg-white print:text-black print:p-0">
          
          {/* Header Profile Info */}
          <div className="border-b-2 border-slate-900 dark:border-slate-700 print:border-black pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 print:text-blue-700 mt-1">
                  Full-Stack Software Developer
                </p>
                <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400 print:text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-medium text-slate-900 dark:text-slate-200 print:text-black">{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PERSONAL_INFO.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PERSONAL_INFO.address}</span>
                  </div>
                </div>
              </div>

              {/* Badges / Quick stats */}
              <div className="text-xs text-right space-y-1 text-slate-600 dark:text-slate-400 print:text-gray-700 sm:self-end">
                <div><span className="font-semibold text-slate-900 dark:text-slate-200 print:text-black">Experience:</span> 7+ Years (2019 - Present)</div>
                <div><span className="font-semibold text-slate-900 dark:text-slate-200 print:text-black">Location:</span> Bandung, West Java, ID</div>
                <div><span className="font-semibold text-slate-900 dark:text-slate-200 print:text-black">Companies:</span> PT Smooets · Webhade Creative</div>
                <div><span className="font-semibold text-slate-900 dark:text-slate-200 print:text-black">Award:</span> PaDi UMKM Tech Hackathon (Telkom)</div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-slate-300 print:text-black uppercase border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-gray-800 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-slate-300 print:text-black uppercase border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="flex items-baseline justify-between text-xs sm:text-sm">
              <span className="font-bold text-slate-900 dark:text-white print:text-black">{PERSONAL_INFO.education.institution}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">Bandung, Indonesia</span>
            </div>
          </div>

          {/* Key Award & Certification */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-slate-300 print:text-black uppercase border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Certifications & Awards
            </h2>
            <div className="flex items-start justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">PaDi UMKM Tech Hackathon Certificate</span>
                <span className="text-slate-600 dark:text-slate-400 print:text-gray-700 block text-xs mt-0.5">
                  Issued by Jimmy Karisma Ramadhan (CEO PaDi UMKM - Telkom Indonesia / Kementerian BUMN)
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-gray-600 shrink-0">Aug 2023</span>
            </div>
          </div>

          {/* Employment History */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-slate-300 print:text-black uppercase border-b border-slate-200 dark:border-slate-800 pb-1 mb-4">
              Employment & Key Projects
            </h2>

            <div className="space-y-6 text-xs sm:text-sm">
              
              {/* 2025: Building Affiliate Program & E-Commerce */}
              <div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">Building Materials E-Commerce & Building Affiliate Program</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2 font-medium">Senior Software Developer</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2025 - Present</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 my-1">
                  Java Spring Boot, Next.js, Tailwind CSS, Laravel, MySQL, RajaOngkir, Cowx
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Engineered dynamic affiliate marketing program with configurable merchant commission rules and instant balance payouts.</li>
                  <li>Revamped building materials online marketplace: customer registration, wishlist, So & Do Bill (Sales Order & Delivery Order) billing workflows, and RajaOngkir logistics.</li>
                  <li>Engineered product faceted filters, breadcrumb navigation, technical SEO, and mobile optimization.</li>
                </ul>
              </div>

              {/* 2024 - 2025: Web Based Delivery Services */}
              <div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">Web Based Delivery Services Application From Abroad</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2 font-medium">Full-Stack Web Developer</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2024 - 2025</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 my-1">
                  Golang, Vue.js, Laravel, REST API, jQuery, MySQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Developed web application for international delivery services handling cargo from abroad.</li>
                  <li>Implemented customs import tax calculation algorithm and parcel tracking system with email alerts.</li>
                </ul>
              </div>

              {/* 2023: PT Smooets Technology Outsourcing (SIA & PaDi UMKM) */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 print:bg-transparent print:p-0 border border-slate-200 dark:border-slate-700 print:border-none">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black text-sm">PT Smooets Technology Outsourcing</span>
                    <span className="text-xs text-blue-700 dark:text-blue-400 block font-semibold">Software Developer & Outsourcing Engineer</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2023</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 my-1">
                  Next.js, React.js, Express.js, MySQL, Microservices, Mixpanel Analytics
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1.5 mt-2">
                  <li><strong className="text-slate-900 dark:text-slate-100 print:text-black">Government Fund Information System (SIA):</strong> Cross-squad sprint feature implementation to calculate and define budget balances in user stories; conducted manual testing, E2E testing, and API regression testing for microservices onboarding.</li>
                  <li><strong className="text-slate-900 dark:text-slate-100 print:text-black">PaDi UMKM (B2B MSME E-Commerce Telkom / BUMN):</strong> Implemented Product Tax Counting algorithms compliant with government LKPP procurement rules; built 'Jasa' (Services) Marketplace module for UMKM vendors.</li>
                  <li>Configured Mixpanel tracking pipelines across Register, Login, and Buyer B2B Dashboard funnels; integrated NPWP validation for LKPP accounts.</li>
                  <li>Awarded official PaDi UMKM Tech Hackathon Certificate by CEO Jimmy Karisma Ramadhan (August 2023).</li>
                </ul>
              </div>

              {/* 2022: Study Overseas Management System */}
              <div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">Study Overseas Management System & Education CRM</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2 font-medium">Full-Stack Web Developer</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2022</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 my-1">
                  PHP Laravel 5.4, REST API, jQuery, MySQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Counselor, student application lifecycle, follow-up milestone tracking, and referral commission calculations.</li>
                  <li>Automated counselor commission refund calculations and language institute invoice generator.</li>
                </ul>
              </div>

              {/* 2019 - 2021: Webhade Creative */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 print:bg-transparent print:p-0 border border-slate-200 dark:border-slate-700 print:border-none">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black text-sm">Webhade Creative</span>
                    <span className="text-xs text-blue-700 dark:text-blue-400 block font-semibold">Fullstack & Backend PHP Developer</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2019 - 2021</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 my-1">
                  PHP, Laravel, Node.js, Puppeteer, Vue.js, MySQL, Midtrans
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1.5 mt-2">
                  <li><strong className="text-slate-900 dark:text-slate-100 print:text-black">Wellborn (Backend PHP Development | 2021):</strong> Backend e-commerce development for Bandung's premier streetwear brand, managing product catalogs, shopping cart workflows, Midtrans gateway checkout, and automated notification emails.</li>
                  <li><strong className="text-slate-900 dark:text-slate-100 print:text-black">KSP Mulatama (Fullstack Development | 2020 - 2021):</strong> Digitized member savings, loan appraisal workflows, interest calculations, collateral archive records, and official procurement memorandum forms (Nota Dinas + RAB).</li>
                  <li><strong className="text-slate-900 dark:text-slate-100 print:text-black">Patisa Inventory (Fullstack PHP Development | 2019 - 2020):</strong> Factory water gallon count dashboard, broken/damaged gallon reconciliations, customer accounts receivable tracker, and billing dispatches.</li>
                  <li><strong className="text-slate-900 dark:text-slate-100 print:text-black">Robot Tumi (Backend Development | 2020):</strong> Automated stock buy/sell order execution engine using Puppeteer headless web automation, algorithm triggers, transaction auditing, and daily reporting.</li>
                  <li><strong className="text-slate-900 dark:text-slate-100 print:text-black">Kirimin.co.id (Backend Development | 2019 - 2021):</strong> Backend REST APIs for domestic and international courier deliveries, import customs tax computation algorithm, and real-time shipment status tracking.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Technical Skills Footer */}
          <div>
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-slate-300 print:text-black uppercase border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Skills & Tooling
            </h2>
            <div className="text-xs text-slate-700 dark:text-slate-300 print:text-gray-800 leading-relaxed font-mono">
              <span className="font-bold text-slate-900 dark:text-white print:text-black">Languages & Frameworks: </span>
              Node.js, Express.js, PHP, Laravel, Lumen, Vue.js, Blade PHP, jQuery, Next.js, Quasar, Java Spring Boot, Golang
              <br />
              <span className="font-bold text-slate-900 dark:text-white print:text-black">Databases & Environment: </span>
              MySQL, PostgreSQL, Git, Ubuntu / Linux, Windows
              <br />
              <span className="font-bold text-slate-900 dark:text-white print:text-black">Integrations: </span>
              Midtrans Payment Gateway, Mixpanel Analytics, RajaOngkir Logistics, Puppeteer Automation, Cowx Notifications
            </div>
          </div>

        </div>

        {/* Modal Footer with Primary Close Button (no-print) */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between no-print shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Source: Official Resume, PaDi UMKM Certificate & Company Records
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'en' ? "Close CV" : "Tutup CV"}
          </button>
        </div>

      </div>
    </div>
  );
}
