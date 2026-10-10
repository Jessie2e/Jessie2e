import StudioFooter from './components/StudioFooter';
import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import { PROJECT_TIERS, CARE_PLANS } from './packages';
import ProjectInquiry from './components/ProjectInquiry';
export default function App() {
  const [isBirdFlying, setIsBirdFlying] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hideMobileCta, setHideMobileCta] = useState(false);

useEffect(() => {
  const form = document.getElementById("project-form");
  const footer = document.querySelector("footer");

  if (!form || !footer) return;

  const visibleSections = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target);
        } else {
          visibleSections.delete(entry.target);
        }
      });

      setHideMobileCta(visibleSections.size > 0);
    },
    {
      threshold: 0.08,
    }
  );

  observer.observe(form);
  observer.observe(footer);

  return () => observer.disconnect();
}, []);


  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateScrollProgress = () => {
      const scrollableHeight = root.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
        : 0;

      root.style.setProperty('--scroll-progress', progress);
    };

    const revealGroups = [
      ['.work-heading > *', ''],
      ['.featured-project-visual', 'reveal-scale'],
      ['.featured-project-copy', 'reveal-from-right'],
      ['.why-2e-header > *', ''],
      ['.why-2e-item', 'reveal-from-left'],
      ['.about-kicker', ''],
      ['.about-jessie-visual', 'reveal-from-left'],
      ['.about-jessie-content', 'reveal-from-right'],
      ['.about-capabilities', ''],
      ['.contact-editorial-copy', 'reveal-from-left'],
      ['.contact-form-card', 'reveal-from-right'],
    ];

    const revealTargets = [];

    revealGroups.forEach(([selector, variant]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add('reveal-on-scroll');

        if (variant) {
          element.classList.add(variant);
        }

        element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 70}ms`);
        revealTargets.push(element);
      });
    });

    let observer;

    if (prefersReducedMotion) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.13,
          rootMargin: '0px 0px -8% 0px',
        }
      );

      revealTargets.forEach((element) => observer.observe(element));
    }

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      observer?.disconnect();
      root.style.removeProperty('--scroll-progress');
    };
  }, []);


  // About bird: trigger only once the portrait is well into view
  useEffect(() => {
    const aboutVisual = document.querySelector('.about-jessie-visual');

    if (!aboutVisual) return;

    const birdObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutVisual.classList.add('bird-active');
          birdObserver.unobserve(aboutVisual);
        }
      },
      {
        threshold: 0.42,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    birdObserver.observe(aboutVisual);

    return () => birdObserver.disconnect();
  }, []);


  useEffect(() => {
    const section = document.querySelector('.why-2e');
    const experience = document.querySelector('.why-2e-experience');

    if (!section || !experience) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    section.style.overflowX = 'hidden';

    if (prefersReducedMotion) {
      experience.style.transform = 'none';

      return () => {
        section.style.overflowX = '';
        experience.style.transform = '';
      };
    }

    let animationFrame = null;

    const updateExperienceScroll = () => {
      const rect = experience.getBoundingClientRect();

      const isMobile = window.innerWidth <= 720;

const startPoint = window.innerHeight * (isMobile ? 0.75 : 1.05);
const endPoint = window.innerHeight * -0.52;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (startPoint - rect.top) / (startPoint - endPoint)
        )
      );

      const startX = window.innerWidth * 0.25;
const endX = -(window.innerWidth * 0.8 + experience.offsetWidth);      const x = startX + (endX - startX) * progress;

      experience.style.transform = `translate3d(${x}px, 0, 0)`;
      experience.style.willChange = 'transform';
    };

    const requestUpdate = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(updateExperienceScroll);
    };

    updateExperienceScroll();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      section.style.overflowX = '';
      experience.style.transform = '';
      experience.style.willChange = '';
    };
  }, []);


  const triggerBirdEasterEgg = () => {
    if (!isBirdFlying) {
      setIsBirdFlying(true);
      setTimeout(() => setIsBirdFlying(false), 4000);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setIsNavOpen(false);
    triggerBirdEasterEgg();
  };

  return (
    <>


      <div className="scroll-progress" aria-hidden="true" />
      <CustomCursor />

      <img
        src="/about/bird-flying.png"
        className={`easter-egg-bird ${isBirdFlying ? 'fly-across' : ''}`}
        alt=""
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="navbar">
  <div
    className="nav-logo-container"
    onClick={handleLogoClick}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleLogoClick();
      }
    }}
    role="button"
    tabIndex={0}
    title="Back to top"
    aria-label="2e Studio — back to top"
  >
    <img
      src="/2elogo.svg"
      className="nav-logo"
      alt="2e Studio bird logo"
    />
    <span>2e Studio</span>
  </div>

  <button
    type="button"
    className={`nav-toggle ${isNavOpen ? "open" : ""}`}
    onClick={() => setIsNavOpen((open) => !open)}
    aria-label="Toggle navigation"
    aria-expanded={isNavOpen}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <ul className={`nav-links ${isNavOpen ? "nav-links-open" : ""}`}>
    <li>
      <details className="nav-work-menu" onKeyDown={e => {if(e.key === 'Escape') e.currentTarget.open=false;}} onBlur={e => {if(!e.currentTarget.contains(e.relatedTarget)) e.currentTarget.open=false;}}>
        <summary>Work <span aria-hidden="true">⌄</span></summary>
        <div className="nav-work-projects">
          <a href="#portfolio" onClick={e => {setIsNavOpen(false);e.currentTarget.closest('details').open=false;}}>All selected work ↗</a>
          {[['sarah-pickett','Sarah Pickett'],['in-the-woods','In The Woods'],['soda-stop-concept','The Soda Stop'],['susan-ripp','Susan Ripp Art'],['eryn-davis','Eryn Davis']].map(([slug,name]) => <a key={slug} href={`/work/${slug}`} onClick={() => setIsNavOpen(false)}>{name}</a>)}
        </div>
      </details>
    </li>
    <li><a href="/resources" onClick={() => setIsNavOpen(false)}>Resources</a></li>
    <li>
      <a href="#about" onClick={() => setIsNavOpen(false)}>
        About
      </a>
    </li>
    <li>
  <a
    href="#contact"
    className="nav-cta"
    onClick={() => setIsNavOpen(false)}
  >
    Get Started
  </a>
</li>
  </ul>
</nav>

  {/* Hero */}
<section id="home" className="studio-hero">
  <div className="studio-hero-inner">

    {/* LEFT — COPY */}
    <div className="studio-hero-copy">

      <p className="studio-hero-eyebrow">
        <span className="studio-hero-dot"></span>
        Independent Web Design + Digital Studio
      </p>

      <h1 className="studio-hero-title">
  <span>Good businesses</span>
  <span><strong className="hero-deserve">deserve</strong> better</span>
  <span>websites.</span>
</h1>

      <p className="studio-hero-description">
        2e Studio designs and builds custom websites for small
        businesses, artists, and people doing interesting work—
        combining strong visual direction with the practical thinking
        that helps turn visitors into customers.
      </p>

      <div className="studio-hero-founder">
        <span className="studio-hero-founder-line"></span>

        <p>
          <strong>2e Studio</strong> by Jessie Towey
          <span> — pronounced “two-ee.”</span>
        </p>
      </div>

      <div className={`studio-hero-actions ${!hideMobileCta ? "studio-hero-actions-floating" : ""}`}>

        <a
          href="#portfolio"
          className="studio-hero-button studio-hero-button-primary"
        >
          See the Work
          <span aria-hidden="true">↘</span>
        </a>

        <a
          href="#contact"
          className="studio-hero-text-link"
        >
          Start a Project
          <span aria-hidden="true">↗</span>
        </a>

      </div>



    </div>


    {/* RIGHT — ART */}
    {/* RIGHT — WORK PREVIEW */}
<div className="hero-work-preview">

  <p className="hero-work-caption">
    A few things I’ve made
    <span aria-hidden="true">↘</span>
  </p>


  {/* SUSAN RIPP — BACK CARD */}
  <a
  href="/work/susan-ripp"
  className="hero-project-window hero-project-susan"
  aria-label="View Susan Ripp Art project"
>

  <div className="hero-window-bar">

    <div className="hero-window-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>

  <div className="hero-susan-real-preview">

    <img
      src="/susan-ripp/hero.png"
      alt=""
      aria-hidden="true"
    />

  </div>

</a>


  {/* THE SODA STOP — CONCEPT CARD */}
  <a
  href="/work/soda-stop-concept"
  className="hero-project-window hero-project-soda"
  aria-label="View The Soda Stop concept design"
>

  <div className="hero-window-bar">

    <div className="hero-window-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>

  <div className="hero-soda-real-preview">

    <img
      src="/sodastop/sodastop-cover.png"
      alt=""
      aria-hidden="true"
    />

  </div>

</a>


  {/* IN THE WOODS — MAIN CARD */}
  <a
    href="/work/sarah-pickett"
    className="hero-project-window hero-project-main"
    aria-label="View Sarah Pickett Voice & Speech Services case study"
  >

    <div className="hero-window-bar">

      <div className="hero-window-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p>
        sarahpickettvoice.com
      </p>

    </div>

    <div className="hero-main-screen">
      <img
        src="/sarahpickettvoice/web/sarahpicketthero.webp"
        alt="Sarah Pickett Voice & Speech Services website"
      />
    </div>

  </a>


  <div className="hero-work-mini-label">
    <span>Web Design</span>
    <span>Development</span>
    <span>Visual Direction</span>
  </div>

</div>

  </div>

  <a
    href="#portfolio"
    className="studio-hero-scroll"
    aria-label="Scroll to selected work"
  >
    <span>Selected Work</span>
    <span aria-hidden="true">↓</span>
  </a>
</section>

      {/* Portfolio */}
<section id="portfolio" className="work-section">
  <div className="work-inner">

    <div className="work-feature-row">

    <div className="work-heading">
      <p className="work-kicker">Selected Work · 01—05</p>

      <h2>
        Built around the business.
        <br />
        Not the template.
      </h2>

      <p className="work-intro">
        Client work and concept projects both start with personality,
        the people they need to reach, and what the website actually needs to do.
      </p>
    </div>

    {/* Mobile portfolio layout: keep the desktop feature, but on phones
        place every project in one swipeable carousel. */}
    <style>{`
      .mobile-carousel-inwoods {
        display: none;
      }

      .mobile-inwoods-visual {
        position: relative;
        height: 330px;
        padding: 18px;
        overflow: hidden;
        background: #f4f1ea;
      }

      .mobile-inwoods-visual img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        border-radius: 12px;
      }

      /* Laptop / desktop only:
         featured project on the left, section intro on the right */
      @media (min-width: 1050px) {
        .work-feature-row {
          display: grid;
          grid-template-columns:
            minmax(0, 1.28fr)
            minmax(340px, 0.72fr);
          align-items: center;
          gap: clamp(42px, 5vw, 78px);
          margin-bottom: 72px;
        }

        .work-feature-row .work-heading {
          grid-column: 2;
          grid-row: 1;
          max-width: 440px;
          margin: 0;
          justify-self: end;
        }

        .work-feature-row .work-heading h2 {
          font-size: clamp(3.15rem, 4.3vw, 4.85rem);
        }

        .work-feature-row .work-intro {
          max-width: 430px;
          font-size: 1rem;
          line-height: 1.65;
        }

        .work-feature-row .desktop-featured-project {
          grid-column: 1;
          grid-row: 1;
          grid-template-columns:
            minmax(0, 1.18fr)
            minmax(185px, 0.82fr);
          gap: 28px;
          min-width: 0;
          padding: 32px;
        }

        .work-feature-row
        .desktop-featured-project
        .featured-project-copy h3 {
          margin-bottom: 16px;
          font-size: clamp(2.15rem, 2.8vw, 3rem);
        }

        .work-feature-row
        .desktop-featured-project
        .featured-project-copy > p {
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .work-feature-row
        .desktop-featured-project
        .project-meta-row {
          gap: 10px;
          margin-bottom: 14px;
        }
      }

      @media (max-width: 720px) {
        .desktop-featured-project {
          display: none;
        }

        .mobile-carousel-inwoods {
          display: block;
        }

        .mobile-inwoods-visual {
          height: auto;
          min-height: 0;
          padding: 12px;
        }

        .mobile-inwoods-visual img {
          height: auto;
          max-height: 185px;
        }
      }
    `}</style>


    {/* FEATURED PROJECT */}
    <article className="featured-project desktop-featured-project">
      <header className="featured-project-heading">

        <div className="project-meta-row">
          <span className="project-number">01</span>
          <span className="project-type">
            Website Design + Development
          </span>
        </div>

        <h3>
          Sarah Pickett · Voice & Speech Services
        </h3>

      </header>


      <a className="featured-project-visual featured-project-preview-link" href="/work/sarah-pickett" aria-label="View Sarah Pickett Voice & Speech Services case study">
        <div className="project-browser">

          <div className="project-browser-bar">
            <span></span>
            <span></span>
            <span></span>

            <div className="project-browser-url">
              sarahpickettvoice.com
            </div>
          </div>

          <div className="project-browser-screen">
            <img
              src="/sarahpickettvoice/web/sarahpicketthero.webp"
              alt="Sarah Pickett Voice & Speech Services website"
            />
          </div>

        </div>
        <div className="featured-project-status">
  Live Site
</div>
      </a>


      <div className="featured-project-copy">
        <p>
          A first website for a voice and speech-language pathology practice
          in Huntsville and Madison, Alabama—designed to build trust,
          explain services, and make appointment requests simple.
        </p>

        <div className="work-tags">
          <span>Web Design</span>
          <span>Development</span>
          <span>Responsive Design</span>
        </div>

        <a
          href="/work/sarah-pickett"
          className="work-link"
        >
          View Case Study
          <span aria-hidden="true">↗</span>
        </a>

      </div>

    </article>

    </div>


    <div className="portfolio-manual-controls" role="group" aria-label="Browse portfolio projects"><button aria-label="Previous project" onClick={() => document.querySelector('.secondary-work-grid').scrollBy({left:-document.querySelector('.secondary-work-grid').clientWidth*.85,behavior:'smooth'})}>←</button><button aria-label="Next project" onClick={() => document.querySelector('.secondary-work-grid').scrollBy({left:document.querySelector('.secondary-work-grid').clientWidth*.85,behavior:'smooth'})}>→</button></div>
    {/* SECONDARY PROJECTS */}
    <div className="secondary-work-grid" role="region" aria-label="Selected projects" tabIndex="0" onKeyDown={event => {
      if (event.target !== event.currentTarget || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      event.currentTarget.scrollBy({ left: event.currentTarget.clientWidth * (event.key === 'ArrowRight' ? .8 : -.8), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }}>
      {/* IN THE WOODS — MOBILE FIRST CARD */}
      <article className="secondary-project portfolio-inwoods">

        <a className="project-preview-link" href="/work/in-the-woods" aria-label="View In The Woods Dog Training case study"><div className="secondary-project-art project-preview-visual">
          <div className="project-status-badge">
            Live Site
          </div>

          <img
            src="/inthewoods/cover.png"
            alt="In The Woods Dog Training website"
          />
        </div></a>

        <div className="secondary-project-copy">
          <div className="project-meta-row">
            <span className="project-number">02</span>

            <span className="project-type">
              Website Design + Development
            </span>
          </div>

          <h3>In The Woods Dog Training</h3>

          <p>
            A warm, approachable website for an Alabama dog-training
            business—designed to explain services clearly, earn trust
            quickly, and make getting started feel simple.
          </p>

          <div className="work-tags">
            <span>Web Design</span>
            <span>Development</span>
            <span>Responsive Design</span>
          </div>

          <a
            href="/work/in-the-woods"
            className="work-link"
          >
            View Case Study
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </article>


      {/* THE SODA STOP — CONCEPT PROJECT */}
      <article className="secondary-project">

        <a className="project-preview-link" href="/work/soda-stop-concept" aria-label="View The Soda Stop case study"><div className="secondary-project-art soda-project-visual">

  <div className="project-status-badge">
    Concept Project
  </div>

  <img
    src="/sodastop/sodastop-cover.png"
    alt="The Soda Stop concept website homepage"
  />

</div></a>

        <div className="secondary-project-copy">

          <div className="project-meta-row">
            <span className="project-number">03</span>

            <span className="project-type">
              Concept Soda Shop Design
            </span>
          </div>

          <h3>The Soda Stop</h3>

          <p>
            A fictional Smith Lake-area soda-shop concept showing how a custom
            website can turn a small business' personality, menu, and
            customer experience into a memorable digital brand.
          </p>

          <div className="work-tags">
            <span>Brand Direction</span>
            <span>Web Design</span>
            <span>Development</span>
          </div>

          <a
  href="/work/soda-stop-concept"
  className="work-link"
>
  View Concept
  <span aria-hidden="true">↗</span>
</a>

        </div>

      </article>


  {/* SUSAN RIPP ART */}
<article className="secondary-project">

  <a className="project-preview-link" href="/work/susan-ripp" aria-label="View Susan Ripp Art case study"><div className="secondary-project-art susan-project-visual">

  <div className="project-status-badge">
    In Development
  </div>

  <img
    src="/susan-ripp/hero.png"
    alt="Susan Ripp Art website featuring original paintings, prints, and watercolor workshops"
  />

</div></a>

  <div className="secondary-project-copy">

    <div className="project-meta-row">
      <span className="project-number">04</span>

      <span className="project-type">
        Artist Portfolio + Website
      </span>
    </div>

    <h3>Susan Ripp Art</h3>

    <p>
      A visual-first website designed to let the artwork take center
      stage while giving visitors an easy way to discover the artist,
      explore her work, and get in touch.
    </p>

    <div className="work-tags">
      <span>Web Design</span>
      <span>Art Direction</span>
      <span>Responsive Design</span>
    </div>

    <a
  href="/work/susan-ripp"
  className="work-link"
>
  View Case Study
  <span aria-hidden="true">↗</span>
</a>

  </div>

</article>


      {/* ERYN DAVIS */}
      <article className="secondary-project">

        <a className="project-preview-link" href="/work/eryn-davis" aria-label="View Eryn Davis case study"><div className="secondary-project-art eryn-project-visual">
          <div className="project-status-badge">
            In Development
          </div>

          <img
            src="/eryn-davis/eryn-davis-cover.webp"
            alt="Eryn Davis live entertainer website homepage"
          />
        </div></a>

        <div className="secondary-project-copy">
          <div className="project-meta-row">
            <span className="project-number">05</span>

            <span className="project-type">
              Performer Website + Booking UX
            </span>
          </div>

          <h3>Eryn Davis</h3>

          <p>
            A bold, high-energy performer website built to capture the
            personality of the live show while making dates, performance
            options, and booking easy to navigate.
          </p>

          <div className="work-tags">
            <span>Web Design</span>
            <span>Booking UX</span>
            <span>Interactive Design</span>
          </div>

          <a
            href="/work/eryn-davis"
            className="work-link"
          >
            View Case Study
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </article>

    </div>

  </div>
</section>

{/* Why 2e */}
<section id="services" className="why-2e">

  <div className="why-2e-inner">

    <div className="why-2e-header">

      <div>
        <p className="why-2e-kicker">
          Why 2e
        </p>

        <h2>
          Pretty is good.
          <br />
          <span>Useful is better.</span>
        </h2>
      </div>

      <div className="why-2e-intro">

        <p className="why-2e-lead">
          Whether you’re starting from scratch, refreshing what
          you already have, or adding something new, I start with
          what the business actually needs the website to do.
        </p>

        <p>
          That means thinking about what customers need to understand,
          where they might get stuck, what they should do next—and
          what happens on your side once they do.
        </p>

      </div>

    </div>


    <div className="why-2e-grid">

      <article className="why-2e-item">

        <span className="why-2e-number">
          01
        </span>

        <div>
          <h3>Customer-first</h3>

          <p>
            The site should make sense to the person using
            it—not just the person who built it.
          </p>
        </div>

      </article>


      <article className="why-2e-item">

        <span className="why-2e-number">
          02
        </span>

        <div>
          <h3>Business-aware</h3>

          <p>
            A form, booking, purchase, or inquiry creates
            work on the other side. I think about that part,
            too.
          </p>
        </div>

      </article>


      <article className="why-2e-item">

        <span className="why-2e-number">
          03
        </span>

        <div>
          <h3>Built to be used</h3>

          <p>
            Clear structure, thoughtful mobile design, and
            useful features without piling on technology
            your business doesn't need.
          </p>
        </div>

      </article>

    </div>


    <div className="why-2e-experience">

      <div className="why-2e-big-number">
        10+
      </div>

      <p>
        <strong>years inside customer experience + operations</strong>
        <span>
          before bringing that thinking into design and development.
        </span>
      </p>

    </div>

  </div>

</section>

    {/* About */}
<section id="about" className="about-editorial">

  <div className="about-editorial-inner">

    <p className="about-kicker">
      Behind 2e Studio
    </p>


    <div className="about-jessie-grid">


      {/* IMAGE + ANIMATED BIRD */}
      <div className="about-jessie-visual">

        <div className="about-character-stage">
          <img
            src="/about/jessie-portrait.png"
            className="about-jessie-image"
            alt="Illustrated portrait of Jessie Towey"
          />

          <div className="about-bird-flight" aria-hidden="true">
            <img
              src="/about/bird-flying.png"
              className="about-bird-flying"
              alt=""
            />
          </div>
        </div>

        <p className="about-jessie-caption">
          Designer · Developer · Problem-Solver
        </p>

      </div>


      {/* COPY */}
      <div className="about-jessie-content">

        <h2>
          Hi, I’m Jessie.
          <br />
          I like making
          complicated things
          feel simple.
        </h2>


        <div className="about-jessie-copy">

          <p className="about-editorial-lead">
            I’m the designer, developer, and problem-solver
            behind 2e Studio.
          </p>

          <p>
            My background isn’t the traditional agency route.
            Before building websites, I spent years working
            in customer experience and operations—leading
            teams, improving processes, working with data,
            and figuring out why things weren’t working the
            way they should.
          </p>

          <p>
            Eventually I realized the part I loved most was
            the same part I love about web design: taking
            something messy, understanding the real problem,
            and turning it into something clearer, easier,
            and better to use.
          </p>

          <p>
            That’s what I bring to every project now.
            Good design matters. So does personality.
            But the best website is one that feels like
            your business <em>and</em> actually helps it work.
          </p>

        </div>

      </div>

    </div>


    <div className="about-capabilities">

      <span>Design</span>
      <span>Front-End Development</span>
      <span>Responsive Web</span>
      <span>Simple Visual Identity</span>
      <span>Customer Experience</span>
      <span>Digital Problem-Solving</span>

    </div>

  </div>

</section>

{/* Build Your Site / Project Intake */}
<section id="contact" className="contact-editorial builder-section">

  <div className="contact-editorial-inner">

    {/* LEFT — PRICING + EXPLANATION */}
    <div className="contact-editorial-copy">

      <p className="contact-kicker">
        Pricing + Website Care
      </p>

      <h2>
        Let’s make
        <br />
        something good.
      </h2>

      <p className="contact-editorial-intro">
        One clear price for your website build, with managed care available after launch.
        Your scope sets the price: pages, content, and features. Tell me what you have in mind, and I’ll recommend a scope with a clear quote.
      </p>

      <div className="builder-price-guide" aria-label="Typical website pricing">
        {Object.values(PROJECT_TIERS).map(tier => (
          <div className="builder-price-guide-card" key={tier.key}>
            <div className="builder-price-card-main">
              <div><span>{tier.label}</span><small>{tier.description}</small></div>
              <strong>{tier.range}</strong>
            </div>
          </div>
        ))}
      </div>

      <details className="builder-price-details package-explainer">
        <summary>Pages, sections, and what your build includes</summary>
        <p>A page has its own address, like /about. A homepage can contain About, Services, and FAQ sections and still count as one page. A fuller About page is an additional page because it needs its own layout and testing. Long pages and complex features can also take more work.</p>
        <p>Every agreed build includes phone, tablet, and desktop layouts; two consolidated revision rounds; launch setup; source files and an account summary; and 30 days of fixes for defects in the delivered work. The payment schedule is 50% to book and 50% before launch.</p>
        <p>Domains, paid tools, copywriting, and features beyond the agreed scope are listed separately in your quote. The range is a guide; your signed project agreement sets the final price.</p>
      </details>

      <div className="website-care-block" aria-label="Website care plans">
        <div className="website-care-heading">
          <p className="website-care-eyebrow">After launch</p>
          <h3>Keep your website in good hands.</h3>
          <p>Let me manage your hosting and routine changes, so you have one person to contact when something needs updating.</p>
        </div>
        <div className="website-care-grid">
          {CARE_PLANS.map(plan => (
            <div className="website-care-card" key={plan.value}>
              <div className="website-care-card-top">
                <strong>{plan.label}</strong><b>${plan.monthly}<span>/mo</span></b>
              </div>
              <p>{plan.description} Text, photos, hours, prices, and links on existing pages.</p>
              <p className="care-prepaid">Or ${plan.prepaid} prepaid for six months.</p>
              <details className="builder-price-details">
                <summary>See examples and response times</summary>
                <p>{plan.value === 'fresh' ? 'A batch might replace a few photos and update opening hours, within the 30-minute allowance.' : 'Two batches might update service prices early in the month and refresh a seasonal announcement later, within the 60-minute allowance.'} I respond within {plan.responseDays} business days to acknowledge your request and schedule the work. This is a response target, not a completion deadline.</p>
              </details>
            </div>
          ))}
        </div>
        
        
        <a className="care-learn-more" href="/website-care"><span><strong>Website care, ownership & handoff</strong><small>See what’s included, how updates work, and what you own.</small></span><span aria-hidden="true">↗</span></a>
      </div>

    </div>


    {/* RIGHT — PROJECT INQUIRY */}
    <ProjectInquiry />
  </div>

<div className="contact-tail"><a href="mailto:jessietowey@gmail.com">Prefer email? <span>jessietowey@gmail.com</span> ↗</a><p>Based near Smith Lake in Alabama · Working with businesses anywhere.</p></div>

</section>

      {/* Footer */}
      <StudioFooter />

      <a
  href="#project-form"
  className={`mobile-project-cta ${hideMobileCta ? "mobile-project-cta-hidden" : ""}`}
>
  Start a Project
  <span aria-hidden="true">↗</span>
</a>
    </>
  );
}