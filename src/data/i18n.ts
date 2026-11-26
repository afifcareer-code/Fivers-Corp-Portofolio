import { Language } from '../context/LanguageContext';
import {
  AppRoute,
  Capability,
  LeverageStep,
  ProductItem,
  ProductStatus,
  RealBusiness,
  TechnologyArea,
  WorkflowStep,
} from '../types';
import { BUSINESSES_DATA, PRODUCTS_DATA } from './fiversData';

export interface RouteSEO {
  title: string;
  description: string;
}

export interface SiteCopy {
  nav: {
    home: string;
    company: string;
    technology: string;
    products: string;
    businesses: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  statusLabels: Record<ProductStatus, string>;
  common: {
    viewProduct: string;
    viewBusiness: string;
    visitProduct: string;
    backToProducts: string;
    backToBusinesses: string;
    fiversEcosystem: string;
    focusAreas: string;
    inquireAbout: string;
    getInTouch: string;
    aboutFivers: string;
    potentialFutureAreas: string;
    exploreBusinessesArrow: string;
  };
  productDetail: {
    overviewEyebrow: string;
    overviewTitle: string;
    whatItIs: string;
    problemAddressed: string;
    intendedFor: string;
    whyItExists: string;
    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    statusEyebrow: string;
    statusTitle: string;
    availabilityLabel: string;
    techEyebrow: string;
    techTitle: string;
    exploreTechCta: string;
    contextEyebrow: string;
    contextTitle: string;
    contextFlow: string[];
    relatedEyebrow: string;
    relatedTitle: string;
    ctaHeadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  businessDetail: {
    overviewEyebrow: string;
    overviewTitle: string;
    currentEyebrow: string;
    currentTitle: string;
    contextEyebrow: string;
    contextTitle: string;
    contextNote: string;
    opportunitiesEyebrow: string;
    opportunitiesTitle: string;
    opportunitiesDisclaimer: string;
    otherBusinessTitle: string;
    ctaHeadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    line1: string;
    line2: string;
    navigationTitle: string;
    locationTitle: string;
    region: string;
    country: string;
    copyright: string;
    tags: string;
    disclaimer: string;
  };
  seo: Partial<Record<AppRoute, RouteSEO>> & Record<'/' | '/company' | '/technology' | '/products' | '/businesses' | '/contact', RouteSEO>;
  home: {
    heroEyebrow: string;
    heroTitleLead: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroCaptionLeft: string;
    heroCaptionRight: string;
    overviewIndex: string;
    overviewEyebrow: string;
    overviewTitle: string;
    overviewSubtitle: string;
    overviewCards: {
      technology: { title: string; lead: string; desc: string; cta: string };
      products: { title: string; lead: string; desc: string; cta: string };
      businesses: { title: string; lead: string; desc: string; cta: string };
    };
    philosophyEyebrow: string;
    philosophyTitle: string;
    philosophySubtitle: string;
    leverageFlow: LeverageStep[];
    productsIndex: string;
    productsEyebrow: string;
    productsTitle: string;
    productsSubtitle: string;
    productsViewAll: string;
    businessIndex: string;
    businessEyebrow: string;
    businessTitle: string;
    businessP1: string;
    businessP2: string;
    closingHeadline: string;
    closingSubtext: string;
    closingPrimaryCta: string;
    closingSecondaryCta: string;
  };
  company: {
    eyebrow: string;
    title: string;
    subtitle: string;
    whoIndex: string;
    whoEyebrow: string;
    whoTitle: string;
    whoParagraphs: string[];
    coreLabel: string;
    coreTitle: string;
    coreDesc: string;
    extLabel: string;
    extTitle: string;
    extDesc: string;
    howIndex: string;
    howEyebrow: string;
    howTitle: string;
    howSubtitle: string;
    howMantraLead: string;
    howMantraAccent: string;
    workflowSteps: WorkflowStep[];
    capIndex: string;
    capEyebrow: string;
    capTitle: string;
    capSubtitle: string;
    capabilities: Capability[];
    founderIndex: string;
    founderEyebrow: string;
    founderTitle: string;
    founderRole: string;
    founderP1: string;
    founderP2: string;
    ctaHeadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  technology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    coreIndex: string;
    coreEyebrow: string;
    coreTitle: string;
    coreSubtitle: string;
    areas: TechnologyArea[];
    officeIndex: string;
    officeEyebrow: string;
    officeTitle: string;
    officeSubtitle: string;
    officeTag: string;
    officeHeading: string;
    officeP1: string;
    officeP2: string;
    officeFooter: string;
    ctaHeadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterLive: string;
    filterDev: string;
    filterExp: string;
    countAll: string;
    countFiltered: string;
    liveHeading: string;
    liveSub: string;
    devHeading: string;
    devSub: string;
    expHeading: string;
    expSub: string;
    forexShortDisclaimer: string;
    items: ProductItem[];
    ctaHeadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  businesses: {
    eyebrow: string;
    title: string;
    secondaryTitle: string;
    subtitle: string;
    contextCallout: string;
    currentFocusLabel: string;
    futureOpsLabel: string;
    cardFooter: string;
    items: RealBusiness[];
    ctaHeadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    leftHeading: string;
    leftDesc: string;
    companyLabel: string;
    locationLabel: string;
    locationValue: string;
    focusLabel: string;
    focusValue: string;
    successTitle: string;
    successBodyPrefix: string;
    successBodyMiddle: string;
    successBodySuffix: string;
    sendAnother: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    orgLabel: string;
    orgPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    requiredHintPrefix: string;
    requiredHintSuffix: string;
    submitLabel: string;
    errors: {
      name: string;
      emailEmpty: string;
      emailInvalid: string;
      subject: string;
      message: string;
    };
  };
}

export const TRANSLATIONS: Record<Language, SiteCopy> = {
  en: {
    nav: {
      home: 'Home',
      company: 'Company',
      technology: 'Technology',
      products: 'Products',
      businesses: 'Businesses',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageLabel: 'Language',
    },
    statusLabels: {
      LIVE: 'LIVE',
      'IN DEVELOPMENT': 'IN DEVELOPMENT',
      EXPERIMENT: 'EXPERIMENT',
    },
    common: {
      viewProduct: 'View Product →',
      viewBusiness: 'View Business →',
      visitProduct: 'Visit Product',
      backToProducts: 'Back to Products',
      backToBusinesses: 'Back to Businesses',
      fiversEcosystem: 'Fivers Ecosystem',
      focusAreas: 'Focus Areas',
      inquireAbout: 'Inquire about',
      getInTouch: 'Get in Touch →',
      aboutFivers: 'About Fivers',
      potentialFutureAreas: 'Potential Future Areas',
      exploreBusinessesArrow: 'Explore Businesses →',
    },
    productDetail: {
      overviewEyebrow: '01 · Product Overview',
      overviewTitle: 'Purpose & Scope',
      whatItIs: 'What It Is',
      problemAddressed: 'Problem Addressed',
      intendedFor: 'Intended Audience',
      whyItExists: 'Why It Exists',
      capabilitiesEyebrow: '02 · Capabilities',
      capabilitiesTitle: 'Core Capabilities',
      statusEyebrow: '03 · Maturity & Approach',
      statusTitle: 'Product Status & Availability',
      availabilityLabel: 'Current Availability',
      techEyebrow: 'Technology & Approach',
      techTitle: 'Product & Technical Direction',
      exploreTechCta: 'Explore Fivers Technology →',
      contextEyebrow: '04 · Fivers Corp Context',
      contextTitle: 'Role in the Fivers Ecosystem',
      contextFlow: ['Technology', 'Product', 'Practical Application', 'Value Creation'],
      relatedEyebrow: '05 · Ecosystem',
      relatedTitle: 'Explore Other Fivers Products',
      ctaHeadline: 'Interested in this product or collaborating with Fivers?',
      ctaPrimary: 'Contact Fivers →',
      ctaSecondary: 'All Products',
    },
    businessDetail: {
      overviewEyebrow: '01 · Overview',
      overviewTitle: 'Business Context',
      currentEyebrow: '02 · Current Reality',
      currentTitle: 'Current Activities & Operations',
      contextEyebrow: '03 · Company Perspective',
      contextTitle: 'Why This Real-World Context Matters',
      contextNote:
        'Fivers Corp remains a technology-focused company. These family-run operations represent real-world environments — not Fivers Corp’s primary identity.',
      opportunitiesEyebrow: '04 · Exploratory Outlook',
      opportunitiesTitle: 'Potential Future Technology Applications',
      opportunitiesDisclaimer:
        'Note: The areas below represent potential future opportunities where technology may add practical value — they are not claimed as currently implemented automated systems.',
      otherBusinessTitle: 'Other Real-World Business Context',
      ctaHeadline: 'Exploring how technology can support practical real-world operations.',
      ctaPrimary: 'Contact Fivers →',
      ctaSecondary: 'Explore Technology',
    },
    footer: {
      line1: 'Technology at the Core.',
      line2: 'Opportunities Beyond the Screen.',
      navigationTitle: 'Navigation',
      locationTitle: 'Location',
      region: 'Brebes, Central Java',
      country: 'Indonesia',
      copyright: '© 2026 Fivers Corp. All rights reserved.',
      tags: 'Technology · Applied AI · Digital Products · Real-World Context',
      disclaimer:
        'Market Research Disclaimer: Experimental initiatives such as Forex Agent explore AI-assisted market research and analysis for internal learning only. Financial and foreign exchange markets carry significant risk of loss and nothing on this website constitutes financial, trading, or investment advice.',
    },
    seo: {
      '/': {
        title: 'Fivers Corp — Technology at the Core',
        description:
          'Fivers Corp explores applied AI, software, and digital products — building practical technology and real-world business value.',
      },
      '/company': {
        title: 'Company — About Fivers Corp | Technology at the Core',
        description:
          'A technology-driven company exploring products, systems, and opportunities at the intersection of software, AI, and real-world business.',
      },
      '/technology': {
        title: 'Technology & AI — Applied AI & Systems | Fivers Corp',
        description:
          'Explore practical applications of software, applied AI, automation, data intelligence, and the Fivers Digital Office at Fivers Corp.',
      },
      '/products': {
        title: 'Digital Products & Experiments | Fivers Corp',
        description:
          'Explore digital products and focused experiments from Fivers Corp, including Veluna, Financial Tracker, LinguaFlow, and Fivers Digital Office.',
      },
      '/businesses': {
        title: 'Real-World Businesses — Brebes, Central Java | Fivers Corp',
        description:
          'Fivers Corp is connected to family-run businesses in agriculture and layer poultry farming in Brebes, Central Java, Indonesia.',
      },
      '/contact': {
        title: 'Contact Fivers Corp — Products & Collaboration',
        description:
          'Get in touch with Fivers Corp regarding software, applied AI, digital products, or practical technology collaboration opportunities.',
      },
    },
    home: {
      heroEyebrow: 'FIVERS CORP',
      heroTitleLead: 'Technology at the Core.',
      heroTitleAccent: 'Opportunities Beyond the Screen.',
      heroSubtitle:
        'Fivers Corp explores applied AI, software, digital products, and emerging technologies — while looking for practical ways to create value across businesses and the real world.',
      heroPrimaryCta: 'Explore Technology →',
      heroSecondaryCta: 'Explore Products →',
      heroCaptionLeft: 'Applied AI · Software · Digital Systems',
      heroCaptionRight: 'Core Focus',
      overviewIndex: '01',
      overviewEyebrow: 'Overview',
      overviewTitle: 'What We Do',
      overviewSubtitle:
        'Fivers combines technology exploration, digital product development, and practical business opportunities — with technology and AI at the center of its capabilities.',
      overviewCards: {
        technology: {
          title: 'Technology',
          lead: 'Applied AI, software and digital systems.',
          desc: 'Explore practical applications of AI, software engineering, automation, data, and emerging technologies.',
          cta: 'Explore Technology →',
        },
        products: {
          title: 'Products',
          lead: 'Digital products and focused experiments.',
          desc: 'Fivers builds digital products and experiments across consumer software, productivity, media, learning, and other emerging opportunities.',
          cta: 'Explore Products →',
        },
        businesses: {
          title: 'Businesses',
          lead: 'Real-world businesses and operations.',
          desc: 'Fivers is connected to family businesses in agriculture and layer poultry farming in Brebes, Central Java.',
          cta: 'Explore Businesses →',
        },
      },
      philosophyEyebrow: 'Philosophy',
      philosophyTitle: 'Technology Should Create Leverage.',
      philosophySubtitle:
        'Fivers explores technology not simply because it is new, but because it can improve how products are built, how people work, and how businesses operate.',
      leverageFlow: [
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
      ],
      productsIndex: '02',
      productsEyebrow: 'Products',
      productsTitle: "What We're Building",
      productsSubtitle:
        'A portfolio of digital products, internal systems, and focused experiments.',
      productsViewAll: 'View All Products →',
      businessIndex: '03',
      businessEyebrow: 'Business',
      businessTitle: 'Technology Meets the Real World.',
      businessP1:
        'Alongside its technology initiatives, Fivers is connected to family-run businesses in agriculture and layer poultry farming in Brebes, Central Java.',
      businessP2:
        'These businesses provide a real operational context where digital presence, data, automation, and other technologies may create future opportunities for improvement.',
      closingHeadline: 'Build with Technology. Create Value in the Real World.',
      closingSubtext:
        'Fivers continues to explore where technology, AI, digital products, and real-world business can intersect — one practical opportunity at a time.',
      closingPrimaryCta: 'Get in Touch →',
      closingSecondaryCta: 'About Fivers',
    },
    company: {
      eyebrow: 'COMPANY',
      title: 'About Fivers',
      subtitle:
        'A technology-driven company exploring products, systems, and opportunities at the intersection of software, AI, and real-world business.',
      whoIndex: '01',
      whoEyebrow: 'Identity',
      whoTitle: 'Who We Are',
      whoParagraphs: [
        'Fivers Corp is a technology-focused company exploring applied AI, software, digital products, automation, and emerging technologies.',
        'We start from technology: building digital systems, testing focused product ideas, and developing capabilities that create practical leverage rather than unnecessary complexity.',
        'Alongside our software and product initiatives, Fivers is connected to family-run businesses in agriculture and layer poultry farming in Brebes, Central Java — giving us grounded, real-world operational context where technology may eventually add tangible value.',
      ],
      coreLabel: 'CORE CAPABILITY',
      coreTitle: 'Technology, AI, Software & Digital Products',
      coreDesc:
        'Technology is the capability at the center of Fivers. Software engineering, applied AI, automation, and digital products are what we actively build and refine.',
      extLabel: 'EXTENSION & APPLICATION CONTEXT',
      extTitle: 'Business Operations, Agriculture & Layer Poultry',
      extDesc:
        'Real-world family businesses in Brebes provide a grounded operational landscape for exploring where digital presence, data, and technology can gradually support practical work.',
      howIndex: '02',
      howEyebrow: 'Our Direction & Approach',
      howTitle: 'How We Work',
      howSubtitle:
        'Fivers is building technology capabilities while exploring opportunities to apply those capabilities across products and businesses.',
      howMantraLead: 'Human-led. Technology-enabled.',
      howMantraAccent: 'AI-assisted.',
      workflowSteps: [
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
      ],
      capIndex: '03',
      capEyebrow: 'Organization',
      capTitle: 'Capabilities Behind Fivers',
      capSubtitle:
        'Seven interconnected capability areas supporting software development, product experimentation, and commercial exploration.',
      capabilities: [
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
      ],
      founderIndex: '04',
      founderEyebrow: 'Leadership',
      founderTitle: 'Founder',
      founderRole: 'Founder & Director',
      founderP1:
        'Afif started Fivers Corp to build long-term capability in software, applied AI, and digital products — while staying connected to practical real-world business operations.',
      founderP2:
        'Rather than chasing short-term hype, his focus is on steady skill-building, thoughtful product execution, and identifying where technology genuinely creates leverage.',
      ctaHeadline: 'Explore our technology and digital products.',
      ctaPrimary: 'Explore Technology →',
      ctaSecondary: 'View Products',
    },
    technology: {
      eyebrow: 'TECHNOLOGY & SYSTEMS',
      title: 'Technology',
      subtitle:
        'Exploring practical applications of software, artificial intelligence, automation, data, and emerging technologies.',
      coreIndex: '01',
      coreEyebrow: 'Capabilities',
      coreTitle: 'Core Technology Focus',
      coreSubtitle:
        'Technology should create leverage, not complexity. Each focus area serves practical product building and operational clarity.',
      areas: [
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
      ],
      officeIndex: '02',
      officeEyebrow: 'Internal Operating Concept',
      officeTitle: 'Digital Office',
      officeSubtitle:
        'Applying software and AI internally before extending capabilities outward.',
      officeTag: 'Internal Platform',
      officeHeading: 'Fivers Digital Office',
      officeP1:
        'Fivers Digital Office is an internal digital workplace and AI-assisted operating concept — designed to coordinate research, product documentation, and day-to-day company workflows in one structured environment.',
      officeP2:
        'Rather than building overly complex enterprise layers, it focuses on keeping a small, multi-initiative team organized, informed, and agile.',
      officeFooter: 'Human-led · Technology-enabled · AI-assisted',
      ctaHeadline: 'See what we are building with these capabilities.',
      ctaPrimary: 'Explore Products →',
      ctaSecondary: 'Contact Fivers',
    },
    products: {
      eyebrow: 'DIGITAL PRODUCTS & EXPERIMENTS',
      title: 'Products',
      subtitle:
        'Digital products and experiments developed across the Fivers ecosystem.',
      filterAll: 'All Products',
      filterLive: 'Live',
      filterDev: 'In Development',
      filterExp: 'Experiments',
      countAll: '6 products & experiments',
      countFiltered: 'items',
      liveHeading: 'Live',
      liveSub: 'Released consumer platforms',
      devHeading: 'In Development',
      devSub: 'Active internal & product builds',
      expHeading: 'Experiments',
      expSub: 'Exploratory media & research systems',
      forexShortDisclaimer:
        'Experimental research tool only. Trading involves financial risk; not investment advice.',
      items: PRODUCTS_DATA.en,
      ctaHeadline: 'Interested in collaborating on a product or experiment?',
      ctaPrimary: 'Get in Touch →',
      ctaSecondary: 'Explore Real Businesses',
    },
    businesses: {
      eyebrow: 'REAL-WORLD CONTEXT · BREBES, CENTRAL JAVA',
      title: 'Real Businesses.',
      secondaryTitle: 'Real Operations.',
      subtitle:
        'Fivers is connected to family-run businesses in agriculture and layer poultry farming in Brebes, Central Java.',
      contextCallout:
        'These businesses are independent real-world operations. Fivers sees opportunities to gradually introduce stronger digital presence, data practices, automation, and technology where they genuinely make sense.',
      currentFocusLabel: 'Current Operational Focus',
      futureOpsLabel: 'Potential Future Opportunities',
      cardFooter: 'Independent family operations · Exploratory technology context',
      items: BUSINESSES_DATA.en,
      ctaHeadline:
        'Exploring practical intersections of software and real operations.',
      ctaPrimary: 'Get in Touch →',
      ctaSecondary: 'About Fivers',
    },
    contact: {
      eyebrow: 'CONTACT',
      title: "Let's Build Something Meaningful.",
      subtitle:
        'Interested in Fivers, one of our products, technology collaboration, or potential business opportunities?',
      leftHeading: 'Start a conversation',
      leftDesc:
        'Whether you are reaching out regarding software and applied AI, one of our digital products, or practical business collaboration, send us a note here.',
      companyLabel: 'Company',
      locationLabel: 'Location',
      locationValue: 'Brebes, Central Java, Indonesia',
      focusLabel: 'Core Focus',
      focusValue: 'Technology, Applied AI, Software & Digital Products',
      successTitle: 'Message received',
      successBodyPrefix: 'Thank you,',
      successBodyMiddle: 'Your inquiry regarding',
      successBodySuffix: 'has been recorded for review by the Fivers Corp team.',
      sendAnother: 'Send another message',
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@organization.com',
      orgLabel: 'Company / Organization',
      orgPlaceholder: 'Optional',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Product or collaboration topic',
      messageLabel: 'Message',
      messagePlaceholder:
        'Tell us about your inquiry or collaboration idea...',
      requiredHintPrefix: 'Fields marked with',
      requiredHintSuffix: 'are required.',
      submitLabel: 'Send Message',
      errors: {
        name: 'Please enter your name.',
        emailEmpty: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        subject: 'Please add a short subject.',
        message: 'Please enter a message (at least 10 characters).',
      },
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      company: 'Perusahaan',
      technology: 'Teknologi',
      products: 'Produk',
      businesses: 'Bisnis',
      contact: 'Kontak',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
      languageLabel: 'Bahasa',
    },
    statusLabels: {
      LIVE: 'AKTIF',
      'IN DEVELOPMENT': 'PENGEMBANGAN',
      EXPERIMENT: 'EKSPERIMEN',
    },
    common: {
      viewProduct: 'Lihat Produk →',
      viewBusiness: 'Lihat Bisnis →',
      visitProduct: 'Kunjungi Produk',
      backToProducts: 'Kembali ke Produk',
      backToBusinesses: 'Kembali ke Bisnis',
      fiversEcosystem: 'Ekosistem Fivers',
      focusAreas: 'Fokus Utama',
      inquireAbout: 'Tanyakan tentang',
      getInTouch: 'Hubungi Kami →',
      aboutFivers: 'Tentang Fivers',
      potentialFutureAreas: 'Peluang Pengembangan ke Depan',
      exploreBusinessesArrow: 'Jelajahi Bisnis →',
    },
    productDetail: {
      overviewEyebrow: '01 · Ringkasan Produk',
      overviewTitle: 'Tujuan & Ruang Lingkup',
      whatItIs: 'Apa Produk Ini',
      problemAddressed: 'Kebutuhan yang Ditangani',
      intendedFor: 'Target Pengguna',
      whyItExists: 'Alasan Pengembangan',
      capabilitiesEyebrow: '02 · Kapabilitas',
      capabilitiesTitle: 'Kapabilitas Utama',
      statusEyebrow: '03 · Kematangan & Pendekatan',
      statusTitle: 'Status Produk & Ketersediaan',
      availabilityLabel: 'Ketersediaan Saat Ini',
      techEyebrow: 'Teknologi & Pendekatan',
      techTitle: 'Arah Produk & Teknis',
      exploreTechCta: 'Jelajahi Teknologi Fivers →',
      contextEyebrow: '04 · Konteks Fivers Corp',
      contextTitle: 'Peran dalam Ekosistem Fivers',
      contextFlow: ['Teknologi', 'Produk', 'Penerapan Praktis', 'Penciptaan Nilai'],
      relatedEyebrow: '05 · Ekosistem',
      relatedTitle: 'Jelajahi Produk Fivers Lainnya',
      ctaHeadline: 'Tertarik dengan produk ini atau ingin berkolaborasi dengan Fivers?',
      ctaPrimary: 'Hubungi Fivers →',
      ctaSecondary: 'Semua Produk',
    },
    businessDetail: {
      overviewEyebrow: '01 · Ringkasan',
      overviewTitle: 'Konteks Bisnis',
      currentEyebrow: '02 · Realitas Saat Ini',
      currentTitle: 'Aktivitas & Operasional Saat Ini',
      contextEyebrow: '03 · Perspektif Perusahaan',
      contextTitle: 'Mengapa Konteks Dunia Nyata Ini Penting',
      contextNote:
        'Fivers Corp tetap merupakan perusahaan yang berfokus pada teknologi. Usaha keluarga ini adalah konteks lingkungan nyata — bukan identitas utama Fivers Corp.',
      opportunitiesEyebrow: '04 · Pandangan Eksploratif',
      opportunitiesTitle: 'Potensi Penerapan Teknologi ke Depan',
      opportunitiesDisclaimer:
        'Catatan: Area di bawah ini adalah peluang potensial di masa depan di mana teknologi dapat memberi nilai praktis — bukan klaim sistem otomatis yang sudah terpasang saat ini.',
      otherBusinessTitle: 'Konteks Bisnis Nyata Lainnya',
      ctaHeadline: 'Mengeksplorasi cara teknologi mendukung operasional nyata secara praktis.',
      ctaPrimary: 'Hubungi Fivers →',
      ctaSecondary: 'Jelajahi Teknologi',
    },
    footer: {
      line1: 'Teknologi sebagai Inti.',
      line2: 'Peluang Melampaui Layar.',
      navigationTitle: 'Navigasi',
      locationTitle: 'Lokasi',
      region: 'Brebes, Jawa Tengah',
      country: 'Indonesia',
      copyright: '© 2026 Fivers Corp. Seluruh hak cipta dilindungi.',
      tags: 'Teknologi · AI Terapan · Produk Digital · Konteks Bisnis Nyata',
      disclaimer:
        'Penafian Riset Pasar: Inisiatif eksperimental seperti Forex Agent mengeksplorasi riset dan analisis pasar berbantuan AI hanya untuk pembelajaran internal. Perdagangan pasar keuangan dan valuta asing memiliki risiko kerugian yang besar dan tidak ada informasi di situs ini yang merupakan saran keuangan atau investasi.',
    },
    seo: {
      '/': {
        title: 'Fivers Corp — Teknologi sebagai Inti',
        description:
          'Fivers Corp mengeksplorasi AI terapan, perangkat lunak, produk digital, dan teknologi baru — sembari mencari cara praktis menciptakan nilai di dunia bisnis nyata.',
      },
      '/company': {
        title: 'Fivers Corp — Perusahaan',
        description:
          'Perusahaan berbasis teknologi yang mengeksplorasi produk, sistem, dan peluang di persimpangan perangkat lunak, AI, dan bisnis nyata.',
      },
      '/technology': {
        title: 'Fivers Corp — Teknologi & AI',
        description:
          'Mengeksplorasi penerapan praktis perangkat lunak, kecerdasan buatan, otomasi, data, dan teknologi baru di Fivers Corp.',
      },
      '/products': {
        title: 'Fivers Corp — Produk Digital',
        description:
          'Produk digital dan eksperimen terfokus yang dikembangkan di ekosistem Fivers, termasuk Veluna, Financial Tracker, LinguaFlow, dan Fivers Digital Office.',
      },
      '/businesses': {
        title: 'Fivers Corp — Bisnis Nyata',
        description:
          'Fivers Corp terhubung dengan bisnis keluarga di sektor pertanian dan peternakan ayam petelur di Brebes, Jawa Tengah, Indonesia.',
      },
      '/contact': {
        title: 'Fivers Corp — Kontak',
        description:
          'Hubungi Fivers Corp terkait produk digital, kolaborasi teknologi, atau peluang kerja sama bisnis.',
      },
    },
    home: {
      heroEyebrow: 'FIVERS CORP',
      heroTitleLead: 'Teknologi sebagai Inti.',
      heroTitleAccent: 'Peluang Melampaui Layar.',
      heroSubtitle:
        'Fivers Corp mengeksplorasi AI terapan, perangkat lunak, produk digital, dan teknologi baru — sembari mencari cara praktis untuk menciptakan nilai bagi bisnis dan dunia nyata.',
      heroPrimaryCta: 'Jelajahi Teknologi →',
      heroSecondaryCta: 'Jelajahi Produk →',
      heroCaptionLeft: 'AI Terapan · Perangkat Lunak · Sistem Digital',
      heroCaptionRight: 'Fokus Utama',
      overviewIndex: '01',
      overviewEyebrow: 'Ringkasan',
      overviewTitle: 'Apa yang Kami Kerjakan',
      overviewSubtitle:
        'Fivers memadukan eksplorasi teknologi, pengembangan produk digital, dan peluang bisnis praktis — dengan teknologi dan AI sebagai pusat kapabilitasnya.',
      overviewCards: {
        technology: {
          title: 'Teknologi',
          lead: 'AI terapan, perangkat lunak, dan sistem digital.',
          desc: 'Mengeksplorasi penerapan praktis AI, rekayasa perangkat lunak, otomasi, data, dan teknologi yang berkembang.',
          cta: 'Jelajahi Teknologi →',
        },
        products: {
          title: 'Produk',
          lead: 'Produk digital dan eksperimen terfokus.',
          desc: 'Fivers membangun produk digital dan eksperimen di bidang perangkat lunak konsumen, produktivitas, media, pembelajaran, dan peluang lainnya.',
          cta: 'Jelajahi Produk →',
        },
        businesses: {
          title: 'Bisnis',
          lead: 'Bisnis nyata dan operasional lapangan.',
          desc: 'Fivers terhubung dengan usaha keluarga di bidang pertanian dan peternakan ayam petelur di Brebes, Jawa Tengah.',
          cta: 'Jelajahi Bisnis →',
        },
      },
      philosophyEyebrow: 'Filosofi',
      philosophyTitle: 'Teknologi Harus Menciptakan Daya Ungkit.',
      philosophySubtitle:
        'Fivers mengeksplorasi teknologi bukan sekadar karena hal itu baru, tetapi karena teknologi dapat meningkatkan cara produk dibangun, cara orang bekerja, dan cara bisnis berjalan.',
      leverageFlow: [
        {
          verb: 'EKSPLORASI',
          subject: 'Teknologi & AI',
          description:
            'Meneliti perangkat lunak praktis, otomasi, dan kapabilitas AI yang relevan.',
        },
        {
          verb: 'BANGUN',
          subject: 'Perangkat Lunak & Produk Digital',
          description:
            'Mengubah ide potensial menjadi aplikasi web terfokus dan sistem internal.',
        },
        {
          verb: 'TERAPKAN',
          subject: 'Konteks Bisnis',
          description:
            'Menguji di mana alat digital dapat mendukung alur kerja dan kebutuhan nyata.',
        },
        {
          verb: 'PELAJARI',
          subject: 'Dari Hasil Dunia Nyata',
          description:
            'Mengamati apa yang benar-benar menghemat waktu, memperjelas proses, atau memberi nilai.',
        },
        {
          verb: 'TINGKATKAN',
          subject: 'Produk, Sistem & Operasional',
          description:
            'Menyempurnakan kapabilitas secara berkelanjutan dengan disiplin jangka panjang.',
        },
      ],
      productsIndex: '02',
      productsEyebrow: 'Produk',
      productsTitle: 'Apa yang Sedang Kami Bangun',
      productsSubtitle:
        'Portofolio produk digital, sistem internal, dan eksperimen terfokus.',
      productsViewAll: 'Lihat Semua Produk →',
      businessIndex: '03',
      businessEyebrow: 'Bisnis',
      businessTitle: 'Teknologi Bertemu Dunia Nyata.',
      businessP1:
        'Di samping inisiatif teknologinya, Fivers terhubung dengan bisnis keluarga di sektor pertanian dan peternakan ayam petelur di Brebes, Jawa Tengah.',
      businessP2:
        'Bisnis-bisnis ini menghadirkan konteks operasional nyata di mana kehadiran digital, data, otomasi, dan teknologi lainnya berpotensi menciptakan peluang perbaikan di masa depan.',
      closingHeadline:
        'Membangun dengan Teknologi. Menciptakan Nilai di Dunia Nyata.',
      closingSubtext:
        'Fivers terus mengeksplorasi titik temu antara teknologi, AI, produk digital, dan bisnis nyata — satu peluang praktis pada satu waktu.',
      closingPrimaryCta: 'Hubungi Kami →',
      closingSecondaryCta: 'Tentang Fivers',
    },
    company: {
      eyebrow: 'PERUSAHAAN',
      title: 'Tentang Fivers',
      subtitle:
        'Perusahaan berbasis teknologi yang mengeksplorasi produk, sistem, dan peluang di persimpangan perangkat lunak, AI, dan bisnis nyata.',
      whoIndex: '01',
      whoEyebrow: 'Identitas',
      whoTitle: 'Siapa Kami',
      whoParagraphs: [
        'Fivers Corp adalah perusahaan berorientasi teknologi yang mengeksplorasi AI terapan, perangkat lunak, produk digital, otomasi, dan teknologi baru.',
        'Kami memulai dari teknologi: membangun sistem digital, menguji ide produk yang terarah, dan mengembangkan kapabilitas yang menghasilkan daya ungkit nyata tanpa kerumitan yang tidak perlu.',
        'Di samping inisiatif perangkat lunak dan produk, Fivers terhubung dengan usaha keluarga di bidang pertanian dan peternakan ayam petelur di Brebes, Jawa Tengah — memberi kami konteks operasional nyata di mana teknologi pada waktunya dapat memberi nilai tambah yang konkret.',
      ],
      coreLabel: 'KAPABILITAS INTI',
      coreTitle: 'Teknologi, AI, Perangkat Lunak & Produk Digital',
      coreDesc:
        'Teknologi adalah kapabilitas utama di pusat Fivers. Rekayasa perangkat lunak, AI terapan, otomasi, dan produk digital adalah apa yang aktif kami bangun dan sempurnakan.',
      extLabel: 'EKSTENSI & KONTEKS PENERAPAN',
      extTitle: 'Operasional Bisnis, Pertanian & Ayam Petelur',
      extDesc:
        'Usaha keluarga di Brebes menjadi landasan operasional nyata untuk menjajaki bagaimana kehadiran digital, data, dan teknologi dapat mendukung pekerjaan praktis secara bertahap.',
      howIndex: '02',
      howEyebrow: 'Arah & Pendekatan',
      howTitle: 'Cara Kami Bekerja',
      howSubtitle:
        'Fivers membangun kapabilitas teknologi sembari mengeksplorasi peluang penerapannya pada produk dan bisnis nyata.',
      howMantraLead: 'Dipimpin manusia. Didukung teknologi.',
      howMantraAccent: 'Dibantu AI.',
      workflowSteps: [
        {
          step: '01',
          title: 'Pemikiran Manusia',
          description:
            'Segalanya berawal dari rasa ingin tahu, pertimbangan kritis, dan pemahaman yang jernih tentang apa yang layak dibangun.',
        },
        {
          step: '02',
          title: 'Teknologi',
          description:
            'Rekayasa perangkat lunak dan desain sistem yang andal menjadi fondasi utama di balik Fivers.',
        },
        {
          step: '03',
          title: 'AI & Otomasi',
          description:
            'Diterapkan untuk mempercepat riset, mengotomasi tugas berulang, serta membantu pembuatan produk dan alur kerja.',
        },
        {
          step: '04',
          title: 'Eksperimentasi',
          description:
            'Eksperimen kecil yang terukur memvalidasi ide dalam praktik sebelum memperbesar komitmen.',
        },
        {
          step: '05',
          title: 'Eksekusi',
          description:
            'Meluncurkan produk digital nyata dan mengevaluasi penerapannya di konteks bisnis yang relevan.',
        },
        {
          step: '06',
          title: 'Pembelajaran',
          description:
            'Mengamati hasil nyata secara objektif untuk mempertajam sistem, produk, dan keputusan berikutnya.',
        },
      ],
      capIndex: '03',
      capEyebrow: 'Organisasi',
      capTitle: 'Kapabilitas di Balik Fivers',
      capSubtitle:
        'Tujuh area kapabilitas yang saling terhubung untuk mendukung pengembangan perangkat lunak, eksperimen produk, dan eksplorasi komersial.',
      capabilities: [
        {
          number: '01',
          title: 'Technology & Digital Solutions',
          description:
            'Merancang dan membangun aplikasi web yang tangguh, perangkat internal, serta arsitektur perangkat lunak yang sesuai kebutuhan praktis.',
          scope: 'Perangkat lunak & infrastruktur',
        },
        {
          number: '02',
          title: 'AI & Digital Product',
          description:
            'Menerapkan kecerdasan buatan pada prototipe produk, sintesis riset, otomasi alur kerja, dan fitur bagi pengguna.',
          scope: 'AI terapan & rekayasa produk',
        },
        {
          number: '03',
          title: 'Commercial & Business Development',
          description:
            'Mengevaluasi kelayakan pasar nyata, menyusun model komersial berkelanjutan, dan menghubungkan produk digital dengan eksekusi bisnis.',
          scope: 'Strategi & eksekusi pasar',
        },
        {
          number: '04',
          title: 'Digital Media & Content Ventures',
          description:
            'Mengeksplorasi format media digital modern, alur produksi konten, dan eksperimen publikasi terstruktur.',
          scope: 'Sistem media & konten',
        },
        {
          number: '05',
          title: 'Data & Business Intelligence',
          description:
            'Mengolah catatan operasional dan observasi produk menjadi informasi terstruktur untuk pengambilan keputusan yang lebih jernih.',
          scope: 'Analitik & dukungan keputusan',
        },
        {
          number: '06',
          title: 'Capital, Investment & Trading',
          description:
            'Melakukan riset pasar terstruktur, evaluasi risiko yang disiplin, dan analisis permodalan secara eksploratif.',
          scope: 'Riset pasar & analisis',
        },
        {
          number: '07',
          title: 'Venture & Innovation Studio',
          description:
            'Membawa konsep awal dari hipotesis menuju eksperimen terarah hingga menjadi produk mandiri atau perangkat operasional.',
          scope: 'Konsep ke eksekusi',
        },
      ],
      founderIndex: '04',
      founderEyebrow: 'Kepemimpinan',
      founderTitle: 'Pendiri',
      founderRole: 'Pendiri & Direktur',
      founderP1:
        'Afif mendirikan Fivers Corp untuk membangun kapabilitas jangka panjang di bidang perangkat lunak, AI terapan, dan produk digital — sembari tetap terhubung dengan operasional bisnis nyata.',
      founderP2:
        'Alih-alih mengejar sensasi jangka pendek, fokusnya adalah membangun keahlian secara konsisten, mengeksekusi produk dengan matang, dan menemukan di mana teknologi benar-benar menciptakan daya ungkit.',
      ctaHeadline: 'Jelajahi teknologi dan produk digital kami.',
      ctaPrimary: 'Jelajahi Teknologi →',
      ctaSecondary: 'Lihat Produk',
    },
    technology: {
      eyebrow: 'TEKNOLOGI & SISTEM',
      title: 'Teknologi',
      subtitle:
        'Mengeksplorasi penerapan praktis perangkat lunak, kecerdasan buatan, otomasi, data, dan teknologi yang sedang berkembang.',
      coreIndex: '01',
      coreEyebrow: 'Kapabilitas',
      coreTitle: 'Fokus Teknologi Inti',
      coreSubtitle:
        'Teknologi harus menciptakan daya ungkit, bukan kerumitan. Setiap area fokus mendukung pembangunan produk yang praktis dan kejelasan operasional.',
      areas: [
        {
          number: '01',
          title: 'AI Terapan',
          summary:
            'Memanfaatkan kecerdasan buatan sebagai pengungkit praktis dalam pembangunan produk, alur kerja internal, dan analisis terstruktur.',
          points: [
            'Sintesis riset dan eksplorasi domain',
            'Analisis kualitatif dan kuantitatif terstruktur',
            'Otomasi alur kerja untuk tugas berulang',
            'Pengembangan produk dan pembuatan prototipe cepat',
            'Dukungan alur kerja internal dan operasional',
          ],
        },
        {
          number: '02',
          title: 'Perangkat Lunak & Sistem',
          summary:
            'Merancang dan membangun aplikasi web yang bersih, platform digital, perangkat internal, dan sistem bisnis yang andal.',
          points: [
            'Platform web konsumen dan utilitas harian',
            'Alat bantu internal sesuai alur kerja perusahaan',
            'Arsitektur perangkat lunak full-stack yang mudah dirawat',
            'Antarmuka praktis yang dirancang untuk kejelasan',
          ],
        },
        {
          number: '03',
          title: 'Otomasi',
          summary:
            'Mengurangi pekerjaan operasional manual yang berulang agar tim kecil dapat berfokus pada pemikiran dan eksekusi bernilai tinggi.',
          points: [
            'Penyederhanaan tugas administratif rutin',
            'Penghubungan data terstruktur antarperangkat internal',
            'Alur koordinasi operasional yang ringan dan cepat',
          ],
        },
        {
          number: '04',
          title: 'Data & Inteligensi',
          summary:
            'Mengubah catatan produk, pasar, dan operasional menjadi informasi yang berguna untuk pengambilan keputusan yang lebih tepat.',
          points: [
            'Kebiasaan pencatatan dan pelaporan yang terstruktur',
            'Visibilitas lebih jelas atas pola produk dan operasional',
            'Kerangka pendukung keputusan berbasis data nyata',
          ],
        },
      ],
      officeIndex: '02',
      officeEyebrow: 'Konsep Operasi Internal',
      officeTitle: 'Digital Office',
      officeSubtitle:
        'Menerapkan perangkat lunak dan AI secara internal sebelum memperluas kapabilitas keluar.',
      officeTag: 'Platform Internal',
      officeHeading: 'Fivers Digital Office',
      officeP1:
        'Fivers Digital Office adalah konsep ruang kerja digital internal berbantuan AI — dirancang untuk mengoordinasikan riset, dokumentasi produk, dan alur kerja harian perusahaan dalam satu lingkungan terstruktur.',
      officeP2:
        'Alih-alih membangun lapisan birokrasi yang rumit, platform ini berfokus menjaga tim kecil dengan banyak inisiatif tetap rapi, terinformasi, dan gesit.',
      officeFooter: 'Dipimpin manusia · Didukung teknologi · Dibantu AI',
      ctaHeadline: 'Lihat apa yang sedang kami bangun dengan kapabilitas ini.',
      ctaPrimary: 'Jelajahi Produk →',
      ctaSecondary: 'Hubungi Fivers',
    },
    products: {
      eyebrow: 'PRODUK DIGITAL & EKSPERIMEN',
      title: 'Produk',
      subtitle:
        'Produk digital dan eksperimen yang dikembangkan di ekosistem Fivers.',
      filterAll: 'Semua Produk',
      filterLive: 'Aktif',
      filterDev: 'Pengembangan',
      filterExp: 'Eksperimen',
      countAll: '6 produk & eksperimen',
      countFiltered: 'item',
      liveHeading: 'Aktif (Live)',
      liveSub: 'Platform konsumen yang telah dirilis',
      devHeading: 'Dalam Pengembangan',
      devSub: 'Pengembangan produk & sistem internal aktif',
      expHeading: 'Eksperimen',
      expSub: 'Sistem riset & media eksploratif',
      forexShortDisclaimer:
        'Alat riset eksperimental. Perdagangan mengandung risiko finansial; bukan saran investasi.',
      items: PRODUCTS_DATA.id,
      ctaHeadline: 'Tertarik berkolaborasi dalam produk atau eksperimen?',
      ctaPrimary: 'Hubungi Kami →',
      ctaSecondary: 'Jelajahi Bisnis Nyata',
    },
    businesses: {
      eyebrow: 'KONTEKS DUNIA NYATA · BREBES, JAWA TENGAH',
      title: 'Bisnis Nyata.',
      secondaryTitle: 'Operasional Nyata.',
      subtitle:
        'Fivers terhubung dengan bisnis keluarga di sektor pertanian dan peternakan ayam petelur di Brebes, Jawa Tengah.',
      contextCallout:
        'Bisnis-bisnis ini adalah operasional dunia nyata yang berdiri sendiri. Fivers melihat peluang untuk secara bertahap memperkenalkan kehadiran digital, praktik pencatatan data, otomasi, dan teknologi yang lebih baik di titik yang memang relevan.',
      currentFocusLabel: 'Fokus Operasional Saat Ini',
      futureOpsLabel: 'Peluang Digital di Masa Depan',
      cardFooter: 'Operasional usaha keluarga · Konteks eksplorasi teknologi',
      items: BUSINESSES_DATA.id,
      ctaHeadline:
        'Mengeksplorasi titik temu praktis antara perangkat lunak dan operasional nyata.',
      ctaPrimary: 'Hubungi Kami →',
      ctaSecondary: 'Tentang Fivers',
    },
    contact: {
      eyebrow: 'KONTAK',
      title: 'Mari Membangun Sesuatu yang Bermakna.',
      subtitle:
        'Tertarik dengan Fivers, salah satu produk kami, kolaborasi teknologi, atau peluang bisnis yang potensial?',
      leftHeading: 'Mulai percakapan',
      leftDesc:
        'Baik Anda menghubungi terkait perangkat lunak dan AI terapan, salah satu produk digital kami, maupun kolaborasi bisnis praktis, kirimkan pesan Anda di sini.',
      companyLabel: 'Perusahaan',
      locationLabel: 'Lokasi',
      locationValue: 'Brebes, Jawa Tengah, Indonesia',
      focusLabel: 'Fokus Utama',
      focusValue: 'Teknologi, AI Terapan, Perangkat Lunak & Produk Digital',
      successTitle: 'Pesan diterima',
      successBodyPrefix: 'Terima kasih,',
      successBodyMiddle: 'Pesan Anda mengenai',
      successBodySuffix: 'telah dicatat untuk ditinjau oleh tim Fivers Corp.',
      sendAnother: 'Kirim pesan lain',
      nameLabel: 'Nama',
      namePlaceholder: 'Nama lengkap Anda',
      emailLabel: 'Email',
      emailPlaceholder: 'anda@organisasi.com',
      orgLabel: 'Perusahaan / Organisasi',
      orgPlaceholder: 'Opsional',
      subjectLabel: 'Subjek',
      subjectPlaceholder: 'Topik produk atau kolaborasi',
      messageLabel: 'Pesan',
      messagePlaceholder:
        'Ceritakan pertanyaan atau ide kolaborasi Anda...',
      requiredHintPrefix: 'Kolom bertanda',
      requiredHintSuffix: 'wajib diisi.',
      submitLabel: 'Kirim Pesan',
      errors: {
        name: 'Mohon masukkan nama Anda.',
        emailEmpty: 'Mohon masukkan alamat email Anda.',
        emailInvalid: 'Mohon masukkan alamat email yang valid.',
        subject: 'Mohon isi subjek singkat.',
        message: 'Mohon tulis pesan minimal 10 karakter.',
      },
    },
  },
};
