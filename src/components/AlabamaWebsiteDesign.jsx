import PageMetadata from './PageMetadata';
import StudioFooter from './StudioFooter';
import ProjectInquiry from './ProjectInquiry';
import { PROJECT_TIERS } from '../packages';
import './AlabamaWebsiteDesign.css';

const description = 'Custom website design and redesign services for Alabama small businesses. Simple websites starting at $400. Local, independent designer based near Smith Lake, AL.';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://jessie2e.com/alabama-website-design/#webpage',
      url: 'https://jessie2e.com/alabama-website-design/',
      name: 'Custom Website Design for Alabama Small Businesses | 2e Studio',
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
      description: 'Independent Alabama website design and development studio creating custom, fast websites for small businesses.',
      priceRange: '$400–$1,800+',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'AL',
        addressCountry: 'US'
      },
      areaServed: [
        { '@type': 'State', name: 'Alabama' },
        { '@type': 'City', name: 'Birmingham' },
        { '@type': 'City', name: 'Huntsville' },
        { '@type': 'City', name: 'Madison' },
        { '@type': 'City', name: 'Cullman' },
        { '@type': 'City', name: 'Tuscaloosa' },
        { '@type': 'City', name: 'Jasper' },
        { '@type': 'City', name: 'Montgomery' },
        { '@type': 'City', name: 'Mobile' },
        { '@type': 'City', name: 'Auburn' },
        { '@type': 'Place', name: 'Smith Lake' }
      ]
    },
    {
      '@type': 'Service',
      name: 'Alabama Small Business Website Design',
      serviceType: 'Website Design and Development',
      provider: {
        '@id': 'https://jessie2e.com/#organization'
      },
      areaServed: {
        '@type': 'State',
        name: 'Alabama'
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

export default function AlabamaWebsiteDesign() {
  return (
    <>
      <PageMetadata
        title="Custom Website Design for Alabama Small Businesses | 2e Studio"
        description={description}
        path="/alabama-website-design/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="alabama-landing-page">
        {/* Navigation */}
        <header className="landing-nav">
          <div className="landing-nav-inner">
            <a href="/" className="landing-nav-logo">
              <img src="/2elogo.svg" alt="2e Studio bird logo" width="36" height="36" />
              <span>2e Studio</span>
            </a>
            <nav className="landing-nav-menu" aria-label="Page navigation">
              <a href="#benefits">Why Local</a>
              <a href="#portfolio">Client Work</a>
              <a href="#pricing">Pricing</a>
              <a href="#process">Process</a>
              <a href="#areas">Service Areas</a>
              <a href="#contact" className="landing-nav-cta">Start a Project</a>
            </nav>
          </div>
        </header>

        <main id="main-content">
          {/* Hero */}
          <section className="alabama-hero">
            <div className="landing-wrap">
              <div className="alabama-hero-copy">
                <span className="landing-kicker">LOCAL · INDEPENDENT · SMITH LAKE, ALABAMA</span>
                <h1>
                  Custom Website Design for <em>Alabama Small Businesses.</em>
                </h1>
                <p className="alabama-hero-lead">
                  Your business deserves a website that sounds authentic, looks sharp on every smartphone, and turns local visitors into paying customers. Designed and built right here in Alabama by an independent web designer—no agency markups, no bloated themes, and no surprise invoices.
                </p>

                <div className="landing-badges">
                  <div className="landing-badge">
                    <span className="landing-badge-dot"></span>
                    <span>Simple Sites from $400</span>
                  </div>
                  <div className="landing-badge">
                    <span className="landing-badge-dot"></span>
                    <span>Based near Smith Lake, AL</span>
                  </div>
                  <div className="landing-badge">
                    <span className="landing-badge-dot"></span>
                    <span>Direct 1-on-1 Collaboration</span>
                  </div>
                  <div className="landing-badge">
                    <span className="landing-badge-dot"></span>
                    <span>100% You-Owned Code</span>
                  </div>
                </div>

                <div className="landing-actions">
                  <a href="#contact" className="landing-btn-primary">
                    Request a Free Quote <span aria-hidden="true">↓</span>
                  </a>
                  <a href="#portfolio" className="landing-btn-secondary">
                    Explore Alabama Client Work <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Benefits */}
          <section id="benefits" className="landing-section">
            <div className="landing-wrap">
              <div className="landing-section-header">
                <span className="landing-kicker">01 / THE LOCAL ADVANTAGE</span>
                <h2>Why Alabama business owners choose an independent designer.</h2>
                <p className="landing-section-intro">
                  Tired of national agencies that pass you off to junior reps, or overseas templates that look like everyone else? Working with a local, independent designer keeps your project grounded, fast, and personal.
                </p>
              </div>

              <div className="benefits-grid">
                <div className="benefit-card">
                  <span className="benefit-card-tag">DIRECT PARTNERSHIP</span>
                  <h3>You work directly with Jessie.</h3>
                  <p>
                    No account managers playing telephone, no bureaucratic ticket systems, and no junior handoffs. Every page is personally designed and coded by the founder, giving you direct access and genuine accountability.
                  </p>
                </div>

                <div className="benefit-card">
                  <span className="benefit-card-tag">LOCAL UNDERSTANDING</span>
                  <h3>Grounded in Alabama communities.</h3>
                  <p>
                    From Cullman contractors and Madison healthcare practices to Birmingham retail and Smith Lake services, we understand how Alabama customers search, browse, and choose who to trust.
                  </p>
                </div>

                <div className="benefit-card">
                  <span className="benefit-card-tag">CLEAN & LIGHTWEIGHT</span>
                  <h3>Hand-crafted speed, not template bloat.</h3>
                  <p>
                    No sluggish WordPress installs loaded with 35 plugins waiting to break. 2e Studio designs fast, secure, modern websites that load instantly on rural cellular connections and city fiber alike.
                  </p>
                </div>

                <div className="benefit-card">
                  <span className="benefit-card-tag">FULL OWNERSHIP</span>
                  <h3>A site you actually own.</h3>
                  <p>
                    When your site launches, you own your design, code, and content outright. We never hold your website hostage. Host it yourself with no ongoing fees, or let us handle updates through our simple care plans.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Portfolio */}
          <section id="portfolio" className="landing-section">
            <div className="landing-wrap">
              <div className="landing-section-header">
                <span className="landing-kicker">02 / PROVEN CLIENT WORK</span>
                <h2>Websites built for real Alabama businesses.</h2>
                <p className="landing-section-intro">
                  Take a look at how we’ve helped small businesses across Alabama establish professional, hard-working digital homes.
                </p>
              </div>

              <div className="portfolio-grid">
                {/* Project 1: Sarah Pickett */}
                <article className="portfolio-card">
                  <div className="portfolio-card-media">
                    <div className="portfolio-browser-bar">
                      <span className="browser-dots">● ● ●</span>
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
                  <div className="portfolio-card-body">
                    <div className="portfolio-card-meta">
                      <span className="portfolio-location">Madison, AL</span>
                      <span className="portfolio-type">Healthcare & Speech Practice</span>
                    </div>
                    <h3>Sarah Pickett Voice & Speech</h3>
                    <p>
                      A warm, clinical-grade website designed for a specialized voice therapy practice serving Madison and the Huntsville area. Organized around patient education and seamless inquiry.
                    </p>
                    <a href="/work/sarah-pickett/" className="portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>

                {/* Project 2: DCG Land Management */}
                <article className="portfolio-card">
                  <div className="portfolio-card-media">
                    <div className="portfolio-browser-bar">
                      <span className="browser-dots">● ● ●</span>
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
                  <div className="portfolio-card-body">
                    <div className="portfolio-card-meta">
                      <span className="portfolio-location">Oakman, AL</span>
                      <span className="portfolio-type">Land Clearing & Excavation</span>
                    </div>
                    <h3>DCG Land Management</h3>
                    <p>
                      A rugged, confident website for a heavy-equipment contractor serving Central and West Alabama. Features real jobsite photography, a before-and-after comparison, and estimate requests.
                    </p>
                    <a href="/work/dcg-land-management/" className="portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>

                {/* Project 3: In The Woods */}
                <article className="portfolio-card">
                  <div className="portfolio-card-media portfolio-media-contained">
                    <div className="portfolio-browser-bar">
                      <span className="browser-dots">● ● ●</span>
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
                  <div className="portfolio-card-body">
                    <div className="portfolio-card-meta">
                      <span className="portfolio-location">Cullman, AL</span>
                      <span className="portfolio-type">Dog Training & Boarding</span>
                    </div>
                    <h3>In The Woods Dog Training</h3>
                    <p>
                      An inviting, rustic-modern website for a premier training and boarding facility near Smith Lake. Features clear training programs, transparent pricing, and booking intake.
                    </p>
                    <a href="/work/in-the-woods/" className="portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>

                {/* Project 4: Suds ’n Scissors */}
                <article className="portfolio-card">
                  <div className="portfolio-card-media">
                    <div className="portfolio-browser-bar">
                      <span className="browser-dots">● ● ●</span>
                      <span>sudsnscissors.com</span>
                      <span>↗</span>
                    </div>
                    <img
                      src="/portfolio/suds-nav-hero-900.webp"
                      alt="Suds ’n Scissors pet grooming website preview"
                      width="900"
                      height="562"
                      loading="lazy"
                    />
                  </div>
                  <div className="portfolio-card-body">
                    <div className="portfolio-card-meta">
                      <span className="portfolio-location">Jasper, AL</span>
                      <span className="portfolio-type">Pet Grooming Salon</span>
                    </div>
                    <h3>Suds ’n Scissors</h3>
                    <p>
                      A punchy, high-contrast digital presence for a beloved local grooming salon. Clear grooming service packages, honest policy guidelines, and direct phone/text actions.
                    </p>
                    <a href="/work/suds-scissors/" className="portfolio-card-link">
                      View Case Study <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Section 3: Pricing */}
          <section id="pricing" className="landing-section">
            <div className="landing-wrap">
              <div className="landing-section-header">
                <span className="landing-kicker">03 / TRANSPARENT PRICING</span>
                <h2>Honest, upfront pricing starting at $400.</h2>
                <p className="landing-section-intro">
                  We don’t believe in hiding rates behind high-pressure discovery calls. Your project scope determines the fixed price, agreed before any work begins.
                </p>
              </div>

              <div className="pricing-grid">
                {/* Simple */}
                <div className="pricing-card">
                  <h3>{PROJECT_TIERS.simple.label}</h3>
                  <div className="pricing-card-range">{PROJECT_TIERS.simple.range}</div>
                  <p className="pricing-card-desc">{PROJECT_TIERS.simple.description}</p>
                  <ul className="pricing-card-features">
                    <li>1–2 custom designed pages</li>
                    <li>Fast mobile-responsive layout</li>
                    <li>Contact / inquiry form setup</li>
                    <li>On-page local SEO essentials</li>
                    <li>Full source files & ownership</li>
                  </ul>
                  <a href="#contact" className="pricing-card-cta">Choose Simple Site</a>
                </div>

                {/* Business (Featured) */}
                <div className="pricing-card pricing-card-featured">
                  <span className="pricing-popular-badge">Most Popular</span>
                  <h3>{PROJECT_TIERS.business.label}</h3>
                  <div className="pricing-card-range">{PROJECT_TIERS.business.range}</div>
                  <p className="pricing-card-desc">{PROJECT_TIERS.business.description}</p>
                  <ul className="pricing-card-features">
                    <li>3–5 custom structured pages</li>
                    <li>Dedicated services & about pages</li>
                    <li>Photo gallery or work showcase</li>
                    <li>Booking or newsletter connection</li>
                    <li>Local business schema markup</li>
                    <li>Full source files & ownership</li>
                  </ul>
                  <a href="#contact" className="pricing-card-cta">Choose Business Site</a>
                </div>

                {/* Expanded */}
                <div className="pricing-card">
                  <h3>{PROJECT_TIERS.expanded.label}</h3>
                  <div className="pricing-card-range">{PROJECT_TIERS.expanded.range}</div>
                  <p className="pricing-card-desc">{PROJECT_TIERS.expanded.description}</p>
                  <ul className="pricing-card-features">
                    <li>Multi-page comprehensive build</li>
                    <li>Extensive content & galleries</li>
                    <li>Multiple service branches</li>
                    <li>Advanced filtering or forms</li>
                    <li>Performance testing & audit</li>
                    <li>Full source files & ownership</li>
                  </ul>
                  <a href="#contact" className="pricing-card-cta">Choose Expanded Site</a>
                </div>

                {/* Custom */}
                <div className="pricing-card">
                  <h3>{PROJECT_TIERS.custom.label}</h3>
                  <div className="pricing-card-range">Individually Scoped</div>
                  <p className="pricing-card-desc">{PROJECT_TIERS.custom.description}</p>
                  <ul className="pricing-card-features">
                    <li>E-commerce shops (Shopify/Stripe)</li>
                    <li>Client portals & memberships</li>
                    <li>Custom CMS publishing</li>
                    <li>Complex platform migrations</li>
                    <li>Tailored web applications</li>
                    <li>Full source files & ownership</li>
                  </ul>
                  <a href="#contact" className="pricing-card-cta">Discuss Custom Scope</a>
                </div>
              </div>

              <div className="pricing-footer-callout">
                <p>
                  <strong>Zero host lock-in:</strong> You own your website completely after launch. Prefer hands-off ongoing maintenance? Optional website care plans start at $49/month with no contract.
                </p>
                <a href="/website-care/">Learn about Website Care ↗</a>
              </div>
            </div>
          </section>

          {/* Section 4: Process */}
          <section id="process" className="landing-section">
            <div className="landing-wrap">
              <div className="landing-section-header">
                <span className="landing-kicker">04 / THE DESIGN PROCESS</span>
                <h2>Clear, predictable, and stress-free.</h2>
                <p className="landing-section-intro">
                  You have a business to run. We make the web design process straightforward from the first note to final launch.
                </p>
              </div>

              <div className="process-grid">
                <div className="process-step">
                  <span className="process-step-num">01</span>
                  <h3>Discovery & Quote</h3>
                  <p>
                    Tell me about your business, what you offer, and who you want to reach. You’ll receive an itemized proposal with a clear, fixed quote before spending anything.
                  </p>
                </div>

                <div className="process-step">
                  <span className="process-step-num">02</span>
                  <h3>Custom Design</h3>
                  <p>
                    I create a distinct layout and visual styling tailored to your business brand. You review interactive drafts and we refine the details together.
                  </p>
                </div>

                <div className="process-step">
                  <span className="process-step-num">03</span>
                  <h3>Clean Development</h3>
                  <p>
                    I hand-code your site using modern web standards, testing thoroughly on Apple and Android phones, tablets, and laptops for instant load speeds.
                  </p>
                </div>

                <div className="process-step">
                  <span className="process-step-num">04</span>
                  <h3>Launch & Hand-Off</h3>
                  <p>
                    We connect your custom domain, set up secure SSL, test all inquiry forms, and send you the completed code and account access. You’re ready to grow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Alabama Service Areas */}
          <section id="areas" className="landing-section">
            <div className="landing-wrap">
              <div className="landing-section-header">
                <span className="landing-kicker">05 / STATEWIDE COVERAGE</span>
                <h2>Rooted near Smith Lake, serving all of Alabama.</h2>
                <p className="landing-section-intro">
                  While 2e Studio is based in Winston County near Smith Lake, we partner with small businesses, contractors, medical practices, and creatives across Alabama.
                </p>
              </div>

              <div className="areas-grid">
                <div className="area-card">
                  <h3>North Alabama & Tennessee Valley</h3>
                  <p>
                    Huntsville, Madison, Decatur, Athens, Florence, Muscle Shoals, and Scottsboro. Supporting tech contractors, medical clinics, legal offices, and local services.
                  </p>
                </div>

                <div className="area-card">
                  <h3>Smith Lake & Cullman Region</h3>
                  <p>
                    Cullman, Arley, Houston, Crane Hill, Jasper, Double Springs, and Addison. Building websites for lake marinas, home builders, trades, and family businesses.
                  </p>
                </div>

                <div className="area-card">
                  <h3>Greater Birmingham & Central AL</h3>
                  <p>
                    Birmingham, Hoover, Vestavia Hills, Homewood, Mountain Brook, Trussville, and Pelham. Tailored sites for professional services, food, boutiques, and agencies.
                  </p>
                </div>

                <div className="area-card">
                  <h3>West Alabama & Tuscaloosa</h3>
                  <p>
                    Tuscaloosa, Northport, Oakman, Walker County, and Fayette. Helping land contractors, equipment operators, and service businesses win local contracts.
                  </p>
                </div>

                <div className="area-card">
                  <h3>East Alabama & Auburn</h3>
                  <p>
                    Auburn, Opelika, Alexander City, and Lake Martin. Clean digital presences for hospitality, retail, university-area entrepreneurs, and independent consultants.
                  </p>
                </div>

                <div className="area-card">
                  <h3>South Alabama & Gulf Coast</h3>
                  <p>
                    Mobile, Fairhope, Daphne, Foley, and Gulf Shores. Showcasing coastal tourism businesses, artisans, trade services, and established regional practices.
                  </p>
                </div>
              </div>

              {/* Cross link to No-Fuss page */}
              <div className="landing-cross-link">
                <div>
                  <h3>Too busy for phone calls and calendar scheduling?</h3>
                  <p>
                    We also offer a completely asynchronous build option. Handle your entire website project through clear written messages, on your own time.
                  </p>
                </div>
                <a href="/no-fuss-websites/" className="landing-cross-link-btn">
                  Explore No-Fuss Websites ↗
                </a>
              </div>
            </div>
          </section>

          {/* Section 6: Contact & Inquiry Form */}
          <section id="contact" className="landing-inquiry-section">
            <div className="landing-wrap">
              <div className="landing-inquiry-grid">
                <div className="landing-inquiry-copy">
                  <span className="landing-kicker">START YOUR PROJECT</span>
                  <h2>Let’s build something great for your business.</h2>
                  <p>
                    Tell me a little about what you do and what you want your website to accomplish. I’ll review your note, recommend the right scope, and send an honest quote within 1–2 business days.
                  </p>

                  <ul className="landing-inquiry-checklist">
                    <li>
                      <span aria-hidden="true">✓</span> Transparent quotes with no hidden fees
                    </li>
                    <li>
                      <span aria-hidden="true">✓</span> Work directly with Jessie Towey
                    </li>
                    <li>
                      <span aria-hidden="true">✓</span> Simple sites starting at $400
                    </li>
                    <li>
                      <span aria-hidden="true">✓</span> 100% full code and domain ownership
                    </li>
                  </ul>

                  <div className="landing-inquiry-profile">
                    <strong>2e Studio · Jessie Towey</strong>
                    <span>Independent Website Designer & Front-End Developer</span>
                    <span>Serving Alabama small businesses near Smith Lake & statewide</span>
                  </div>
                </div>

                <div>
                  <ProjectInquiry
                    source="Alabama Website Design"
                    inquiryType="Alabama Website Design Inquiry"
                    eyebrow="Alabama Project Inquiry"
                    title="Tell me about your Alabama business."
                    intro="A few quick details are all we need. I’ll review what you’re building and send a clear, honest quote before you commit."
                    messagePlaceholder="Tell me about your business, the services you provide, and what you’d like your website to accomplish. Include your Alabama city or county if relevant."
                    submitLabel="Send my project note"
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
