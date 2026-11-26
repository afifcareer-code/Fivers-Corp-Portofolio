import { Language } from '../context/LanguageContext';
import {
  Capability,
  LeverageStep,
  ProductItem,
  RealBusiness,
  TechnologyArea,
  WorkflowStep,
} from '../types';

export const FIVERS_IMAGES = {
  heroTechCore: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
  onionBrebes: '/src/assets/images/business_onion_brebes_1795654591854.jpg',
  layerChicken: '/src/assets/images/business_layer_chicken_1795654591768.jpg',
  digitalOffice: '/src/assets/images/tech_digital_office_1795654591568.jpg',
  founderPortrait: '/src/assets/images/founder_portrait_afif_1795654592899.jpg',
} as const;

export const PRODUCTS_DATA: Record<Language, ProductItem[]> = {
  en: [
    {
      id: 'veluna',
      slug: 'veluna',
      route: '/products/veluna',
      name: 'Veluna',
      subtitle: 'Digital Wedding & Event Platform',
      positioning:
        'Web-based digital wedding invitations and guest experience coordination built for modern celebrations.',
      description:
        'A web-based invitation and guest experience platform designed for modern weddings and curated celebrations.',
      focusArea: 'Digital Products & Consumer Software',
      status: 'LIVE',
      category: 'Event Platform',
      icon: 'veluna',
      highlights: [
        'Structured digital wedding invitations',
        'RSVP and guest attendance coordination',
        'Responsive editorial layout across devices',
      ],
      overview: {
        whatItIs:
          'Veluna is a live consumer web platform built by Fivers Corp for publishing digital wedding invitations and organizing guest event information in a single accessible link.',
        problemAddressed:
          'Printed invitations and scattered chat messages make it difficult to share schedule updates, location details, and track guest attendance cleanly across mobile devices.',
        intendedFor:
          'Couples, families, and event hosts looking for a clean, mobile-friendly digital invitation and event coordination experience.',
        whyItExists:
          'To provide a refined, practical digital alternative to static flyers and fragmented event messaging while strengthening Fivers Corp’s consumer web product capability.',
      },
      capabilities: [
        {
          title: 'Digital Invitation Presentation',
          description:
            'Presents couple stories, event schedules, and venue details in a structured mobile-first layout.',
        },
        {
          title: 'RSVP & Guest Coordination',
          description:
            'Collects attendance responses cleanly so hosts can organize guest expectations without manual spreadsheet guesswork.',
        },
        {
          title: 'Shareable Web Delivery',
          description:
            'Delivers invitations via standard web links that open cleanly across smartphones and desktop browsers.',
        },
      ],
      statusDetail: {
        summary:
          'Veluna is an active, live digital platform within the Fivers Corp product portfolio.',
        availability:
          'Available as a live Fivers Corp product. Reach out through our Contact page for inquiries or collaboration.',
      },
      technologyApproach: {
        summary:
          'Built with modern responsive web architecture prioritizing fast mobile loading, clean visual typography, and straightforward guest interactions without requiring guests to install an app.',
        relatedCapabilityLabel: 'Software & Systems',
      },
      productContext:
        'Veluna demonstrates how Fivers applies software engineering and editorial design to everyday social and family milestones, turning a practical coordination need into a clean digital product.',
      relatedIds: ['financial-tracker', 'linguaflow', 'fiveclip'],
      seo: {
        title: 'Veluna — Digital Wedding & Event Platform | Fivers Corp',
        description:
          'Veluna is a live digital wedding and event platform developed by Fivers Corp for creating structured digital invitations and coordinating guest experiences.',
      },
    },
    {
      id: 'financial-tracker',
      slug: 'financial-tracker',
      route: '/products/financial-tracker',
      name: 'Financial Tracker',
      subtitle: 'Personal Finance Platform',
      positioning:
        'Focused personal finance software built for clear cashflow visibility, budgeting, and everyday financial discipline.',
      description:
        'A structured personal finance application focused on cashflow visibility, budgeting, and disciplined financial habits.',
      focusArea: 'Consumer Software & Personal Utility',
      status: 'LIVE',
      category: 'Personal Finance',
      icon: 'finance',
      highlights: [
        'Income and expense categorization',
        'Clear monthly cashflow overview',
        'Focused daily budgeting workflow',
      ],
      overview: {
        whatItIs:
          'Financial Tracker is a live personal finance web application created by Fivers Corp to make recording and reviewing day-to-day financial activity straightforward.',
        problemAddressed:
          'Many personal finance tools either overwhelm individuals with complex accounting jargon or scatter records across notes and spreadsheets, making regular tracking hard to sustain.',
        intendedFor:
          'Individuals seeking clear visibility over personal income, recurring spending, and monthly budgeting habits.',
        whyItExists:
          'To translate Fivers Corp’s principle — technology should create leverage, not complexity — into an everyday personal utility.',
      },
      capabilities: [
        {
          title: 'Income & Expense Categorization',
          description:
            'Organizes inflows and outflows into clear, structured categories for straightforward daily logging.',
        },
        {
          title: 'Monthly Cashflow Visibility',
          description:
            'Summarizes monthly spending and balance patterns so individuals can review where money actually goes.',
        },
        {
          title: 'Lightweight Daily Workflow',
          description:
            'Designed around low-friction entry so tracking remains practical over months rather than abandoned after a week.',
        },
      ],
      statusDetail: {
        summary:
          'Financial Tracker is a live personal utility platform in the Fivers Corp portfolio.',
        availability:
          'Live as part of the Fivers Corp product ecosystem. Inquiries regarding the platform can be sent via our Contact page.',
      },
      technologyApproach: {
        summary:
          'Engineered as a lightweight, structured web application focused on clean data organization, tabular clarity, and responsive access on mobile and desktop.',
        relatedCapabilityLabel: 'Data & Intelligence',
      },
      productContext:
        'Financial Tracker reflects Fivers Corp’s focus on structured data practices — starting with personal financial clarity as a practical foundation before extending analytical habits into broader business contexts.',
      relatedIds: ['veluna', 'fivers-digital-office', 'forex-agent'],
      seo: {
        title: 'Financial Tracker — Personal Finance Platform | Fivers Corp',
        description:
          'Financial Tracker is a live personal finance platform built by Fivers Corp for clear cashflow visibility, budgeting, and disciplined financial habits.',
      },
    },
    {
      id: 'fivers-digital-office',
      slug: 'fivers-digital-office',
      route: '/products/fivers-digital-office',
      name: 'Fivers Digital Office',
      subtitle: 'Internal Digital Workplace',
      positioning:
        'An evolving internal digital workplace exploring how AI, software, and automation support company operations.',
      description:
        'An evolving internal platform exploring how AI, software, and automation can support company operations.',
      focusArea: 'Internal Systems & Operations',
      status: 'IN DEVELOPMENT',
      category: 'Digital Workplace',
      icon: 'office',
      highlights: [
        'Unified internal coordination and documentation',
        'AI-assisted research and workflow support',
        'Built around real day-to-day company needs',
      ],
      overview: {
        whatItIs:
          'Fivers Digital Office is an internal operating concept and software initiative currently in development inside Fivers Corp.',
        problemAddressed:
          'A small company working across software builds, research experiments, and real-world business contexts needs a cohesive way to organize knowledge, workflows, and decisions without heavy enterprise bureaucracy.',
        intendedFor:
          'Internal Fivers Corp operations and multi-initiative coordination — not positioned as an external commercial SaaS product at this stage.',
        whyItExists:
          'To test and apply AI-assisted workflows and internal tooling inside Fivers Corp first, proving practical leverage before considering any broader external use.',
      },
      capabilities: [
        {
          title: 'Internal Coordination & Documentation',
          description:
            'Brings project notes, operational context, and internal documentation into a structured environment.',
        },
        {
          title: 'AI-Assisted Research Support',
          description:
            'Explores human-led, AI-assisted synthesis to speed up background research and structured analysis.',
        },
        {
          title: 'Workflow Automation Trials',
          description:
            'Tests lightweight automation patterns aimed at reducing repetitive administrative overhead.',
        },
      ],
      statusDetail: {
        summary:
          'Currently in active internal development. It is an internal company workspace initiative rather than a publicly launched commercial SaaS offering.',
        availability:
          'Internal / In Development within Fivers Corp.',
      },
      technologyApproach: {
        summary:
          'Combines web-based workspace architecture with applied AI and workflow automation, strictly following a human-led, technology-enabled, AI-assisted operating model.',
        relatedCapabilityLabel: 'Applied AI & Automation',
      },
      productContext:
        'Fivers Digital Office sits directly at the core of Fivers Corp — acting as the internal proving ground where software systems and AI assistance are tested on real daily company work.',
      relatedIds: ['financial-tracker', 'linguaflow', 'fiveclip'],
      seo: {
        title: 'Fivers Digital Office — Internal Workplace | Fivers Corp',
        description:
          'Fivers Digital Office is an internal workplace platform in development at Fivers Corp, exploring AI-assisted workflows and operational coordination.',
      },
    },
    {
      id: 'linguaflow',
      slug: 'linguaflow',
      route: '/products/linguaflow',
      name: 'LinguaFlow',
      subtitle: 'Language Learning Platform',
      positioning:
        'An in-development language learning platform focused on interactive, practical, technology-assisted study.',
      description:
        'A digital language-learning platform exploring interactive and technology-assisted learning experiences.',
      focusArea: 'EdTech & Interactive Software',
      status: 'IN DEVELOPMENT',
      category: 'Language Learning',
      icon: 'lingua',
      highlights: [
        'Interactive contextual study sessions',
        'Structured vocabulary and comprehension practice',
        'Clean, distraction-free learning environment',
      ],
      overview: {
        whatItIs:
          'LinguaFlow is a digital language-learning software initiative currently in development at Fivers Corp.',
        problemAddressed:
          'Many digital learning tools rely on gamified noise rather than clear, contextual practice that helps learners build steady comprehension.',
        intendedFor:
          'Independent learners seeking a calm, structured digital study workflow focused on practical language comprehension.',
        whyItExists:
          'To explore how interactive software and modern language tooling can support clearer, more focused learning habits.',
      },
      capabilities: [
        {
          title: 'Contextual Study Sessions',
          description:
            'Organizes practice around meaningful phrases and realistic context rather than isolated word lists.',
        },
        {
          title: 'Structured Vocabulary & Comprehension',
          description:
            'Supports progressive review loops designed for steady familiarity and recall.',
        },
        {
          title: 'Distraction-Free Interface',
          description:
            'Designed with clean typography and calm visual pacing so learners stay focused on the material.',
        },
      ],
      statusDetail: {
        summary:
          'Currently in development. Core learning flows and product structure are being built and refined.',
        availability:
          'In Development — not yet publicly launched.',
      },
      technologyApproach: {
        summary:
          'Built with modern interactive web technology and structured learning workflows, exploring thoughtful ways technology can assist practice without overwhelming the learner.',
        relatedCapabilityLabel: 'Software & Applied AI',
      },
      productContext:
        'LinguaFlow expands Fivers Corp’s digital product exploration into interactive education, applying clean interface discipline to everyday skill building.',
      relatedIds: ['veluna', 'fivers-digital-office', 'fiveclip'],
      seo: {
        title: 'LinguaFlow — Language Learning Platform | Fivers Corp',
        description:
          'LinguaFlow is an in-development language learning platform by Fivers Corp exploring interactive, distraction-free, technology-assisted study.',
      },
    },
    {
      id: 'fiveclip',
      slug: 'fiveclip',
      route: '/products/fiveclip',
      name: 'FiveClip',
      subtitle: 'Digital Media & Content Workflows',
      positioning:
        'An experimental media workflow initiative investigating AI-assisted content clipping and digital publishing.',
      description:
        'An experimental platform exploring AI-assisted content clipping and media workflows.',
      focusArea: 'Digital Media & Content Systems',
      status: 'EXPERIMENT',
      category: 'Media Experiment',
      icon: 'clip',
      highlights: [
        'Short-form content segmentation exploration',
        'AI-assisted media workflow testing',
        'Multi-format digital publishing research',
      ],
      overview: {
        whatItIs:
          'FiveClip is an experimental digital media project inside Fivers Corp examining how AI and software can assist with content clipping and multi-format media workflows.',
        problemAddressed:
          'Repurposing long-form media into concise, structured segments manually takes significant editorial time and repetitive effort.',
        intendedFor:
          'Internal media workflow exploration and digital publishing research at Fivers Corp.',
        whyItExists:
          'To test whether applied AI and structured tooling can meaningfully accelerate content preparation while preserving human editorial judgment.',
      },
      capabilities: [
        {
          title: 'Content Segmentation Exploration',
          description:
            'Tests structured approaches to identifying and extracting focused short-form highlights from longer material.',
        },
        {
          title: 'AI-Assisted Editorial Testing',
          description:
            'Evaluates where automated assistance helps draft, organize, or prepare media workflows for human review.',
        },
        {
          title: 'Multi-Format Publishing Research',
          description:
            'Explores repeatable pipelines for adapting content cleanly across modern digital formats.',
        },
      ],
      statusDetail: {
        summary:
          'FiveClip is an active experiment rather than an established commercial platform. Scope and direction remain exploratory.',
        availability:
          'Experiment — exploratory initiative within Fivers Corp.',
      },
      technologyApproach: {
        summary:
          'Investigates applied AI and workflow automation applied to digital media processing, keeping final creative judgment firmly human-led.',
        relatedCapabilityLabel: 'Applied AI & Digital Media',
      },
      productContext:
        'FiveClip reflects Fivers Corp’s willingness to run focused, low-overhead experiments in digital media and content systems before deciding what merits deeper product investment.',
      relatedIds: ['fivers-digital-office', 'linguaflow', 'forex-agent'],
      seo: {
        title: 'FiveClip — Digital Media & Content Workflow | Fivers Corp',
        description:
          'FiveClip is an experimental Fivers Corp initiative exploring AI-assisted content clipping and structured digital media workflows.',
      },
    },
    {
      id: 'forex-agent',
      slug: 'forex-agent',
      route: '/products/forex-agent',
      name: 'Forex Agent',
      subtitle: 'Market Research & Analysis',
      positioning:
        'An experimental internal system exploring AI-assisted market research, structured analysis, and trading workflows.',
      description:
        'An experimental system exploring AI-assisted market research, analysis, and trading workflows.',
      focusArea: 'Market Research & Data Analysis',
      status: 'EXPERIMENT',
      category: 'Market Research',
      icon: 'forex',
      highlights: [
        'Structured market context synthesis',
        'AI-assisted analytical research workflows',
        'Exploratory decision-support tooling',
      ],
      overview: {
        whatItIs:
          'Forex Agent is an exploratory research and analysis experiment developed within Fivers Corp to study how structured data workflows and AI can organize market information.',
        problemAddressed:
          'Macroeconomic news, price context, and market notes are fragmented across sources, making disciplined research review slow and inconsistent.',
        intendedFor:
          'Internal market research exploration and analytical workflow testing within Fivers Corp — not a public advisory service or automated profit system.',
        whyItExists:
          'To study structured data synthesis, risk-aware analytical tooling, and decision-support workflows in a demanding real-time information domain.',
      },
      capabilities: [
        {
          title: 'Market Context Synthesis',
          description:
            'Experiments with organizing macroeconomic and market observations into structured, readable summaries.',
        },
        {
          title: 'Analytical Research Workflows',
          description:
            'Tests repeatable checklists and AI-assisted research preparation to support disciplined review.',
        },
        {
          title: 'Exploratory Decision Support',
          description:
            'Focuses on structuring information clarity for human evaluation rather than claiming autonomous trading certainty.',
        },
      ],
      statusDetail: {
        summary:
          'Forex Agent is strictly an internal experiment. It is not a commercial product, financial advisor, or guaranteed trading system.',
        availability:
          'Internal Experiment — subject to strict market risk limitations.',
      },
      technologyApproach: {
        summary:
          'Explores structured data organization and applied AI synthesis for research workflows, paired with explicit human oversight and risk awareness.',
        relatedCapabilityLabel: 'Data & Intelligence',
      },
      productContext:
        'Forex Agent aligns with Fivers Corp’s Capital, Investment & Trading and Data & Business Intelligence exploration — testing analytical rigor without exaggerating claims.',
      relatedIds: ['financial-tracker', 'fiveclip', 'fivers-digital-office'],
      seo: {
        title: 'Forex Agent — Market Research & Analysis | Fivers Corp',
        description:
          'Forex Agent is an experimental Fivers Corp project exploring AI-assisted market research and structured analysis workflows. For internal research only.',
      },
      disclaimer:
        'Risk Disclaimer: Forex Agent is an internal research and analysis experiment. Foreign exchange and financial market trading involve substantial risk of loss and are not suitable for every individual. Nothing presented here constitutes financial, trading, or investment advice.',
    },
  ],
  id: [
    {
      id: 'veluna',
      slug: 'veluna',
      route: '/products/veluna',
      name: 'Veluna',
      subtitle: 'Platform Undangan Pernikahan & Acara Digital',
      positioning:
        'Undangan pernikahan digital berbasis web dan pengelolaan pengalaman tamu untuk perayaan modern.',
      description:
        'Platform undangan berbasis web dan pengalaman tamu yang dirancang untuk pernikahan modern dan perayaan terkurasi.',
      focusArea: 'Produk Digital & Perangkat Lunak Konsumen',
      status: 'LIVE',
      category: 'Platform Acara',
      icon: 'veluna',
      highlights: [
        'Undangan pernikahan digital yang terstruktur',
        'Pengelolaan RSVP dan kehadiran tamu',
        'Tampilan editorial responsif di berbagai perangkat',
      ],
      overview: {
        whatItIs:
          'Veluna adalah platform web konsumen yang aktif dari Fivers Corp untuk mempublikasikan undangan pernikahan digital dan menyusun informasi acara tamu dalam satu tautan yang mudah diakses.',
        problemAddressed:
          'Undangan cetak dan pesan obrolan yang tersebar menyulitkan penyampaian pembaruan jadwal, detail lokasi, dan pencatatan konfirmasi kehadiran tamu secara rapi di perangkat seluler.',
        intendedFor:
          'Pasangan, keluarga, dan penyelenggara acara yang menginginkan undangan digital serta koordinasi tamu yang rapi dan nyaman diakses melalui ponsel.',
        whyItExists:
          'Menghadirkan alternatif digital yang tertata dan praktis dibanding selebaran statis atau pesan yang terpecah, sekaligus memperkuat kapabilitas produk web konsumen Fivers Corp.',
      },
      capabilities: [
        {
          title: 'Penyajian Undangan Digital',
          description:
            'Menampilkan kisah pasangan, jadwal rangkaian acara, dan detail lokasi dalam tata letak mobile-first yang terstruktur.',
        },
        {
          title: 'Koordinasi RSVP & Tamu',
          description:
            'Mengumpulkan konfirmasi kehadiran dengan rapi agar tuan rumah dapat memperkirakan kesiapan acara secara lebih teratur.',
        },
        {
          title: 'Distribusi Tautan Web',
          description:
            'Dibagikan melalui tautan web standar yang langsung terbuka di peramban ponsel maupun desktop tanpa perlu memasang aplikasi.',
        },
      ],
      statusDetail: {
        summary:
          'Veluna merupakan platform digital aktif (LIVE) dalam portofolio produk Fivers Corp.',
        availability:
          'Tersedia sebagai produk aktif Fivers Corp. Hubungi kami melalui halaman Kontak untuk pertanyaan atau kolaborasi.',
      },
      technologyApproach: {
        summary:
          'Dibangun dengan arsitektur web responsif modern yang memprioritaskan kecepatan muat di ponsel, tipografi editorial yang bersih, dan interaksi tamu yang mudah.',
        relatedCapabilityLabel: 'Perangkat Lunak & Sistem',
      },
      productContext:
        'Veluna menunjukkan bagaimana Fivers menerapkan rekayasa perangkat lunak dan desain editorial pada momen sosial dan keluarga sehari-hari, mengubah kebutuhan koordinasi praktis menjadi produk digital yang bersih.',
      relatedIds: ['financial-tracker', 'linguaflow', 'fiveclip'],
      seo: {
        title: 'Veluna — Platform Undangan Pernikahan & Acara Digital | Fivers Corp',
        description:
          'Veluna adalah platform undangan pernikahan dan acara digital aktif dari Fivers Corp untuk menyusun pengalaman undangan web modern dan koordinasi tamu.',
      },
    },
    {
      id: 'financial-tracker',
      slug: 'financial-tracker',
      route: '/products/financial-tracker',
      name: 'Financial Tracker',
      subtitle: 'Platform Keuangan Pribadi',
      positioning:
        'Perangkat lunak keuangan pribadi yang berfokus pada visibilitas arus kas, penganggaran, dan kebiasaan finansial disiplin.',
      description:
        'Aplikasi keuangan pribadi terstruktur yang berfokus pada visibilitas arus kas, penganggaran, dan kebiasaan finansial yang disiplin.',
      focusArea: 'Perangkat Lunak Konsumen & Utilitas Pribadi',
      status: 'LIVE',
      category: 'Keuangan Pribadi',
      icon: 'finance',
      highlights: [
        'Kategorisasi pemasukan dan pengeluaran',
        'Ringkasan arus kas bulanan yang jelas',
        'Alur pencatatan anggaran harian yang ringan',
      ],
      overview: {
        whatItIs:
          'Financial Tracker adalah aplikasi web keuangan pribadi yang aktif dari Fivers Corp untuk membantu pencatatan dan peninjauan aktivitas keuangan harian secara terstruktur.',
        problemAddressed:
          'Banyak alat keuangan pribadi terasa terlalu rumit dengan istilah akuntansi atau justru tersebar di catatan terpisah sehingga kebiasaan mencatat sulit bertahan.',
        intendedFor:
          'Individu yang menginginkan kejelasan atas pemasukan, pengeluaran rutin, dan kebiasaan anggaran bulanan.',
        whyItExists:
          'Mewujudkan prinsip Fivers Corp — teknologi harus menciptakan daya ungkit, bukan kerumitan — ke dalam utilitas pribadi sehari-hari.',
      },
      capabilities: [
        {
          title: 'Kategorisasi Pemasukan & Pengeluaran',
          description:
            'Mengelompokkan arus masuk dan keluar ke kategori yang jelas untuk pencatatan harian yang rapi.',
        },
        {
          title: 'Visibilitas Arus Kas Bulanan',
          description:
            'Merangkum pola pengeluaran dan saldo bulanan agar pengguna dapat melihat ke mana dana benar-benar mengalir.',
        },
        {
          title: 'Alur Pencatatan Harian yang Ringan',
          description:
            'Dirancang agar cepat digunakan sehari-hari sehingga kebiasaan pencatatan tetap konsisten dalam jangka panjang.',
        },
      ],
      statusDetail: {
        summary:
          'Financial Tracker adalah platform utilitas pribadi yang berstatus aktif (LIVE) di ekosistem Fivers Corp.',
        availability:
          'Aktif sebagai bagian dari ekosistem produk Fivers Corp. Pertanyaan terkait platform ini dapat dikirim melalui halaman Kontak.',
      },
      technologyApproach: {
        summary:
          'Dirancang sebagai aplikasi web ringan dan terstruktur dengan fokus pada kerapian data, keterbacaan angka, dan akses responsif di ponsel maupun desktop.',
        relatedCapabilityLabel: 'Data & Inteligensi',
      },
      productContext:
        'Financial Tracker mencerminkan perhatian Fivers Corp pada praktik data yang terstruktur — memulai dari kejelasan finansial pribadi sebagai fondasi sebelum memperluas kebiasaan analitis ke konteks bisnis.',
      relatedIds: ['veluna', 'fivers-digital-office', 'forex-agent'],
      seo: {
        title: 'Financial Tracker — Platform Keuangan Pribadi | Fivers Corp',
        description:
          'Financial Tracker adalah platform keuangan pribadi aktif dari Fivers Corp untuk visibilitas arus kas, penganggaran, dan kebiasaan finansial yang disiplin.',
      },
    },
    {
      id: 'fivers-digital-office',
      slug: 'fivers-digital-office',
      route: '/products/fivers-digital-office',
      name: 'Fivers Digital Office',
      subtitle: 'Ruang Kerja Digital Internal',
      positioning:
        'Ruang kerja digital internal yang terus berkembang untuk mengeksplorasi dukungan AI, perangkat lunak, dan otomasi pada operasional perusahaan.',
      description:
        'Platform internal yang terus berkembang untuk mengeksplorasi bagaimana AI, perangkat lunak, dan otomasi dapat mendukung operasional perusahaan.',
      focusArea: 'Sistem & Operasional Internal',
      status: 'IN DEVELOPMENT',
      category: 'Ruang Kerja Digital',
      icon: 'office',
      highlights: [
        'Koordinasi dan dokumentasi internal terpadu',
        'Dukungan riset dan alur kerja berbantuan AI',
        'Dibangun sesuai kebutuhan harian perusahaan',
      ],
      overview: {
        whatItIs:
          'Fivers Digital Office adalah konsep operasi dan inisiatif perangkat lunak ruang kerja internal yang saat ini sedang dikembangkan di dalam Fivers Corp.',
        problemAddressed:
          'Perusahaan kecil yang menjalankan pengembangan perangkat lunak, eksperimen riset, dan konteks bisnis nyata membutuhkan cara yang tertata untuk menyatukan pengetahuan, alur kerja, dan keputusan tanpa birokrasi berlebih.',
        intendedFor:
          'Operasional internal Fivers Corp dan koordinasi antar-inisiatif — tidak diposisikan sebagai produk SaaS komersial eksternal pada tahap ini.',
        whyItExists:
          'Untuk menguji dan menerapkan alur kerja berbantuan AI serta alat internal di Fivers Corp terlebih dahulu sebelum mempertimbangkan penerapan yang lebih luas.',
      },
      capabilities: [
        {
          title: 'Koordinasi & Dokumentasi Internal',
          description:
            'Menyatukan catatan proyek, konteks operasional, dan dokumentasi internal dalam satu lingkungan terstruktur.',
        },
        {
          title: 'Dukungan Riset Berbantuan AI',
          description:
            'Mengeksplorasi sintesis informasi yang dipimpin manusia dan dibantu AI untuk mempercepat riset latar belakang serta analisis terstruktur.',
        },
        {
          title: 'Uji Coba Otomasi Alur Kerja',
          description:
            'Menguji pola otomasi ringan untuk mengurangi pekerjaan administratif yang berulang.',
        },
      ],
      statusDetail: {
        summary:
          'Saat ini dalam pengembangan internal aktif (IN DEVELOPMENT). Inisiatif ini adalah ruang kerja internal perusahaan, bukan produk SaaS komersial yang telah dirilis ke publik.',
        availability:
          'Internal / Dalam Pengembangan di Fivers Corp.',
      },
      technologyApproach: {
        summary:
          'Memadukan arsitektur ruang kerja berbasis web dengan AI terapan dan otomasi alur kerja, dengan prinsip dipimpin manusia, didukung teknologi, dan dibantu AI.',
        relatedCapabilityLabel: 'AI Terapan & Otomasi',
      },
      productContext:
        'Fivers Digital Office berada langsung di inti Fivers Corp — menjadi lingkungan uji nyata tempat sistem perangkat lunak dan bantuan AI diterapkan pada pekerjaan perusahaan sehari-hari.',
      relatedIds: ['financial-tracker', 'linguaflow', 'fiveclip'],
      seo: {
        title: 'Fivers Digital Office — Ruang Kerja Digital Internal | Fivers Corp',
        description:
          'Fivers Digital Office adalah konsep ruang kerja digital internal yang sedang dikembangkan di Fivers Corp untuk koordinasi operasional berbantuan AI.',
      },
    },
    {
      id: 'linguaflow',
      slug: 'linguaflow',
      route: '/products/linguaflow',
      name: 'LinguaFlow',
      subtitle: 'Platform Pembelajaran Bahasa',
      positioning:
        'Platform pembelajaran bahasa yang sedang dikembangkan dengan fokus pada latihan interaktif, praktis, dan terbantu teknologi.',
      description:
        'Platform pembelajaran bahasa digital yang mengeksplorasi pengalaman belajar interaktif berbantuan teknologi.',
      focusArea: 'EdTech & Perangkat Lunak Interaktif',
      status: 'IN DEVELOPMENT',
      category: 'Pembelajaran Bahasa',
      icon: 'lingua',
      highlights: [
        'Sesi belajar kontekstual yang interaktif',
        'Latihan kosakata dan pemahaman terstruktur',
        'Lingkungan belajar bersih bebas distraksi',
      ],
      overview: {
        whatItIs:
          'LinguaFlow adalah inisiatif perangkat lunak pembelajaran bahasa digital yang sedang dikembangkan di Fivers Corp.',
        problemAddressed:
          'Banyak aplikasi belajar bahasa mengandalkan gamifikasi yang ramai alih-alih latihan kontekstual yang tenang dan terarah untuk membangun pemahaman nyata.',
        intendedFor:
          'Pembelajar mandiri yang menginginkan alur belajar digital yang bersih, terstruktur, dan fokus pada pemahaman bahasa praktis.',
        whyItExists:
          'Untuk mengeksplorasi bagaimana perangkat lunak interaktif dan teknologi bahasa modern dapat mendukung kebiasaan belajar yang lebih fokus.',
      },
      capabilities: [
        {
          title: 'Sesi Belajar Kontekstual',
          description:
            'Menyusun latihan berbasis frasa bermakna dan konteks nyata, bukan sekadar daftar kata yang terpisah.',
        },
        {
          title: 'Latihan Kosakata & Pemahaman Terstruktur',
          description:
            'Mendukung pengulangan bertahap untuk membangun keakraban dan daya ingat yang konsisten.',
        },
        {
          title: 'Antarmuka Bebas Distraksi',
          description:
            'Dirancang dengan tipografi bersih dan ritme visual yang tenang agar pembelajar tetap fokus pada materi.',
        },
      ],
      statusDetail: {
        summary:
          'Saat ini dalam tahap pengembangan (IN DEVELOPMENT). Alur belajar inti dan struktur produk sedang dibangun dan disempurnakan.',
        availability:
          'Dalam Pengembangan — belum dirilis secara publik.',
      },
      technologyApproach: {
        summary:
          'Dibangun dengan teknologi web interaktif modern dan alur pembelajaran terstruktur guna membantu proses latihan tanpa membebani pengguna.',
        relatedCapabilityLabel: 'Perangkat Lunak & AI Terapan',
      },
      productContext:
        'LinguaFlow memperluas eksplorasi produk digital Fivers Corp ke ranah edukasi interaktif dengan membawa disiplin antarmuka yang bersih ke pengembangan keterampilan harian.',
      relatedIds: ['veluna', 'fivers-digital-office', 'fiveclip'],
      seo: {
        title: 'LinguaFlow — Platform Pembelajaran Bahasa | Fivers Corp',
        description:
          'LinguaFlow adalah platform pembelajaran bahasa yang sedang dikembangkan oleh Fivers Corp untuk pengalaman belajar digital yang interaktif dan terfokus.',
      },
    },
    {
      id: 'fiveclip',
      slug: 'fiveclip',
      route: '/products/fiveclip',
      name: 'FiveClip',
      subtitle: 'Alur Kerja Media Digital & Konten',
      positioning:
        'Inisiatif eksperimen alur kerja media yang meneliti pemotongan konten berbantuan AI dan publikasi digital.',
      description:
        'Platform eksperimental yang mengeksplorasi pemotongan konten dan alur kerja media berbantuan AI.',
      focusArea: 'Media Digital & Sistem Konten',
      status: 'EXPERIMENT',
      category: 'Eksperimen Media',
      icon: 'clip',
      highlights: [
        'Eksplorasi segmentasi konten format pendek',
        'Pengujian alur kerja editorial berbantuan AI',
        'Riset publikasi digital multi-format',
      ],
      overview: {
        whatItIs:
          'FiveClip adalah proyek eksperimental media digital di Fivers Corp yang meneliti bagaimana AI dan perangkat lunak dapat membantu pemotongan konten serta alur kerja media multi-format.',
        problemAddressed:
          'Mengolah materi media berdurasi panjang menjadi potongan terstruktur secara manual membutuhkan waktu editorial dan tenaga berulang yang besar.',
        intendedFor:
          'Eksplorasi alur kerja media internal dan riset publikasi digital di Fivers Corp.',
        whyItExists:
          'Untuk menguji sejauh mana AI terapan dan alat terstruktur dapat mempercepat persiapan konten tanpa menggantikan penilaian editorial manusia.',
      },
      capabilities: [
        {
          title: 'Eksplorasi Segmentasi Konten',
          description:
            'Menguji pendekatan terstruktur untuk menandai dan mengekstrak bagian penting dari materi berdurasi panjang.',
        },
        {
          title: 'Pengujian Editorial Berbantuan AI',
          description:
            'Mengevaluasi di mana bantuan otomatis mempercepat penyusunan draf dan pengorganisasian materi sebelum ditinjau manusia.',
        },
        {
          title: 'Riset Publikasi Multi-Format',
          description:
            'Meneliti alur kerja berulang untuk menyesuaikan konten ke berbagai format digital modern.',
        },
      ],
      statusDetail: {
        summary:
          'FiveClip merupakan eksperimen aktif (EXPERIMENT), bukan platform komersial mapan. Ruang lingkup dan arahnya masih bersifat eksploratif.',
        availability:
          'Eksperimen — inisiatif eksplorasi di dalam Fivers Corp.',
      },
      technologyApproach: {
        summary:
          'Meneliti penerapan AI terapan dan otomasi alur kerja pada pengolahan media digital sambil menjaga keputusan kreatif tetap di tangan manusia.',
        relatedCapabilityLabel: 'AI Terapan & Media Digital',
      },
      productContext:
        'FiveClip mencerminkan keterbukaan Fivers Corp menjalankan eksperimen yang ringkas dan terfokus di sistem media digital sebelum memutuskan investasi pengembangan lebih lanjut.',
      relatedIds: ['fivers-digital-office', 'linguaflow', 'forex-agent'],
      seo: {
        title: 'FiveClip — Alur Kerja Media Digital & Konten | Fivers Corp',
        description:
          'FiveClip adalah proyek eksperimen Fivers Corp yang mengeksplorasi pemotongan konten dan alur kerja media digital berbantuan AI.',
      },
    },
    {
      id: 'forex-agent',
      slug: 'forex-agent',
      route: '/products/forex-agent',
      name: 'Forex Agent',
      subtitle: 'Riset & Analisis Pasar',
      positioning:
        'Sistem eksperimen internal yang meneliti riset pasar berbantuan AI, analisis terstruktur, dan alur kerja perdagangan.',
      description:
        'Sistem eksperimental yang mengeksplorasi riset pasar, analisis, dan alur kerja perdagangan berbantuan AI.',
      focusArea: 'Riset Pasar & Analisis Data',
      status: 'EXPERIMENT',
      category: 'Riset Pasar',
      icon: 'forex',
      highlights: [
        'Sintesis konteks pasar secara terstruktur',
        'Alur kerja riset analitis berbantuan AI',
        'Perangkat pendukung keputusan eksploratif',
      ],
      overview: {
        whatItIs:
          'Forex Agent adalah eksperimen riset dan analisis di Fivers Corp yang mempelajari bagaimana alur data terstruktur dan AI dapat membantu merangkum informasi pasar.',
        problemAddressed:
          'Berita makroekonomi, konteks harga, dan catatan pasar tersebar di banyak sumber sehingga peninjauan riset secara disiplin sering lambat dan tidak konsisten.',
        intendedFor:
          'Eksplorasi riset pasar internal dan pengujian alur analitis di Fivers Corp — bukan layanan penasihat publik ataupun sistem profit otomatis.',
        whyItExists:
          'Untuk mempelajari sintesis data terstruktur, alat analisis sadar risiko, dan alur dukungan keputusan pada domain informasi waktu-nyata yang menantang.',
      },
      capabilities: [
        {
          title: 'Sintesis Konteks Pasar',
          description:
            'Bereksperimen merangkum perkembangan makroekonomi dan observasi pasar menjadi ringkasan yang mudah dibaca.',
        },
        {
          title: 'Alur Kerja Riset Analitis',
          description:
            'Menguji daftar periksa berulang dan persiapan riset berbantuan AI untuk mendukung peninjauan yang disiplin.',
        },
        {
          title: 'Dukungan Keputusan Eksploratif',
          description:
            'Berfokus pada kejelasan struktur informasi bagi evaluasi manusia, bukan klaim kepastian perdagangan otomatis.',
        },
      ],
      statusDetail: {
        summary:
          'Forex Agent sepenuhnya merupakan eksperimen internal. Ini bukan produk komersial, penasihat keuangan, ataupun sistem jaminan keuntungan.',
        availability:
          'Eksperimen Internal — tunduk pada batas risiko pasar yang ketat.',
      },
      technologyApproach: {
        summary:
          'Mengeksplorasi pengorganisasian data terstruktur dan sintesis AI terapan untuk alur riset dengan pengawasan manusia serta kesadaran risiko.',
        relatedCapabilityLabel: 'Data & Inteligensi',
      },
      productContext:
        'Forex Agent sejalan dengan eksplorasi Capital, Investment & Trading serta Data & Business Intelligence di Fivers Corp — menguji ketajaman analitis tanpa melebih-lebihkan klaim.',
      relatedIds: ['financial-tracker', 'fiveclip', 'fivers-digital-office'],
      seo: {
        title: 'Forex Agent — Riset & Analisis Pasar | Fivers Corp',
        description:
          'Forex Agent adalah eksperimen Fivers Corp yang mengeksplorasi riset pasar dan alur kerja analisis berbantuan AI. Hanya untuk pembelajaran internal.',
      },
      disclaimer:
        'Penafian Risiko: Forex Agent merupakan eksperimen riset dan analisis internal. Perdagangan valuta asing dan pasar keuangan mengandung risiko kerugian yang signifikan dan tidak cocok untuk semua orang. Informasi ini bukan merupakan saran keuangan, perdagangan, atau investasi.',
    },
  ],
};

