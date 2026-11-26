import { AppRoute } from '../types';

export type SeoSchemaKind =
  | 'page'
  | 'software'
  | 'creativeWork'
  | 'businessContext';

export interface SeoBreadcrumb {
  label: string;
  route: AppRoute;
}

export const ORG_LOGO_PATH = '/fivers-logo.svg';

export function getWebPageSchemaType(route: AppRoute): string {
  switch (route) {
    case '/company':
      return 'AboutPage';
    case '/products':
    case '/businesses':
      return 'CollectionPage';
    case '/contact':
      return 'ContactPage';
    default:
      return 'WebPage';
  }
}

export interface BuildSeoGraphOptions {
  origin: string;
  route: AppRoute;
  title: string;
  description: string;
  language: 'en' | 'id';
  breadcrumbs: SeoBreadcrumb[];
  schemaKind?: SeoSchemaKind;
  entityName?: string;
  entityCategory?: string;
}

export function buildSeoGraph({
  origin,
  route,
  title,
  description,
  language,
  breadcrumbs,
  schemaKind = 'page',
  entityName,
  entityCategory,
}: BuildSeoGraphOptions): Record<string, unknown> {
  const normalizedPath = route === '/' ? '/' : route;
  const canonicalUrl = origin ? `${origin}${normalizedPath}` : normalizedPath;
  const logoUrl = origin ? `${origin}${ORG_LOGO_PATH}` : ORG_LOGO_PATH;
  const rootUrl = origin ? `${origin}/` : '/';

  const breadcrumbItems = breadcrumbs.map((crumb, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: crumb.label,
    item: origin ? `${origin}${crumb.route}` : crumb.route,
  }));

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: 'Fivers Corp',
      url: rootUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
      description:
        'Technology at the Core. Opportunities Beyond the Screen. Applied AI, software, digital products, automation, and emerging technologies.',
      founder: {
        '@type': 'Person',
        name: 'Afif Firmansyah',
        jobTitle: 'Founder & Director',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      name: 'Fivers Corp',
      url: rootUrl,
      publisher: {
        '@id': `${origin}/#organization`,
      },
      inLanguage: ['en', 'id'],
    },
    {
      '@type': getWebPageSchemaType(route),
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      inLanguage: language,
      isPartOf: {
        '@id': `${origin}/#website`,
      },
      about: {
        '@id': `${origin}/#organization`,
      },
      breadcrumb: {
        '@id': `${canonicalUrl}#breadcrumb`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
  ];

  if (schemaKind === 'software' && entityName) {
    graph.push({
      '@type': 'WebApplication',
      '@id': `${canonicalUrl}#software`,
      name: entityName,
      applicationCategory: entityCategory ?? 'WebApplication',
      operatingSystem: 'Web',
      url: canonicalUrl,
      description,
      creator: {
        '@id': `${origin}/#organization`,
      },
    });
  } else if (schemaKind === 'creativeWork' && entityName) {
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${canonicalUrl}#initiative`,
      name: entityName,
      url: canonicalUrl,
      description,
      creator: {
        '@id': `${origin}/#organization`,
      },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
