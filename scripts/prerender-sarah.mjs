import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
try {
  const template = await readFile('dist/index.html', 'utf8');
  for (const [module, path, className] of [
    ['SarahPickett', 'work/sarah-pickett', 'sp-case'],
    ['WebsiteCare', 'website-care', 'care-guide-page'],
    ['Resources', 'resources', 'resources-page'],
  ]) {
    const { default: Page } = await server.ssrLoadModule(`/src/components/${module}.jsx`);
    const rendered = renderToString(createElement(Page));
    const start = rendered.indexOf(`<div class="${className}">`);
    if (start < 0) throw new Error(`Missing prerender root for ${module}`);
    const head = rendered.slice(0, start);
    const body = rendered.slice(start);
    let html = template.replace(/<title>[\s\S]*?<\/title>/, '')
      .replace(/<link\b[^>]*rel="canonical"[^>]*>/g, '')
      .replace(/<meta\b[^>]*(?:name="(?:description|twitter:(?:title|description|image|image:alt))"|property="og:(?:title|description|url|image|image:width|image:height|image:type|image:alt)")[^>]*>/g, '');
    html = html.replace('</head>', `${head}</head>`).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    await mkdir(`dist/${path}`, { recursive: true });
    await writeFile(`dist/${path}/index.html`, html);
    console.log(`Prerendered /${path} with crawlable content and unique metadata.`);
  }
  // Preserve raw recordings and screenshots locally, outside the deployable build.
  for (const name of await readdir('dist/sarahpickettvoice')) {
    if (/\.(png|mov)$/i.test(name)) await unlink(`dist/sarahpickettvoice/${name}`);
  }
} finally { await server.close(); }
