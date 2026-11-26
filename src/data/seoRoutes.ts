import { AppRoute } from '../types';
import { SeoBreadcrumb, SeoSchemaKind } from '../utils/seo';

export interface StaticRouteSeoEntry {
  route: AppRoute;
  title: string;
  description: string;
  ogImagePath: string;
  ogImageAlt: string;
  schemaKind: SeoSchemaKind;
  entityName?: string;
  entityCategory?: string;
  breadcrumbs: SeoBreadcrumb[];
  changefreq: 'weekly' | 'monthly';
  priority: string;
}

export const STATIC_SEO_ROUTES: StaticRouteSeoEntry[] = [
  {
    route: '/',
    title: 'Fivers Corp — Technology at the Core',
    description:
      'Fivers Corp explores applied AI, software, and digital products — building practical technology and real-world business value.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt:
      'Fivers Corp technology studio workspace representing Technology at the Core',
    schemaKind: 'page',
    breadcrumbs: [{ label: 'Home', route: '/' }],
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    route: '/company',
    title: 'Company — About Fivers Corp | Technology at the Core',
    description:
      'A technology-driven company exploring products, systems, and opportunities at the intersection of software, AI, and real-world business.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'Fivers Corp company profile and leadership',
    schemaKind: 'page',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Company', route: '/company' },
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    route: '/technology',
    title: 'Technology & AI — Applied AI & Systems | Fivers Corp',
    description:
      'Explore practical applications of software, applied AI, automation, data intelligence, and the Fivers Digital Office at Fivers Corp.',
    ogImagePath: '/src/assets/images/tech_digital_office_1795654591568.jpg',
    ogImageAlt:
      'Minimalist dark-green architectural software studio interior at Fivers Corp',
    schemaKind: 'page',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Technology', route: '/technology' },
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    route: '/products',
    title: 'Digital Products & Experiments | Fivers Corp',
    description:
      'Explore digital products and focused experiments from Fivers Corp, including Veluna, Financial Tracker, LinguaFlow, and Fivers Digital Office.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'Fivers Corp digital products and experiments portfolio',
    schemaKind: 'page',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
    ],
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    route: '/products/veluna',
    title: 'Veluna — Digital Wedding & Event Platform | Fivers Corp',
    description:
      'Veluna is a live digital wedding and event platform developed by Fivers Corp for creating structured digital invitations and coordinating guest experiences.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'Veluna — Fivers Corp',
    schemaKind: 'software',
    entityName: 'Veluna',
    entityCategory: 'Event Platform',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
      { label: 'Veluna', route: '/products/veluna' },
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    route: '/products/financial-tracker',
    title: 'Financial Tracker — Personal Finance Platform | Fivers Corp',
    description:
      'Financial Tracker is a live personal finance platform built by Fivers Corp for clear cashflow visibility, budgeting, and disciplined financial habits.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'Financial Tracker — Fivers Corp',
    schemaKind: 'software',
    entityName: 'Financial Tracker',
    entityCategory: 'Personal Finance',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
      { label: 'Financial Tracker', route: '/products/financial-tracker' },
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    route: '/products/fivers-digital-office',
    title: 'Fivers Digital Office — Internal Workplace | Fivers Corp',
    description:
      'Fivers Digital Office is an internal workplace platform in development at Fivers Corp, exploring AI-assisted workflows and operational coordination.',
    ogImagePath: '/src/assets/images/tech_digital_office_1795654591568.jpg',
    ogImageAlt: 'Fivers Digital Office studio workspace',
    schemaKind: 'creativeWork',
    entityName: 'Fivers Digital Office',
    entityCategory: 'Digital Workplace',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
      { label: 'Fivers Digital Office', route: '/products/fivers-digital-office' },
    ],
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/products/linguaflow',
    title: 'LinguaFlow — Language Learning Platform | Fivers Corp',
    description:
      'LinguaFlow is an in-development language learning platform by Fivers Corp exploring interactive, distraction-free, technology-assisted study.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'LinguaFlow — Fivers Corp',
    schemaKind: 'creativeWork',
    entityName: 'LinguaFlow',
    entityCategory: 'Language Learning',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
      { label: 'LinguaFlow', route: '/products/linguaflow' },
    ],
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/products/fiveclip',
    title: 'FiveClip — Digital Media & Content Workflow | Fivers Corp',
    description:
      'FiveClip is an experimental Fivers Corp initiative exploring AI-assisted content clipping and structured digital media workflows.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'FiveClip — Fivers Corp',
    schemaKind: 'creativeWork',
    entityName: 'FiveClip',
    entityCategory: 'Media Experiment',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
      { label: 'FiveClip', route: '/products/fiveclip' },
    ],
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/products/forex-agent',
    title: 'Forex Agent — Market Research & Analysis | Fivers Corp',
    description:
      'Forex Agent is an experimental Fivers Corp project exploring AI-assisted market research and structured analysis workflows. For internal research only.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'Forex Agent — Fivers Corp',
    schemaKind: 'creativeWork',
    entityName: 'Forex Agent',
    entityCategory: 'Market Research',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
      { label: 'Forex Agent', route: '/products/forex-agent' },
    ],
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    route: '/businesses',
    title: 'Real-World Businesses — Brebes, Central Java | Fivers Corp',
    description:
      'Fivers Corp is connected to family-run businesses in agriculture and layer poultry farming in Brebes, Central Java, Indonesia.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt:
      'Fivers Corp real-world business context in Brebes, Central Java, Indonesia',
    schemaKind: 'page',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Businesses', route: '/businesses' },
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    route: '/businesses/agriculture',
    title: 'Agriculture — Real-World Context in Brebes | Fivers Corp',
    description:
      'Explore Fivers Corp’s connection to family-run rice and red onion agriculture in Brebes, Central Java, and potential future technology applications.',
    ogImagePath: '/src/assets/images/business_onion_brebes_1795654591854.jpg',
    ogImageAlt:
      'Red onion and agricultural beds in Brebes, Central Java, Indonesia in natural morning light',
    schemaKind: 'businessContext',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Businesses', route: '/businesses' },
      { label: 'Agriculture', route: '/businesses/agriculture' },
    ],
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/businesses/layer-poultry',
    title: 'Layer Poultry — Real-World Context in Brebes | Fivers Corp',
    description:
      'Learn about the family-run layer poultry business context in Brebes, Central Java connected to Fivers Corp and potential future technology applications.',
    ogImagePath: '/src/assets/images/business_layer_chicken_1795654591768.jpg',
    ogImageAlt:
      'Healthy brown layer chickens inside a clean naturally ventilated timber poultry house in Java',
    schemaKind: 'businessContext',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Businesses', route: '/businesses' },
      { label: 'Layer Poultry', route: '/businesses/layer-poultry' },
    ],
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    route: '/contact',
    title: 'Contact Fivers Corp — Products & Collaboration',
    description:
      'Get in touch with Fivers Corp regarding software, applied AI, digital products, or practical technology collaboration opportunities.',
    ogImagePath: '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg',
    ogImageAlt: 'Contact Fivers Corp',
    schemaKind: 'page',
    breadcrumbs: [
      { label: 'Home', route: '/' },
      { label: 'Contact', route: '/contact' },
    ],
    changefreq: 'monthly',
    priority: '0.7',
  },
];
