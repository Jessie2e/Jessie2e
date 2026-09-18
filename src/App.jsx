import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
const QUICK_INQUIRY_INITIAL_STATE = {
  name: '',
  businessName: '',
  preferredContact: '',
  email: '',
  phone: '',
  source: '',
  message: '',
};

const BUILDER_INITIAL_STATE = {
  projectStage: '',
  businessType: '',
  features: [],
  siteSize: '',
  readiness: '',
  maintenance: '',
  name: '',
  businessName: '',
  preferredContact: '',
  email: '',
  phone: '',
  currentSite: '',
  timeline: '',
  budget: '',
  source: '',
  message: '',
};

const BUILDER_STAGES = [
  {
    value: 'starting-from-scratch',
    label: 'Starting from scratch',
    description: "I don’t have a website yet.",
  },
  {
    value: 'website-refresh',
    label: 'Website refresh',
    description: 'I have one, but it needs some love.',
  },
  {
    value: 'adding-something',
    label: 'Adding something new',
    description: 'My site is mostly fine — I need new pages or functionality.',
  },
  {
    value: 'not-sure',
    label: 'I honestly have no idea',
    description: 'That’s completely fine. Help me figure it out.',
  },
];

const BUSINESS_TYPES = [
  { value: 'local-business', label: 'Local business' },
  { value: 'service-business', label: 'Service-based business' },
  { value: 'creative-portfolio', label: 'Creative / portfolio' },
  { value: 'shop-products', label: 'Shop or product-based business' },
  { value: 'courses-education', label: 'Courses / education' },
  { value: 'event-wedding', label: 'Event / wedding' },
  { value: 'something-else', label: 'Something else' },
];

const BUILDER_FEATURES = [
  { value: 'business-info', label: 'Tell people about my business', weight: 0 },
  { value: 'services-pricing', label: 'Show my services or pricing', weight: 0 },
  { value: 'contact-form', label: 'Let people contact me', weight: 0 },
  { value: 'booking', label: 'Let people book appointments', weight: 2 },
  { value: 'gallery', label: 'Show a portfolio or photo gallery', weight: 1 },
  { value: 'menu', label: 'Display a menu', weight: 1 },
  { value: 'faq', label: 'Answer common questions', weight: 0 },
  { value: 'email-signup', label: 'Collect email signups', weight: 1 },
  { value: 'events', label: 'Show events or workshops', weight: 1 },
  { value: 'shop', label: 'Sell products online', weight: 4, custom: true },
  { value: 'ordering', label: 'Offer online ordering', weight: 3 },
  { value: 'courses', label: 'Host courses or paid content', weight: 4, custom: true },
  { value: 'memberships', label: 'Allow memberships or gated content', weight: 4, custom: true },
  { value: 'blog', label: 'Include a blog or resources', weight: 1 },
  {
    value: 'integration',
    label: 'Connect to something I already use',
    description: 'Square, Shopify, an EHR, booking software, etc.',
    weight: 2,
  },
  {
    value: 'custom-feature',
    label: 'I have a custom idea / something a little weird',
    weight: 4,
    custom: true,
  },
];

const SITE_SIZES = [
  {
    value: 'simple',
    label: 'Simple + focused',
    description: 'One page or a very small site.',
    weight: 0,
  },
  {
    value: 'small',
    label: 'Small business site',
    description: 'Around 3–5 pages.',
    weight: 2,
  },
  {
    value: 'medium',
    label: 'A little more substantial',
    description: 'Around 5–8 pages.',
    weight: 4,
  },
  {
    value: 'large',
    label: 'Pretty big',
    description: 'Lots of pages, products, content or functionality.',
    weight: 6,
  },
  {
    value: 'unsure',
    label: 'I have absolutely no idea',
    description: 'You tell me.',
    weight: 1,
  },
];

const READINESS_OPTIONS = [
  {
    value: 'ready',
    label: 'I’m ready to go',
    description: 'I have my logo, photos and most of my wording.',
    weight: 0,
  },
  {
    value: 'some',
    label: 'I have some of it',
    description: 'I’ll need a little help filling in the gaps.',
    weight: 0,
  },
  {
    value: 'not-much',
    label: 'Not much yet',
    description: 'I know what my business does, but I need help organizing everything.',
    weight: 1,
  },
  {
    value: 'nothing',
    label: 'Basically nothing',
    description: 'Please help me figure out what this website even needs.',
    weight: 2,
  },
];

