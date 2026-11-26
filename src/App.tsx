import React, { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { FIVERS_IMAGES } from './data/fiversData';
import { TRANSLATIONS } from './data/i18n';
import { BusinessDetailPage } from './pages/BusinessDetailPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { applyRouteSeo, SeoBreadcrumb, SeoSchemaKind } from './utils/seo';

function AppShell() {
  const { currentRoute, isNotFound } = useRouter();
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  useEffect(() => {
    if (isNotFound || !currentRoute) {
      applyRouteSeo({
        route: '/',
        title:
          language === 'id'
            ? 'Halaman Tidak Ditemukan (404) | Fivers Corp'
            : 'Page Not Found (404) | Fivers Corp',
        description:
          language === 'id'
            ? 'Halaman yang diminta tidak tersedia di situs web Fivers Corp.'
            : 'The requested page could not be found on the Fivers Corp website.',
        language,
        breadcrumbs: [{ label: copy.nav.home, route: '/' }],
        isNotFound: true,
      });
      return;
    }

    const activeRoute = currentRoute;

    const matchedProduct = copy.products.items.find(
      (item) => item.route === activeRoute
    );
    if (matchedProduct) {
      const breadcrumbs: SeoBreadcrumb[] = [
        { label: copy.nav.home, route: '/' },
        { label: copy.nav.products, route: '/products' },
        { label: matchedProduct.name, route: matchedProduct.route },
      ];
      const schemaKind: SeoSchemaKind =
        matchedProduct.status === 'LIVE' ? 'software' : 'creativeWork';
      const isOffice = matchedProduct.id === 'fivers-digital-office';

      applyRouteSeo({
        route: matchedProduct.route,
        title: matchedProduct.seo.title,
        description: matchedProduct.seo.description,
        language,
        breadcrumbs,
        ogImagePath: isOffice
          ? FIVERS_IMAGES.digitalOffice
          : FIVERS_IMAGES.heroTechCore,
        ogImageAlt: isOffice
          ? 'Fivers Digital Office studio workspace'
          : `${matchedProduct.name} — Fivers Corp`,
        schemaKind,
        entityName: matchedProduct.name,
        entityCategory: matchedProduct.category,
      });
      return;
    }

    const matchedBusiness = copy.businesses.items.find(
      (item) => item.route === activeRoute
    );
    if (matchedBusiness) {
      applyRouteSeo({
        route: matchedBusiness.route,
        title: matchedBusiness.seo.title,
        description: matchedBusiness.seo.description,
        language,
        breadcrumbs: [
          { label: copy.nav.home, route: '/' },
          { label: copy.nav.businesses, route: '/businesses' },
          { label: matchedBusiness.title, route: matchedBusiness.route },
        ],
        ogImagePath: matchedBusiness.image,
        ogImageAlt: matchedBusiness.imageAlt,
        schemaKind: 'businessContext',
      });
      return;
    }

    const seo = copy.seo[activeRoute] ?? copy.seo['/'];
    const navLabels: Record<string, string> = {
      '/': copy.nav.home,
      '/company': copy.nav.company,
      '/technology': copy.nav.technology,
      '/products': copy.nav.products,
      '/businesses': copy.nav.businesses,
      '/contact': copy.nav.contact,
    };

    const breadcrumbs: SeoBreadcrumb[] =
      activeRoute === '/'
        ? [{ label: copy.nav.home, route: '/' }]
        : [
            { label: copy.nav.home, route: '/' },
            {
              label: navLabels[activeRoute] ?? copy.nav.home,
              route: activeRoute,
            },
          ];

    applyRouteSeo({
      route: activeRoute,
      title: seo.title,
      description: seo.description,
      language,
      breadcrumbs,
      ogImagePath:
        activeRoute === '/technology'
          ? FIVERS_IMAGES.digitalOffice
          : FIVERS_IMAGES.heroTechCore,
    });
  }, [currentRoute, isNotFound, language, copy]);

  const renderPage = () => {
    if (isNotFound) {
      return <NotFoundPage />;
    }

    switch (currentRoute) {
      case '/company':
        return <CompanyPage />;
      case '/technology':
        return <TechnologyPage />;
      case '/products':
        return <ProductsPage />;
      case '/products/veluna':
        return <ProductDetailPage slug="veluna" />;
      case '/products/financial-tracker':
        return <ProductDetailPage slug="financial-tracker" />;
      case '/products/fivers-digital-office':
        return <ProductDetailPage slug="fivers-digital-office" />;
      case '/products/linguaflow':
        return <ProductDetailPage slug="linguaflow" />;
      case '/products/fiveclip':
        return <ProductDetailPage slug="fiveclip" />;
      case '/products/forex-agent':
        return <ProductDetailPage slug="forex-agent" />;
      case '/businesses':
        return <BusinessesPage />;
      case '/businesses/agriculture':
        return <BusinessDetailPage slug="agriculture" />;
      case '/businesses/layer-poultry':
        return <BusinessDetailPage slug="layer-poultry" />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D120F] text-[#F5F7F4]">
      <Navbar />
      <main id="main-content" className="flex-1">
        <div
          key={`${isNotFound ? '404' : currentRoute}-${language}`}
          className="animate-[fadeIn_180ms_ease-out]"
        >
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppShell />
      </RouterProvider>
    </LanguageProvider>
  );
}
