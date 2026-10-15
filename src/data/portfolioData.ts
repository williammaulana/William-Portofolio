export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  client: string;
  company?: string;
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
  company?: string;
  companyId?: string;
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
    { label: "Systems Engineered", labelId: "Sistem Terpasang", value: "14+" },
    { label: "Tech Hackathon", labelId: "Sertifikasi Hackathon", value: "PaDi UMKM" },
    { label: "Companies / Agencies", labelId: "Agensi & Perusahaan", value: "PT Smooets · Webhade" },
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
    client: "PaDi UMKM (Telkom / BUMN)",
    company: "PT Smooets Technology Outsourcing",
    category: "ecommerce",
    stack: ["Next.js", "Express.js", "MySQL", "Mixpanel Analytics", "LKPP APIs"],
    featured: true,
    summary: "Key contributions to Indonesia's official State-Owned Enterprises (BUMN) MSME procurement marketplace developed through PT Smooets Technology Outsourcing. Implemented tax compliance for government buyers, services marketplace, and end-to-end user analytics.",
    summaryId: "Kontribusi inti pada marketplace pengadaan barang & jasa BUMN untuk UMKM Indonesia melalui PT Smooets Technology Outsourcing, mencakup kalkulasi pajak bagi pembeli pemerintah, modul jasa, dan analitik Mixpanel.",
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
    id: "government-fund-system",
    title: "SIA — Government Fund Information System",
    subtitle: "Microservices balance allocation, E2E testing, and multi-environment onboarding at PT Smooets Technology",
    period: "2023",
    client: "Public Sector Financial Management",
    company: "PT Smooets Technology Outsourcing",
    category: "enterprise",
    stack: ["React.js", "Express.js", "MySQL", "Jest", "Microservices"],
    featured: false,
    summary: "Worked at PT Smooets Technology Outsourcing in an agile cross-squad initiative engineering balance calculation logic across sprint user stories for the Government Fund Information System (SIA), accompanied by comprehensive E2E and regression testing across microservices.",
    summaryId: "Bekerja di PT Smooets Technology Outsourcing dalam inisiatif agile cross-squad untuk kalkulasi alokasi dana per sprint pada Sistem Informasi Anggaran (SIA), disertai pengujian E2E dan regresi komprehensif pada microservices.",
    highlights: [
      "Worked with cross-squad sprint deliverables to implement balance calculation in agile user stories",
      "Executed manual testing, E2E test suites, and API regression testing across development & staging",
      "Verified API microservices contracts during multi-service onboarding pipelines for public sector financial systems"
    ],
    highlightsId: [
      "Kolaborasi cross-squad untuk mengimplementasikan kalkulasi saldo anggaran per sprint",
      "Melaksanakan pengujian manual, rangkaian pengujian E2E, dan pengujian regresi API di staging",
      "Verifikasi kontrak integrasi microservices API saat proses onboarding antar layanan keuangan sektor publik"
    ]
  },
  {
    id: "kirimin-co-id",
    title: "Kirimin.co.id — Parcel Delivery & Logistics Services",
    subtitle: "Cross-border courier APIs, tax computation, and tracking system at Webhade Creative",
    period: "2019 - 2021",
    client: "Kirimin.co.id",
    company: "Webhade Creative",
    category: "logistics",
    stack: ["Golang", "Vue.js", "Laravel", "REST API", "jQuery", "MySQL"],
    featured: false,
    summary: "Backend development at Webhade Creative for Kirimin.co.id, engineering web-based delivery services for international and domestic packages, custom customs tax calculations, tracking systems, and automated email notifications.",
    summaryId: "Pengembangan backend di Webhade Creative untuk Kirimin.co.id, membangun layanan pengiriman paket internasional dan domestik, kalkulasi bea cukai, sistem pelacakan pengiriman, dan email transaksional.",
    highlights: [
      "Engineered backend REST APIs for Kirimin.co.id parcel delivery lifecycle",
      "Created automated international import tax and customs fee calculator",
      "Designed real-time parcel tracking milestone updates and transactional dispatch emails",
      "Integrated front-facing Vue.js layout with high-throughput backend services"
    ],
    highlightsId: [
      "Membangun REST API backend untuk siklus pengiriman paket Kirimin.co.id",
      "Membuat sistem kalkulasi pajak bea cukai impor internasional berdasarkan tarif kepabeanan",
      "Merancang antarmuka pelacak paket responsif dengan pembaruan status pengiriman real-time",
      "Integrasi antarmuka Vue.js dengan layanan backend berkapasitas besar"
    ]
  },
  {
    id: "wellborn-ecommerce",
    title: "Wellborn — Streetwear & Fashion E-Commerce",
    subtitle: "Backend PHP development, product catalog, cart workflows & payment at Webhade Creative",
    period: "2021",
    client: "Wellborn Company",
    company: "Webhade Creative",
    category: "ecommerce",
    stack: ["PHP", "Laravel", "MySQL", "Midtrans Payment", "REST API"],
    featured: false,
    summary: "Backend PHP development at Webhade Creative for Wellborn, Bandung's renowned independent streetwear fashion brand, engineering catalog APIs, shopping cart, Midtrans payment processing, and automated customer transaction notifications.",
    summaryId: "Pengembangan Backend PHP di Webhade Creative untuk Wellborn, merek fashion streetwear independen terkemuka di Bandung, membangun API katalog, keranjang belanja, integrasi pembayaran Midtrans, dan notifikasi email.",
    highlights: [
      "Engineered backend architecture for Wellborn apparel e-commerce store",
      "Constructed relational database schema for clothing categories, sizes, and stock availability",
      "Integrated Midtrans payment gateway for instant checkout across credit card, e-wallet, and virtual accounts",
      "Implemented automated purchase confirmation email dispatches to customers"
    ],
    highlightsId: [
      "Membangun arsitektur backend toko e-commerce fashion streetwear Wellborn",
      "Merancang skema database relasional untuk varian busana, ukuran, dan stok barang",
      "Integrasi payment gateway Midtrans untuk transaksi instan via kartu kredit, e-wallet, dan VA",
      "Implementasi pengiriman email konfirmasi pembelian otomatis kepada pelanggan"
    ]
  },
  {
    id: "ksp-mulatama",
    title: "KSP Mulatama — Financial & Cooperative Management",
    subtitle: "Fullstack development for savings and loan cooperative, member records, and loan disbursement at Webhade Creative",
    period: "2020 - 2021",
    client: "KSP Mulatama",
    company: "Webhade Creative",
    category: "fintech",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
    featured: false,
    summary: "Fullstack development at Webhade Creative for KSP Mulatama (Koperasi Simpan Pinjam), digitizing member savings accounts, loan application and appraisal, interest calculations, and automated financial transaction reporting.",
    summaryId: "Pengembangan Fullstack di Webhade Creative untuk KSP Mulatama (Koperasi Simpan Pinjam), mendigitalkan tabungan anggota, pengajuan & taksiran pinjaman, formula bunga cicilan, dan laporan keuangan.",
    highlights: [
      "Built complete fullstack platform for KSP Mulatama cooperative operations",
      "Engineered member savings, loan calculation algorithms, interest accrual, and monthly installment ledgers",
      "Constructed operator approval workflows for member loan requests and collateral archiving",
      "Generated official memorandum forms and periodic financial compliance reports"
    ],
    highlightsId: [
      "Membangun sistem fullstack lengkap untuk operasional KSP Mulatama",
      "Mengembangkan formula hitung pinjaman, bunga cicilan, dan buku besar angsuran bulanan",
      "Membuat alur verifikasi dan persetujuan pengajuan pinjaman anggota beserta arsip jaminan",
      "Menghasilkan laporan keuangan berkala dan berkas administratif pengadaan form RAB"
    ]
  },
  {
    id: "patisa-inventory",
    title: "Patisa Inventory — Warehouse & Gallon Water Stock",
    subtitle: "Fullstack PHP development for factory inventory, damaged stock write-offs, and billing at Webhade Creative",
    period: "2019 - 2020",
    client: "Patisa Inventory",
    company: "Webhade Creative",
    category: "logistics",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    featured: false,
    summary: "Fullstack PHP development at Webhade Creative for Patisa Inventory, an industrial bottled water and gallon distribution system tracking warehouse stocks, factory gallon counts, damaged stock write-offs, and customer receivables.",
    summaryId: "Pengembangan Fullstack PHP di Webhade Creative untuk Patisa Inventory, sistem inventaris pergudangan dan distribusi air minum galon, menghitung stok gudang vs pabrik, rekonsiliasi galon rusak, dan tagihan.",
    highlights: [
      "Engineered fullstack inventory management platform for Patisa warehouse operations",
      "Built factory gallon batch counting and live inventory reconciliation modules",
      "Created records for broken/damaged gallons and unaccounted distribution losses",
      "Designed customer invoice generation and outstanding payment collection tracker"
    ],
    highlightsId: [
      "Membangun platform manajemen inventaris fullstack untuk pergudangan Patisa",
      "Membuat modul hitung stok galon pabrik dan rekonsiliasi inventaris gudang real-time",
      "Membuat pencatatan galon rusak/pecah dan galon hilang selama distribusi",
      "Merancang sistem penerbitan faktur tagihan dan pelacak piutang pelanggan"
    ]
  },
  {
    id: "robot-tumi",
    title: "Robot Tumi — Automated Algorithmic Trading Bot",
    subtitle: "Backend development for algorithmic buy/sell stock execution with Puppeteer at Webhade Creative",
    period: "2020 - 2021",
    client: "Robot Tumi",
    company: "Webhade Creative",
    category: "automation",
    stack: ["Node.js", "Express.js", "Puppeteer", "REST API", "MySQL"],
    featured: false,
    summary: "Backend development at Webhade Creative for Robot Tumi, an automated stock buy and sell execution system utilizing Puppeteer headless web automation and REST APIs to fulfill algorithmic trade orders with daily performance progress reporting.",
    summaryId: "Pengembangan backend di Webhade Creative untuk Robot Tumi, sistem automasi jual/beli saham algoritmik menggunakan Puppeteer headless browser dan REST API, mengeksekusi order trading dan menyusun laporan harian.",
    highlights: [
      "Developed Robot Tumi automated order execution routines using Puppeteer headless automation",
      "Implemented algorithm-driven trading triggers and order placement safeguards",
      "Created automated daily progress reporting routines and transaction audit logs",
      "Engineered resilient MySQL schema for transaction recording, error recovery, and latency tracking"
    ],
    highlightsId: [
      "Mengembangkan rutinitas eksekusi order otomatis Robot Tumi dengan automasi headless Puppeteer",
      "Implementasi pemicu trading algoritmik dan validasi ketat sebelum order dieksekusi",
      "Membangun pelaporan progres harian otomatis dan rekaman audit transaksi",
      "Merancang skema database MySQL untuk pencatatan transaksi, pemulihan eror, dan pemantauan latensi"
    ]
  },
  {
    id: "international-delivery-system",
    title: "Cross-Border International Delivery Platform",
    subtitle: "Multi-currency import tax computation, parcel routing, and real-time tracking engine",
    period: "2024 - 2025",
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
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: "2025 - Present",
    role: "Senior Full-Stack Software Developer",
    roleId: "Senior Full-Stack Software Developer",
    company: "Enterprise E-Commerce & Retail Fintech",
    companyId: "Enterprise E-Commerce & Retail Fintech",
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
    company: "International Freight & Logistics",
    companyId: "Logistik & Ekspedisi Internasional",
    project: "Web-Based Delivery Services Application From Abroad",
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
    role: "Software Developer & Outsourcing Engineer",
    roleId: "Software Developer & Outsourcing Engineer",
    company: "PT Smooets Technology Outsourcing",
    companyId: "PT Smooets Technology Outsourcing",
    project: "Government Fund Information System (SIA) & PaDi UMKM",
    tech: ["Next.js", "React.js", "Express.js", "MySQL", "Microservices", "Mixpanel"],
    points: [
      "Assigned to Government Fund Information System (SIA): Cross-squad sprint feature implementation to define budget balance in stories with E2E and regression testing across microservices.",
      "Awarded Tech Hackathon Certificate by PaDi UMKM CEO Jimmy Karisma Ramadhan (Aug 2023).",
      "Implemented Product Tax Counting algorithms compliant with government LKPP standards and user tracking management in PaDi UMKM.",
      "Built 'Jasa' (Services) Marketplace module enabling UMKM vendors to publish and manage services.",
      "Configured Mixpanel tracking pipelines across Register, Login, and B2B Dashboard funnels.",
      "Integrated NPWP tax identification validation for LKPP government agency procurement accounts."
    ],
    pointsId: [
      "Ditempatkan pada Sistem Informasi Anggaran (SIA): Implementasi kalkulasi saldo anggaran per sprint dalam tim cross-squad, disertai pengujian E2E dan regresi pada microservices.",
      "Meraih Sertifikat Tech Hackathon resmi dari CEO PaDi UMKM Jimmy Karisma Ramadhan (Agustus 2023).",
      "Mengimplementasikan sistem hitung pajak produk sesuai standar LKPP dan manajemen pelacakan pengguna di PaDi UMKM.",
      "Membangun modul marketplace 'Jasa' yang memungkinkan vendor UMKM menawarkan layanan mereka.",
      "Mengonfigurasi pelacakan Mixpanel di funnel registrasi, login, dan dashboard pembeli B2B.",
      "Integrasi validasi NPWP untuk kepatuhan akun pengadaan instansi pemerintah (LKPP)."
    ]
  },
  {
    period: "2022 - 2022",
    role: "Full-Stack Web Developer",
    roleId: "Full-Stack Web Developer",
    company: "International Academic Agency",
    companyId: "Agensi Pendidikan Internasional",
    project: "Study Overseas Management System & Education CRM",
    tech: ["PHP Laravel 5.4", "REST API", "jQuery", "MySQL"],
    points: [
      "Constructed Overseas Education CRM with counselor commission, referral management, and student follow-up pipeline.",
      "Automated counselor commission refund calculations and language institute invoice generator.",
      "Designed event marketing campaign trackers and student admission progress dashboards."
    ],
    pointsId: [
      "Mengembangkan CRM studi luar negeri dengan perhitungan komisi konselor, referral, dan pelacakan tahapan pendaftaran siswa.",
      "Otomatisasi kalkulasi komisi konselor, kebijakan refund, dan pembuatan invoice kursus bahasa asing.",
      "Merancang sistem pelacak kampanye event marketing dan dashboard progres penerimaan siswa."
    ]
  },
  {
    period: "2019 - 2021",
    role: "Fullstack & Backend PHP Developer",
    roleId: "Fullstack & Backend PHP Developer",
    company: "Webhade Creative",
    companyId: "Webhade Creative",
    project: "Wellborn, KSP Mulatama, Patisa Inventory, Robot Tumi & Kirimin.co.id",
    tech: ["PHP", "Laravel", "Node.js", "Puppeteer", "Vue.js", "MySQL", "Midtrans"],
    points: [
      "Wellborn (Backend PHP Development | 2021): Engineered backend e-commerce architecture for Bandung's prominent streetwear brand with Midtrans payments.",
      "KSP Mulatama (Fullstack Development | 2020 - 2021): Developed cooperative financial management, savings, loan interest calculations, and collateral workflows.",
      "Patisa Inventory (Fullstack PHP Development | 2019 - 2020): Built factory and warehouse inventory tracking, damaged gallon write-offs, and customer billing.",
      "Robot Tumi (Backend Development | 2020): Engineered automated stock trading bot execution with Puppeteer headless automation and daily reports.",
      "Kirimin.co.id (Backend Development | 2019 - 2021): Developed backend REST APIs, import customs tax calculations, and real-time shipment tracking."
    ],
    pointsId: [
      "Wellborn (Backend PHP Development | 2021): Membangun arsitektur backend e-commerce toko fashion streetwear dengan integrasi pembayaran Midtrans.",
      "KSP Mulatama (Fullstack Development | 2020 - 2021): Mengembangkan sistem manajemen keuangan koperasi simpan pinjam, kalkulasi bunga, dan alur taksiran jaminan.",
      "Patisa Inventory (Fullstack PHP Development | 2019 - 2020): Membangun sistem inventaris pergudangan air galon pabrik, pencatatan barang rusak, dan modul penagihan.",
      "Robot Tumi (Backend Development | 2020): Mengembangkan sistem automasi trading saham Robot Tumi menggunakan automasi headless Puppeteer dan laporan harian.",
      "Kirimin.co.id (Backend Development | 2019 - 2021): Membangun REST API backend pengiriman paket, kalkulasi bea cukai, dan pelacakan kargo real-time."
    ]
  }
];
