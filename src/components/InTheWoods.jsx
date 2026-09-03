import React from 'react';

export default function InTheWoods() {
  return (
    <div className="case-study">

      {/* TOP NAV */}
      <header className="case-study-nav">
        <a href="/" className="case-study-logo">
          <img src="/2elogo.svg" alt="2e Studio" />
          <span>2e Studio</span>
        </a>

        <a href="/#portfolio" className="case-study-back">
          ← Back to Work
        </a>
      </header>


      {/* HERO */}
      <section className="case-study-hero">
        <div className="case-study-hero-inner">

          <p className="case-study-eyebrow">
            WEBSITE + VISUAL IDENTITY
          </p>

          <h1>
            In The Woods
            <br />
            Dog Training
          </h1>

          <p className="case-study-lead">
            A warm, personality-driven website for an Alabama dog-training
            business, designed to build trust, clearly explain services,
            and make getting started feel simple.
          </p>

          <div className="case-study-tags">
            <span>Web Design</span>
            <span>Logo Design</span>
            <span>React Development</span>
            <span>Customer Experience</span>
          </div>

          <a
            href="https://www.inthewoodsdogtraining.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit Live Website ↗
          </a>

        </div>
      </section>


      {/* WEBSITE HERO SCREENSHOT */}
      <section className="case-study-showcase">

        <div className="case-study-browser">

          <div className="browser-toolbar">

            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser-address">
              inthewoodsdogtraining.com
            </div>

          </div>

          <img
            src="/inthewoods/cover.png"
            alt="In The Woods Dog Training website homepage"
          />

        </div>

      </section>


      {/* PROJECT INTRO */}
      <section className="case-study-section">

        <div className="case-study-intro-grid">

          <div>
            <p className="case-study-label">
              THE PROJECT
            </p>

            <h2>
              Creating an online experience that feels as personal
              as the business itself.
            </h2>
          </div>

          <div className="case-study-body-copy">

            <p>
              Choosing a dog trainer is a trust-based decision. Potential
              clients need more than a list of services—they want to understand
              who they are trusting with their dog, what the trainer believes,
              and what working together will actually feel like.
            </p>

            <p>
              The website was designed to answer those questions naturally,
              combining clear information with a warm visual identity and
              straightforward paths to contact.
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT / TRUST */}
      <section className="case-study-feature">

        <div className="case-study-feature-image">
          <img
            src="/inthewoods/about.png"
            alt="About section of the In The Woods Dog Training website"
          />
        </div>

        <div className="case-study-feature-copy">

          <p className="case-study-label">
            BUILDING TRUST
          </p>

          <h2>
            Putting the person behind the business front and center.
          </h2>

          <p>
            The site gives visitors a chance to understand Tessa&apos;s
            personality, experience, and approach before they&apos;re ever
            asked to reach out. That human connection is especially important
            for a service built around relationships between people and their dogs.
          </p>

        </div>

      </section>


      {/* BRAND DETAILS */}
      <section className="case-study-brand">

        <div className="case-study-brand-heading">

          <p className="case-study-label">
            BRAND DETAILS
          </p>

          <h2>
            Little details that make the website feel like theirs.
          </h2>

          <p>
            The visual identity extends beyond page layouts. Custom branding
            and playful interactions help the site feel specific to In The
            Woods rather than like a generic small-business template.
          </p>

        </div>


        <div className="case-study-brand-grid">

          {/* LOGO CARD */}
          <div className="brand-detail-card">

            <div className="brand-detail-visual logo-visual">
              <img
                src="/inthewoods/inthewoodslogo.png"
                alt="In The Woods Dog Training logo"
              />
            </div>

            <div className="brand-detail-copy">

              <p className="case-study-label">
                CUSTOM LOGO
              </p>

              <h3>
                A recognizable identity for the business.
              </h3>

              <p>
                I created the In The Woods logo to give the business a
                distinctive visual mark that feels personal, outdoorsy,
                and connected to the brand&apos;s approach.
              </p>

            </div>

          </div>


          {/* PAW CURSOR CARD */}
          <div className="brand-detail-card">

            <div className="brand-detail-visual cursor-visual">

              <div className="cursor-gif-frame">
                <img
                  src="/inthewoods/pawprintCursor.gif"
                  alt="Animation demonstrating the custom paw-print cursor"
                />
              </div>

            </div>

            <div className="brand-detail-copy">

              <p className="case-study-label">
                MICRO-INTERACTION
              </p>

              <h3>
                Even the mouse gets a little personality.
              </h3>

              <p>
                A custom paw-print cursor introduces a playful detail that
                reinforces the brand without getting in the way of using
                the website.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT / CONVERSION */}
      <section className="case-study-feature case-study-feature-reverse">

        <div className="case-study-feature-copy">

          <p className="case-study-label">
            FROM INTEREST TO INQUIRY
          </p>

          <h2>
            Giving interested dog owners a clear next step.
          </h2>

          <p>
            Calls to action throughout the site lead visitors toward a focused
            inquiry experience, making it easier to move from learning about
            the business to starting a conversation.
          </p>

        </div>

        <div className="case-study-feature-image">
          <img
            src="/inthewoods/contact.png"
            alt="Contact section of the In The Woods Dog Training website"
          />
        </div>

      </section>


      {/* PROJECT DETAILS */}
      <section className="case-study-info">

        <div className="case-study-info-item">

          <p className="case-study-label">
            CLIENT
          </p>

          <h3>
            In The Woods Dog Training
          </h3>

          <p>
            Alabama
          </p>

        </div>


        <div className="case-study-info-item">

          <p className="case-study-label">
            MY ROLE
          </p>

          <p>Website Design</p>
          <p>Logo Design</p>
          <p>Front-End Development</p>
          <p>Customer Journey Design</p>
          <p>Interactive Details</p>

        </div>


        <div className="case-study-info-item">

          <p className="case-study-label">
            BUILT WITH
          </p>

          <p>React</p>
          <p>JavaScript</p>
          <p>HTML / CSS</p>

        </div>

      </section>


      {/* CTA */}
      <section className="case-study-cta">

        <p className="case-study-label">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let&apos;s build something that actually feels like your business.
        </h2>

        <p>
          Thoughtful websites and digital experiences for small businesses,
          artists, performers, and people building something meaningful.
        </p>

        <a
          href="/#contact"
          className="btn btn-primary"
        >
          Start a Project
        </a>

      </section>


      {/* FOOTER */}
      <footer className="case-study-footer">

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