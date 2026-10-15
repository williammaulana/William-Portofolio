export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  client: string;
  category: 'ecommerce' | 'fintech' | 'enterprise' | 'logistics' | 'automation';
  stack: string[];
  summary: string;
  summaryId: string;
  highlights: string[];
  highlightsId: string[];
  architectureNotes?: string;
  architectureNotesId?: string;
  image?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  roleId: string;
  project: string;
  tech: string[];
  points: string[];
  pointsId: string[];
}

export interface CertificateItem {
  title: string;
  recipient: string;
  issuer: string;
  signatory: string;
  signatoryTitle: string;
  date: string;
  description: string;
  descriptionId: string;
  verificationNote: string;
}

export const PERSONAL_INFO = {
  name: "William Maulana Yusuf",
  certName: "William Maulana Yusup",
  title: "Full-Stack Software Developer",
  tagline: "Specializing in High-Traffic E-Commerce, Fintech & Enterprise Systems",
  taglineId: "Spesialis dalam E-Commerce Skala Tinggi, Fintech & Sistem Enterprise",
  bio: "Experienced software developer with a solid background in building and enhancing e-commerce platforms and affiliate programs, skilled in creating user-friendly interfaces and implementing complex functionalities that drive business growth.",
  bioId: "Software developer berpengalaman dengan keahlian mendalam dalam membangun dan mengembangkan platform e-commerce serta program afiliasi, terampil dalam merancang antarmuka ramah pengguna serta mengimplementasikan fungsionalitas kompleks yang mendorong pertumbuhan bisnis.",
  email: "williammaulanayusuf2@gmail.com",
  secondaryEmail: "williammaulanayusuf1@gmail.com",
  phone: "+6281553939041",
  phoneDisplay: "+62 815-5393-9041",
  address: "Jl. Riung Gede Permai 2 No E7, 40286 Bandung, Indonesia",
  location: "Bandung, Indonesia",
  education: {
    institution: "SMK BPI Bandung",
    location: "Bandung, Jawa Barat",
    focus: "Rekayasa Perangkat Lunak / Software Engineering"
  },
  stats: [
    { label: "Years Experience", labelId: "Tahun Pengalaman", value: "7+" },
    { label: "Systems Engineered", labelId: "Sistem Terpasang", value: "13+" },
    { label: "Tech Hackathon", labelId: "Sertifikasi Hackathon", value: "PaDi UMKM" },
    { label: "Core Frameworks", labelId: "Framework Utama", value: "Next · Vue · Laravel" },
  ]
};

export const CERTIFICATE_INFO: CertificateItem = {
  title: "Tech Hackathon Certificate",
  recipient: "William Maulana Yusup",
  issuer: "PaDi UMKM (Pasar Digital UMKM Indonesia)",
  signatory: "Jimmy Karisma Ramadhan",
  signatoryTitle: "CEO PaDi UMKM",
  date: "10th & 11th of August 2023",
  description: "Official certificate of achievement awarded for participating and presenting engineering solutions in the PaDi UMKM Tech Hackathon.",
  descriptionId: "Sertifikat resmi penghargaan atas partisipasi dan kontribusi engineering dalam ajang PaDi UMKM Tech Hackathon.",
  verificationNote: "PaDi UMKM is Indonesia's state-owned digital procurement marketplace for MSMEs initiated by the Ministry of SOEs (Kementerian BUMN) and Telkom Indonesia."
};

