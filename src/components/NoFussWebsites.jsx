import PageMetadata from './PageMetadata';
import StudioFooter from './StudioFooter';
import ProjectInquiry from './ProjectInquiry';
import { PROJECT_TIERS } from '../packages';
import './NoFussWebsites.css';

const description = 'Custom website design for busy and introverted business owners. Work asynchronously with a real human—no required phone calls or zoom meetings. Websites start at $400.';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://jessie2e.com/no-fuss-websites/#webpage',
      url: 'https://jessie2e.com/no-fuss-websites/',
      name: 'No-Fuss Website Design: Custom Sites Without Required Calls | 2e Studio',
      description,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://jessie2e.com/#website',
        name: '2e Studio',
        url: 'https://jessie2e.com/'
      }
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://jessie2e.com/#organization',
      name: '2e Studio',
      url: 'https://jessie2e.com/',
      logo: 'https://jessie2e.com/2elogo.svg',
      image: 'https://jessie2e.com/social-share.png',
      description: 'Independent website design and front-end development studio offering asynchronous, meeting-free custom websites.',
      priceRange: '$400–$1,800+'
    },
    {
      '@type': 'Service',
      name: 'No-Fuss Custom Website Design (Asynchronous)',
      serviceType: 'Website Design and Development',
      provider: {
        '@id': 'https://jessie2e.com/#organization'
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '400',
        highPrice: '1800',
        priceCurrency: 'USD'
      }
    }
  ]
};