export const BUSINESSES_DATA: Record<Language, RealBusiness[]> = {
  en: [
    {
      id: 'agriculture',
      slug: 'agriculture',
      route: '/businesses/agriculture',
      title: 'Agriculture',
      subtitle: 'Field Operations & Agricultural Activities',
      location: 'Brebes, Central Java, Indonesia',
      description:
        'Family agricultural activities including rice and red onion farming in Brebes, Central Java — shaped by seasonal cycles, land management, and local market realities.',
      operationalFocus: [
        'Rice and red onion cultivation in Brebes',
        'Seasonal planning and field land management',
        'Engagement with local agricultural market cycles',
      ],
      futureOpportunities: [
        'Digital brand presence & product storytelling',
        'Online discoverability & digital market access',
        'Structured operational records & data collection',
        'Process monitoring & workflow clarity',
      ],
      overview:
        'Alongside its core focus on software, applied AI, and digital products, Fivers Corp is connected to family-run agricultural activities in Brebes, Central Java, including rice and red onion cultivation.',
      currentActivitiesSummary:
        'These agricultural activities operate as real-world family farming operations governed by planting seasons, weather conditions, field care, and local harvest cycles in Brebes. They remain independent physical operations rather than automated or AI-managed farms.',
      realWorldContext:
        'For a technology-led company like Fivers Corp, staying close to real agricultural work provides grounded perspective: it reveals how physical operations actually run, where record-keeping is manual, and where simple digital tools might eventually create genuine practical value without adding complexity.',
      potentialApplications: [
        {
          area: 'Digital Presence & Discoverability',
          note: 'Potential future opportunity to present agricultural products and origin stories clearly online.',
        },
        {
          area: 'Operational Records & Data Collection',
          note: 'Exploratory opportunity to organize planting cycles, input logs, and seasonal notes digitally instead of relying solely on memory or paper.',
        },
        {
          area: 'Process Monitoring & Workflow Clarity',
          note: 'Potential long-term tooling to track recurring field tasks and seasonal schedules where simple digital tracking helps.',
        },
        {
          area: 'Market Access & Process Optimization',
          note: 'Future exploration of digital channels and clearer operational visibility if practical value is demonstrated.',
        },
      ],
      seo: {
        title: 'Agriculture — Real-World Context in Brebes | Fivers Corp',
        description:
          'Explore Fivers Corp’s connection to family-run rice and red onion agriculture in Brebes, Central Java, and potential future technology applications.',
      },
      image: FIVERS_IMAGES.onionBrebes,
      imageAlt:
        'Red onion and agricultural beds in Brebes, Central Java, Indonesia in natural morning light',
    },
    {
      id: 'layer-poultry',
      slug: 'layer-poultry',
      route: '/businesses/layer-poultry',
      title: 'Layer Poultry',
      subtitle: 'Poultry Farming & Daily Operations',
      location: 'Brebes, Central Java, Indonesia',
      description:
        'Family-run layer poultry activities in Brebes, Central Java — grounded in daily farm discipline, flock care, and consistent operational routines.',
      operationalFocus: [
        'Daily layer flock care and farm routines',
        'Consistent production and feed discipline',
        'Practical, hands-on operational oversight',
      ],
      futureOpportunities: [
        'Digital production records & operational documentation',
        'Routine monitoring & structured operational data',
        'Process optimization where software adds value',
        'Online presence, branding & market access',
      ],
      overview:
        'Fivers Corp is connected to family-run layer poultry farming operations in Brebes, Central Java — a production-oriented real-world activity centered on consistent daily care and farm discipline.',
      currentActivitiesSummary:
        'Day-to-day layer poultry farming depends on reliable feeding schedules, coop upkeep, flock health attention, and steady daily operational routines. These activities operate as hands-on family farm work today and are not presented as an AI-automated farm.',
      realWorldContext:
        'Daily livestock operations generate recurring observations around feed, production rhythm, and routine documentation. Observing these realities first-hand helps Fivers Corp evaluate where software, structured records, and practical digital visibility could eventually create leverage.',
      potentialApplications: [
        {
          area: 'Operational & Production Records',
          note: 'Potential future introduction of structured daily logs to track routine output and feed notes more consistently.',
        },
        {
          area: 'Production Monitoring & Data Collection',
          note: 'Exploratory opportunity to turn recurring daily farm observations into organized longitudinal records.',
        },
        {
          area: 'Reporting & Process Optimization',
          note: 'Potential future lightweight summaries to help identify operational patterns over time where software proves useful.',
        },
        {
          area: 'Digital Visibility & Market Access',
          note: 'Potential future digital presence and documentation to support commercial clarity.',
        },
      ],
      seo: {
        title: 'Layer Poultry — Real-World Context in Brebes | Fivers Corp',
        description:
          'Learn about the family-run layer poultry business context in Brebes, Central Java connected to Fivers Corp and potential future technology applications.',
      },
      image: FIVERS_IMAGES.layerChicken,
      imageAlt:
        'Healthy brown layer chickens inside a clean naturally ventilated timber poultry house in Java',
    },
  ],
  id: [
    {
      id: 'agriculture',
      slug: 'agriculture',
      route: '/businesses/agriculture',
      title: 'Pertanian',
      subtitle: 'Operasional Lahan & Aktivitas Pertanian',
      location: 'Brebes, Jawa Tengah, Indonesia',
      description:
        'Aktivitas pertanian keluarga termasuk budidaya padi dan bawang merah di Brebes, Jawa Tengah — mengikuti siklus musim, pengelolaan lahan, dan dinamika pasar lokal.',
      operationalFocus: [
        'Budidaya padi dan bawang merah di Brebes',
        'Perencanaan musim tanam dan pengelolaan lahan',
        'Keterlibatan langsung dengan siklus pasar lokal',
      ],
      futureOpportunities: [
        'Identitas merek digital & penceritaan produk',
        'Keterjangkauan online & akses pasar digital',
        'Catatan operasional terstruktur & pengumpulan data',
        'Pemantauan proses & kejelasan alur kerja',
      ],
      overview:
        'Di samping fokus utamanya pada perangkat lunak, AI terapan, dan produk digital, Fivers Corp terhubung dengan aktivitas pertanian keluarga di Brebes, Jawa Tengah, termasuk budidaya padi dan bawang merah.',
      currentActivitiesSummary:
        'Aktivitas pertanian ini berjalan sebagai usaha tani keluarga di dunia nyata yang mengikuti musim tanam, kondisi cuaca, perawatan lahan, dan siklus panen lokal di Brebes. Operasional ini tetap merupakan usaha fisik mandiri, bukan pertanian otomatis berbasis AI.',
      realWorldContext:
        'Bagi perusahaan yang bertumpu pada teknologi seperti Fivers Corp, kedekatan dengan aktivitas pertanian nyata memberi perspektif yang membumi: terlihat langsung bagaimana operasional lapangan berjalan, bagian mana yang masih dicatat manual, dan di mana perangkat digital sederhana kelak berpotensi memberi nilai nyata.',
      potentialApplications: [
        {
          area: 'Kehadiran Digital & Keterjangkauan',
          note: 'Peluang pengembangan di masa depan untuk memperkenalkan produk pertanian dan cerita asal-usulnya secara jelas di ranah online.',
        },
        {
          area: 'Catatan Operasional & Pengumpulan Data',
          note: 'Peluang eksploratif untuk merapikan jadwal tanam, catatan saprodi, dan dokumentasi musim secara digital.',
        },
        {
          area: 'Pemantauan Proses & Kejelasan Alur Kerja',
          note: 'Potensi alat bantu jangka panjang untuk memantau tugas rutin lahan dan jadwal musiman bila memang memberi manfaat praktis.',
        },
        {
          area: 'Akses Pasar & Optimalisasi Proses',
          note: 'Penjajakan kanal digital dan visibilitas operasional yang lebih jelas secara bertahap.',
        },
      ],
      seo: {
        title: 'Pertanian — Konteks Bisnis Nyata di Brebes | Fivers Corp',
        description:
          'Pelajari keterhubungan Fivers Corp dengan usaha pertanian padi dan bawang merah keluarga di Brebes, Jawa Tengah serta peluang teknologi di masa depan.',
      },
      image: FIVERS_IMAGES.onionBrebes,
      imageAlt:
        'Bedengan bawang merah dan lahan pertanian di Brebes, Jawa Tengah pada pagi hari',
    },
    {
      id: 'layer-poultry',
      slug: 'layer-poultry',
      route: '/businesses/layer-poultry',
      title: 'Ayam Petelur',
      subtitle: 'Peternakan & Operasional Harian',
      location: 'Brebes, Jawa Tengah, Indonesia',
      description:
        'Aktivitas peternakan ayam petelur milik keluarga di Brebes, Jawa Tengah — berlandaskan kedisiplinan harian, perawatan ternak, dan rutinitas operasional yang konsisten.',
      operationalFocus: [
        'Perawatan harian dan rutinitas kandang ayam petelur',
        'Kedisiplinan pakan dan pemantauan produksi',
        'Pengawasan operasional langsung di lapangan',
      ],
      futureOpportunities: [
        'Catatan produksi digital & dokumentasi operasional',
        'Pemantauan rutin & data operasional terstruktur',
        'Optimalisasi proses di area yang terbantu perangkat lunak',
        'Kehadiran online, merek & akses pasar',
      ],
      overview:
        'Fivers Corp terhubung dengan usaha peternakan ayam petelur milik keluarga di Brebes, Jawa Tengah — sebuah aktivitas berorientasi produksi harian yang menuntut kedisiplinan dan konsistensi operasional.',
      currentActivitiesSummary:
        'Operasional peternakan ayam petelur sehari-hari bertumpu pada jadwal pemberian pakan yang teratur, kebersihan kandang, perhatian kesehatan ternak, dan rutinitas harian yang stabil. Usaha ini berjalan secara langsung di lapangan dan tidak diklaim sebagai peternakan otomatis berbasis AI.',
      realWorldContext:
        'Operasional peternakan harian menghasilkan pengamatan berulang seputar pakan, ritme produksi, dan dokumentasi rutin. Mengamati realitas ini membantu Fivers Corp menilai di mana perangkat lunak, pencatatan terstruktur, dan visibilitas digital kelak dapat memberi daya ungkit.',
      potentialApplications: [
        {
          area: 'Catatan Operasional & Produksi',
          note: 'Potensi penerapan catatan harian terstruktur di masa depan untuk mendokumentasikan hasil produksi dan pakan secara lebih konsisten.',
        },
        {
          area: 'Pemantauan Produksi & Pengumpulan Data',
          note: 'Peluang eksploratif untuk mengubah pengamatan harian kandang menjadi arsip data yang rapi dari waktu ke waktu.',
        },
        {
          area: 'Pelaporan & Optimalisasi Proses',
          note: 'Potensi ringkasan ringan untuk membaca pola operasional bila perangkat lunak terbukti memudahkan pengelolaan.',
        },
        {
          area: 'Visibilitas Digital & Akses Pasar',
          note: 'Peluang penguatan kehadiran digital dan dokumentasi untuk mendukung kejelasan komersial di masa depan.',
        },
      ],
      seo: {
        title: 'Ayam Petelur — Konteks Bisnis Nyata di Brebes | Fivers Corp',
        description:
          'Pelajari konteks bisnis peternakan ayam petelur keluarga di Brebes, Jawa Tengah yang terhubung dengan Fivers Corp serta peluang aplikasi teknologinya.',
      },
      image: FIVERS_IMAGES.layerChicken,
      imageAlt:
        'Ayam petelur cokelat yang sehat di dalam kandang kayu berventilasi alami di Jawa',
    },
  ],
};

