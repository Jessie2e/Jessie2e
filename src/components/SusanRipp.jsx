import React from 'react';

export default function SusanRipp() {
  return (
    <div className="susan-case">

      {/* NAV */}
      <header className="case-study-nav susan-case-nav">

        <a href="/" className="case-study-logo">
          <img
            src="/2elogo.svg"
            alt="2e Studio"
          />

          <span>2e Studio</span>
        </a>

        <a
          href="/#portfolio"
          className="case-study-back"
        >
          ← Back to Work
        </a>

      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="susan-case-hero">

        <div className="susan-case-hero-inner">

          <p className="susan-case-kicker">
            WEBSITE + ECOMMERCE + ART EDUCATION
          </p>

          <h1>
            Susan Ripp
            <br />
            <span>Art</span>
          </h1>

          <p className="susan-case-lead">
            A digital studio designed to sell the art
            without losing the artist—bringing original
            work, fine prints, workshops, and online
            education together in one cohesive experience.
          </p>

          <div className="susan-case-tags">
            <span>Web Design</span>
            <span>Ecommerce</span>
            <span>Responsive Design</span>
            <span>Customer Experience</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          HERO WEBSITE
      ====================================================== */}

      <section className="susan-case-showcase">

        <div className="susan-browser">

          <div className="susan-browser-toolbar">

            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="susan-browser-address">
              susanrippart.com
            </div>

          </div>

          <img
            src="/susan-ripp/hero.png"
            alt="Susan Ripp Art website homepage"
          />

        </div>

      </section>


      {/* =====================================================
          THE CHALLENGE
      ====================================================== */}

      <section className="susan-case-intro">

        <div className="susan-case-intro-inner">

          <div className="susan-case-intro-heading">

            <p className="susan-case-label">
              THE CHALLENGE
            </p>

            <h2>
              One artist.
              <br />
              Several ways to
              <br />
              experience her work.
            </h2>

          </div>


          <div className="susan-case-intro-copy">

            <p className="susan-case-intro-lead">
              Susan isn’t simply selling paintings.
            </p>

            <p>
              Her business includes original watercolor
              work, fine-art prints, in-person workshops,
              online courses, and an active community of
              students.
            </p>

            <p>
              The website needed to make all of those paths
              easy to understand without turning Susan’s
              creative work into a crowded storefront.
            </p>

            <p>
              The solution was a visual system that stays
              quiet when the artwork needs attention and
              becomes more structured when visitors need
              clear choices.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS PATHS
      ====================================================== */}

      <section className="susan-paths">

        <div className="susan-paths-inner">

          <div className="susan-paths-header">

            <p className="susan-case-label">
              INFORMATION ARCHITECTURE
            </p>

            <h2>
              One site.
              <br />
              Four clear paths.
            </h2>

            <p>
              Visitors can come for very different reasons,
              so the experience makes each one easy to find
              without separating the business into disconnected
              pieces.
            </p>

          </div>


          <div className="susan-path-list">

            <div className="susan-path-row">
              <span>01</span>

              <h3>Original Art</h3>

              <p>
                Discover one-of-a-kind watercolor pieces.
              </p>
            </div>


            <div className="susan-path-row">
              <span>02</span>

              <h3>Fine Prints</h3>

              <p>
                Browse accessible reproductions of Susan’s work.
              </p>
            </div>


            <div className="susan-path-row">
              <span>03</span>

              <h3>Workshops</h3>

              <p>
                Find upcoming opportunities to learn in person.
              </p>
            </div>


            <div className="susan-path-row">
              <span>04</span>

              <h3>Online Courses</h3>

              <p>
                Learn Susan’s approach from anywhere.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMUNITY SCREENSHOT
      ====================================================== */}

      <section className="susan-editorial-feature">

        <div className="susan-editorial-copy">

          <p className="susan-case-label">
            CLEAR CHOICES
          </p>

          <h2>
            Letting visitors choose how they want to
            connect with the work.
          </h2>

          <p>
            Art collectors, print buyers, students, and
            workshop attendees each need something different.
            Instead of making people hunt through navigation,
            the site turns those opportunities into clear,
            visual entry points.
          </p>

        </div>


        <div className="susan-editorial-image">

          <img
            src="/susan-ripp/community.png"
            alt="Susan Ripp Art website section featuring original paintings, prints, and watercolor workshops"
          />

        </div>

      </section>


      {/* =====================================================
          SHOP VIDEO
      ====================================================== */}

      <section className="susan-shop-section">

        <div className="susan-shop-heading">

          <p className="susan-case-label">
            THE ART SHOP
          </p>

          <h2>
            Browsing should feel
            a little like wandering
            through a gallery.
          </h2>

          <p>
            The shop keeps the interface restrained and
            gives individual pieces enough room to breathe,
            allowing color, texture, and variety across
            Susan’s collection to become the visual focus.
          </p>

        </div>


        <div className="susan-video-browser">

          <div className="susan-browser-toolbar">

            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="susan-browser-address">
              Shop Art
            </div>

          </div>


          <video
            className="susan-shop-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Scrolling view of the Susan Ripp Art online shop"
          >
            <source
              src="/susan-ripp/shop-scroll.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </section>


      {/* =====================================================
          COURSES
      ====================================================== */}

      <section className="susan-course-feature">

        <div className="susan-course-image">

          <img
            src="/susan-ripp/courses.png"
            alt="Susan Ripp Art online watercolor courses page"
          />

        </div>


        <div className="susan-course-copy">

          <p className="susan-case-label">
            BEYOND ECOMMERCE
          </p>

          <h2>
            Making room for the teacher, not just the artist.
          </h2>

          <p>
            Susan’s teaching practice is an important part of
            the business, so online courses needed to feel like
            a natural extension of the same studio—not a separate
            product bolted onto the website.
          </p>

          <p>
            The course experience keeps Susan’s visual identity
            intact while shifting the message from
            <em> “look at the work” </em>
            to
            <em> “come make some with me.”</em>
          </p>

        </div>

      </section>


      {/* =====================================================
          MOBILE
      ====================================================== */}

      <section className="susan-mobile-section">

        <div className="susan-mobile-inner">


          <div className="susan-mobile-copy">

            <p className="susan-case-label">
              RESPONSIVE EXPERIENCE
            </p>

            <h2>
              The gallery still has to feel good in your hand.
            </h2>

            <p>
              Artwork is highly visual, but a large desktop
              composition can’t simply be squeezed onto a phone.
              Mobile layouts were designed around browsing,
              readable content, comfortable touch targets,
              and keeping the art itself prominent.
            </p>


            <div className="susan-mobile-note">

              <span>Swipe</span>
              <span>Browse</span>
              <span>Discover</span>

            </div>

          </div>


          <div className="susan-phone-stage">

            <div className="susan-phone">

              <div className="susan-phone-notch"></div>

              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Mobile view of the Susan Ripp Art website"
              >
                <source
                  src="/susan-ripp/mobile-gallery.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL DIRECTION
      ====================================================== */}

      <section className="susan-visual-direction">

        <div className="susan-visual-heading">

          <p className="susan-case-label">
            VISUAL DIRECTION
          </p>

          <h2>
            Quiet structure.
            <br />
            Expressive work.
          </h2>

          <p>
            The site uses an earthy, restrained system around
            Susan’s watercolor work: deep green typography,
            warm neutral backgrounds, and small orange accents
            that help guide attention without competing with
            the paintings.
          </p>

        </div>


        <div className="susan-palette">

          <div className="susan-color susan-color-green">
            <span>Studio Green</span>
          </div>

          <div className="susan-color susan-color-cream">
            <span>Warm Paper</span>
          </div>

          <div className="susan-color susan-color-orange">
            <span>Watercolor Orange</span>
          </div>

          <div className="susan-color susan-color-white">
            <span>Gallery White</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT INFO
      ====================================================== */}

      <section className="susan-case-info">

        <div>

          <p className="susan-case-label">
            CLIENT
          </p>

          <h3>Susan Ripp Art</h3>

          <p>
            Artist + Watercolor Educator
          </p>

        </div>


        <div>

          <p className="susan-case-label">
            MY ROLE
          </p>

          <p>Website Design</p>
          <p>Responsive Design</p>
          <p>Customer Journey Design</p>
          <p>Ecommerce Experience</p>
          <p>Content Structure</p>

        </div>


        <div>

          <p className="susan-case-label">
            EXPERIENCE
          </p>

          <p>Original Art</p>
          <p>Fine Prints</p>
          <p>Workshops + Classes</p>
          <p>Online Courses</p>
          <p>Student Community</p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="susan-case-cta">

        <p className="susan-case-label">
          HAVE SOMETHING INTERESTING TO BUILD?
        </p>

        <h2>
          Your website doesn’t have to fit neatly
          into a template.
        </h2>

        <p>
          If your business has a few moving parts,
          that’s okay. We can figure out how they belong
          together.
        </p>

        <a
          href="/#contact"
          className="susan-case-button"
        >
          Start a Project
          <span aria-hidden="true">↗</span>
        </a>

      </section>


      {/* FOOTER */}
      <footer className="case-study-footer susan-case-footer">

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