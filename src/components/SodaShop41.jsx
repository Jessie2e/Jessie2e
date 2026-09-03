import React from 'react';

export default function SodaShop41() {
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
            PROJECT · WEBSITE + VISUAL IDENTITY · IN DEVELOPMENT
          </p>

          <h1>
            Soda Shop
            <span>41</span>
          </h1>

          <p className="soda-case-lead">
            A colorful roadside-inspired website for a Smith Lake
            favorite—built to make the business feel every bit as fun
            online as stopping by for coffee, ice cream, lunch, or a
            lake-day treat.
          </p>

          <div className="soda-case-tags">
            <span>Web Design</span>
            <span>Visual Identity</span>
            <span>Ordering UX</span>
            <span>Responsive Design</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          HERO SCREENSHOT
      ====================================================== */}

      <section className="soda-case-showcase">

        <div className="soda-browser">

          <div className="soda-browser-toolbar">

            <div className="soda-browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="soda-browser-address">
              Soda Shop 41 · Arley, Alabama
            </div>

          </div>

          <img
            src="/soda-shop-41/hero.png"
            alt="Soda Shop 41 website homepage"
          />

        </div>

      </section>


      {/* =====================================================
          CHALLENGE
      ====================================================== */}

      <section className="soda-case-challenge">

        <div className="soda-case-challenge-inner">

          <div className="soda-case-heading">

            <p className="soda-case-label">
              THE CHALLENGE
            </p>

            <h2>
              A little shop
              <br />
              with a lot going on.
            </h2>

          </div>


          <div className="soda-case-copy">

            <p className="soda-case-copy-lead">
              Soda Shop 41 is more than an ice-cream stop.
            </p>

            <p>
              The business serves coffee, specialty drinks, ice cream,
              cobblers, parfaits, lunch items, and seasonal favorites—
              all to a mix of locals, families, lake visitors, and
              people simply passing through.
            </p>

            <p>
              The website needed to communicate that variety without
              feeling like a generic restaurant menu, while still making
              practical things like ordering, hours, directions, and
              common questions easy to find.
            </p>

            <p>
              The goal became simple: turn the personality of a
              small-town Route 41 stop into a digital experience people
              actually enjoy using.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          BRAND DIRECTION
      ====================================================== */}

      <section className="soda-brand-section">

        <div className="soda-brand-inner">

          <div className="soda-brand-copy">

            <p className="soda-case-label">
              VISUAL DIRECTION
            </p>

            <h2>
              Built like a roadside landmark.
            </h2>

            <p>
              The identity borrows from highway shields, vintage roadside
              signage, lake-town Americana, diner graphics, and old
              travel ephemera.
            </p>

            <p>
              Instead of relying on photography for personality, custom
              graphic elements carry the experience—giving the site a
              distinctive visual language that can extend beyond the web.
            </p>

          </div>


          <div className="soda-brand-logo-card">

            <img
              src="/soda-shop-41/logo-lockup.png"
              alt="Soda Shop 41 logo and wordmark"
            />

          </div>

        </div>


        <div className="soda-brand-strip">

          <div className="soda-swatch soda-swatch-navy">
            <span>Route Navy</span>
          </div>

          <div className="soda-swatch soda-swatch-red">
            <span>Roadside Red</span>
          </div>

          <div className="soda-swatch soda-swatch-blue">
            <span>Lake Blue</span>
          </div>

          <div className="soda-swatch soda-swatch-yellow">
            <span>Sunshine Yellow</span>
          </div>

          <div className="soda-swatch soda-swatch-cream">
            <span>Menu Cream</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          MENU / ORDERING
      ====================================================== */}

      <section className="soda-menu-feature">

        <div className="soda-menu-heading">

          <p className="soda-case-label">
            MENU + ORDERING EXPERIENCE
          </p>

          <h2>
            Make the fun stuff easy to find.
          </h2>

          <p>
            A big menu can become overwhelming quickly, especially when
            customers may be looking for completely different things.
            Filtering helps people narrow the menu while keeping the full
            range of offerings available.
          </p>

          <p>
            The ordering flow carries the same visual language into the
            cart so moving from browsing to pickup feels like one
            continuous experience.
          </p>

        </div>


        <div className="soda-video-browser">

          <div className="soda-browser-toolbar">

            <div className="soda-browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="soda-browser-address">
              Menu + Pickup Ordering
            </div>

          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="soda-menu-video"
            aria-label="Soda Shop 41 menu filtering and ordering interaction"
          >
            <source
              src="/soda-shop-41/menu-order.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </section>


      {/* =====================================================
          VISIT
      ====================================================== */}

      <section className="soda-visit-section">

        <div className="soda-visit-image">

          <img
            src="/soda-shop-41/visit-map.png"
            alt="Soda Shop 41 visit section with illustrated map of Arley and Smith Lake"
          />

        </div>


        <div className="soda-visit-copy">

          <p className="soda-case-label">
            LOCATION AS PART OF THE BRAND
          </p>

          <h2>
            The trip there is part of the story.
          </h2>

          <p>
            Soda Shop 41 is rooted in Arley and Smith Lake, so the visit
            section does more than list an address.
          </p>

          <p>
            The custom map continues the Route 41 visual language and
            turns practical information—location, season, ordering, and
            atmosphere—into another branded moment.
          </p>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="soda-faq-section">

        <div className="soda-faq-inner">

          <div className="soda-faq-copy">

            <p className="soda-case-label">
              CUSTOMER EXPERIENCE
            </p>

            <h2>
              Answer the question before someone has to ask it.
            </h2>

            <p>
              Small businesses hear the same questions again and again:
              Can I order ahead? Are you open year-round? Do you serve
              food? Can I bring the family?
            </p>

            <p>
              A simple accordion keeps those answers easy to find without
              filling the page with extra copy—and helps reduce friction
              before someone ever calls or messages the shop.
            </p>

          </div>


          <div className="soda-faq-video-wrap">

            <div className="soda-video-browser">

              <div className="soda-browser-toolbar">

                <div className="soda-browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="soda-browser-address">
                  Good to Know
                </div>

              </div>

              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Soda Shop 41 frequently asked questions interaction"
              >
                <source
                  src="/soda-shop-41/faq.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          THINKING
      ====================================================== */}

      <section className="soda-thinking">

        <div className="soda-thinking-header">

          <p className="soda-case-label">
            THE APPROACH
          </p>

          <h2>
            Personality without sacrificing usability.
          </h2>

        </div>


        <div className="soda-thinking-grid">

          <article>

            <span>01</span>

            <h3>Make it memorable</h3>

            <p>
              Custom graphics and a distinctive visual identity keep the
              experience from feeling like another restaurant template.
            </p>

          </article>


          <article>

            <span>02</span>

            <h3>Make choices obvious</h3>

            <p>
              Menu categories, direct calls to action, and clear page
              structure help customers quickly get where they need to go.
            </p>

          </article>


          <article>

            <span>03</span>

            <h3>Think beyond the screen</h3>

            <p>
              The logo, colors, signs, badges, and visual system can live
              on menus, merchandise, social posts, packaging, and the
              physical shop itself.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          PROJECT INFO
      ====================================================== */}

      <section className="soda-case-info">

        <div>

          <p className="soda-case-label">
            PROJECT
          </p>

          <h3>Soda Shop 41</h3>

          <p>Arley, Alabama</p>
          <p>Smith Lake</p>

        </div>


        <div>

          <p className="soda-case-label">
            MY ROLE
          </p>

          <p>Website Design</p>
          <p>Front-End Development</p>
          <p>Simple Visual Identity</p>
          <p>Responsive Design</p>
          <p>Customer Experience</p>

        </div>


        <div>

          <p className="soda-case-label">
            EXPERIENCE
          </p>

          <p>Menu Filtering</p>
          <p>Pickup Ordering</p>
          <p>Visit Information</p>
          <p>FAQ Interaction</p>
          <p>Brand System</p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="soda-case-cta">

        <p className="soda-case-label">
          YOUR BUSINESS DOESN’T HAVE TO LOOK LIKE EVERYONE ELSE’S.
        </p>

        <h2>
          Let’s give it
          <br />
          somewhere to live online.
        </h2>

        <p>
          A good website can be practical, memorable, and completely
          specific to the business behind it.
        </p>

        <a
          href="/#contact"
          className="soda-case-button"
        >
          Start a Project
          <span aria-hidden="true">↗</span>
        </a>

      </section>


      {/* FOOTER */}
      <footer className="soda-case-footer">

        <p>
          © {new Date().getFullYear()} 2e Studio
        </p>

        <a href="/#portfolio">
          More Work ↑
        </a>

      </footer>

    </div>
  );
}