export const PRODUCTS: ProductItem[] = PRODUCTS_DATA.en;
export const REAL_BUSINESSES: RealBusiness[] = BUSINESSES_DATA.en;

export const LEVERAGE_FLOW: LeverageStep[] = [
  {
    verb: 'EXPLORE',
    subject: 'Technology & AI',
    description:
      'Investigate practical software, automation, and emerging AI capabilities.',
  },
  {
    verb: 'BUILD',
    subject: 'Software & Digital Products',
    description:
      'Turn promising ideas into focused web applications and internal systems.',
  },
  {
    verb: 'APPLY',
    subject: 'Business Context',
    description:
      'Test where digital tools can support real workflows and commercial needs.',
  },
  {
    verb: 'LEARN',
    subject: 'From Real-World Results',
    description:
      'Observe what genuinely saves time, improves clarity, or adds practical value.',
  },
  {
    verb: 'IMPROVE',
    subject: 'Products, Systems & Operations',
    description:
      'Refine capabilities continuously with measured, long-term discipline.',
  },
];

export const TECHNOLOGY_AREAS: TechnologyArea[] = [
  {
    number: '01',
    title: 'Applied AI',
    summary:
      'Using artificial intelligence as a practical lever across product building, internal workflows, and structured analysis.',
    points: [
      'Research synthesis and domain exploration',
      'Structured qualitative and quantitative analysis',
      'Workflow automation for repetitive tasks',
      'Product development and rapid prototyping',
      'Internal workflows and operational support',
    ],
  },
  {
    number: '02',
    title: 'Software & Systems',
    summary:
      'Designing and engineering clean web applications, digital platforms, internal tools, and reliable business systems.',
    points: [
      'Consumer-facing web platforms and utilities',
      'Internal tools tailored to company workflows',
      'Maintainable full-stack software architecture',
      'Practical interfaces designed for clarity',
    ],
  },
  {
    number: '03',
    title: 'Automation',
    summary:
      'Reducing repetitive manual operational work so small teams can focus on higher-judgment thinking and execution.',
    points: [
      'Streamlining recurring administrative tasks',
      'Connecting structured data across internal tools',
      'Lightweight operational coordination pipelines',
    ],
  },
  {
    number: '04',
    title: 'Data & Intelligence',
    summary:
      'Turning scattered product, market, and operational observations into clear information for better decision-making.',
    points: [
      'Structured record-keeping and reporting habits',
      'Clearer visibility into product and operational patterns',
      'Decision-support frameworks grounded in real evidence',
    ],
  },
];

