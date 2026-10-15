import { useState } from 'react';
import { X, Printer, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
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
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
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
                <div><span className="font-semibold text-slate-900 dark:text-slate-200 print:text-black">Hackathon Award:</span> PaDi UMKM (Telkom)</div>
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

          {/* Employment History (matching resume line for line) */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold tracking-widest text-slate-900 dark:text-slate-300 print:text-black uppercase border-b border-slate-200 dark:border-slate-800 pb-1 mb-4">
              Employment & Key Projects
            </h2>

            <div className="space-y-5 text-xs sm:text-sm">
              
              {/* 2025: Building Affiliate Program */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Building Affiliate Program</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2025</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  Next.js, Express.js, MySQL, Cowx Notifications
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Development of Affiliate Share Product Program with custom tracking link.</li>
                  <li>Merchant controls to toggle product sharing permissions per item.</li>
                  <li>Implemented dynamic commission calculation engine by percentage set by merchant.</li>
                  <li>Engineered affiliate balance withdrawal settlement workflows.</li>
                  <li>Affiliate dashboard with authentication, registration, and forgot password.</li>
                  <li>Serial number generation and automated Cowx notifications upon transaction success.</li>
                </ul>
              </div>

              {/* 2025 - Present: Building Materials E-Commerce */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Building Materials E-Commerce in Indonesia</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2025 - Present</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  Next.js, Tailwind CSS, Laravel, MySQL, RajaOngkir
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Revamped key pages: customer registration, blog, wishlist, product details, and checkout.</li>
                  <li>Implemented So & Do Bill (Sales Order & Delivery Order) for heavy building materials logistics.</li>
                  <li>Engineered product faceted filters, breadcrumb navigation, technical SEO, and mobile optimization.</li>
                </ul>
              </div>

              {/* 2024 - 2025: Delivery Services From Abroad */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Web Based Delivery Services Application From Abroad</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2024 - 2025</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  Vue.js, Laravel, REST API, jQuery, MySQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Developed web application for international delivery services handling cargo from abroad.</li>
                  <li>Implemented UI/UX layout, backend integration, bug fixing, and tracking system enhancement.</li>
                  <li>Built automated customs import tax calculation functions and transactional customer emails.</li>
                </ul>
              </div>

              {/* 2023: PaDi UMKM */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">E-Commerce in Indonesia for UMKM (PaDi UMKM)</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2023</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  Next.js, Express.js, MySQL, Mixpanel Analytics
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Implemented Product Tax Counting algorithms for B2B procurement transactions.</li>
                  <li>Developed 'Jasa' (Services) Marketplace module: Add, edit, and list services for UMKM providers.</li>
                  <li>Implemented Mixpanel user behavior tracking across Register, Login, and Buyer B2B Dashboard.</li>
                  <li>Integrated NPWP tax identification validation for LKPP government agency procurement.</li>
                  <li>SEO & Canonical URL architecture optimizations across PaDi UMKM Buyer portal.</li>
                </ul>
              </div>

              {/* 2023: Government Fund System */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Government Fund Information System</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2023</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  React.js, Express.js, MySQL, Microservices
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Cross-squad agile collaboration implementing balance definition in sprint stories.</li>
                  <li>Executed manual testing, E2E testing, and API regression testing for onboarding microservices.</li>
                </ul>
              </div>

              {/* 2022: Study Overseas Management System */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Study Overseas Management System</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2022</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  PHP Laravel 5.4, REST API, jQuery, MySQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Counselor, student application lifecycle, follow-up, and commission referral ledger.</li>
                  <li>Automated counselor commission refund calculations and language institute invoice generator.</li>
                </ul>
              </div>

              {/* 2021: Automatically System Buy and Sell Stock */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Automatically System Buy and Sell Company Stock</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2021</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  Node.js, Express.js, Puppeteer, REST API, MySQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Automated stock buy and sell order execution using Puppeteer headless web automation.</li>
                  <li>Generated automated daily reports and order progress verification logs.</li>
                </ul>
              </div>

              {/* 2020 - 2021: Procurement Platform */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Enterprise Procurement Platform</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2020 - 2021</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  Laravel, MySQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Wrote complete application architecture skeleton, database schema, and daily reporting.</li>
                  <li>Implemented official invoice feature 'Nota Dinas Form Kebutuhan + RAB' and tracking document archive.</li>
                </ul>
              </div>

              {/* 2019 - 2020: Crowdfunding, Pawn App & Retail Store */}
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-slate-900 dark:text-white print:text-black">Foundational Platforms (Donation, Pawn App, E-Commerce)</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 print:text-gray-600">2019 - 2020</span>
                </div>
                <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 print:text-blue-700 mb-1.5">
                  Laravel, Next.js, Midtrans, MySQL
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 print:text-gray-800 space-y-1">
                  <li>Donation platform: Campaign scope, donor database, Midtrans gateway, automated email broadcasts.</li>
                  <li>Inventory gallon water stock: Factory gallon count, broken gallon write-off, customer debt tracking.</li>
                  <li>Pawn goods web app: Goods appraisal request submission, operator approval/rejection, loan interest formulas.</li>
                  <li>Apparel retail store: Product categories, shopping cart, Midtrans integration, transactional receipt emails.</li>
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
              Node.js, Express.js, PHP, Laravel, Lumen, Vue.js, Blade PHP, jQuery, Next.js, Quasar
              <br />
              <span className="font-bold text-slate-900 dark:text-white print:text-black">Databases & Environment: </span>
              MySQL, PostgreSQL, Git, Ubuntu / Linux, Windows
              <br />
              <span className="font-bold text-slate-900 dark:text-white print:text-black">Integrations: </span>
              Midtrans Payment Gateway, Mixpanel Analytics, RajaOngkir Logistics, Puppeteer Automation, Cowx Notifications
            </div>
          </div>

        </div>

        {/* Modal Footer (no-print) */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between no-print shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Source: Official Resume & PaDi UMKM Certificate
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'en' ? "Close CV" : "Tutup CV"}
          </button>
        </div>

      </div>
    </div>
  );
}