const MAINTENANCE_OPTIONS = [
  {
    value: 'diy',
    label: 'I’ll handle it',
    price: '$0/month',
    description: 'You own the site and take it from here.',
  },
  {
    value: 'fresh',
    label: 'Keep It Fresh',
    price: '$39/month',
    description: 'Occasional text changes, photo swaps and small updates.',
  },
  {
    value: 'ongoing',
    label: 'Ongoing Support',
    price: '$79/month',
    description: 'Regular updates when you’d rather have me handle them.',
  },
  {
    value: 'unsure',
    label: 'Not sure yet',
    price: 'Decide later',
    description: 'No pressure — we can figure this out after the site is scoped.',
  },
];

const TIMELINE_OPTIONS = [
  'As soon as reasonably possible',
  'Within the next month',
  'Within 1–3 months',
  'I’m just exploring right now',
];

const BUDGET_OPTIONS = [
  'Under $300',
  '$300–$500',
  '$500–$750',
  '$750–$1,100',
  '$1,100+',
  'I genuinely don’t know yet',
];

const SOURCE_OPTIONS = [
  'Facebook',
  'Instagram',
  'Google / search',
  'Local group or community',
  'Referral',
  'Jessie reached out to me',
  'I’ve worked with Jessie before',
  'Other',
];

const CONTACT_METHOD_OPTIONS = [
  { value: 'Email', label: 'Email' },
  { value: 'Text', label: 'Text' },
  { value: 'Call', label: 'Call' },
];

const getFollowUpPhrase = (preference) => {
  if (preference === 'Text') return 'by text';
  if (preference === 'Call') return 'with a call';
  return 'by email';
};

const findOptionLabel = (options, value) =>
  options.find((option) => option.value === value)?.label || value;

const getProjectEstimate = (state) => {
  const selectedFeatures = BUILDER_FEATURES.filter((feature) =>
    state.features.includes(feature.value)
  );

  const hasCustomFeature = selectedFeatures.some((feature) => feature.custom);

  let score = selectedFeatures.reduce(
    (total, feature) => total + (feature.weight || 0),
    0
  );

  score += SITE_SIZES.find((option) => option.value === state.siteSize)?.weight || 0;
  score += READINESS_OPTIONS.find((option) => option.value === state.readiness)?.weight || 0;

  if (state.projectStage === 'website-refresh' || state.projectStage === 'adding-something') {
    score += 1;
  }

  if (hasCustomFeature || score >= 11) {
    return {
      key: 'custom',
      label: 'Custom Build',
      range: '$1,100+',
      description:
        'Stores, courses, memberships, gated content and custom functionality usually need a little more planning before I can give you a useful number.',
    };
  }

  if (score >= 7) {
    return {
      key: 'expanded',
      label: 'Expanded Site',
      range: '$750–$1,100',
      description:
        'A larger build with more content, integrations, custom interactions or functionality.',
    };
  }

  if (score >= 3) {
    return {
      key: 'business',
      label: 'Business Site',
      range: '$500–$750',
      description:
        'A strong fit for multi-page sites, booking, richer galleries, menus, forms and more customized content.',
    };
  }

  return {
    key: 'simple',
    label: 'Simple Site',
    range: '$300–$450',
    description:
      'A clean, polished online home with the essentials your customers need.',
  };
};

