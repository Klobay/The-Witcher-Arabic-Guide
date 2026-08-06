import { useEffect, useState } from 'react';

export type Route = { path: string[]; params: Record<string, string> };

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return { path: [], params: {} };
  const [pathPart, queryPart] = raw.split('?');
  const path = pathPart.split('/').filter(Boolean);
  const params: Record<string, string> = {};
  if (queryPart) {
    new URLSearchParams(queryPart).forEach((v, k) => (params[k] = v));
  }
  return { path, params };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);
  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export function navigate(hash: string) {
  if (window.location.hash === hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.location.hash = hash;
}

export function buildHash(...parts: string[]): string {
  return '#/' + parts.join('/');
}
