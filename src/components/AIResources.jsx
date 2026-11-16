import { useEffect, useRef, useState } from 'react';
import { AI_TOOLKIT_LAUNCH_READY, AI_TOOLKIT_URL, AI_TOOLKIT_COVER } from '../content/ai-toolkit';

export default function AIResources() {
  const cards = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    function showLinkedToolkit() {
      if (window.location.hash === '#ai-visibility-toolkit') {
        cards.current.children[1].scrollIntoView({ block: 'start', inline: 'start', behavior: 'instant' });
      }
    }
    showLinkedToolkit();
    window.addEventListener('hashchange', showLinkedToolkit);
    return () => window.removeEventListener('hashchange', showLinkedToolkit);
  }, []);
  function moveTo(index) {
    const row = cards.current;
    const left = row.children[index].offsetLeft - row.children[0].offsetLeft;
    row.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  function updateActive() {
    const row = cards.current;
    const nextLeft = row.children[1].offsetLeft - row.children[0].offsetLeft;
    setActive(row.scrollLeft > nextLeft / 2 ? 1 : 0);
  }
  return <section className="resources-ai" aria-labelledby="ai-resources-title">
    <div className="resources-ai-heading"><p className="resources-kicker">A PRACTICAL START WITH AI DISCOVERY</p><h2 id="ai-resources-title">Help your business get found in AI search.</h2><p>Practical guidance for checking your visibility, improving the information customers can find, and measuring what leads to real business.</p></div>
    <div className="resources-ai-cards" id="ai-resource-cards" ref={cards} onScroll={updateActive}>
      <article className="resources-ai-card resources-ai-free" aria-labelledby="ai-free-title">
        <p className="resources-kicker">FREE GUIDE</p><h3 id="ai-free-title">How to Get Your Small Business Found by ChatGPT and AI Search in 2026</h3>
        <p>A plain-language guide to checking what AI tools say, making your website easier to understand, and tracking genuine inquiries. Includes honest findings from 2e Studio&apos;s own visibility experiment and links to official sources.</p>
        <div className="resources-ai-action"><a className="resource-button" href="/resources/ai-discovery-guide/">Read the free guide <span aria-hidden="true">↗</span></a><small>No email signup needed.</small></div>
      </article>
      <article className="resources-ai-card resources-ai-toolkit" id="ai-visibility-toolkit" aria-labelledby="ai-toolkit-title">
        <p className="resources-kicker">SELF-GUIDED TOOLKIT · VERSION 1.0</p><h3 id="ai-toolkit-title">The Small Business AI Visibility Toolkit</h3>
        <div className="resources-ai-product"><img src={AI_TOOLKIT_COVER} width="1600" height="1200" alt="Cover of The Small Business AI Visibility Toolkit by 2e Studio" loading="lazy" /><p>Turn the guide into a working process with four documented platform routes, six editable templates, and a workbook for discovery tests, inquiries, payments, and refunds.</p></div>
        <p className="resources-ai-price"><strong>$19</strong><span>USD introductory price<br />One payment · no subscription</span></p>
        <div className="resources-ai-action resources-ai-purchase">
          {AI_TOOLKIT_LAUNCH_READY
            ? <a className="resource-button" href={AI_TOOLKIT_URL}>Get the toolkit — $19 <span aria-hidden="true">↗</span></a>
            : <button className="resource-button" type="button" disabled aria-describedby="ai-toolkit-availability">Get the toolkit — $19</button>}
          {!AI_TOOLKIT_LAUNCH_READY && <p className="resources-ai-availability" id="ai-toolkit-availability">Coming soon. Not available to purchase yet.</p>}
          <small>PDF, Word &amp; XLSX · One ZIP download.<br />Applicable taxes, if any, are shown at checkout.</small>
        </div>
        <details><summary>What’s inside &amp; who it’s for</summary><div className="resources-ai-details">
          <ul><li>Implementation manual with checklists and a 30-day workflow</li><li>Six editable Word templates</li><li>XLSX tracker, Google Sheets import instructions, and fictional practice examples</li></ul>
          <p>The corrected worked example was tested in Google Sheets. Microsoft Excel testing was unavailable. Wix, Squarespace, and WordPress editor routes are documentation-based; signed-in execution was unavailable.</p>
          <p>You’ll need a computer that can open ZIP, PDF, DOCX, and XLSX files, plus website access or help from your developer. No paid AI subscription is required.</p>
          <p>Allow 30–60 minutes for an initial review and approximately 95–150 minutes for setup over a few days, plus provider or developer delays.</p>
          <p>Self-guided resources for one business. No website audit, implementation, coaching, ongoing monitoring, lifetime updates, or guaranteed AI recommendations, leads, or sales included.</p>
        </div></details>
        <details><summary>Business use, support &amp; refunds</summary><div className="resources-ai-details">
          <p>Use and adapt the files within one business, including private working-copy sharing with its team, developer, or adviser. Your business information and original writing remain yours. No resale, redistribution, sublicensing, publication of unfilled files, or agency white-label license.</p>
          <p>For file-access help or clarification of intended file use, email <a href="mailto:jessietowey@gmail.com">jessietowey@gmail.com</a> with the product name, version, and order reference. Do not send passwords, card details, or customer records. No response-time guarantee is included.</p>
          <p>For this first edition, you may request a courtesy refund within seven days of purchase if the kit is not right for you. You do not need to demonstrate a failed AI recommendation. Contact us for help, replacement, or refund for missing, corrupt, inaccessible, or materially misdescribed files; report duplicate charges with both order references.</p>
          <p>The seven-day courtesy policy does not limit applicable cancellation rights or rights concerning faulty, inaccessible, or misdescribed content. Refunds use the original payment route; timing depends on the provider.</p>
        </div></details>
      </article>
    </div>
    <div className="resources-ai-controls" aria-label="Browse AI resources"><span aria-live="polite">{active === 0 ? 'Free guide' : 'Companion toolkit'} · {active + 1} of 2</span><div><button type="button" aria-label="Previous AI resource" aria-controls="ai-resource-cards" disabled={active === 0} onClick={() => moveTo(0)}>←</button><button type="button" aria-label="Next AI resource" aria-controls="ai-resource-cards" disabled={active === 1} onClick={() => moveTo(1)}>→</button></div></div>
  </section>;
}
