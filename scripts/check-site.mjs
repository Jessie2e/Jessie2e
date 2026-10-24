import {readFile,stat} from 'node:fs/promises';
import assert from 'node:assert/strict';
const xml=await readFile('dist/sitemap.xml','utf8');
const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]));
const titles=new Set();let links=0,images=0,schemas=0;
for(const url of urls){
 const file=`dist${url.pathname}${url.pathname.endsWith('/')?'':'/'}index.html`;
 const html=await readFile(file,'utf8');
 const title=[...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];assert.equal(title.length,1,`${url.pathname}: title count`);
 assert(!titles.has(title[0][1]),'duplicate title');titles.add(title[0][1]);
 assert.equal((html.match(/<h1\b/g)||[]).length,1,`${url.pathname}: H1 count`);
 const desc=[...html.matchAll(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/g)];assert.equal(desc.length,1,`${url.pathname}: description count`);assert(desc[0][1].length>50);
 const canon=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];assert.equal(canon.length,1);assert.equal(canon[0][1],url.href);
 assert(html.includes('Designed by 2e Studio'));
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){JSON.parse(m[1]);schemas++;}
 for(const m of html.matchAll(/<(img|source|a)\b[^>]*(?:src|href)="(\/[^"?#]*)[^\"]*"/g)){
  const path=decodeURI(m[2]);const target='dist'+path;
  let info;try{info=await stat(target);}catch{throw new Error(`Missing ${path} on ${url.pathname}`);}
  if(info.isDirectory())await stat(target.replace(/\/$/,'')+'/index.html');
  if(m[1]==='img')images++;else links++;
 }
 for(const m of html.matchAll(/srcSet="([^"]+)"/gi)){
  for(const candidate of m[1].split(',')){
   const path=candidate.trim().split(/\s+/)[0];
   if(path.startsWith('/'))await stat('dist'+path);
  }
 }
 console.log(`PASS ${url.pathname} — title, description, canonical, heading, schema, local links/assets`);
}
console.log(`Checked ${urls.length} pages, ${schemas} structured-data blocks, ${images} images, ${links} other local references.`);
