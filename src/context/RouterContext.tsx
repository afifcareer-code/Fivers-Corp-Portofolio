import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AppRoute } from '../types';

export const VALID_ROUTES: AppRoute[] = [
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

export interface RouteState {
  route: AppRoute | null;
  pathname: string;
  isNotFound: boolean;
}

function resolveRoute(pathname: string): RouteState {
  const cleaned = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (VALID_ROUTES.includes(cleaned as AppRoute)) {
    return {
      route: cleaned as AppRoute,
      pathname: cleaned,
      isNotFound: false,
    };
  }
  return {
    route: null,
    pathname: cleaned || '/',
    isNotFound: true,
  };
}

interface RouterContextValue {
  currentRoute: AppRoute | null;
  currentPath: string;
  isNotFound: boolean;
  navigate: (route: AppRoute) => void;
}

const RouterContext = createContext<RouterContextValue>({
  currentRoute: '/',
  currentPath: '/',
  isNotFound: false,
  navigate: () => {},
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [routeState, setRouteState] = useState<RouteState>(() =>
    resolveRoute(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setRouteState(resolveRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback(
    (route: AppRoute) => {
      if (!routeState.isNotFound && route === routeState.route) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      window.history.pushState({}, '', route);
      setRouteState(resolveRoute(route));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    },
    [routeState.isNotFound, routeState.route]
  );

  return (
    <RouterContext.Provider
      value={{
        currentRoute: routeState.route,
        currentPath: routeState.pathname,
        isNotFound: routeState.isNotFound,
        navigate,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: AppRoute;
  children: React.ReactNode;
}

export function AppLink({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onClick?.(e);
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
