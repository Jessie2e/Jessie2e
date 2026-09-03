import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isBirdFlying, setIsBirdFlying] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const triggerBirdEasterEgg = () => {
    if (!isBirdFlying) {
      setIsBirdFlying(true);
      setTimeout(() => setIsBirdFlying(false), 4000);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState((previousState) => ({
      ...previousState,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const currentErrors = {};

    if (!formState.name.trim()) {
      currentErrors.name = 'Name is required.';
    }

    if (!formState.email.trim()) {
      currentErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      currentErrors.email = 'Please provide a valid email address.';
    }

    if (!formState.projectType) {
      currentErrors.projectType = 'Please select a project category.';
    }

    if (!formState.message.trim()) {
      currentErrors.message = 'Please tell me a little about your project.';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch("https://formspree.io/f/xdeozrrz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        projectType: formState.projectType,
        message: formState.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Form submission failed.");
    }

    setIsSubmitted(true);

    setFormState({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 6000);
  } catch (error) {
    console.error(error);
    alert(
      "Something went wrong sending your message. Please email me directly at jessietowey@gmail.com."
    );
  }
};

  return (
    <>
      <CustomCursor />

      <img
        src="/2elogo.svg"
        className={`easter-egg-bird ${isBirdFlying ? 'fly-across' : ''}`}
        alt=""
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="navbar">
  <div
    className="nav-logo-container"
    onClick={triggerBirdEasterEgg}
    title="Click the bird!"
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
      <a href="#home" onClick={() => setIsNavOpen(false)}>
        Home
      </a>
    </li>
    <li>
      <a href="#portfolio" onClick={() => setIsNavOpen(false)}>
        Work
      </a>
    </li>
    <li>
      <a href="#services" onClick={() => setIsNavOpen(false)}>
        Services
      </a>
    </li>
    <li>
      <a href="#about" onClick={() => setIsNavOpen(false)}>
        About
      </a>
    </li>
    <li>
      <a href="#contact" onClick={() => setIsNavOpen(false)}>
        Contact
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
  <span>deserve better</span>
  <span>websites.</span>
</h1>

      <p className="studio-hero-description">
        2e Studio designs and builds custom websites for small
        businesses, artists, and people doing interesting work—
        combining strong visual direction with the practical thinking
        that helps turn visitors into customers.
      </p>

      <div className="studio-hero-actions">

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

      <div className="studio-hero-founder">
        <span className="studio-hero-founder-line"></span>

        <p>
          <strong>2e Studio</strong> by Jessie Towey
          <span> — pronounced “two-ee.”</span>
        </p>
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


  {/* SODA SHOP — BACK CARD */}
  <a
  href="/work/soda-shop-41"
  className="hero-project-window hero-project-soda"
  aria-label="View Soda Shop 41 project"
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
      src="/soda-shop-41/hero.png"
      alt=""
      aria-hidden="true"
    />

  </div>

</a>


  {/* IN THE WOODS — MAIN CARD */}
  <a
    href="/work/in-the-woods"
    className="hero-project-window hero-project-main"
    aria-label="View In The Woods Dog Training case study"
  >

    <div className="hero-window-bar">

      <div className="hero-window-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p>
        inthewoodsdogtraining.com
      </p>

    </div>

    <div className="hero-main-screen">
      <img
        src="/inthewoods/cover.png"
        alt="In The Woods Dog Training website"
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

    <div className="work-heading">
      <p className="work-kicker">Selected Work · 01—03</p>

      <h2>
        Built around the business.
        <br />
        Not the template.
      </h2>

      <p className="work-intro">
        Every project starts with the personality of the business,
        the people it serves, and what the website actually needs to do.
      </p>
    </div>


    {/* FEATURED PROJECT */}
    <article className="featured-project">

      <div className="featured-project-visual">
        <div className="project-browser">

          <div className="project-browser-bar">
            <span></span>
            <span></span>
            <span></span>

            <div className="project-browser-url">
              inthewoodsdogtraining.com
            </div>
          </div>

          <div className="project-browser-screen">
            <img
              src="/inthewoods/cover.png"
              alt="In The Woods Dog Training website"
            />
          </div>

        </div>
        <div className="featured-project-status">
  Live Site
</div>
      </div>


      <div className="featured-project-copy">

        <div className="project-meta-row">
          <span className="project-number">01</span>
          <span className="project-type">
            Website Design + Development
          </span>
        </div>

        <h3>
          In The Woods
          <br />
          Dog Training
        </h3>

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


    {/* SECONDARY PROJECTS */}
    <div className="secondary-work-grid">


      {/* SODA SHOP 41 */}
      <article className="secondary-project">

        <div className="secondary-project-art soda-project-visual">

  <div className="project-status-badge">
    In Development
  </div>

  <img
    src="/soda-shop-41/hero.png"
    alt="Soda Shop 41 website homepage"
  />

</div>

        <div className="secondary-project-copy">

          <div className="project-meta-row">
            <span className="project-number">02</span>

            <span className="project-type">
              Website + Visual Identity
            </span>
          </div>

          <h3>Soda Shop 41</h3>

          <p>
            A playful roadside-inspired digital identity and website
            designed to capture the personality of a local Smith Lake
            favorite.
          </p>

          <div className="work-tags">
            <span>Brand Direction</span>
            <span>Web Design</span>
            <span>Development</span>
          </div>

          <a
  href="/work/soda-shop-41"
  className="work-link"
>
  View Case Study
  <span aria-hidden="true">↗</span>
</a>

        </div>

      </article>


  {/* SUSAN RIPP ART */}
<article className="secondary-project">

  <div className="secondary-project-art susan-project-visual">

  <div className="project-status-badge">
    In Development
  </div>

  <img
    src="/susan-ripp/community.png"
    alt="Susan Ripp Art website featuring original paintings, prints, and watercolor workshops"
  />

</div>

  <div className="secondary-project-copy">

    <div className="project-meta-row">
      <span className="project-number">03</span>

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

    </div>

  </div>
</section>

     {/* Services */}
<section id="services" className="services-editorial">

  <div className="services-editorial-inner">

    {/* HEADER */}
    <div className="services-editorial-header">

      <div>
        <p className="services-kicker">
          How I Can Help
        </p>

        <h2>
          What do you need
          <br />
          your website to do?
        </h2>
      </div>

      <div className="services-header-copy">
        <p>
          Not every business needs the same website. I design around what’s actually useful—whether you’re starting from scratch, improving what you already have, or adding the pieces that make the whole experience work better. Based near Smith Lake in Arley, Alabama, 2e Studio creates affordable custom websites for small businesses, artists, and independent brands across North Alabama, including Cullman, Jasper, and Birmingham.
        </p>
      </div>

    </div>


    {/* SERVICE 01 */}
    <article className="service-editorial-row">

      <div className="service-editorial-number">
        01
      </div>

      <div className="service-editorial-title">

        <p className="service-small-label">
          Start Fresh
        </p>

        <h3>
          Custom
          <br />
          Websites
        </h3>

      </div>

      <div className="service-editorial-content">

        <p className="service-editorial-lead">
          A website built around your business—not
          squeezed into a template.
        </p>

        <p>
          For small businesses, artists, and independent
          brands that need a thoughtful online home from
          the ground up. I handle the structure, visual
          direction, responsive design, and development
          so everything feels like it belongs together.
        </p>

        <div className="service-editorial-tags">
          <span>Strategy</span>
          <span>Web Design</span>
          <span>Development</span>
          <span>Mobile</span>
          <span>Launch</span>
        </div>

      </div>

    </article>


    {/* SERVICE 02 */}
    <article className="service-editorial-row service-editorial-row-featured">

      <div className="service-editorial-number">
        02
      </div>

      <div className="service-editorial-title">

        <p className="service-small-label">
          Make It Better
        </p>

        <h3>
          Website
          <br />
          Refreshes
        </h3>

      </div>

      <div className="service-editorial-content">

        <p className="service-editorial-lead">
          Already have a website?
          Let’s fix what isn’t working.
        </p>

        <p>
          Maybe it feels dated. Maybe it’s confusing on
          mobile. Maybe the business has changed and the
          website hasn’t. We can keep what works, rethink
          what doesn’t, and give the whole experience a
          clearer point of view.
        </p>

        <div className="service-editorial-tags">
          <span>Redesign</span>
          <span>UX Improvements</span>
          <span>Responsive Design</span>
          <span>Content Structure</span>
        </div>

      </div>

    </article>


    {/* SERVICE 03 */}
    <article className="service-editorial-row">

      <div className="service-editorial-number">
        03
      </div>

      <div className="service-editorial-title">

        <p className="service-small-label">
          Beyond the Homepage
        </p>

        <h3>
          Digital Tools
          <br />
          + Extras
        </h3>

      </div>

      <div className="service-editorial-content">

        <p className="service-editorial-lead">
          The useful stuff that makes a website do
          more than just look good.
        </p>

        <p>
          Booking flows, online ordering, forms,
          customer tools, simple ecommerce, automations,
          and other practical additions that make things
          easier for your customers—and often easier for
          you, too.
        </p>

        <div className="service-editorial-tags">
          <span>Booking</span>
          <span>Ordering</span>
          <span>Forms</span>
          <span>Ecommerce</span>
          <span>Automation</span>
          <span>Custom Tools</span>
        </div>

      </div>

    </article>


    {/* BRAND / LOGO ADD-ON */}
    <div className="service-brand-addon">

      <div className="service-brand-mark" aria-hidden="true">
        Aa
      </div>

      <div className="service-brand-addon-copy">

        <p className="service-small-label">
          Need the look, too?
        </p>

        <h3>
          Simple logos + visual direction.
        </h3>

        <p>
          If your business doesn’t have a usable visual
          identity yet, I can create a simple logo,
          color palette, typography direction, and basic
          visual elements so your website has a cohesive
          place to start.
        </p>

      </div>

      <div className="service-brand-details">
        <span>Logo</span>
        <span>Color</span>
        <span>Type</span>
        <span>Web Assets</span>
      </div>

    </div>


    {/* FOOTER CTA */}
    <div className="services-editorial-cta">

      <p>
        <strong>Not sure what you need?</strong>
        Tell me what isn’t working.
        I can help figure out the rest.
      </p>

      <a href="#contact">
        Start a conversation
        <span aria-hidden="true">↗</span>
      </a>

    </div>

  </div>

</section>

{/* Why 2e */}
<section className="why-2e">

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
          I came to web design through customer experience
          and operations—which means I tend to notice the
          things that happen after someone says,
          “this looks nice.”
        </p>

        <p>
          I think about what customers need to understand,
          where they may get stuck, what action they should
          take next, and what happens on the business side
          once they do.
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
        7+
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


      {/* IMAGE */}
      <div className="about-jessie-visual">

        <img
          src="/jessiehero.png"
          className="about-jessie-image"
          alt="Jessie Towey holding the digital bird symbol of 2e Studio"
        />

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

{/* Contact */}
<section id="contact" className="contact-editorial">

  <div className="contact-editorial-inner">


    {/* LEFT */}
    <div className="contact-editorial-copy">

      <p className="contact-kicker">
        Let’s Make Something Useful
      </p>

      <h2>
        Have a business
        <br />
        that deserves a
        <br />
        better website?
      </h2>

      <p className="contact-editorial-intro">
        Tell me what you’re working on, what isn’t working,
        or even just what you wish your website could do.
        You don’t need to know the technical solution yet.
      </p>


      <a
        href="mailto:jessietowey@gmail.com"
        className="contact-direct-email"
      >
        jessietowey@gmail.com
        <span aria-hidden="true">↗</span>
      </a>


      <p className="contact-small-note">
        Birmingham, Alabama · Working with businesses anywhere.
      </p>

    </div>


    {/* RIGHT */}
    <div className="contact-form-card">

      <div className="contact-form-heading">

        <span>Project Inquiry</span>

        <span className="contact-form-dot"></span>

      </div>


      {isSubmitted && (

        <div className="success-alert">
          <strong>Message sent!</strong>
           Thanks for reaching out. I’ll get back to you as soon as I can.
          </div>

          )}


      <form
        className="contact-form contact-form-editorial"
        onSubmit={handleSubmit}
        noValidate
      >

        <div className="form-group">

          <label htmlFor="name">
            Your Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Jane Smith"
            value={formState.name}
            onChange={handleInputChange}
          />

          {errors.name && (
            <span className="error-txt">
              {errors.name}
            </span>
          )}

        </div>


        <div className="form-group">

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="jane@yourbusiness.com"
            value={formState.email}
            onChange={handleInputChange}
          />

          {errors.email && (
            <span className="error-txt">
              {errors.email}
            </span>
          )}

        </div>


        <div className="form-group">

          <label htmlFor="projectType">
            What are you thinking about?
          </label>

          <select
            id="projectType"
            name="projectType"
            className="form-control"
            value={formState.projectType}
            onChange={handleInputChange}
          >

            <option value="">
              Choose one...
            </option>

            <option value="website">
              A new website
            </option>

            <option value="redesign">
              Refreshing my current website
            </option>

            <option value="website-brand">
              Website + simple visual identity
            </option>

            <option value="automation">
              Digital tool or automation
            </option>

            <option value="not-sure">
              I’m not sure yet
            </option>

            <option value="other">
              Something else
            </option>

          </select>

          {errors.projectType && (
            <span className="error-txt">
              {errors.projectType}
            </span>
          )}

        </div>


        <div className="form-group">

          <label htmlFor="message">
            Tell me about it
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-control"
            placeholder="What does your business do? What would you like the website to help with?"
            value={formState.message}
            onChange={handleInputChange}
          />

          {errors.message && (
            <span className="error-txt">
              {errors.message}
            </span>
          )}

        </div>


        <button
          type="submit"
          className="contact-submit"
        >
          Send Project Inquiry
          <span aria-hidden="true">
            ↗
          </span>
        </button>

      </form>

    </div>

  </div>

</section>

      {/* Footer */}
      <footer>
        <h3>2e Studio</h3>
        <p>Websites, digital systems, and creative support.</p>

        <ul className="footer-links">
          <li>
            <a
              href="https://linkedin.com/in/jessietowey"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Jessie2e"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:jessietowey@gmail.com">Email</a>
          </li>
        </ul>

        <p
          style={{
            fontSize: '0.85rem',
            marginTop: '16px',
            opacity: 0.8,
          }}
        >
          &copy; {new Date().getFullYear()} 2e Studio by Jessie Towey. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}