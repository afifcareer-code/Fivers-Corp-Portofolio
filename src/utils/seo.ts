import { Language } from '../context/LanguageContext';
import { AppRoute } from '../types';
import {
  buildSeoGraph,
  SeoBreadcrumb,
  SeoSchemaKind,
} from './seoSchema';

export type { SeoBreadcrumb, SeoSchemaKind };

export const PUBLIC_ROUTES: AppRoute[] = [
  '/',
  '/company',
  '/technology',
  '/products',
  '/products/veluna',
  '/products/financial-tracker',
  '/products/fivers-digital-office',
  '/products/linguaflow',
  '/products/fiveclip',
  '/products/forex-agent',
  '/businesses',
  '/businesses/agriculture',
  '/businesses/layer-poultry',
  '/contact',
];

const HERO_SOCIAL_IMAGE_PATH =
  '/src/assets/images/hero_fivers_tech_core_1795655219553.jpg';

function resolveSiteOrigin(): string {
  const configured = import.meta.env.VITE_SITE_URL as string | undefined;
  if (configured && /^https?:\/\//i.test(configured.trim())) {
    return configured.trim().replace(/\/+$/, '');
  }
  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin.replace(/\/+$/, '');
  }
  return '';
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function upsertJsonLd(data: Record<string, unknown>) {
  let script = document.head.querySelector<HTMLScriptElement>(
    'script[type="application/ld+json"][data-fivers-seo="true"]'
  );
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-fivers-seo', 'true');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd() {
  const script = document.head.querySelector<HTMLScriptElement>(
    'script[type="application/ld+json"][data-fivers-seo="true"]'
  );
  script?.remove();
}

export interface ApplySeoOptions {
  route: AppRoute;
  title: string;
  description: string;
  language: Language;
  breadcrumbs: SeoBreadcrumb[];
  ogImagePath?: string;
  ogImageAlt?: string;
  schemaKind?: SeoSchemaKind;
  entityName?: string;
  entityCategory?: string;
  isNotFound?: boolean;
}

export function applyRouteSeo({
  route,
  title,
  description,
  language,
  breadcrumbs,
  ogImagePath = HERO_SOCIAL_IMAGE_PATH,
  ogImageAlt = 'Fivers Corp technology studio workspace representing Technology at the Core',
  schemaKind = 'page',
  entityName,
  entityCategory,
  isNotFound = false,
}: ApplySeoOptions) {
  const origin = resolveSiteOrigin();
  const normalizedPath = route === '/' ? '/' : route;
  const canonicalUrl = origin ? `${origin}${normalizedPath}` : normalizedPath;
  const ogImageUrl = origin ? `${origin}${ogImagePath}` : ogImagePath;

  document.title = title;

  // Robots directive
  upsertMeta('name', 'robots', isNotFound ? 'noindex, follow' : 'index, follow');

  // Primary Meta
  upsertMeta('name', 'description', description);

  // Canonical (never emit an indexable canonical on 404)
  if (!isNotFound && canonicalUrl) {
    upsertCanonical(canonicalUrl);
  } else {
    document.head.querySelector('link[rel="canonical"]')?.remove();
  }

  // Open Graph
  upsertMeta('property', 'og:site_name', 'Fivers Corp');
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  if (!isNotFound) {
    upsertMeta('property', 'og:url', canonicalUrl);
  } else {
    document.head.querySelector('meta[property="og:url"]')?.remove();
  }
  upsertMeta('property', 'og:image', ogImageUrl);
  upsertMeta('property', 'og:image:alt', ogImageAlt);
  upsertMeta('property', 'og:locale', language === 'id' ? 'id_ID' : 'en_US');

  // Twitter / X Card
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', ogImageUrl);

  if (isNotFound) {
    removeJsonLd();
    return;
  }

  upsertJsonLd(
    buildSeoGraph({
      origin,
      route: normalizedPath,
      title,
      description,
      language,
      breadcrumbs,
      schemaKind,
      entityName,
      entityCategory,
    })
  );
}
