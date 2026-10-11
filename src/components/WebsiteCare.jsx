import { useEffect } from 'react';
import StudioFooter from './StudioFooter';
import { CARE_PLANS } from '../packages';
export default function WebsiteCare() {
  useEffect(() => {
    document.title = 'Website Care, Ownership & Handoff | 2e Studio';
    const values = { 'meta[name="description"]': 'Explore 2e Studio website care plans, hosting, monthly updates, website ownership, cancellation terms, and source-file handoff.', 'link[rel="canonical"]': 'https://jessie2e.com/website-care/', 'meta[property="og:title"]': 'Website Care, Ownership & Handoff | 2e Studio', 'meta[property="og:description"]': 'A clear guide to website care, monthly updates, ownership, and handoff with 2e Studio.', 'meta[property="og:url"]': 'https://jessie2e.com/website-care/', 'meta[property="og:image"]': 'https://jessie2e.com/social-share.png', 'meta[name="twitter:title"]': 'Website Care, Ownership & Handoff | 2e Studio', 'meta[name="twitter:description"]': 'Website care plans, updates, ownership, and handoff explained by 2e Studio.', 'meta[name="twitter:image"]': 'https://jessie2e.com/social-share.png' };
    Object.entries(values).forEach(([selector,value]) => { const tags = Array.from(document.head.querySelectorAll(selector)); tags.slice(1).forEach(tag => tag.remove()); tags[0]?.setAttribute(selector.startsWith('link') ? 'href' : 'content',value); });
    document.head.querySelectorAll('title').forEach((tag,i)=>{if(i>0)tag.remove()});
  }, []);
  return <div className="care-guide-page">
    <title>Website Care, Ownership & Handoff | 2e Studio</title>
    <meta name="description" content="Explore 2e Studio website care plans, hosting, monthly updates, website ownership, cancellation terms, and source-file handoff." />
    <link rel="canonical" href="https://jessie2e.com/website-care/" />
    <meta property="og:title" content="Website Care, Ownership & Handoff | 2e Studio" />
    <meta property="og:description" content="A clear guide to website care, monthly updates, ownership, and handoff with 2e Studio." />
    <meta property="og:url" content="https://jessie2e.com/website-care/" />
    <meta property="og:image" content="https://jessie2e.com/social-share.png" />
    <meta name="twitter:title" content="Website Care, Ownership & Handoff | 2e Studio" />
    <meta name="twitter:description" content="Website care plans, updates, ownership, and handoff explained by 2e Studio." />
    <meta name="twitter:image" content="https://jessie2e.com/social-share.png" />
    <header className="care-guide-nav"><a href="/" className="care-guide-logo"><img src="/2elogo.svg" alt="" />2e Studio</a><a href="/#contact">← Back to pricing & inquiry</a></header>
    <main className="care-guide-main"><section className="care-guide-hero"><p className="care-guide-kicker">AFTER LAUNCH · CLEAR EXPECTATIONS</p><h1>A website you own.<br /><em>Support when you need it.</em></h1><p>Your website build and ongoing care are separate choices. Here’s what happens after launch, what the care plans cover, and what you receive if you manage the website yourself.</p><nav aria-label="Guide sections"><a href="#care-plans">Care plans ↓</a><a href="#ownership">Ownership & handoff ↓</a></nav></section>
    <section className="care-guide-section" id="care-plans"><p className="care-guide-kicker">01 / MONTHLY CARE</p><h2>Choose the support that fits.</h2><div className="care-guide-plans">{CARE_PLANS.map(plan => <article key={plan.value}><h3>{plan.label}</h3><p className="care-guide-price">${plan.monthly}<span>/month</span></p><p>{plan.description} Text, photos, hours, prices, and links on existing pages.</p><p>Or ${plan.prepaid} prepaid for six months.</p><p>I respond within {plan.responseDays} business days to acknowledge your request and schedule the work. This is a response target, not a completion deadline.</p><p>{plan.value === 'fresh' ? 'A batch might replace a few photos and update opening hours, within the 30-minute allowance.' : 'Two batches might update service prices early in the month and refresh a seasonal announcement later, within the 60-minute allowance.'}</p></article>)}</div></section>
<section className="care-guide-section"><h2>What both plans cover</h2>
          <p>Standard static-site hosting and deployment management, a monthly check of key links and contact forms, and a source backup with rollback support. Third-party outages and urgent recovery have no guaranteed resolution time.</p>
          <p>Update time resets each month and does not roll over. Six-month prepayment keeps the same monthly allowance. New pages, redesigns, integrations, ecommerce administration, and memberships are quoted separately before work starts. Domains and paid subscriptions remain separate costs.</p>
          <p>Monthly plans can end before the next billing period. Cancel a six-month plan and unused full months are refunded at the discounted rate: $46.50 per month for Care or $84.50 for Support. The current service month is not refundable. Prepaid plans do not automatically renew.</p>
        </section><section className="care-guide-section" id="ownership"><h2>Ownership and website handoff</h2>
          <p>After full build payment, you own the agreed custom work, subject to third-party licenses. Your domain and paid service accounts stay in your name. Care manages the website for you; it does not determine ownership.</p>
          <p>If you prefer to manage the site or work with another developer, the build includes a source-file backup and hosting/account summary. These are the code, images, and instructions used to build your site. An editing dashboard is included only when specifically agreed. New-host setup, converting the site to another platform, and extended training are quoted separately.</p>
        </section>
    <section className="care-guide-section care-guide-next"><p className="care-guide-kicker">KEEP A COPY</p><h2>A guide you can take with you.</h2><p>The signed project agreement sets the final scope and price. Keep the care-plan PDF for reference, or get in touch to discuss your website.</p><div><a href="/2e-studio-care-guide.pdf" target="_blank" rel="noreferrer">Read the care plan guide PDF ↗</a><a href="/#contact">Discuss your website ↗</a></div></section></main><StudioFooter /></div>;
}
