import StudioFooter from './StudioFooter';
import { useEffect, useRef, useState } from 'react';
import './SarahPickett.css';
const base = '/sarahpickettvoice/web/';
const socialTitle = 'Sarah Pickett Voice & Speech Services | 2e Studio';
const socialDescription = "A first website. A confident next chapter. See how 2e Studio helped bring Sarah's practice online.";
const socialImage = 'https://jessie2e.com/sarahpickettvoice/2eStudio-SarahPickettFB.png';
const socialImageAlt = 'Sarah Pickett Voice & Speech Services website by 2e Studio';
const imageSizes = {'mobilehero': [736, 1594], 'speechappointmentrequestform': [1800, 933], 'aboutsarahpickettslp': [1800, 933], 'mobileapptform': [736, 1594], 'Pricingandservices': [1800, 933], 'mobilepricing': [736, 1594], 'mobileabout': [736, 1594], 'sarahpicketthero': [1800, 933]};
const quote = 'Jessie made the website creation process so easy! I gave her the information and content I wanted to include, and she turned it into a beautiful, professional, and functional website. I especially appreciate her eye for graphic design, her knowledge of website building, and her ability to incorporate functional elements like contact forms seamlessly into the design. She took what felt like an overwhelming task and made the whole process simple and stress-free. I’m so happy with how my website turned out and would absolutely recommend working with her!';
function Screenshot({ name, alt, eager = false }) {
  return <img src={`${base}${name}.webp`} alt={alt} width={imageSizes[name]?.[0]} height={imageSizes[name]?.[1]} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}