export const CAPABILITIES: Capability[] = [
  {
    number: '01',
    title: 'Technology & Digital Solutions',
    description:
      'Designing and engineering resilient web applications, internal tools, and reliable software architecture tailored to practical needs.',
    scope: 'Software & infrastructure',
  },
  {
    number: '02',
    title: 'AI & Digital Product',
    description:
      'Applying artificial intelligence across product prototyping, research synthesis, workflow automation, and user-facing features.',
    scope: 'Applied AI & product engineering',
  },
  {
    number: '03',
    title: 'Commercial & Business Development',
    description:
      'Evaluating real-market viability, structuring sustainable commercial models, and connecting digital builds with practical execution.',
    scope: 'Strategy & market execution',
  },
  {
    number: '04',
    title: 'Digital Media & Content Ventures',
    description:
      'Exploring modern digital media formats, content workflows, and structured publishing experiments.',
    scope: 'Media systems & content',
  },
  {
    number: '05',
    title: 'Data & Business Intelligence',
    description:
      'Turning operational and product observations into structured insight for clearer decision-making.',
    scope: 'Analytics & decision support',
  },
  {
    number: '06',
    title: 'Capital, Investment & Trading',
    description:
      'Conducting structured market research, disciplined risk evaluation, and exploratory capital analysis.',
    scope: 'Market research & analysis',
  },
  {
    number: '07',
    title: 'Venture & Innovation Studio',
    description:
      'Taking early concepts from initial hypothesis through focused experimentation toward standalone products or operational tools.',
    scope: 'Concept to execution',
  },
];

export const COMPANY_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Human Thinking',
    description:
      'Everything begins with human curiosity, judgment, and a clear understanding of what is worth building.',
  },
  {
    step: '02',
    title: 'Technology',
    description:
      'Reliable software engineering and system design form the core foundation behind Fivers.',
  },
  {
    step: '03',
    title: 'AI & Automation',
    description:
      'Applied to accelerate research, automate repetitive tasks, and assist product and workflow creation.',
  },
  {
    step: '04',
    title: 'Experimentation',
    description:
      'Small, disciplined experiments validate ideas in practice before expanding commitment.',
  },
  {
    step: '05',
    title: 'Execution',
    description:
      'Shipping real digital products and evaluating grounded applications across business contexts.',
  },
  {
    step: '06',
    title: 'Learning',
    description:
      'Observing real-world results honestly to sharpen future systems, products, and decisions.',
  },
];
