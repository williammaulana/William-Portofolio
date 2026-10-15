import { useState } from 'react';
import { Mail, MessageSquare, CheckCircle, Copy, ArrowUpRight, Clock, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  lang: 'en' | 'id';
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [roleType, setRoleType] = useState('Full-Time');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Build mailto link and trigger
    const subject = encodeURIComponent(`[Inquiry: ${roleType}] From ${name}`);
    const body = encodeURIComponent(`Hi William,\n\nMy name is ${name} (${email}).\nRole / Project Type: ${roleType}\n\n${message}\n\nBest regards,\n${name}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappHref = `https://wa.me/6281553939041?text=${encodeURIComponent(
    `Halo William, saya tertarik mendiskusikan peluang kerja sama / proyek perangkat lunak.`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-[#090d16] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                {lang === 'en' ? "Get In Touch" : "Hubungi Saya"}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                {lang === 'en' ? "Let's build something exceptional together." : "Mari bangun solusi teknologi terbaik bersama."}
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === 'en'
                  ? "Open to Full-Time, Contract, or Remote Senior Developer opportunities in e-commerce, fintech, and distributed web platforms."
                  : "Terbuka untuk peluang Full-Time, Kontrak, maupun Remote sebagai Senior/Full-Stack Software Developer untuk pengembangan sistem e-commerce, fintech, dan platform web terdistribusi."}
              </p>
            </div>

            {/* Direct contact cards */}
            <div className="space-y-3 pt-2">
              
              {/* WhatsApp direct card */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      WhatsApp / Direct Phone
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.phoneDisplay}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Email direct card */}
              <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Primary Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location card */}
              <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location & Base</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.address}
                  </div>
                </div>
              </div>

            </div>

            {/* Availability note */}
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{lang === 'en' ? "Rapid Response Guaranteed" : "Respon Cepat"}</span>
              </div>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                {lang === 'en'
                  ? "Inquiries received via email or WhatsApp are answered within 24 hours. Available for remote collaboration across worldwide time zones."
                  : "Pesan yang diterima melalui email atau WhatsApp akan direspon dalam waktu 24 jam. Siap untuk kolaborasi remote maupun hybrid."}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                {lang === 'en' ? "Send a Direct Project Message" : "Kirim Pesan atau Penawaran Proyek"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                {lang === 'en'
                  ? "Share your project requirements, tech stack needs, or team opportunity."
                  : "Sampaikan kebutuhan proyek, spesifikasi teknologi, atau lowongan tim Anda."}
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">
                    {lang === 'en' ? "Message Draft Dispatched!" : "Pesan Berhasil Disiapkan!"}
                  </div>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    {lang === 'en'
                      ? "Your email client was opened with the inquiry details. Thank you for reaching out!"
                      : "Aplikasi email Anda telah dibuka dengan draf pesan. Terima kasih telah menghubungi William!"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Role Type Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? "Engagement Type" : "Jenis Kerja Sama"}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Full-Time', 'Contract / Project', 'Consulting'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setRoleType(type)}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                            roleType === type
                              ? 'bg-white dark:bg-slate-800 border-blue-600 dark:border-blue-500 text-blue-700 dark:text-blue-400 shadow-sm'
                              : 'bg-white/70 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? "Your Name / Organization" : "Nama / Perusahaan"} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. PT Maju Bersama / Alex"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {lang === 'en' ? "Your Email Address" : "Alamat Email Anda"} *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {lang === 'en' ? "Project Scope or Opportunity Details" : "Deskripsi Proyek atau Peluang"} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'en'
                          ? "We are building an e-commerce platform and looking for a senior developer with Laravel & Next.js experience..."
                          : "Kami sedang membangun platform e-commerce dan membutuhkan software engineer berpengalaman Next.js & Laravel..."
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'en' ? "Submit Inquiry via Email" : "Kirim Pesan ke William"}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
