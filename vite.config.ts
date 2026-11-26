import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import {STATIC_SEO_ROUTES, StaticRouteSeoEntry} from './src/data/seoRoutes';
import {buildSeoGraph} from './src/utils/seoSchema';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildRouteShellHtml(
  baseHtml: string,
  entry: StaticRouteSeoEntry,
  siteUrl: string
): string {
  const safeTitle = escapeHtmlAttr(entry.title);
  const safeDesc = escapeHtmlAttr(entry.description);
  const safeImage = escapeHtmlAttr(
    siteUrl ? `${siteUrl}${entry.ogImagePath}` : entry.ogImagePath
  );
  const safeImageAlt = escapeHtmlAttr(entry.ogImageAlt);
  const canonicalHref = siteUrl ? `${siteUrl}${entry.route}` : '';

  const graphJson = JSON.stringify(
    buildSeoGraph({
      origin: siteUrl,
      route: entry.route,
      title: entry.title,
      description: entry.description,
      language: 'en',
      breadcrumbs: entry.breadcrumbs,
      schemaKind: entry.schemaKind,
      entityName: entry.entityName,
      entityCategory: entry.entityCategory,
    })
  );

  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${safeImage}" />`
    )
    .replace(
      /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image:alt" content="${safeImageAlt}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image" content="${safeImage}" />`
    )
    .replace(
      /<script\s+type="application\/ld\+json"\s+data-fivers-seo="true">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json" data-fivers-seo="true">${graphJson}</script>`
    );

  // Strip any pre-existing canonical / og:url before injecting absolute production URLs when VITE_SITE_URL is set
  html = html
    .replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi, '')
    .replace(/\s*<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi, '');

  if (canonicalHref) {
    const safeCanonical = escapeHtmlAttr(canonicalHref);
    html = html.replace(
      /<meta\s+name="robots"/i,
      `<link rel="canonical" href="${safeCanonical}" />\n    <meta property="og:url" content="${safeCanonical}" />\n    <meta name="robots"`
    );
  }

  return html;
}

export default defineConfig(({mode}) => {
  const rootDir = import.meta.dirname;
  const env = loadEnv(mode, rootDir, '');
  const rawSiteUrl = (env.VITE_SITE_URL || process.env.VITE_SITE_URL || '').trim();
  const siteUrl = /^https?:\/\//i.test(rawSiteUrl)
    ? rawSiteUrl.replace(/\/+$/, '')
    : '';

  return {
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/, updates sitemap/robots when VITE_SITE_URL is set,
      // and writes full-head static HTML shells for all 14 public routes.
      {
        name: 'fivers-static-seo-and-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(rootDir, 'dist');
          const srcAssets = path.resolve(rootDir, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }

          const indexHtmlPath = path.join(distDir, 'index.html');
          if (fs.existsSync(indexHtmlPath)) {
            const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
            for (const entry of STATIC_SEO_ROUTES) {
              const routeHtml = buildRouteShellHtml(baseHtml, entry, siteUrl);
              if (entry.route === '/') {
                fs.writeFileSync(indexHtmlPath, routeHtml, 'utf-8');
              } else {
                const targetDir = path.join(distDir, entry.route.replace(/^\/+/, ''));
                fs.mkdirSync(targetDir, {recursive: true});
                fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml, 'utf-8');
              }
            }
          }

          if (siteUrl && fs.existsSync(distDir)) {
            const sitemapEntries = STATIC_SEO_ROUTES.map(
              (entry) =>
                `  <url>\n    <loc>${escapeHtmlAttr(`${siteUrl}${entry.route}`)}</loc>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`
            ).join('\n');

            const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
            fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

            const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
            fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