export const SKILL_CATEGORIES = [
  {
    category: "Backend & Systems",
    categoryId: "Backend & Sistem",
    skills: ["Node.js", "Express.js", "Java Spring Boot", "Golang", "PHP", "Laravel", "Lumen", "REST APIs", "Microservices"]
  },
  {
    category: "Frontend & UI Engineering",
    categoryId: "Frontend & Antarmuka",
    skills: ["Next.js", "React.js", "Vue.js", "Quasar", "Tailwind CSS", "Blade PHP", "jQuery", "Responsive Design", "Mobile Optimization"]
  },
  {
    category: "Database & Architecture",
    categoryId: "Basis Data & Arsitektur",
    skills: ["MySQL", "PostgreSQL", "Data Modeling", "Query Optimization", "E2E Testing", "Regression Testing"]
  },
  {
    category: "Integrations & Automation",
    categoryId: "Integrasi & Otomasi",
    skills: ["Mixpanel Analytics", "Midtrans Payment", "RajaOngkir Shipping", "Puppeteer Automation", "Cowx Webhooks", "Git / GitHub", "Linux (Ubuntu)"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "building-affiliate-program",
    title: "Building Affiliate & Commission Engine",
    subtitle: "Enterprise dynamic multi-tier affiliate system with real-time balance withdrawals",
    period: "2025",
    client: "Fintech & Retail Affiliate Network",
    category: "fintech",
    stack: ["Java Spring Boot", "Next.js", "MySQL", "REST API", "Cowx Notif"],
    featured: true,
    image: "/src/assets/images/project_fintech_affiliate_1792051435841.jpg",
    summary: "Architected a comprehensive affiliate marketing program enabling merchants to configure custom commission percentages, share tracking links, and manage affiliate payouts seamlessly.",
    summaryId: "Merancang program afiliasi komprehensif yang memungkinkan merchant mengatur persentase komisi kustom, membagikan tautan pelacakan, serta mengelola pencairan saldo afiliasi secara transparan.",
    highlights: [
      "Custom affiliate referral link generation with merchant-level toggle permissions",
      "Dynamic commission calculation engine based on configurable merchant percentage rules",
      "Affiliate balance ledger and automated withdrawal settlement system",
      "Dedicated affiliate portal with authentication, onboarding, and secure password recovery",
      "Automated serial number generation and Cowx webhook notifications upon verified sales"
    ],
    highlightsId: [
      "Pembuatan tautan referral afiliasi kustom dengan kontrol izin di tingkat merchant",
      "Engine kalkulasi komisi dinamis berbasis aturan persentase yang dapat disesuaikan merchant",
      "Buku besar saldo afiliasi dan alur penarikan dana terstruktur",
      "Dashboard afiliasi mandiri dengan autentikasi, registrasi, dan lupa kata sandi",
      "Pembuatan nomor seri otomatis dan notifikasi instan via Cowx setelah transaksi sukses"
    ],
    architectureNotes: "Engineered with Java Spring Boot backend for strict transactional concurrency and balance locking, coupled with a responsive Next.js dashboard.",
    architectureNotesId: "Dibangun dengan backend Java Spring Boot untuk konkurensi transaksi ketat dan penguncian saldo, dipadukan dengan frontend Next.js yang responsif."
  },
  {
    id: "building-materials-ecommerce",
    title: "Building Materials E-Commerce Platform",
    subtitle: "High-scale marketplace revamp, Sales Order & Delivery Order billing, and RajaOngkir logistics",
    period: "2025 - Present & 2022-2023",
    client: "National Building Materials Distributor",
    category: "ecommerce",
    stack: ["Next.js", "Tailwind CSS", "Vue.js", "Laravel", "RajaOngkir", "MySQL"],
    featured: true,
    image: "/src/assets/images/project_ecommerce_platform_1792051436317.jpg",
    summary: "Extensive performance overhaul and feature expansion for Indonesia's premier building materials online marketplace, introducing complex billing, delivery order flows, and mobile optimizations.",
    summaryId: "Pembaruan performa skala besar dan ekspansi fitur e-commerce bahan bangunan nasional, menghadirkan alur billing So & Do Bill serta optimasi antarmuka seluler.",
    highlights: [
      "End-to-end revamp of customer registration, product detail pages, wishlist, and dynamic checkout",
      "Implementation of So (Sales Order) & Do (Delivery Order) billing modules for large cargo construction supplies",
      "Integration of RajaOngkir shipping calculation tailored to dimensional heavy-goods transport",
      "Enhanced SEO with breadcrumb metadata, canonical structuring, and structured schema tags",
      "Mobile-first responsive optimization cutting catalog render times drastically"
    ],
    highlightsId: [
      "Revamp menyeluruh halaman registrasi, detail produk, wishlist, dan checkout dinamis",
      "Implementasi modul billing So (Sales Order) & Do (Delivery Order) untuk logistik kargo material berat",
      "Integrasi perhitungan ongkos kirim RajaOngkir yang disesuaikan dengan dimensi barang berat",
      "Peningkatan SEO melalui navigasi breadcrumb, struktur kanonikal, dan metadata produk",
      "Optimasi tampilan mobile responsif yang mempercepat waktu muat katalog produk"
    ],
    architectureNotes: "Built using Next.js with Tailwind CSS on frontend and Laravel/MySQL backend for scalable catalog indexing and order management.",
    architectureNotesId: "Menggunakan Next.js dan Tailwind CSS untuk frontend modern, didukung backend Laravel/MySQL untuk pengelolaan katalog dan pesanan berkapasitas tinggi."
  },
  {
    id: "padi-umkm-marketplace",
    title: "PaDi UMKM B2B Marketplace & LKPP Tax Integration",
    subtitle: "Government-compliant tax counting, LKPP NPWP verification, Jasa marketplace, and Mixpanel analytics",
    period: "2023",
    client: "PaDi UMKM (Telkom Indonesia / BUMN Ecosystem)",
    category: "ecommerce",
    stack: ["Next.js", "Express.js", "MySQL", "Mixpanel Analytics", "LKPP APIs"],
    featured: true,
    summary: "Key contributions to Indonesia's official State-Owned Enterprises (BUMN) MSME procurement marketplace, implementing tax compliance for government buyers, services marketplace, and end-to-end user analytics.",
    summaryId: "Kontribusi inti pada marketplace pengadaan barang & jasa BUMN untuk UMKM Indonesia, mencakup kalkulasi pajak bagi pembeli pemerintah, modul jasa, dan analitik Mixpanel.",
    highlights: [
      "Engineered automated Product Tax Counting algorithms compliant with LKPP procurement regulations",
      "Developed the 'Jasa' (Services) Marketplace module enabling UMKM vendors to add, edit, and catalog service offerings",
      "Implemented Mixpanel tracking pipelines across Register, Login, and Buyer B2B Dashboard funnels",
      "Integrated NPWP tax identification validation for LKPP government agency procurement accounts",
      "Optimized SEO, canonical URL architecture, and NWP address management across CMS portals"
    ],
    highlightsId: [
      "Membangun kalkulasi pajak produk otomatis sesuai regulasi pengadaan LKPP pemerintah",
      "Mengembangkan modul marketplace 'Jasa' agar vendor UMKM dapat menambah, mengedit, dan memasarkan layanan",
      "Mengimplementasikan pelacakan analitik Mixpanel di alur registrasi, login, dan dashboard pembeli B2B",
      "Integrasi validasi NPWP untuk kepatuhan akun pengadaan instansi pemerintah (LKPP)",
      "Optimalisasi SEO kanonikal di seluruh portal pembeli PaDi UMKM dan manajemen alamat NWP di CMS"
    ],
    architectureNotes: "Directly tied to William's participation in the PaDi UMKM Tech Hackathon (Aug 10-11, 2023), recognized by PaDi UMKM CEO Jimmy Karisma Ramadhan.",
    architectureNotesId: "Berkaitan langsung dengan keikutsertaan William dalam PaDi UMKM Tech Hackathon (10-11 Agustus 2023) yang ditandatangani oleh CEO PaDi UMKM Jimmy Karisma Ramadhan."
  },
  {
    id: "international-delivery-system",
    title: "Cross-Border International Delivery Platform",
    subtitle: "Multi-currency import tax computation, parcel routing, and real-time tracking engine",
    period: "2024 - 2025 & 2021 - 2022",
    client: "Global Logistics & Freight Forwarder",
    category: "logistics",
    stack: ["Golang", "Vue.js", "Laravel", "REST API", "jQuery", "MySQL"],
    featured: false,
    summary: "Built enterprise logistics application for international air and ocean cargo delivery, handling dynamic customs calculations, parcel status progression, and automated customer dispatch alerts.",
    summaryId: "Membangun aplikasi logistik internasional untuk pengiriman kargo udara dan laut, menghitung kalkulasi bea cukai otomatis, pelacakan paket, dan notifikasi pengiriman.",
    highlights: [
      "Created automated international import tax calculation engine adhering to customs brackets",
      "Designed responsive Vue.js shipment tracker with milestone waypoint updates",
      "Integrated transactional email dispatcher for parcel status transitions",
      "Optimized Golang and Laravel REST APIs for high-throughput manifest synchronization"
    ],
    highlightsId: [
      "Membuat sistem kalkulasi pajak bea cukai impor internasional berdasarkan tarif kepabeanan",
      "Merancang antarmuka pelacak paket responsif dengan Vue.js untuk pembaruan status pengiriman",
      "Integrasi pengiriman email transaksional otomatis pada setiap perubahan status kargo",
      "Optimasi REST API Golang & Laravel untuk sinkronisasi manifes kargo berkapasitas besar"
    ]
  },
  {
    id: "algorithmic-stock-trading",
    title: "Automated Algorithmic Stock Trading System",
    subtitle: "Headless browser automation with Puppeteer, algorithm trigger execution, and daily reporting",
    period: "2021",
    client: "Quantitative Trading & Securities Portfolio",
    category: "automation",
    stack: ["Node.js", "Express.js", "Puppeteer", "REST API", "MySQL"],
    featured: false,
    summary: "Automated stock purchase and disposal engine using Puppeteer headless web automation and REST APIs, fulfilling systematic trade orders and generating audit logs.",
    summaryId: "Sistem automasi transaksi jual-beli saham menggunakan Puppeteer headless browser dan REST API, mengeksekusi order trading algoritmik dan menyusun log audit.",
    highlights: [
      "Engineered automated buy & sell order execution scripts using Puppeteer headless automation",
      "Implemented strict order validation and trade confirmation response checks",
      "Built automated daily progress and portfolio status reporting routines",
      "Designed database schema for transaction auditing, latency tracking, and error resilience"
    ],
    highlightsId: [
      "Membangun skrip eksekusi transaksi beli & jual otomatis dengan automasi headless Puppeteer",
      "Implementasi validasi order ketat serta verifikasi konfirmasi respon transaksi pasar",
      "Membangun rutinitas pelaporan harian otomatis status portofolio dan progres transaksi",
      "Merancang skema database untuk audit transaksi, pemantauan latensi, dan penanganan kegagalan"
    ]
  },
  {
    id: "government-fund-system",
    title: "Government Fund Information System",
    subtitle: "Microservices balance allocation, E2E testing, and multi-environment onboarding",
    period: "2023",
    client: "Public Sector Financial Management",
    category: "enterprise",
    stack: ["React.js", "Express.js", "MySQL", "Jest", "Microservices"],
    featured: false,
    summary: "Participated in an agile cross-squad initiative engineering balance calculation logic across sprint user stories, accompanied by comprehensive E2E and regression testing across microservices.",
    summaryId: "Berpartisipasi dalam inisiatif agile cross-squad untuk kalkulasi alokasi dana per sprint, disertai pengujian E2E dan regresi komprehensif pada microservices.",
    highlights: [
      "Collaborated in cross-squad sprint deliverables to implement balance calculation in agile stories",
      "Conducted manual testing, E2E test suites, and API regression testing across development & staging",
      "Verified API microservices contracts during multi-service onboarding pipelines"
    ],
    highlightsId: [
      "Kolaborasi cross-squad untuk mengimplementasikan kalkulasi saldo anggaran per sprint",
      "Melaksanakan pengujian manual, rangkaian pengujian E2E, dan pengujian regresi API di staging",
      "Verifikasi kontrak integrasi microservices API saat proses onboarding antar layanan"
    ]
  },
  {
    id: "procurement-platform",
    title: "Enterprise Corporate Procurement Platform",
    subtitle: "Budget requisition, Nota Dinas workflow, and RAB financial documentation",
    period: "2020 - 2021",
    client: "Corporate Governance & Sourcing Division",
    category: "enterprise",
    stack: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    featured: false,
    summary: "Engineered application skeleton and business logic for corporate procurement workflows, digitizing official memorandum forms (Nota Dinas) and project cost planning (RAB).",
    summaryId: "Membangun fondasi arsitektur dan logika bisnis sistem pengadaan barang perusahaan, mendigitalkan form Nota Dinas Kebutuhan dan Rencana Anggaran Biaya (RAB).",
    highlights: [
      "Authored primary backend architecture, routing, and database schema from inception",
      "Engineered automated invoicing and approval workflows for 'Nota Dinas Form Kebutuhan' + RAB",
      "Built archival tracking system for procurement compliance documentation and audit reports"
    ],
    highlightsId: [
      "Menulis arsitektur backend utama, routing, dan skema database dari tahap awal",
      "Membangun alur persetujuan dan penerbitan berkas form Nota Dinas Kebutuhan + RAB",
      "Membangun sistem pelacakan arsip dokumen untuk kepatuhan audit pengadaan perusahaan"
    ]
  },
  {
    id: "study-overseas-management",
    title: "Overseas Education & Counselor CRM",
    subtitle: "Student admission pipeline, commission referral ledger, and institution invoicing",
    period: "2022",
    client: "International Academic Agency",
    category: "enterprise",
    stack: ["PHP Laravel 5.4", "REST API", "jQuery", "MySQL", "HTML5/CSS3"],
    featured: false,
    summary: "Full lifecycle overseas study management system supporting education counselors, student application progression, referral commission calculators, and language school invoicing.",
    summaryId: "Sistem manajemen studi luar negeri lengkap untuk konselor pendidikan, proses pendaftaran siswa, kalkulator komisi referral, dan penagihan biaya kursus bahasa.",
    highlights: [
      "Constructed Counselor, Student Application, and Follow-up milestone management workflows",
      "Automated complex commission calculation, referral sharing, and counselor refund policies",
      "Built Language Invoice billing generator and event marketing campaign trackers"
    ],
    highlightsId: [
      "Membangun alur kerja konselor, tahapan aplikasi siswa, dan pemantauan follow-up",
      "Otomatisasi kalkulasi komisi konselor, pembagian referral, dan kebijakan refund komisi",
      "Membangun generator invoice kursus bahasa asing serta pelacak kampanye event marketing"
    ]
  },
  {
    id: "donation-services",
    title: "Crowdfunding & Social Donation Platform",
    subtitle: "Midtrans gateway integration, campaign ledger, and automated receipt dispatches",
    period: "2020",
    client: "Charitable Trust & Community Foundation",
    category: "fintech",
    stack: ["Laravel", "MySQL", "Midtrans Payment", "Mailgun"],
    featured: false,
    summary: "Designed and implemented crowdfunding platform enabling real-time donation campaigns with seamless digital payments via Midtrans and automated donor acknowledgement receipts.",
    summaryId: "Merancang dan membangun platform donasi sosial online dengan integrasi payment gateway Midtrans dan pengiriman tanda terima otomatis ke para donatur.",
    highlights: [
      "Created campaign scope architecture, donor database, and responsive presentation UI",
      "Integrated Midtrans payment gateway for instant multi-channel payments (QRIS, VA, E-Wallet)",
      "Automated broadcast email triggers upon confirmed transaction settlement"
    ],
    highlightsId: [
      "Merancang arsitektur program kampanye, database donatur, dan tampilan donasi responsif",
      "Integrasi payment gateway Midtrans untuk pembayaran multi-kanal instan (QRIS, VA, E-Wallet)",
      "Otomatisasi pengiriman email tanda terima donasi setelah transaksi terverifikasi sukses"
    ]
  },
  {
    id: "gallon-water-stock",
    title: "Water Gallon Factory & Inventory System",
    subtitle: "Factory batch reconciliation, damaged gallon write-offs, and receivables ledger",
    period: "2020",
    client: "Industrial Water Bottling & Distribution",
    category: "logistics",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    featured: false,
    summary: "Comprehensive warehouse and distribution tracking system for bottled gallon water logistics, handling plant production counts, warehouse reconciliations, and debt collections.",
    summaryId: "Sistem inventaris dan logistik pergudangan air galon, mengelola hitung stok pabrik, rekonsiliasi galon rusak/hilang, dan penagihan piutang pelanggan.",
    highlights: [
      "Engineered stock counting dashboard monitoring live inventory across factory and distribution hubs",
      "Built reconciliation modules for factory inventory, damaged/broken gallons, and unaccounted losses",
      "Designed customer receivable tracker flagging overdue customer payments and issuing invoices"
    ],
    highlightsId: [
      "Membangun dashboard hitung stok real-time di pabrik dan gudang distribusi",
      "Membuat modul rekonsiliasi stok pabrik, pencatatan galon rusak/pecah, dan galon hilang",
      "Merancang sistem penagihan piutang pelanggan dan pencetakan faktur tagihan otomatis"
    ]
  },
  {
    id: "pawn-goods-app",
    title: "Online Collateral Submission & Pawn System",
    subtitle: "Collateral appraisal request queue, interest rate calculating, and appraisal decisions",
    period: "2019 - 2020",
    client: "Pawn & Collateral Lending Services",
    category: "fintech",
    stack: ["Laravel", "MySQL", "jQuery"],
    featured: false,
    summary: "Web platform enabling customers to submit personal goods for pawn appraisal, and appraisers to evaluate, approve, calculate loan valuations, and disburse pawn advances.",
    summaryId: "Aplikasi pengajuan gadai barang secara online, memungkinkan nasabah mengajukan taksiran barang, serta appraiser mengevaluasi, menyetujui, dan menghitung cicilan.",
    highlights: [
      "Built submission interface for customers to register collateral items and upload documentation",
      "Created administrative operator interface for appraisal review, approval, and rejection",
      "Developed pawn history log and loan repayment/interest calculation algorithm"
    ],
    highlightsId: [
      "Membangun form online bagi nasabah untuk mendaftarkan barang jaminan beserta foto dokumen",
      "Membuat antarmuka operator untuk evaluasi nilai taksiran, persetujuan, dan penolakan gadai",
      "Mengembangkan log riwayat gadai serta formula hitung pelunasan pinjaman dan bunga"
    ]
  },
  {
    id: "clothes-ecommerce",
    title: "Apparel Retail & E-Commerce Store",
    subtitle: "Product catalog, Midtrans payment processing, and transactional email broadcasts",
    period: "2019",
    client: "Independent Apparel & Fashion Brand",
    category: "ecommerce",
    stack: ["Next.js", "Laravel", "MySQL", "Midtrans Payment"],
    featured: false,
    summary: "Consumer-facing apparel web shop with clean catalog taxonomy, shopping cart, Midtrans integration, and automated order confirmation broadcasts.",
    summaryId: "Toko online pakaian ritel dengan struktur katalog rapi, keranjang belanja, integrasi pembayaran Midtrans, dan email konfirmasi otomatis.",
    highlights: [
      "Constructed database schema, product categories, and responsive clothing showcase",
      "Integrated 3rd-party Midtrans payment gateway for digital checkout",
      "Implemented automated order notification emails dispatched on purchase confirmation"
    ],
    highlightsId: [
      "Merancang skema database, kategori produk busana, dan katalog belanja responsif",
      "Integrasi payment gateway Midtrans pihak ketiga untuk transaksi pembayaran digital",
      "Implementasi pengiriman email notifikasi otomatis setiap transaksi berhasil"
    ]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: "2025 - Present",
    role: "Full-Stack Software Developer",
    roleId: "Full-Stack Software Developer",
    project: "Building Materials E-Commerce & Building Affiliate Program",
    tech: ["Java Spring Boot", "Next.js", "Tailwind CSS", "MySQL", "Cowx"],
    points: [
      "Engineered comprehensive affiliate sharing program with dynamic merchant percentage commission calculations and instant balance withdrawal.",
      "Contributed to building materials e-commerce platform revamp across registration, blog, wishlist, product details, and checkout.",
      "Implemented So & Do Bill (Sales Order & Delivery Order) features to streamline complex industrial building materials logistics.",
      "Enhanced SEO performance, breadcrumbs navigation, and mobile viewport responsiveness."
    ],
    pointsId: [
      "Membangun program sharing afiliasi dengan kalkulasi komisi dinamis berbasis persentase merchant serta penarikan saldo instan.",
      "Berkontribusi pada perombakan platform e-commerce bahan bangunan di halaman registrasi, blog, wishlist, detail produk, dan checkout.",
      "Mengimplementasikan fitur So & Do Bill (Sales Order & Delivery Order) untuk memperlancar logistik material konstruksi.",
      "Meningkatkan kinerja SEO, navigasi breadcrumb, dan responsivitas tampilan seluler."
    ]
  },
  {
    period: "2024 - 2025",
    role: "Full-Stack Web Developer",
    roleId: "Full-Stack Web Developer",
    project: "International Delivery & Freight Services Application",
    tech: ["Golang", "Vue.js", "Laravel", "REST API", "jQuery", "MySQL"],
    points: [
      "Developed web application for international delivery services handling cargo from abroad.",
      "Executed end-to-end UI/UX implementation, backend integration, and tracking enhancements.",
      "Implemented automated customs tax calculation function and transactional customer emails."
    ],
    pointsId: [
      "Mengembangkan aplikasi web pengiriman kargo internasional dari luar negeri.",
      "Melaksanakan implementasi UI/UX lengkap, integrasi backend, dan peningkatan sistem pelacakan pengiriman.",
      "Mengimplementasikan formula hitung pajak impor kepabeanan dan notifikasi email transaksional pelanggan."
    ]
  },
  {
    period: "2023",
    role: "Software Developer & E-Commerce Engineer",
    roleId: "Software Developer & E-Commerce Engineer",
    project: "PaDi UMKM (B2B MSME E-Commerce by Telkom / BUMN) & Government Fund System",
    tech: ["Next.js", "Express.js", "React.js", "MySQL", "Mixpanel"],
    points: [
      "Awarded Tech Hackathon Certificate by PaDi UMKM CEO Jimmy Karisma Ramadhan (Aug 2023).",
      "Implemented Product Tax Counting algorithms and User Tracking Management in PaDi UMKM.",
      "Built 'Jasa' (Services) Marketplace module enabling UMKM vendors to publish and manage services.",
      "Configured Mixpanel tracking pipelines across Register, Login, and B2B Dashboard funnels.",
      "Integrated NPWP tax identification validation for LKPP government procurement accounts.",
      "Engineered balance calculation logic in agile cross-squad sprints with E2E and regression testing."
    ],
    pointsId: [
      "Meraih Sertifikat Tech Hackathon resmi dari CEO PaDi UMKM Jimmy Karisma Ramadhan (Agustus 2023).",
      "Mengimplementasikan sistem hitung pajak produk dan manajemen pelacakan pengguna di PaDi UMKM.",
      "Membangun modul marketplace 'Jasa' yang memungkinkan vendor UMKM menawarkan layanan mereka.",
      "Mengonfigurasi pelacakan Mixpanel di funnel registrasi, login, dan dashboard pembeli B2B.",
      "Integrasi validasi NPWP untuk kepatuhan akun pengadaan instansi pemerintah (LKPP).",
      "Mengembangkan logika kalkulasi saldo anggaran dalam sprint cross-squad dengan pengujian E2E & regresi."
    ]
  },
  {
    period: "2021 - 2022",
    role: "Full-Stack Developer",
    roleId: "Full-Stack Developer",
    project: "Study Overseas CRM, International Freight & Stock Automation",
    tech: ["Node.js", "Puppeteer", "Laravel", "REST API", "Vue.js", "MySQL"],
    points: [
      "Built automated stock buy/sell execution system with Puppeteer headless automation and daily reports.",
      "Constructed Overseas Education CRM with counselor commission, referral management, and language institute invoicing.",
      "Developed web-based delivery layout and backend REST APIs for cross-border freight."
    ],
    pointsId: [
      "Membangun sistem automasi jual/beli saham dengan Puppeteer headless browser dan pelaporan harian.",
      "Mengembangkan CRM studi luar negeri dengan perhitungan komisi konselor, referral, dan penagihan biaya kursus.",
      "Mengembangkan antarmuka dan REST API backend untuk pengiriman barang internasional."
    ]
  },
  {
    period: "2019 - 2021",
    role: "Web & Platform Developer",
    roleId: "Web & Platform Developer",
    project: "Procurement Platform, Crowdfunding, Pawn App & Retail E-Commerce",
    tech: ["Laravel", "Next.js", "Midtrans Payment", "Bootstrap", "MySQL"],
    points: [
      "Architected enterprise procurement application skeleton with Nota Dinas and RAB budget reporting.",
      "Engineered online donation platform with Midtrans digital payment processing and donor broadcast emails.",
      "Created factory water gallon stock tracking, lost/damaged gallon reconciliations, and billing modules.",
      "Developed online pawn appraisal workflow and interest payment calculation logic.",
      "Built apparel e-commerce store with Midtrans payment integration and transactional notifications."
    ],
    pointsId: [
      "Merancang fondasi arsitektur platform pengadaan perusahaan dengan form Nota Dinas dan pelaporan RAB.",
      "Membangun platform donasi online dengan integrasi Midtrans dan pengiriman email tanda terima donatur.",
      "Membuat sistem hitung stok air galon pabrik, rekonsiliasi galon rusak/hilang, dan modul tagihan.",
      "Mengembangkan aplikasi taksiran gadai online beserta formula perhitungan bunga pinjaman.",
      "Membangun toko e-commerce pakaian dengan integrasi pembayaran Midtrans dan notifikasi transaksi."
    ]
  }
];
