export default function SodaStopConcept() {
  return (
    <div className="soda-case">

      {/* NAV */}
      <header className="soda-case-nav">
        <a href="/" className="soda-case-studio-logo">
          <img src="/2elogo.svg" alt="2e Studio" />
          <span>2e Studio</span>
        </a>

        <a href="/#portfolio" className="soda-case-back">
          ← Back to Work
        </a>
      </header>


      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="soda-case-hero">
        <div className="soda-case-hero-inner">
          <p className="soda-case-kicker">
            CONCEPT PROJECT · SODA SHOP WEBSITE + VISUAL IDENTITY
          </p>

          <h1>
            The Soda
            <span>Stop</span>
          </h1>

          <p className="soda-case-lead">
            A fictional Smith Lake-area soda-shop concept built to show what a
            small business can become when the website feels as specific,
            useful, and memorable as the business itself.
          </p>

          <div className="soda-case-tags">
            <span>Concept Design</span>
            <span>Web Design</span>
            <span>Visual Identity</span>
            <span>Ordering UX</span>
            <span>Responsive Design</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          HERO PREVIEW
      ====================================================== */}
      <section className="soda-case-showcase">
        <div className="soda-video-browser">
          <div className="soda-browser-toolbar">
            <div className="soda-browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="soda-browser-address">
              The Soda Stop · Cullman, Alabama · Concept
            </div>
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="The Soda Stop concept website homepage"
          >
            <source src="/sodastop/sodastophero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>


      {/* =====================================================
          THE CONCEPT
      ====================================================== */}
      <section className="soda-case-challenge">
        <div className="soda-case-challenge-inner">
          <div className="soda-case-heading">
            <p className="soda-case-label">THE CONCEPT</p>

            <h2>
              Imagine your business
              <br />
              here.
            </h2>
          </div>

          <div className="soda-case-copy">
            <p className="soda-case-copy-lead">
              The Soda Stop is a speculative concept—not a commissioned client project.
            </p>

            <p>
              I created it to explore how a small local food-and-drink business
              could feel bigger online without losing the personality that makes
              people want to stop in in the first place.
            </p>

            <p>
              The fictional shop serves coffee, specialty drinks, ice cream,
              cobblers, lunch, and rotating lake-day specials, so the design has
              to organize a lot of information while still feeling playful and easy.
            </p>

            <p>
              The result is the kind of custom direction I can adapt to a real
              business—your colors, your photos, your products, your personality,
              and the things your customers actually need to do.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          VISUAL DIRECTION
      ====================================================== */}
      <section className="soda-brand-section">
        <div className="soda-brand-inner">
          <div className="soda-brand-copy">
            <p className="soda-case-label">VISUAL DIRECTION</p>

            <h2>Built like a roadside landmark.</h2>

            <p>
              The concept pulls from vintage roadside signs, lake-town Americana,
              old diner menus, highway graphics, and the kind of slightly weird
              details that make a small business memorable.
            </p>

            <p>
              Instead of dropping content into a generic restaurant template, the
              same visual system carries through the hero, menu, specials, map,
              FAQ, buttons, and calls to action.
            </p>
          </div>

          <div className="soda-brand-logo-card">
            <img
              src="/sodastop/SodaStopspecials.png"
              alt="The Soda Stop concept specials and illustrated Smith Lake location section"
            />
          </div>
        </div>

        <div className="soda-brand-strip">
          <div className="soda-swatch soda-swatch-navy"><span>Lake Navy</span></div>
          <div className="soda-swatch soda-swatch-red"><span>Roadside Red</span></div>
          <div className="soda-swatch soda-swatch-blue"><span>Lake Blue</span></div>
          <div className="soda-swatch soda-swatch-yellow"><span>Sunshine Yellow</span></div>
          <div className="soda-swatch soda-swatch-cream"><span>Menu Cream</span></div>
        </div>
      </section>


      {/* =====================================================
          MENU / ORDERING
      ====================================================== */}
      <section className="soda-menu-feature">
        <div className="soda-menu-heading">
          <p className="soda-case-label">MENU + ORDERING EXPERIENCE</p>

          <h2>Make the fun stuff easy to find.</h2>

          <p>
            A big menu gets overwhelming fast. Filters let customers move between
            coffee, refreshers, ice cream, lunch, and desserts without turning the
            page into a wall of choices.
          </p>

          <p>
            The interaction is playful, but the goal stays practical: help someone
            find what sounds good and move naturally toward ordering.
          </p>
        </div>

        <div className="soda-video-browser">
          <div className="soda-browser-toolbar">
            <div className="soda-browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="soda-browser-address">Menu + Pickup Ordering</div>
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="soda-menu-video"
            aria-label="The Soda Stop concept menu filtering and ordering interaction"
          >
            <source src="/sodastop/sodastopmenu.mp4" type="video/mp4" />
          </video>
        </div>
      </section>


      {/* =====================================================
          FAQ / CUSTOMER EXPERIENCE
      ====================================================== */}
      <section className="soda-faq-section">
        <div className="soda-faq-inner">
          <div className="soda-faq-copy">
            <p className="soda-case-label">CUSTOMER EXPERIENCE</p>

            <h2>Answer the question before someone has to ask it.</h2>

            <p>
              Small businesses hear the same questions over and over: Can I order
              ahead? Are you open year-round? Do you serve food? Can I bring the family?
            </p>

            <p>
              The concept turns those repetitive questions into an easy FAQ and ends
              with a strong next step instead of making customers dig through social posts.
            </p>
          </div>

          <div className="soda-faq-video-wrap">
            <div className="soda-browser">
              <div className="soda-browser-toolbar">
                <div className="soda-browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="soda-browser-address">Good to Know</div>
              </div>

              <img
                src="/sodastop/sodastopfaq.png"
                alt="The Soda Stop concept FAQ and call-to-action section"
              />
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          APPROACH
      ====================================================== */}
      <section className="soda-thinking">
        <div className="soda-thinking-header">
          <p className="soda-case-label">THE APPROACH</p>

          <h2>Personality without sacrificing usability.</h2>
        </div>

        <div className="soda-thinking-grid">
          <article>
            <span>01</span>
            <h3>Make it recognizable</h3>
            <p>
              A distinct visual direction helps a small business look intentional,
              memorable, and trustworthy before a customer ever walks through the door.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Make the next step obvious</h3>
            <p>
              Menu categories, ordering calls to action, hours, location, and FAQs
              are designed around what a real customer is likely trying to do.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Build for the actual business</h3>
            <p>
              The concept can be re-skinned around a real shop instead of forcing a
              real shop to fit a template built for everybody else.
            </p>
          </article>
        </div>
      </section>


      {/* =====================================================
          PROJECT INFO
      ====================================================== */}
      <section className="soda-case-info">
        <div>
          <p className="soda-case-label">PROJECT</p>
          <h3>The Soda Stop</h3>
          <p>Fictional concept</p>
          <p>Cullman / Smith Lake-inspired</p>
        </div>

        <div>
          <p className="soda-case-label">MY ROLE</p>
          <p>Concept Development</p>
          <p>Website Design</p>
          <p>Front-End Development</p>
          <p>Visual Direction</p>
          <p>Responsive Design</p>
        </div>

        <div>
          <p className="soda-case-label">EXPERIENCE</p>
          <p>Menu Filtering</p>
          <p>Pickup Ordering</p>
          <p>Specials + Location</p>
          <p>FAQ Experience</p>
          <p>Brand System</p>
        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="soda-case-cta">
        <p className="soda-case-label">CONCEPT SODA SHOP DESIGN</p>

        <h2>
          Imagine your
          <br />
          business here.
        </h2>

        <p>
          The Soda Stop is fictional. The strategy isn’t. I can take this same
          custom-first approach and build it around your real business, brand,
          customers, and goals.
        </p>

        <a href="/#contact" className="soda-case-button">
          Start a Project
          <span aria-hidden="true">↗</span>
        </a>
      </section>


      {/* FOOTER */}
      <footer className="soda-case-footer">
        <p>© {new Date().getFullYear()} 2e Studio</p>
        <a href="/#portfolio">More Work ↑</a>
      </footer>

    </div>
  );
}
