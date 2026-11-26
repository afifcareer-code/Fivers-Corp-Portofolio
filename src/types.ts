export type ProductSlug =
  | 'veluna'
  | 'financial-tracker'
  | 'fivers-digital-office'
  | 'linguaflow'
  | 'fiveclip'
  | 'forex-agent';

export type BusinessSlug = 'agriculture' | 'layer-poultry';

export type ProductRoute = `/products/${ProductSlug}`;
export type BusinessRoute = `/businesses/${BusinessSlug}`;

export type AppRoute =
  | '/'
  | '/company'
  | '/technology'
  | '/products'
  | ProductRoute
  | '/businesses'
  | BusinessRoute
  | '/contact';

export type ProductStatus = 'LIVE' | 'IN DEVELOPMENT' | 'EXPERIMENT';

export type ProductIconKey =
  | 'veluna'
  | 'finance'
  | 'office'
  | 'lingua'
  | 'clip'
  | 'forex';

export interface ProductCapabilityItem {
  title: string;
  description: string;
}

export interface ProductItem {
  id: ProductSlug;
  slug: ProductSlug;
  route: ProductRoute;
  name: string;
  subtitle: string;
  positioning: string;
  description: string;
  focusArea: string;
  status: ProductStatus;
  category: string;
  icon: ProductIconKey;
  highlights: string[];
  overview: {
    whatItIs: string;
    problemAddressed: string;
    intendedFor: string;
    whyItExists: string;
  };
  capabilities: ProductCapabilityItem[];
  statusDetail: {
    summary: string;
    availability: string;
  };
  technologyApproach: {
    summary: string;
    relatedCapabilityLabel: string;
  };
  productContext: string;
  relatedIds: ProductSlug[];
  seo: {
    title: string;
    description: string;
  };
  disclaimer?: string;
  url?: string;
}

export interface Capability {
  number: string;
  title: string;
  description: string;
  scope: string;
}

export interface BusinessApplicationArea {
  area: string;
  note: string;
}

export interface RealBusiness {
  id: BusinessSlug;
  slug: BusinessSlug;
  route: BusinessRoute;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  operationalFocus: string[];
  futureOpportunities: string[];
  overview: string;
  currentActivitiesSummary: string;
  realWorldContext: string;
  potentialApplications: BusinessApplicationArea[];
  seo: {
    title: string;
    description: string;
  };
  image: string;
  imageAlt: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface LeverageStep {
  verb: string;
  subject: string;
  description: string;
}

export interface TechnologyArea {
  number: string;
  title: string;
  summary: string;
  points: string[];
}
