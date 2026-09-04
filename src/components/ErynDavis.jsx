import React from 'react';

export default function ErynDavis() {
  return (
    <div className="eryn-case">

      <header className="eryn-case-nav">
        <a href="/" className="eryn-case-studio-logo">
          <img src="/2elogo.svg" alt="2e Studio" />
          <span>2e Studio</span>
        </a>

        <a href="/#portfolio" className="eryn-case-back">
          ← Back to Work
        </a>
      </header>

      <main>
        <section className="eryn-case-hero">
          <div className="eryn-case-hero-inner">
            <p className="eryn-case-kicker">
              PROJECT · PERFORMER WEBSITE · IN DEVELOPMENT
            </p>

            <h1>
              Eryn Davis
              <span>Live Entertainer</span>
            </h1>

            <p className="eryn-case-lead">
              A high-energy digital home for a live performer—designed to
              feel like the show before a visitor ever presses play, while
              keeping dates, performance options, and booking one clear step away.
            </p>

            <div className="eryn-case-tags">
              <span>Web Design</span>
              <span>Booking UX</span>
              <span>Interactive Design</span>
              <span>Responsive Design</span>
            </div>
          </div>
        </section>

        <section className="eryn-case-showcase">
          <div className="eryn-browser">
            <div className="eryn-browser-toolbar">
              <div className="eryn-browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="eryn-browser-address">
                Eryn Davis · Live Entertainer
              </div>
            </div>

            <img
              src="/eryn-davis/eryn-davis-cover.webp"
              alt="Eryn Davis performer website homepage"
            />
          </div>
        </section>

        <section className="eryn-case-challenge">
          <div className="eryn-case-challenge-inner">
            <div className="eryn-case-heading">
              <p className="eryn-case-label">THE CHALLENGE</p>
              <h2>
                A performer website
                <br />
                has two jobs.
              </h2>
            </div>

            <div className="eryn-case-copy">
              <p className="eryn-case-copy-lead">
                Make people want the experience—and make it easy to book it.
              </p>

              <p>
                A musician’s website can’t function like a static résumé.
                Visitors need to understand the personality, energy, and kind of
                event they’re getting almost immediately.
              </p>

              <p>
                At the same time, event organizers need practical answers:
                what Eryn performs, which dates are available, what the booking
                process looks like, and how to get in touch without hunting for
                information.
              </p>

              <p>
                The design balances those two needs by pairing bold visual
                storytelling with a direct, conversion-focused path to booking.
              </p>
            </div>
          </div>
        </section>

        <section className="eryn-visual-direction">
          <div className="eryn-visual-inner">
            <div className="eryn-visual-copy">
              <p className="eryn-case-label">VISUAL DIRECTION</p>
              <h2>Part concert poster. Part vintage nightlife.</h2>
              <p>
                Black-and-white performance imagery gives the site a raw,
                timeless foundation. Oversized type, hot pink, golden yellow,
                and warm gradient accents add the personality and movement.
              </p>
              <p>
                The result feels theatrical without becoming precious—a visual
                system that can support weddings, bars, festivals, private
                events, and larger performances without losing Eryn’s voice.
              </p>
            </div>

            <div className="eryn-color-system" aria-label="Eryn Davis website color palette">
              <div className="eryn-swatch eryn-swatch-black"><span>Stage Black</span></div>
              <div className="eryn-swatch eryn-swatch-pink"><span>Hot Pink</span></div>
              <div className="eryn-swatch eryn-swatch-gold"><span>Show Gold</span></div>
              <div className="eryn-swatch eryn-swatch-coral"><span>Warm Coral</span></div>
            </div>
          </div>
        </section>

        <section className="eryn-experience-section">
          <div className="eryn-experience-heading">
            <p className="eryn-case-label">THE EXPERIENCE</p>
            <h2>Choose the energy, not just a service.</h2>
            <p>
              Instead of presenting performance options as a plain list, the
              site turns them into an interactive experience. Visitors can move
              between different event modes and see the tone, format, and
              highlights of each option without leaving the page.
            </p>
          </div>

          <div className="eryn-video-browser">
            <div className="eryn-browser-toolbar eryn-browser-toolbar-dark">
              <div className="eryn-browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="eryn-browser-address">Select Your Energy Mode</div>
            </div>

            <video
              src="/eryn-davis/eryn-davis-experience-tabs.mp4"
              poster="/eryn-davis/eryn-davis-experience-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Interactive Eryn Davis performance package selector"
            />
          </div>
        </section>

        <section className="eryn-mobile-section">
          <div className="eryn-mobile-inner">
            <div className="eryn-phone-shell">
              <video
                src="/eryn-davis/eryn-davis-mobile-booking.mp4"
                poster="/eryn-davis/eryn-davis-mobile-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Mobile booking and FAQ experience for the Eryn Davis website"
              />
            </div>

            <div className="eryn-mobile-copy">
              <p className="eryn-case-label">MOBILE + BOOKING UX</p>
              <h2>The practical stuff still gets center stage.</h2>
              <p>
                Most event inquiries start on a phone, so the mobile experience
                is treated as part of the design—not a smaller version of the
                desktop site.
              </p>
              <p>
                Dates, booking fields, event-type selection, and frequently
                asked questions are organized into a clear vertical flow that
                keeps the next action obvious while preserving the same bold
                personality.
              </p>

              <div className="eryn-mobile-points">
                <div><span>01</span><p>Clear event inquiry path</p></div>
                <div><span>02</span><p>Responsive performance content</p></div>
                <div><span>03</span><p>Dates + FAQs designed for scanning</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="eryn-case-info">
          <div>
            <p className="eryn-case-label">PROJECT STATUS</p>
            <h3>In Development</h3>
          </div>
          <div>
            <p className="eryn-case-label">ROLE</p>
            <h3>Design + Development</h3>
          </div>
          <div>
            <p className="eryn-case-label">FOCUS</p>
            <h3>Bookings + Performance</h3>
          </div>
          <div>
            <p className="eryn-case-label">BUILT FOR</p>
            <h3>Desktop + Mobile</h3>
          </div>
        </section>

        <section className="eryn-case-cta">
          <p className="eryn-case-label">FROM THE PORTFOLIO</p>
          <h2>Every business should look like itself.</h2>
          <p>
            Eryn’s site was built around the energy of a live performer—not a
            musician template. That same approach shapes every 2e Studio project.
          </p>
          <a href="/#portfolio" className="eryn-case-button">
            View More Work <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="eryn-case-footer">
        <a href="/" className="eryn-case-studio-logo">
          <img src="/2elogo.svg" alt="2e Studio" />
          <span>2e Studio</span>
        </a>
        <p>Website design + development by 2e Studio.</p>
        <a href="/#contact">Start a Project ↗</a>
      </footer>

    </div>
  );
}