export default function App() {
  const [isBirdFlying, setIsBirdFlying] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [contactMode, setContactMode] = useState('quick');
  const [builderStep, setBuilderStep] = useState(1);
  const [formState, setFormState] = useState({ ...BUILDER_INITIAL_STATE });
  const [quickFormState, setQuickFormState] = useState({ ...QUICK_INQUIRY_INITIAL_STATE });
  const [errors, setErrors] = useState({});
  const [quickErrors, setQuickErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const estimate = getProjectEstimate(formState);
  const selectedMaintenance = MAINTENANCE_OPTIONS.find(
    (option) => option.value === formState.maintenance
  );
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
  const builderTotalSteps = 7;

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
      ['.secondary-project-art', 'reveal-scale'],
      ['.secondary-project-copy', ''],
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

  const handleQuickInputChange = (event) => {
    const { name, value } = event.target;

    setQuickFormState((previousState) => ({
      ...previousState,
      [name]: value,
    }));

    if (quickErrors[name]) {
      setQuickErrors((previousErrors) => ({
        ...previousErrors,
        [name]: '',
      }));
    }
  };

  const switchContactMode = (mode) => {
    setContactMode(mode);
    setIsSubmitted(false);
    setErrors({});
    setQuickErrors({});
  };

  const chooseBuilderOption = (field, value) => {
    setFormState((previousState) => ({
      ...previousState,
      [field]: value,
    }));
  };

  const handleFeatureToggle = (featureValue) => {
    setFormState((previousState) => ({
      ...previousState,
      features: previousState.features.includes(featureValue)
        ? previousState.features.filter((feature) => feature !== featureValue)
        : [...previousState.features, featureValue],
    }));
  };

  const canContinueBuilder = () => {
    if (builderStep === 1) return Boolean(formState.projectStage);
    if (builderStep === 2) return Boolean(formState.businessType);
    if (builderStep === 3) return formState.features.length > 0;
    if (builderStep === 4) return Boolean(formState.siteSize);
    if (builderStep === 5) return Boolean(formState.readiness);
    if (builderStep === 6) return Boolean(formState.maintenance);
    return true;
  };

  const goToNextBuilderStep = () => {
    if (!canContinueBuilder()) return;
    setBuilderStep((currentStep) =>
      Math.min(builderTotalSteps, currentStep + 1)
    );
  };

  const goToPreviousBuilderStep = () => {
    setBuilderStep((currentStep) => Math.max(1, currentStep - 1));
  };

  const validateQuickForm = () => {
    const currentErrors = {};

    if (!quickFormState.name.trim()) {
      currentErrors.name = 'Name is required.';
    }

    if (!quickFormState.preferredContact) {
      currentErrors.preferredContact = 'Choose how you’d like me to get back to you.';
    }

    if (quickFormState.preferredContact === 'Email' && !quickFormState.email.trim()) {
      currentErrors.email = 'Email is required when email is your preferred contact method.';
    } else if (quickFormState.email.trim() && !/\S+@\S+\.\S+/.test(quickFormState.email)) {
      currentErrors.email = 'Please provide a valid email address.';
    }

    if (['Text', 'Call'].includes(quickFormState.preferredContact) && !quickFormState.phone.trim()) {
      currentErrors.phone = `Phone is required if you prefer ${quickFormState.preferredContact.toLowerCase()}.`;
    }

    if (!quickFormState.source) {
      currentErrors.source = 'Please tell me how you found 2e Studio.';
    }

    if (!quickFormState.message.trim()) {
      currentErrors.message = 'Give me a quick idea of what you have in mind.';
    }

    setQuickErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleQuickSubmit = async (event) => {
    event.preventDefault();

    if (!validateQuickForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/xdeozrrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          inquiryType: 'Quick Inquiry',
          name: quickFormState.name,
          businessName: quickFormState.businessName || 'Not provided',
          preferredContact: quickFormState.preferredContact,
          email: quickFormState.email || 'Not provided',
          phone: quickFormState.phone || 'Not provided',
          source: quickFormState.source,
          message: quickFormState.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setIsSubmitted(true);
      setQuickErrors({});
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong sending your message. Please email me directly at jessietowey@gmail.com."
      );
    }
  };

  const validateForm = () => {
    const currentErrors = {};

    if (!formState.name.trim()) {
      currentErrors.name = 'Name is required.';
    }

    if (!formState.businessName.trim()) {
      currentErrors.businessName = 'Business or project name is required.';
    }

    if (!formState.preferredContact) {
      currentErrors.preferredContact = 'Choose how you’d like me to get back to you.';
    }

    if (formState.preferredContact === 'Email' && !formState.email.trim()) {
      currentErrors.email = 'Email is required when email is your preferred contact method.';
    } else if (formState.email.trim() && !/\S+@\S+\.\S+/.test(formState.email)) {
      currentErrors.email = 'Please provide a valid email address.';
    }

    if (['Text', 'Call'].includes(formState.preferredContact) && !formState.phone.trim()) {
      currentErrors.phone = `Phone is required if you prefer ${formState.preferredContact.toLowerCase()}.`;
    }

    if (!formState.timeline) {
      currentErrors.timeline = 'Please choose a general timeline.';
    }

    if (!formState.budget) {
      currentErrors.budget = 'Please choose the closest budget option.';
    }

    if (!formState.source) {
      currentErrors.source = 'Please tell me how you found 2e Studio.';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const selectedFeatureLabels = BUILDER_FEATURES
      .filter((feature) => formState.features.includes(feature.value))
      .map((feature) => feature.label);

    try {
      const response = await fetch("https://formspree.io/f/xdeozrrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          inquiryType: 'Build Your Site',
          name: formState.name,
          businessName: formState.businessName,
          preferredContact: formState.preferredContact,
          email: formState.email || 'Not provided',
          phone: formState.phone || 'Not provided',
          currentSite: formState.currentSite || 'None provided',
          projectStage: findOptionLabel(BUILDER_STAGES, formState.projectStage),
          businessType: findOptionLabel(BUSINESS_TYPES, formState.businessType),
          features: selectedFeatureLabels.join(', '),
          siteSize: findOptionLabel(SITE_SIZES, formState.siteSize),
          contentReadiness: findOptionLabel(READINESS_OPTIONS, formState.readiness),
          estimatedProject: `${estimate.label} — ${estimate.range}`,
          maintenance: selectedMaintenance
            ? `${selectedMaintenance.label} — ${selectedMaintenance.price}`
            : 'Not selected',
          timeline: formState.timeline,
          budget: formState.budget,
          source: formState.source,
          message: formState.message || 'No additional notes',
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setIsSubmitted(true);
      setErrors({});
    } catch (error) {
      console.error(error);
      alert(
        "Something went wrong sending your project. Please email me directly at jessietowey@gmail.com."
      );
    }
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

    <div className="work-feature-row">

    <div className="work-heading">
      <p className="work-kicker">Selected Work · 01—04</p>

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

    </div>


    {/* SECONDARY PROJECTS */}
    <div className="secondary-work-grid">

      {/* IN THE WOODS — MOBILE FIRST CARD */}
      <article className="secondary-project mobile-carousel-inwoods">

        <div className="secondary-project-art mobile-inwoods-visual">
          <div className="project-status-badge">
            Live Site
          </div>

          <img
            src="/inthewoods/cover.png"
            alt="In The Woods Dog Training website"
          />
        </div>

        <div className="secondary-project-copy">
          <div className="project-meta-row">
            <span className="project-number">01</span>

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

        <div className="secondary-project-art soda-project-visual">

  <div className="project-status-badge">
    Concept Project
  </div>

  <img
    src="/sodastop/sodastop-cover.png"
    alt="The Soda Stop concept website homepage"
  />

</div>

        <div className="secondary-project-copy">

          <div className="project-meta-row">
            <span className="project-number">02</span>

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

  <div className="secondary-project-art susan-project-visual">

  <div className="project-status-badge">
    In Development
  </div>

  <img
    src="/susan-ripp/hero.png"
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


      {/* ERYN DAVIS */}
      <article className="secondary-project">

        <div className="secondary-project-art eryn-project-visual">
          <div className="project-status-badge">
            In Development
          </div>

          <img
            src="/eryn-davis/eryn-davis-cover.webp"
            alt="Eryn Davis live entertainer website homepage"
          />
        </div>

        <div className="secondary-project-copy">
          <div className="project-meta-row">
            <span className="project-number">04</span>

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
        Straightforward pricing, no mystery proposal, and no required monthly website fee.
        Pick the kind of site that sounds closest to what you need — or use the form to get a rough range.
      </p>

      <div className="builder-price-guide" aria-label="Typical website pricing">
        <div className="builder-price-guide-card">
          <div>
            <span>Simple Site</span>
            <small>Essentials for a small business that needs a polished home online.</small>
          </div>
          <strong>$300–$450</strong>
        </div>

        <div className="builder-price-guide-card">
          <div>
            <span>Business Site</span>
            <small>More room for services, photos, forms, FAQs, and your story.</small>
          </div>
          <strong>$500–$750</strong>
        </div>

        <div className="builder-price-guide-card">
          <div>
            <span>Expanded Site</span>
            <small>More pages, booking integrations, custom forms, or extra functionality.</small>
          </div>
          <strong>$750–$1,100</strong>
        </div>

        <div className="builder-price-guide-card">
          <div>
            <span>Custom Build</span>
            <small>Shops, courses, memberships, custom tools, and bigger ideas.</small>
          </div>
          <strong>$1,100+</strong>
        </div>
      </div>

      <div className="website-care-block" aria-label="Optional website care plans">
        <div className="website-care-heading">
          <p className="website-care-eyebrow">After launch</p>
          <h3>Website care, if you want it.</h3>
          <p>
            Your site is yours. Keep it yourself, or have me handle the little things when you need a hand.
          </p>
        </div>

        <div className="website-care-grid">
          <div className="website-care-card">
            <div className="website-care-card-top">
              <strong>DIY</strong>
              <b>$0<span>/mo</span></b>
            </div>
            <p>You own the site and take it from here. Reach out anytime for separately quoted changes.</p>
          </div>

          <div className="website-care-card">
            <div className="website-care-card-top">
              <strong>Keep It Fresh</strong>
              <b>$39<span>/mo</span></b>
            </div>
            <p>Up to 30 minutes of small text, photo, hours, pricing, or link updates each month.</p>
          </div>

          <div className="website-care-card">
            <div className="website-care-card-top">
              <strong>Ongoing Support</strong>
              <b>$79<span>/mo</span></b>
            </div>
            <p>Up to one hour of updates and support each month, plus room for small improvements.</p>
          </div>
        </div>

        <p className="website-care-note">
          No required care plan. Your domain and paid services stay in your name, and larger additions are quoted separately.
        </p>
      </div>

      <a
        href="mailto:jessietowey@gmail.com"
        className="contact-direct-email"
      >
        Or email me directly · jessietowey@gmail.com
        <span aria-hidden="true">↗</span>
      </a>

      <p className="contact-location contact-location-desktop">
      Based near Smith Lake in Alabama · Working with businesses anywhere.
      </p>

    </div>


    {/* RIGHT — INTERACTIVE BUILDER */}
    <div className="contact-form-card builder-card">

      {!isSubmitted && (
        <div className="contact-mode-switcher" aria-label="Choose how to start your project">
          <button
            type="button"
            className={`contact-mode-button ${contactMode === 'quick' ? 'is-active' : ''}`}
            onClick={() => switchContactMode('quick')}
          >
            <span>Quick Inquiry</span>
            <small>Just send me a note</small>
          </button>

          <button
            type="button"
            className={`contact-mode-button ${contactMode === 'builder' ? 'is-active' : ''}`}
            onClick={() => switchContactMode('builder')}
          >
            <span>Build Your Site</span>
            <small>Get a rough price range</small>
          </button>
        </div>
      )}

      {isSubmitted ? (
        <div className="builder-success">
          <span className="builder-success-mark" aria-hidden="true">✓</span>
          <p className="builder-eyebrow">Message sent</p>
          <h3>{contactMode === 'quick' ? 'Got it — I’ll take it from here.' : 'That gives me what I need to recommend next steps.'}</h3>
          <p>
            {contactMode === 'quick'
              ? `I’ll read through your note and follow up ${getFollowUpPhrase(quickFormState.preferredContact)} so we can figure out the best next step.`
              : `I’ll review your choices and follow up ${getFollowUpPhrase(formState.preferredContact)} with a more specific recommendation and next steps.`}
          </p>
          {contactMode === 'builder' && (
            <div className="builder-success-estimate">
              <span>Your starting estimate</span>
              <strong>{estimate.range}</strong>
            </div>
          )}
        </div>
      ) : (
        <>
          {contactMode === 'quick' ? (
            <div className="contact-mode-panel quick-inquiry-panel" key="quick-inquiry">
              <p className="builder-eyebrow">Quick Inquiry</p>
              <h3>Already know what you need?</h3>
              <p className="builder-step-intro">
                Skip the builder. Send me the basics and choose whether you’d rather hear back by email, text, or phone.
              </p>

              <form
                id="project-form"
                className="contact-form contact-form-editorial quick-inquiry-form"
                onSubmit={handleQuickSubmit}
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="quickName">Your Name</label>
                  <input
                    type="text"
                    id="quickName"
                    name="name"
                    className="form-control"
                    placeholder="Jane Smith"
                    value={quickFormState.name}
                    onChange={handleQuickInputChange}
                  />
                  {quickErrors.name && (
                    <span className="error-txt">{quickErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="quickBusinessName">Business / Project Name</label>
                  <input
                    type="text"
                    id="quickBusinessName"
                    name="businessName"
                    className="form-control"
                    placeholder="Optional"
                    value={quickFormState.businessName}
                    onChange={handleQuickInputChange}
                  />
                </div>

                <div className="form-group quick-span-2">
                  <span className="form-group-label">How should I get back to you?</span>
                  <div className="contact-preference-row" role="group" aria-label="Preferred contact method">
                    {CONTACT_METHOD_OPTIONS.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        className={`contact-preference-button ${
                          quickFormState.preferredContact === option.value ? 'is-selected' : ''
                        }`}
                        onClick={() => {
                          setQuickFormState((previousState) => ({
                            ...previousState,
                            preferredContact: option.value,
                          }));
                          setQuickErrors((previousErrors) => ({
                            ...previousErrors,
                            preferredContact: '',
                            email: '',
                            phone: '',
                          }));
                        }}
                        aria-pressed={quickFormState.preferredContact === option.value}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {quickErrors.preferredContact && (
                    <span className="error-txt">{quickErrors.preferredContact}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="quickEmail">
                    Email
                    {quickFormState.preferredContact && quickFormState.preferredContact !== 'Email' && (
                      <span className="form-optional"> optional</span>
                    )}
                  </label>
                  <input
                    type="email"
                    id="quickEmail"
                    name="email"
                    className="form-control"
                    placeholder="jane@yourbusiness.com"
                    value={quickFormState.email}
                    onChange={handleQuickInputChange}
                  />
                  {quickErrors.email && (
                    <span className="error-txt">{quickErrors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="quickPhone">
                    Phone
                    {(!quickFormState.preferredContact || quickFormState.preferredContact === 'Email') && (
                      <span className="form-optional"> optional</span>
                    )}
                  </label>
                  <input
                    type="tel"
                    id="quickPhone"
                    name="phone"
                    className="form-control"
                    placeholder="(205) 555-1234"
                    value={quickFormState.phone}
                    onChange={handleQuickInputChange}
                  />
                  {quickErrors.phone && (
                    <span className="error-txt">{quickErrors.phone}</span>
                  )}
                </div>

                <div className="form-group quick-span-2">
                  <label htmlFor="quickSource">How did you find 2e Studio?</label>
                  <select
                    id="quickSource"
                    name="source"
                    className="form-control"
                    value={quickFormState.source}
                    onChange={handleQuickInputChange}
                  >
                    <option value="">Choose one...</option>
                    {SOURCE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {quickErrors.source && (
                    <span className="error-txt">{quickErrors.source}</span>
                  )}
                </div>

                <div className="form-group quick-span-2">
                  <label htmlFor="quickMessage">What are you thinking?</label>
                  <textarea
                    id="quickMessage"
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="A quick description is perfect — what do you need, what isn’t working, or what are you hoping to build?"
                    value={quickFormState.message}
                    onChange={handleQuickInputChange}
                  />
                  {quickErrors.message && (
                    <span className="error-txt">{quickErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-submit quick-span-2"
                >
                  Send Jessie a Message
                  <span aria-hidden="true">↗</span>
                </button>
              </form>
              <button
                type="button"
                className="quick-builder-link"
                onClick={() => switchContactMode('builder')}
              >
                Not sure what you need? Build your site + see a price range →
              </button>
            </div>
          ) : (
            <div className="contact-mode-panel builder-mode-panel" key="site-builder">
          <div className="builder-progress">
            <div className="builder-progress-copy">
              <span>Build Your Site</span>
              <span>Step {builderStep} of {builderTotalSteps}</span>
            </div>

            <div className="builder-progress-track" aria-hidden="true">
              <span
                style={{
                  width: `${(builderStep / builderTotalSteps) * 100}%`,
                }}
              />
            </div>
          </div>


          {builderStep === 1 && (
            <div className="builder-step">
              <p className="builder-eyebrow">01 — The starting point</p>
              <h3>What are we working with?</h3>
              <p className="builder-step-intro">
                Pick the closest answer. You can’t get this wrong.
              </p>

              <div className="builder-choice-grid">
                {BUILDER_STAGES.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`builder-choice ${
                      formState.projectStage === option.value ? 'is-selected' : ''
                    }`}
                    onClick={() =>
                      chooseBuilderOption('projectStage', option.value)
                    }
                  >
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )}


          {builderStep === 2 && (
            <div className="builder-step">
              <p className="builder-eyebrow">02 — The business</p>
              <h3>What kind of project is this?</h3>
              <p className="builder-step-intro">
                This helps me understand the kind of customer experience we’re building.
              </p>

              <div className="builder-choice-grid builder-choice-grid-compact">
                {BUSINESS_TYPES.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`builder-choice builder-choice-compact ${
                      formState.businessType === option.value ? 'is-selected' : ''
                    }`}
                    onClick={() =>
                      chooseBuilderOption('businessType', option.value)
                    }
                  >
                    <strong>{option.label}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}


          {builderStep === 3 && (
            <div className="builder-step">
              <p className="builder-eyebrow">03 — The useful stuff</p>
              <h3>What does your website need to do?</h3>
              <p className="builder-step-intro">
                Choose everything that sounds useful. This is where the estimate
                starts getting smarter.
              </p>

              <div className="builder-feature-grid">
                {BUILDER_FEATURES.map((feature) => {
                  const isSelected = formState.features.includes(feature.value);

                  return (
                    <button
                      type="button"
                      key={feature.value}
                      className={`builder-feature ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => handleFeatureToggle(feature.value)}
                      aria-pressed={isSelected}
                    >
                      <span className="builder-feature-check" aria-hidden="true">
                        {isSelected ? '✓' : '+'}
                      </span>
                      <span>
                        <strong>{feature.label}</strong>
                        {feature.description && (
                          <small>{feature.description}</small>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}


          {builderStep === 4 && (
            <div className="builder-step">
              <p className="builder-eyebrow">04 — The size</p>
              <h3>How big does the site feel?</h3>
              <p className="builder-step-intro">
                Don’t worry if you’re guessing. This is just a starting point.
              </p>

              <div className="builder-choice-grid">
                {SITE_SIZES.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`builder-choice ${
                      formState.siteSize === option.value ? 'is-selected' : ''
                    }`}
                    onClick={() =>
                      chooseBuilderOption('siteSize', option.value)
                    }
                  >
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )}


          {builderStep === 5 && (
            <div className="builder-step">
              <p className="builder-eyebrow">05 — What you already have</p>
              <h3>How ready are your words, photos + branding?</h3>
              <p className="builder-step-intro">
                Starting with nothing is completely okay — it just means I’ll
                help with more of the organizing.
              </p>

              <div className="builder-choice-grid">
                {READINESS_OPTIONS.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`builder-choice ${
                      formState.readiness === option.value ? 'is-selected' : ''
                    }`}
                    onClick={() =>
                      chooseBuilderOption('readiness', option.value)
                    }
                  >
                    <strong>{option.label}</strong>
                    <span>{option.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )}


          {builderStep === 6 && (
            <div className="builder-step">
              <p className="builder-eyebrow">06 — Your estimate</p>
              <h3>Here’s what your project looks like.</h3>

              <div className={`builder-estimate builder-estimate-${estimate.key}`}>
                <div>
                  <span>{estimate.label}</span>
                  <strong>{estimate.range}</strong>
                </div>
                <p>{estimate.description}</p>
              </div>

              <p className="builder-estimate-disclaimer">
                This is an early estimate, not a final quote. Content,
                integrations and unusual functionality can shift the final price.
              </p>

              <div className="builder-maintenance-heading">
                <p className="builder-eyebrow">After launch</p>
                <h4>Want me to stick around?</h4>
              </div>

              <div className="builder-maintenance-grid">
                {MAINTENANCE_OPTIONS.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`builder-maintenance-option ${
                      formState.maintenance === option.value ? 'is-selected' : ''
                    }`}
                    onClick={() =>
                      chooseBuilderOption('maintenance', option.value)
                    }
                  >
                    <span className="builder-maintenance-topline">
                      <strong>{option.label}</strong>
                      <b>{option.price}</b>
                    </span>
                    <small>{option.description}</small>
                  </button>
                ))}
              </div>

              <p className="builder-launch-support">
                Every new site includes a short post-launch support window for
                bugs and little launch-related fixes.
              </p>
            </div>
          )}


          {builderStep === 7 && (
            <div className="builder-step">
              <p className="builder-eyebrow">07 — Tell me where to send the hello</p>
              <h3>Tell me about your project.</h3>
              <p className="builder-step-intro">
                You’ve already done the hard part. I just need a few details so
                I can follow up.
              </p>

              <div className="builder-mini-summary">
                <div>
                  <span>Estimated build</span>
                  <strong>{estimate.range}</strong>
                </div>
                <div>
                  <span>Support</span>
                  <strong>
                    {selectedMaintenance?.price || 'Not selected'}
                  </strong>
                </div>
              </div>

              <form
                className="contact-form contact-form-editorial builder-final-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
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
                    <span className="error-txt">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="businessName">Business / Project Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    className="form-control"
                    placeholder="Your business"
                    value={formState.businessName}
                    onChange={handleInputChange}
                  />
                  {errors.businessName && (
                    <span className="error-txt">{errors.businessName}</span>
                  )}
                </div>

                <div className="form-group builder-span-2">
                  <span className="form-group-label">How should I get back to you?</span>
                  <div className="contact-preference-row" role="group" aria-label="Preferred contact method">
                    {CONTACT_METHOD_OPTIONS.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        className={`contact-preference-button ${
                          formState.preferredContact === option.value ? 'is-selected' : ''
                        }`}
                        onClick={() => {
                          setFormState((previousState) => ({
                            ...previousState,
                            preferredContact: option.value,
                          }));
                          setErrors((previousErrors) => ({
                            ...previousErrors,
                            preferredContact: '',
                            email: '',
                            phone: '',
                          }));
                        }}
                        aria-pressed={formState.preferredContact === option.value}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {errors.preferredContact && (
                    <span className="error-txt">{errors.preferredContact}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                    {formState.preferredContact && formState.preferredContact !== 'Email' && (
                      <span className="form-optional"> optional</span>
                    )}
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
                    <span className="error-txt">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone
                    {(!formState.preferredContact || formState.preferredContact === 'Email') && (
                      <span className="form-optional"> optional</span>
                    )}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="(205) 555-1234"
                    value={formState.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <span className="error-txt">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group builder-span-2">
                  <label htmlFor="currentSite">Current Website / Social Page</label>
                  <input
                    type="text"
                    id="currentSite"
                    name="currentSite"
                    className="form-control"
                    placeholder="Optional"
                    value={formState.currentSite}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Ideal Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="form-control"
                    value={formState.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose one...</option>
                    {TIMELINE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <span className="error-txt">{errors.timeline}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Comfortable Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-control"
                    value={formState.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose one...</option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.budget && (
                    <span className="error-txt">{errors.budget}</span>
                  )}
                </div>

                <div className="form-group builder-span-2">
                  <label htmlFor="source">How did you find 2e Studio?</label>
                  <select
                    id="source"
                    name="source"
                    className="form-control"
                    value={formState.source}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose one...</option>
                    {SOURCE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.source && (
                    <span className="error-txt">{errors.source}</span>
                  )}
                </div>

                <div className="form-group builder-span-2">
                  <label htmlFor="message">Anything else I should know?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    placeholder="Anything unusual, exciting, confusing, or important."
                    value={formState.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit builder-span-2"
                >
                  Send My Project to Jessie
                  <span aria-hidden="true">↗</span>
                </button>
              </form>
            </div>
          )}


          {builderStep < 7 && (
            <div className="builder-navigation">
              {builderStep > 1 ? (
                <button
                  type="button"
                  className="builder-back"
                  onClick={goToPreviousBuilderStep}
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}

              <button
                type="button"
                className="builder-next"
                onClick={goToNextBuilderStep}
                disabled={!canContinueBuilder()}
              >
                {builderStep === 6 ? 'Tell Jessie about my project' : 'Next'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}

          {builderStep === 7 && (
            <button
              type="button"
              className="builder-back builder-back-final"
              onClick={goToPreviousBuilderStep}
            >
              ← Back to estimate
            </button>
          )}
            </div>
          )}
        </>
      )}

    </div>
        <p className="contact-location contact-location-mobile">
                  Based near Smith Lake in Alabama · Working with businesses anywhere.
                  </p>
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