function Browser({ children, label = 'sarahpickettvoice.com' }) {
  return <div className="sp-browser"><div className="sp-toolbar"><span aria-hidden="true">● ● ●</span><span>{label}</span><span aria-hidden="true">↗</span></div>{children}</div>;
}
function MobileWalkthrough() {
  const videoRef = useRef(null);
  const [autoplay, setAutoplay] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) return;
    let manuallyPaused = false;
    let visible = false;
    const onPause = () => { if (visible) manuallyPaused = true; };
    const onPlay = () => { manuallyPaused = false; };
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      setAutoplay(visible && !manuallyPaused);
      if (visible && !manuallyPaused) video.play().catch(() => {});
      else if (!visible) video.pause();
    }, { threshold: .3 });
    observer.observe(video);
    return () => { observer.disconnect(); video.removeEventListener('pause', onPause); video.removeEventListener('play', onPlay); video.pause(); };
  }, []);
  return <video ref={videoRef} autoPlay={autoplay} muted loop controls playsInline preload="none" poster={`${base}mobileservices-poster.jpg`} src={`${base}mobileservices.mp4`} aria-label="Mobile services walkthrough; use playback controls to pause" />;
}
export default function SarahPickett() {
  const gallery = useRef(null);
  useEffect(() => {
    const selectors = ['title', 'meta[name="description"]', 'link[rel="canonical"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:url"]', 'meta[property="og:image"]', 'meta[name="twitter:title"]', 'meta[name="twitter:description"]', 'meta[name="twitter:image"]', 'meta[name="twitter:image:alt"]', 'meta[property="og:image:alt"]', 'meta[property="og:image:width"]', 'meta[property="og:image:height"]', 'meta[property="og:image:type"]'];
    const removed = [];
    selectors.forEach(selector => {
      const tags = Array.from(document.head.querySelectorAll(selector));
      tags.slice(0, -1).forEach(tag => { removed.push(tag); tag.remove(); });
    });
    document.title = 'Madison, Alabama Website Design: Sarah Pickett | 2e Studio';
    const values = {
      'meta[name="description"]': 'Website design for Sarah Pickett’s voice and speech-language pathology practice in Madison, Alabama, serving the Huntsville area. A case study by 2e Studio.',
      'link[rel="canonical"]': 'https://jessie2e.com/work/sarah-pickett/',
      'meta[property="og:title"]': socialTitle,
      'meta[property="og:description"]': socialDescription,
      'meta[property="og:url"]': 'https://jessie2e.com/work/sarah-pickett/',
      'meta[property="og:image"]': socialImage,
      'meta[name="twitter:title"]': socialTitle,
      'meta[name="twitter:description"]': socialDescription,
      'meta[name="twitter:image"]': socialImage,
      'meta[name="twitter:image:alt"]': socialImageAlt,
      'meta[property="og:image:alt"]': socialImageAlt,
      'meta[property="og:image:width"]': '1200',
      'meta[property="og:image:height"]': '630',
      'meta[property="og:image:type"]': 'image/png'
    };
    Object.entries(values).forEach(([selector, value]) => document.head.querySelector(selector)?.setAttribute(selector.startsWith('link') ? 'href' : 'content', value));
    return () => removed.forEach(tag => document.head.appendChild(tag));
  }, []);
  return <div className="sp-case">
    <title>Madison, Alabama Website Design: Sarah Pickett | 2e Studio</title>
    <meta name="description" content="Website design for Sarah Pickett’s voice and speech-language pathology practice in Madison, Alabama, serving the Huntsville area. A case study by 2e Studio." />
    <link rel="canonical" href="https://jessie2e.com/work/sarah-pickett/" />
    <meta property="og:title" content={socialTitle} />
    <meta property="og:description" content={socialDescription} />
    <meta property="og:url" content="https://jessie2e.com/work/sarah-pickett/" />
    <meta property="og:image" content={socialImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta name="twitter:title" content={socialTitle} />
    <meta name="twitter:description" content={socialDescription} />
    <meta name="twitter:image" content={socialImage} />
    <meta name="twitter:image:alt" content={socialImageAlt} />
    <meta property="og:image:alt" content={socialImageAlt} />
    <script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@type':'CreativeWork',name:'Sarah Pickett Voice & Speech Services — Website Design Case Study',url:'https://jessie2e.com/work/sarah-pickett/',description:'Custom website design for a voice-specialized speech-language pathology practice serving Huntsville and Madison, Alabama, with an appointment request form.',creator:{'@type':'Organization',name:'2e Studio',url:'https://jessie2e.com/'},image:'https://jessie2e.com/sarahpickettvoice/web/sarahpicketthero.webp',about:{'@type':'Organization',name:'Sarah Pickett Voice & Speech Services',url:'https://www.sarahpickettvoice.com/',areaServed:[{'@type':'City',name:'Huntsville, Alabama'},{'@type':'City',name:'Madison, Alabama'}]}})}</script>
    <header className="sp-nav"><a href="/" className="sp-logo"><img src="/2elogo.svg" alt="" />2e Studio</a><a href="/#portfolio">← Back to work</a></header>
    <main>
      <section className="sp-hero sp-wrap">
        <p className="sp-label">LIVE CLIENT WEBSITE · VOICE & SPEECH SERVICES</p>
        <div className="sp-hero-grid"><h1>A <span className="sp-first-word">first</span> website.<br /><em>A confident</em><br />next chapter.</h1><div className="sp-intro"><p className="sp-client">Sarah Pickett, SLP</p><p>Clinical expertise. Artistic insight. A digital home that brings both into focus.</p><p>Sarah needed her first website to introduce her voice and speech-language pathology practice in Madison, Alabama, serving the Huntsville area, and make requesting an appointment feel simple.</p><a className="sp-button" href="https://www.sarahpickettvoice.com/" target="_blank" rel="noreferrer">Visit Sarah’s live website ↗</a></div></div>
        <div className="sp-facts"><div><span>CLIENT</span>Sarah Pickett Voice & Speech Services</div><div><span>ROLE</span>Website design + development</div><div><span>FOCUS</span>Discovery · Trust · Appointment requests</div></div>
      </section>
      <section className="sp-wrap sp-cover" aria-label="Website homepage"><Browser><Screenshot name="sarahpicketthero" alt="Sarah Pickett desktop homepage, pairing a portrait with voice rehabilitation and coaching in Madison and Huntsville, Alabama" eager /></Browser></section>
      <section className="sp-wrap sp-section sp-story sp-starting-point"><div><p className="sp-label">01 / THE STARTING POINT</p><h2>Expertise worth finding.<br />A practice worth knowing.</h2></div><div><p>Sarah had the expertise and the content, but no website to bring them together. Her first online home needed to explain her specialized voice and speech services in Huntsville and Madison, Alabama, and give prospective clients a clear way to reach out. Local service language helps visitors understand who she works with and where she offers care.</p><p>The design connects three steps: understand the services, get to know Sarah, and request an appointment. A calm visual system gives the information room to breathe.</p></div></section>
      <section className="sp-tinted"><div className="sp-wrap sp-section sp-story"><div><p className="sp-label">02 / THE DESIGN</p><h2>Professional.<br />Personal.<br /><em>Approachable.</em></h2><p>Deep green, soft blue, warm neutrals, expressive serif headlines, and Sarah’s portrait create a welcoming introduction. Her experience sits alongside her personality, giving visitors a person to connect with.</p><div className="sp-palette" aria-label="Website colors: forest green, warm ivory, pale olive, soft blue, charcoal"><span style={{background:'#385c35'}} /><span style={{background:'#f6f4e9'}} /><span style={{background:'#e6e6c8'}} /><span style={{background:'#9fb8cf'}} /><span style={{background:'#302e2d'}} /></div></div><Browser><Screenshot name="aboutsarahpickettslp" alt="Sarah’s about section introduces her speech-language pathology background and personal approach" /></Browser></div></section>
      <section className="sp-tinted sp-form-band"><div className="sp-wrap sp-section sp-form-section"><div className="sp-form-copy"><p className="sp-label">03 / FROM INTEREST TO INQUIRY</p><h2>A thoughtful introduction.<br />A simple request.</h2><p>The appointment request form is part of the experience, with a dedicated space for visitors to share what they need. It turns the site from a place to read into a place to begin a conversation.</p></div><Browser><picture><source media="(max-width: 640px)" srcSet={`${base}mobileapptform.webp`} width="736" height="1594" /><Screenshot name="speechappointmentrequestform" alt="Sarah Pickett’s appointment request form with contact details, service selection, and a general message field" /></picture></Browser></div></section>
      <section className="sp-wrap sp-section"><div className="sp-section-heading"><div><p className="sp-label">04 / DESIGNED FOR SMALL SCREENS</p><h2>The same care.<br />In the palm of your hand.</h2></div><div><p>A clear introduction, services you can explore, and a direct request path. Swipe through the mobile experience, including a real walkthrough of the services.</p><div className="sp-gallery-controls"><button onClick={() => gallery.current.scrollBy({left:-gallery.current.clientWidth * .8,behavior:'smooth'})} aria-label="Previous mobile screenshots">←</button><button onClick={() => gallery.current.scrollBy({left:gallery.current.clientWidth * .8,behavior:'smooth'})} aria-label="Next mobile screenshots">→</button></div></div></div><div className="sp-mobile-gallery" ref={gallery} tabIndex="0" role="region" aria-label="Swipeable mobile screenshots">{[
          { name: 'mobilehero', label: 'The introduction' },
          { name: 'mobileservices', label: 'Explore the services', video: true },
          { name: 'mobileabout', label: 'Meet Sarah' },
          { name: 'mobilepricing', label: 'Rates & insurance' },
          { name: 'mobileapptform', label: 'Request an appointment' }
        ].map(({ name, label, video }, i) => <figure key={name}><div className="sp-phone">{video ? <MobileWalkthrough /> : <Screenshot name={name} alt={`${label} on Sarah Pickett’s mobile website`} />}</div><figcaption><span>0{i + 1}</span>{label}</figcaption></figure>)}</div></section>
      <section className="sp-quote-section"><div className="sp-wrap"><p className="sp-label">IN SARAH’S WORDS</p><h2>A beautiful website.<br />A simpler process.</h2><p className="sp-quote-attribution">Sarah Pickett · Voice & Speech Services</p><blockquote className="sp-full-testimonial">{quote}</blockquote></div></section>
      <section className="sp-wrap sp-section sp-story sp-result"><div><p className="sp-label">THE RESULT</p><h2>From no website<br />to open for connection.</h2></div><div><p>Sarah now has a live, professional website that brings her services, background, practical information, and appointment requests together. Her testimonial speaks to both the finished design and the experience of getting there.</p><p className="sp-result-note">The outcome shown here is the launched website and Sarah’s feedback. Search rankings, traffic, and inquiry growth have not been measured for this case study.</p><a href="https://www.sarahpickettvoice.com/" target="_blank" rel="noreferrer" className="sp-text-link">Visit Sarah Pickett Voice & Speech Services ↗</a></div></section>
      <section className="sp-cta sp-wrap"><p className="sp-label">YOUR NEXT CHAPTER</p><h2>Let’s give your business<br />a place to be found.</h2><a className="sp-button" href="/#contact">Start a project ↗</a></section>
    </main><StudioFooter />
  </div>;
}