export default function NoFussWebsites() {
  return (
    <>
      <PageMetadata
        title="No-Fuss Website Design: Custom Sites Without Required Calls | 2e Studio"
        description={description}
        path="/no-fuss-websites/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="no-fuss-landing-page">
        {/* Navigation */}
        <header className="nf-nav">
          <div className="nf-nav-inner">
            <a href="/" className="nf-nav-logo">
              <img src="/2elogo.svg" alt="2e Studio bird logo" width="36" height="36" />
              <span>2e Studio</span>
            </a>
            <nav className="nf-nav-menu" aria-label="Page navigation">
              <a href="#why-async">Why Async</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#portfolio">Client Work</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a href="#contact" className="nf-nav-cta">Start in Writing</a>
            </nav>
          </div>
        </header>

        <main id="main-content">
          {/* Hero */}
          <section className="nf-hero">
            <div className="nf-wrap">
              <div className="nf-hero-copy">
                <span className="nf-kicker">ASYNCHRONOUS WEB DESIGN · ZERO REQUIRED MEETINGS</span>
                <h1>
                  A Beautiful Custom Website, Built by a Human. <em>No Phone Calls Required.</em>
                </h1>
                <p className="nf-hero-lead">
                  You need a sharp, hard-working website for your business—not another 45-minute calendar invite. 2e Studio builds custom websites entirely through thoughtful written communication on your schedule. No awkward video calls, no phone tag, and no high-pressure discovery pitches.
                </p>

                <div className="nf-badges">
                  <div className="nf-badge">
                    <span className="nf-badge-dot"></span>
                    <span>100% Async-Friendly</span>
                  </div>
                  <div className="nf-badge">
                    <span className="nf-badge-dot"></span>
                    <span>Hand-Crafted by Jessie (Not AI)</span>
                  </div>
                  <div className="nf-badge">
                    <span className="nf-badge-dot"></span>
                    <span>Transparent Pricing from $400</span>
                  </div>
                  <div className="nf-badge">
                    <span className="nf-badge-dot"></span>
                    <span>Calls Always Optional, Never Forced</span>
                  </div>
                </div>

                <div className="nf-actions">
                  <a href="#contact" className="nf-btn-primary">
                    Start Your Website Note <span aria-hidden="true">↓</span>
                  </a>
                  <a href="#how-it-works" className="nf-btn-secondary">
                    See How the Async Process Works <span aria-hidden="true">↓</span>
                  </a>
                </div>

                <div className="nf-reassurance-box">
                  <span className="nf-reassurance-icon" aria-hidden="true">💬</span>
                  <p>
                    <strong>Prefer to talk?</strong> Phone and video calls are always available if you want one—they’re just never required. We believe you should get to collaborate in the way that fits your brain and your busy day best.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Why Async Works Better */}
          <section id="why-async" className="nf-section">
            <div className="nf-wrap">
              <div className="nf-section-header">
                <span className="nf-kicker">01 / WHY THE NO-FUSS APPROACH WINS</span>
                <h2>Built for busy owners, quiet thinkers, and full calendars.</h2>
                <p className="nf-section-intro">
                  Traditional web agencies love meetings because they bill for them. We cut out the fluff so you get a better website faster, with less stress and zero disruptions to your workday.
                </p>
              </div>

              <div className="nf-benefits-grid">
                <div className="nf-benefit-card">
                  <span className="nf-benefit-card-tag">YOUR SCHEDULE, NOT OURS</span>
                  <h3>Work when it suits you.</h3>
                  <p>
                    Review drafts at 6 AM before the shop opens, between customer jobs, or at 9 PM from your sofa. You never have to block off an hour of prime working time to sit on a webcam call.
                  </p>
                </div>

                <div className="nf-benefit-card">
                  <span className="nf-benefit-card-tag">EVERYTHING IN WRITING</span>
                  <h3>No forgotten verbal promises.</h3>
                  <p>
                    Clear email threads, shared notes, and interactive previews ensure every design decision, copy revision, and price quote is documented in black and white. Nothing gets lost in translation.
                  </p>
                </div>

                <div className="nf-benefit-card">
                  <span className="nf-benefit-card-tag">THOUGHTFUL REVIEWS</span>
                  <h3>Time to think without pressure.</h3>
                  <p>
                    Evaluating a website design requires quiet consideration, not on-the-spot reactions while an agency team stares at you over Zoom. Click around the preview on your phone and tablet, sleep on it, and send your feedback when ready.
                  </p>
                </div>

                <div className="nf-benefit-card">
                  <span className="nf-benefit-card-tag">OPTIONAL TALK, ALWAYS</span>
                  <h3>Calls are welcome, never mandatory.</h3>
                  <p>
                    If a tricky question comes up or you just feel like bouncing an idea back and forth by phone, we can jump on a quick call anytime. The "no-fuss" guarantee simply means you never have to ask permission to keep things in writing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: How It Works */}
          <section id="how-it-works" className="nf-section">
            <div className="nf-wrap">
              <div className="nf-section-header">
                <span className="nf-kicker">02 / THE 4-STEP ASYNC PROCESS</span>
                <h2>How your site gets built without a single phone call.</h2>
                <p className="nf-section-intro">
                  A proven, stress-free progression designed to respect your time and give you total clarity at every stage.
                </p>
              </div>

              <div className="nf-process-grid">
                <div className="nf-process-step">
                  <span className="nf-process-step-num">01</span>
                  <h3>The Written Brief</h3>
                  <p>
                    Fill out our simple inquiry form or send an email. Tell me what your business does, what services you offer, and share links to any websites whose vibe you like.
                  </p>
                </div>

                <div className="nf-process-step">
                  <span className="nf-process-step-num">02</span>
                  <h3>Clear Quote & Draft</h3>
                  <p>
                    Within 2–3 business days, you’ll receive an itemized proposal with a fixed price. Once approved, I craft an interactive preview link you can test directly on your phone and laptop.
                  </p>
                </div>

                <div className="nf-process-step">
                  <span className="nf-process-step-num">03</span>
                  <h3>Async Feedback</h3>
                  <p>
                    Send your thoughts, tweaks, and photo replacements as a bulleted email or voice note. I implement your refinements and send back a refreshed preview link for your sign-off.
                  </p>
                </div>

                <div className="nf-process-step">
                  <span className="nf-process-step-num">04</span>
                  <h3>Launch & Full Handoff</h3>
                  <p>
                    Once you give the green light in writing, we connect your domain and push your site live. You get all source files, account logins, and instructions delivered straight to your inbox.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Portfolio */}
          <section id="portfolio" className="nf-section">
            <div className="nf-wrap">
              <div className="nf-section-header">
                <span className="nf-kicker">03 / REAL WORK BY A REAL HUMAN</span>
                <h2>High craft. Clean code. No template shortcuts.</h2>
                <p className="nf-section-intro">
                  "No-fuss" does not mean generic AI templates or outsourced work. Every website is custom designed and cleanly coded from scratch by Jessie Towey at 2e Studio.
                </p>
              </div>

              <div className="nf-portfolio-grid">
                {/* Project 1: Sarah Pickett */}
                <article className="nf-portfolio-card">
                  <div className="nf-portfolio-card-media">
                    <div className="nf-browser-bar">
                      <span className="nf-browser-dots">● ● ●</span>
                      <span>sarahpickettvoice.com</span>
                      <span>↗</span>
                    </div>
                    <img
                      src="/portfolio/sarah-pickett-nav-hero-900.webp"
                      alt="Sarah Pickett Voice & Speech website preview"
                      width="900"
                      height="562"
                      loading="lazy"
                    />
                  </div>
                  <div className="nf-portfolio-card-body">
                    <div className="nf-portfolio-card-meta">
                      <span className="nf-portfolio-category">Speech Pathology</span>
                      <span className="nf-portfolio-vibe">Calm, Professional & Clear</span>
                    </div>
                    <h3>Sarah Pickett Voice & Speech</h3>
                    <p>
                      A busy practitioner who needed a credible, reassuring digital presence. Hand-crafted typography and intuitive content structure designed to guide patients directly to care.
                    </p>
                    <a href="/work/sarah-pickett/" className="nf-portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>

                {/* Project 2: DCG Land Management */}
                <article className="nf-portfolio-card">
                  <div className="nf-portfolio-card-media">
                    <div className="nf-browser-bar">
                      <span className="nf-browser-dots">● ● ●</span>
                      <span>dcg-land.com</span>
                      <span>↗</span>
                    </div>
                    <img
                      src="/portfolio/dcg-nav-hero-900.webp"
                      alt="DCG Land Management website preview"
                      width="900"
                      height="562"
                      loading="lazy"
                    />
                  </div>
                  <div className="nf-portfolio-card-body">
                    <div className="nf-portfolio-card-meta">
                      <span className="nf-portfolio-category">Contractor / Excavation</span>
                      <span className="nf-portfolio-vibe">Rugged, Direct & Effective</span>
                    </div>
                    <h3>DCG Land Management</h3>
                    <p>
                      Built for an owner spending 12 hours a day on an excavator. Zero time for Zoom calls. We handled the entire project asynchronously, delivering real equipment showcases and estimate forms.
                    </p>
                    <a href="/work/dcg-land-management/" className="nf-portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>

                {/* Project 3: In The Woods */}
                <article className="nf-portfolio-card">
                  <div className="nf-portfolio-card-media nf-portfolio-media-contained">
                    <div className="nf-browser-bar">
                      <span className="nf-browser-dots">● ● ●</span>
                      <span>inthewoodsdogtraining.com</span>
                      <span>↗</span>
                    </div>
                    <img
                      src="/portfolio/in-the-woods-nav-hero-900.webp"
                      alt="In The Woods Dog Training website preview"
                      width="900"
                      height="400"
                      loading="lazy"
                    />
                  </div>
                  <div className="nf-portfolio-card-body">
                    <div className="nf-portfolio-card-meta">
                      <span className="nf-portfolio-category">Dog Training & Boarding</span>
                      <span className="nf-portfolio-vibe">Warm, Friendly & Practical</span>
                    </div>
                    <h3>In The Woods Dog Training</h3>
                    <p>
                      A rustic-modern website that organizes training programs, transparent pricing, and client intake into a fast, mobile-friendly experience that saves hours of phone intake every week.
                    </p>
                    <a href="/work/in-the-woods/" className="nf-portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>

                {/* Project 4: Susan Ripp Art */}
                <article className="nf-portfolio-card">
                  <div className="nf-portfolio-card-media nf-portfolio-media-contained">
                    <div className="nf-browser-bar">
                      <span className="nf-browser-dots">● ● ●</span>
                      <span>susanrippart.com</span>
                      <span>↗</span>
                    </div>
                    <img
                      src="/portfolio/susan-ripp-nav-hero-900.webp"
                      alt="Susan Ripp Watercolor Art website preview"
                      width="900"
                      height="400"
                      loading="lazy"
                    />
                  </div>
                  <div className="nf-portfolio-card-body">
                    <div className="nf-portfolio-card-meta">
                      <span className="nf-portfolio-category">Fine Artist & Studio</span>
                      <span className="nf-portfolio-vibe">Artful, Elegant & Quiet</span>
                    </div>
                    <h3>Susan Ripp Art</h3>
                    <p>
                      A tranquil visual gallery highlighting original watercolor collections, workshop schedules, and student courses, designed with generous white space and responsive elegance.
                    </p>
                    <a href="/work/susan-ripp/" className="nf-portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Section 4: Transparent Pricing */}
          <section id="pricing" className="nf-section">
            <div className="nf-wrap">
              <div className="nf-section-header">
                <span className="nf-kicker">04 / CLEAR PRICING</span>
                <h2>Transparent pricing starting at $400.</h2>
                <p className="nf-section-intro">
                  Every project is quoted in writing before work begins. No recurring platform lock-ins, no unexpected maintenance traps, and no billing surprises.
                </p>
              </div>

              <div className="nf-pricing-grid">
                {/* Simple */}
                <div className="nf-pricing-card">
                  <h3>{PROJECT_TIERS.simple.label}</h3>
                  <div className="nf-pricing-range">{PROJECT_TIERS.simple.range}</div>
                  <p className="nf-pricing-desc">{PROJECT_TIERS.simple.description}</p>
                  <ul className="nf-pricing-features">
                    <li>1–2 custom designed pages</li>
                    <li>Lightning-fast mobile performance</li>
                    <li>Written inquiry form setup</li>
                    <li>Search engine basics included</li>
                    <li>100% full code & file ownership</li>
                  </ul>
                  <a href="#contact" className="nf-pricing-cta">Get Started in Writing</a>
                </div>

                {/* Business */}
                <div className="nf-pricing-card nf-pricing-card-featured">
                  <span className="nf-pricing-badge">Most Popular</span>
                  <h3>{PROJECT_TIERS.business.label}</h3>
                  <div className="nf-pricing-range">{PROJECT_TIERS.business.range}</div>
                  <p className="nf-pricing-desc">{PROJECT_TIERS.business.description}</p>
                  <ul className="nf-pricing-features">
                    <li>3–5 custom structured pages</li>
                    <li>Services, about & contact sections</li>
                    <li>Portfolio gallery or showcase</li>
                    <li>Booking or newsletter integrations</li>
                    <li>Structured schema for Google</li>
                    <li>100% full code & file ownership</li>
                  </ul>
                  <a href="#contact" className="nf-pricing-cta">Get Started in Writing</a>
                </div>

                {/* Expanded */}
                <div className="nf-pricing-card">
                  <h3>{PROJECT_TIERS.expanded.label}</h3>
                  <div className="nf-pricing-range">{PROJECT_TIERS.expanded.range}</div>
                  <p className="nf-pricing-desc">{PROJECT_TIERS.expanded.description}</p>
                  <ul className="nf-pricing-features">
                    <li>Comprehensive multi-page build</li>
                    <li>Substantial content & gallery layouts</li>
                    <li>Multiple distinct service branches</li>
                    <li>Advanced inquiry routing</li>
                    <li>Full performance optimization</li>
                    <li>100% full code & file ownership</li>
                  </ul>
                  <a href="#contact" className="nf-pricing-cta">Get Started in Writing</a>
                </div>

                {/* Custom */}
                <div className="nf-pricing-card">
                  <h3>{PROJECT_TIERS.custom.label}</h3>
                  <div className="nf-pricing-range">Individually Scoped</div>
                  <p className="nf-pricing-desc">{PROJECT_TIERS.custom.description}</p>
                  <ul className="nf-pricing-features">
                    <li>Online stores & checkout flows</li>
                    <li>Client portals & memberships</li>
                    <li>Custom content architectures</li>
                    <li>Platform migrations & data imports</li>
                    <li>Tailored web tools</li>
                    <li>100% full code & file ownership</li>
                  </ul>
                  <a href="#contact" className="nf-pricing-cta">Describe Your Scope</a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: FAQ */}
          <section id="faq" className="nf-section">
            <div className="nf-wrap">
              <div className="nf-section-header">
                <span className="nf-kicker">05 / FREQUENTLY ASKED QUESTIONS</span>
                <h2>Everything you might be wondering about going meeting-free.</h2>
                <p className="nf-section-intro">
                  Here’s how async website design works in practice and why so many business owners prefer it.
                </p>
              </div>

              <div className="nf-faq-list">
                <details className="nf-faq-item" open>
                  <summary className="nf-faq-summary">
                    Can we really build my entire website without any phone or video calls?
                  </summary>
                  <div className="nf-faq-content">
                    <p>
                      Yes! In fact, most web design projects move substantially faster and with fewer misunderstandings when communication happens in writing.
                    </p>
                    <p>
                      You share your materials and thoughts on your schedule; I deliver organized links, interactive previews, and clear written summaries. There are no forgotten verbal decisions or lost notes.
                    </p>
                  </div>
                </details>

                <details className="nf-faq-item">
                  <summary className="nf-faq-summary">
                    What if I DO want to talk on the phone or ask a question?
                  </summary>
                  <div className="nf-faq-content">
                    <p>
                      Phone and video calls are always an option! If you hit a tricky design question or just prefer to chat something through verbally, you’re always welcome to request a call.
                    </p>
                    <p>
                      The "no-fuss" guarantee simply means calls are <em>never mandatory</em>. You will never be forced onto a 45-minute discovery call just to get a quote or discuss a button color.
                    </p>
                  </div>
                </details>

                <details className="nf-faq-item">
                  <summary className="nf-faq-summary">
                    How do I send you my photos, text, and business information?
                  </summary>
                  <div className="nf-faq-content">
                    <p>
                      Whatever method is most convenient for you: email attachments, a Google Drive or Dropbox link, or typed directly into our inquiry form.
                    </p>
                    <p>
                      Don’t have polished website copy written yet? No problem—we also offer free planning worksheets and clear questions that help you write your content in 20 minutes without overthinking it.
                    </p>
                  </div>
                </details>

                <details className="nf-faq-item">
                  <summary className="nf-faq-summary">
                    Who actually designs and codes my website?
                  </summary>
                  <div className="nf-faq-content">
                    <p>
                      Jessie Towey, the founder of 2e Studio. You are working with an experienced human designer and front-end developer based in Alabama, not an automated AI generator, an offshore agency farm, or an unvetted subcontractor.
                    </p>
                  </div>
                </details>

                <details className="nf-faq-item">
                  <summary className="nf-faq-summary">
                    What happens after my website is launched? Do I have to pay monthly?
                  </summary>
                  <div className="nf-faq-content">
                    <p>
                      You own 100% of your website code, domain, and accounts. You are free to take your files and host them anywhere with zero ongoing fees to 2e Studio.
                    </p>
                    <p>
                      If you prefer hands-off peace of mind, we also provide optional monthly website care plans starting at $49/month with no contract, so you can email in text and photo updates whenever needed.
                    </p>
                  </div>
                </details>
              </div>

              {/* Cross link to Alabama page */}
              <div className="nf-cross-link">
                <div>
                  <h3>Based in Alabama and looking for local design services?</h3>
                  <p>
                    We’re rooted near Smith Lake and build custom websites for businesses across Huntsville, Birmingham, Cullman, Madison, and statewide.
                  </p>
                </div>
                <a href="/alabama-website-design/" className="nf-cross-link-btn">
                  Explore Alabama Web Design ↗
                </a>
              </div>
            </div>
          </section>

          {/* Section 6: Written Inquiry Form */}
          <section id="contact" className="nf-inquiry-section">
            <div className="nf-wrap">
              <div className="nf-inquiry-grid">
                <div className="nf-inquiry-copy">
                  <span className="nf-kicker">ZERO SALES CALLS</span>
                  <h2>Start your website note in writing.</h2>
                  <p>
                    No calendar popups, no booking software, and no sales pitch. Just write a few basics about your business and what you need. I’ll review your note and email you back with clear recommendations and an exact quote.
                  </p>

                  <ul className="nf-inquiry-guarantees">
                    <li>
                      <span aria-hidden="true">✓</span> 100% written communication by default
                    </li>
                    <li>
                      <span aria-hidden="true">✓</span> Response within 1–2 business days
                    </li>
                    <li>
                      <span aria-hidden="true">✓</span> Honest, fixed-price quote before committing
                    </li>
                    <li>
                      <span aria-hidden="true">✓</span> Calls always optional if you change your mind
                    </li>
                  </ul>

                  <div className="nf-human-promise">
                    <strong>Real Human Craftsmanship</strong>
                    <span>Designed and coded by Jessie Towey · 2e Studio</span>
                    <span>No generic templates · No AI slop · Clean, bespoke code</span>
                  </div>
                </div>

                <div>
                  <ProjectInquiry
                    source="No-Fuss Websites"
                    inquiryType="No-Fuss Website Inquiry"
                    eyebrow="Zero meetings required"
                    title="Tell me about your website in writing."
                    intro="Fill out the basics below. I'll review your project, reply by email with recommendations and a clear price, and we can handle the entire build asynchronously."
                    defaultPreferredContact="Email"
                    messagePlaceholder="Tell me about your business, the pages you envision, and any websites you like. If you already have copy or photos, mention that here too."
                    submitLabel="Send written inquiry"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <StudioFooter />
      </div>
    </>
  );
}
