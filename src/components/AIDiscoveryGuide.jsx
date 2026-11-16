import PageMetadata from './PageMetadata';
import StudioFooter from './StudioFooter';
import guideSource from '../content/ai-discovery-guide.md?raw';
import { AI_TOOLKIT_LAUNCH_READY, AI_TOOLKIT_COMPANION_COPY } from '../content/ai-toolkit';
import './AIDiscoveryGuide.css';

const slug = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Use the same finalized source for the static HTML and the interactive page.
function parseGuide(source) {
  const lines = source.trim().split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    const heading = line.match(/^(#{1,3}) (.+)$/);
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] });
      i++; continue;
    }
    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!/^\|[\s:|-]+\|$/.test(lines[i])) rows.push(lines[i].split('|').slice(1, -1).map(cell => cell.trim()));
        i++;
      }
      blocks.push({ type: 'table', rows }); continue;
    }
    const list = line.match(/^(-|\d+\.) (.+)$/);
    if (list) {
      const ordered = list[1] !== '-';
      const items = [];
      const pattern = ordered ? /^\d+\. (.+)$/ : /^- (.+)$/;
      while (i < lines.length && pattern.test(lines[i])) { items.push(lines[i].match(pattern)[1]); i++; }
      blocks.push({ type: 'list', ordered, items }); continue;
    }
    const paragraph = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,3} |\||- |\d+\. )/.test(lines[i])) paragraph.push(lines[i++]);
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
  }
  return blocks;
}

function inline(text) {
  return text.split(/(\*\*.+?\*\*|\u0060[^\u0060]+\u0060|\[[^\]]+\]\(https?:\/\/[^)]+\))/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith(String.fromCharCode(96))) return <code key={i}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={i} href={link[2].replace(/^https:\/\/jessie2e\.com(?=\/)/, '')}>{link[1]}</a>;
    return part;
  });
}
const launchSource = AI_TOOLKIT_LAUNCH_READY
  ? guideSource.replace(/^You can do the method in this guide for free\..+$/m, AI_TOOLKIT_COMPANION_COPY)
  : guideSource;
const [title, byline, introduction, ...body] = parseGuide(launchSource);
const contents = body.filter(block => block.type === 'heading' && block.level === 2);

function renderBlock(block, index) {
  if (block.type === 'heading') {
    const Heading = 'h' + block.level;
    return <Heading key={index} id={slug(block.text)}>{inline(block.text)}</Heading>;
  }
  if (block.type === 'list') {
    const List = block.ordered ? 'ol' : 'ul';
    return <List key={index}>{block.items.map((item, i) => <li key={i}>{inline(item)}</li>)}</List>;
  }
  if (block.type === 'table') {
    const label = block.rows[0].length > 2 ? 'Fictional inquiry example' : 'What different visibility results tell you';
    return <div className="ai-guide-table-scroll" role="region" aria-label={label} tabIndex={0} key={index}>
      <table><thead><tr>{block.rows[0].map((cell, i) => <th scope="col" key={i}>{inline(cell)}</th>)}</tr></thead>
        <tbody>{block.rows.slice(1).map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{inline(cell)}</td>)}</tr>)}</tbody>
      </table>
    </div>;
  }
  return <p key={index}>{inline(block.text)}</p>;
}
function ContentsLinks() {
  return <ol>{contents.map(section => <li key={section.text}><a href={'#' + slug(section.text)}>{section.text.replace(/^\d+\. /, '')}</a></li>)}</ol>;
}
const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  '@id': 'https://jessie2e.com/resources/ai-discovery-guide/#article',
  url: 'https://jessie2e.com/resources/ai-discovery-guide/',
  headline: title.text,
  description: 'Practical steps to help small businesses get found by ChatGPT and AI search, with official sources, an honest 2e Studio case, and ways to track paying customers.',
  inLanguage: 'en-US', dateModified: '2026-10-27',
  author: { '@id': 'https://jessie2e.com/#jessie-towey' },
  publisher: { '@id': 'https://jessie2e.com/#organization' },
  image: 'https://jessie2e.com/social-share.png',
};
export default function AIDiscoveryGuide() {
  return <div className="ai-discovery-guide">
    <PageMetadata title="Get Your Small Business Found by AI in 2026 | 2e Studio" description={articleSchema.description} path="/resources/ai-discovery-guide/" />
    <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    <a className="ai-guide-skip" href="#ai-guide-reading">Skip to the article</a>
    <header className="ai-guide-nav"><a href="/"><img src="/2elogo.svg" alt="" />2e Studio</a><a href="/resources/">← All resources</a></header>
    <main className="ai-guide-main">
      <header className="ai-guide-hero">
        <p className="ai-guide-kicker">THE 2e STUDIO GUIDE · FREE TO READ</p>
        <h1>{title.text}</h1><p className="ai-guide-byline">{byline.text}</p>
        <p className="ai-guide-intro">{inline(introduction.text)}</p>
      </header>
      <details className="ai-guide-mobile-contents"><summary>In this guide <span>{contents.length} sections</span></summary><nav aria-label="Article contents"><ContentsLinks /></nav></details>
      <div className="ai-guide-layout">
        <aside className="ai-guide-sidebar">
          <nav aria-label="Article contents"><p className="ai-guide-kicker">IN THIS GUIDE</p><ContentsLinks /></nav>
          <a className="ai-guide-companion-link" href="/resources/#ai-visibility-toolkit">The companion toolkit <span>{AI_TOOLKIT_LAUNCH_READY ? '$19 · One payment · No subscription' : 'Coming soon · $19'}</span></a>
        </aside>
        <article className="ai-guide-body" id="ai-guide-reading" aria-label={title.text}>{body.map(renderBlock)}<a className="ai-guide-back" href="/resources/">← Back to all resources</a></article>
      </div>
    </main><StudioFooter />
  </div>;
}
