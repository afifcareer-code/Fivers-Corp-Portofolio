import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AppLink, useRouter } from '../context/RouterContext';
import { TRANSLATIONS } from '../data/i18n';
import { AppRoute } from '../types';
import { FiversLogo } from './FiversLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const { currentRoute } = useRouter();
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);

  const primaryNavLinks: { label: string; to: AppRoute }[] = [
    { label: copy.nav.home, to: '/' },
    { label: copy.nav.company, to: '/company' },
    { label: copy.nav.technology, to: '/technology' },
    { label: copy.nav.products, to: '/products' },
    { label: copy.nav.businesses, to: '/businesses' },
  ];

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentRoute]);

  // Handle Escape key and body scroll locking while drawer is open
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        openButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#F5F7F4]/10 bg-[#0D120F]/92 backdrop-blur-md">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          {/* Zone 1: Clean single-element wordmark */}
          <AppLink
            to="/"
            aria-label="Fivers Corp Home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F03C] rounded-sm shrink-0"
          >
            <FiversLogo variant="dark" />
          </AppLink>

          {/* Zone 2: Concise single-line desktop/tablet navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-9"
          >
            {primaryNavLinks.map((item) => {
              const isActive =
                item.to === '/'
                  ? currentRoute === '/'
                  : Boolean(
                      currentRoute &&
                        (currentRoute === item.to ||
                          currentRoute.startsWith(`${item.to}/`))
                    );
              return (
                <AppLink
                  key={item.to}
                  to={item.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-2 text-[13px] lg:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F03C] rounded-sm ${
                    isActive
                      ? 'text-[#F5F7F4]'
                      : 'text-[#A7B3A9] hover:text-[#F5F7F4]'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 bottom-0 h-[2px] transition-transform duration-200 origin-left ${
                      isActive
                        ? 'bg-[#C5F03C] scale-x-100'
                        : 'bg-[#F5F7F4]/40 scale-x-0'
                    }`}
                  />
                </AppLink>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + Contact CTA (Desktop) / Hamburger (Mobile) */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <AppLink
              to="/contact"
              aria-current={currentRoute === '/contact' ? 'page' : undefined}
              className={`hidden md:inline-flex items-center justify-center px-4 lg:px-5 py-2 lg:py-2.5 text-[13px] lg:text-sm font-semibold rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F03C] ${
                currentRoute === '/contact'
                  ? 'bg-[#C5F03C] text-[#0D120F]'
                  : 'bg-[#F5F7F4] text-[#0D120F] hover:bg-[#C5F03C]'
              }`}
            >
              {copy.nav.contact}
            </AppLink>

            <button
              ref={openButtonRef}
              type="button"
              aria-label={mobileOpen ? copy.nav.closeMenu : copy.nav.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-slide-drawer"
              onClick={() => setMobileOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm border border-[#F5F7F4]/15 bg-[#151C17] text-[#F5F7F4] hover:border-[#C5F03C]/50 transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Menu (rendered outside <header> so backdrop-blur never traps fixed positioning) */}
      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-200 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Scrim */}
        <div
          onClick={handleCloseDrawer}
          className="absolute inset-0 bg-[#0D120F]/75 backdrop-blur-sm"
        />

        {/* Slide-Out Drawer Panel */}
        <aside
          id="mobile-slide-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-dvh w-[min(86vw,340px)] bg-[#0D120F] border-l border-[#F5F7F4]/12 shadow-2xl flex flex-col justify-between transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="px-5 h-16 border-b border-[#F5F7F4]/10 flex items-center justify-between gap-4 shrink-0">
            <AppLink
              to="/"
              onClick={handleCloseDrawer}
              aria-label="Fivers Corp Home"
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F03C] rounded-sm"
            >
              <FiversLogo variant="dark" />
            </AppLink>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleCloseDrawer}
              aria-label={copy.nav.closeMenu}
              className="inline-flex items-center justify-center w-11 h-11 rounded-sm border border-[#F5F7F4]/15 bg-[#151C17] text-[#F5F7F4] hover:border-[#C5F03C]/50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Links & Language Switcher */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            <nav aria-label="Mobile links" className="space-y-1.5">
              {primaryNavLinks.map((item) => {
                const isActive =
                  item.to === '/'
                    ? currentRoute === '/'
                    : Boolean(
                        currentRoute &&
                          (currentRoute === item.to ||
                            currentRoute.startsWith(`${item.to}/`))
                      );
                return (
                  <AppLink
                    key={item.to}
                    to={item.to}
                    onClick={handleCloseDrawer}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between min-h-[48px] px-4 py-3 rounded-sm text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#151C17] text-[#C5F03C] border border-[#C5F03C]/25'
                        : 'text-[#F5F7F4] hover:bg-[#151C17]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#C5F03C]" aria-hidden="true" />
                    )}
                  </AppLink>
                );
              })}
            </nav>

            <div className="pt-5 border-t border-[#F5F7F4]/10 flex items-center justify-between gap-4">
              <span className="text-xs font-mono tracking-[0.08em] text-[#A7B3A9]">
                {copy.nav.languageLabel}
              </span>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Drawer Bottom Action */}
          <div className="p-5 border-t border-[#F5F7F4]/10 shrink-0">
            <AppLink
              to="/contact"
              onClick={handleCloseDrawer}
              className="flex items-center justify-center min-h-[48px] w-full px-5 py-3 rounded-sm bg-[#C5F03C] text-[#0D120F] text-base font-semibold hover:bg-[#d5f861] transition-colors"
            >
              {copy.nav.contact}
            </AppLink>
          </div>
        </aside>
      </div>
    </>
  );
}
