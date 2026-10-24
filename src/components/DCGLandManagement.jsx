import { useEffect, useRef, useState } from 'react';
import StudioFooter from './StudioFooter';
import PageMetadata from './PageMetadata';
import './SarahPickett.css';
import './DCGLandManagement.css';

const base = '/dcg-land-management/';
const live = 'https://dcg-land.com/';
const description = 'A launched client website for DCG Land Management LLC in Oakman, Alabama. Custom design, real jobsite imagery, an interactive comparison, and Formspree estimate inquiries by 2e Studio.';
const sizes = { 'mobile-estimate-form': [390,1000], 'desktop-homepage': [1440,1000], 'desktop-services': [1440,1272], 'before-after-comparison': [1440,779], 'jobsite-gallery': [1440,1280], 'estimate-request-form': [1440,870], 'jobsite-video-detail': [708,498], 'jobsite-gallery-detail': [1180,830], 'jobsite-video': [1440,830], 'service-area': [1440,755] };
function Screenshot({ name, alt, eager = false }) {
  const [width,height] = sizes[name] || [390,844];
  return <img src={`${base}dcg-${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}
function Browser({ children }) {
  return <div className="sp-browser"><div className="sp-toolbar"><span aria-hidden="true">● ● ●</span><span>dcg-land.com</span><span aria-hidden="true">↗</span></div>{children}</div>;
}
function ComparisonLoop() {
  const video = useRef(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const element = video.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const syncPlayback = () => {
      if (visible && !motion.matches && !pausedByUser.current && !document.hidden) {
        element.play().catch(() => {});
      } else {
        element.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: .25 });
    observer.observe(element);
    motion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
      element.pause();
    };
  }, []);
  function toggle() {
    const element = video.current;
    if (element.paused) {
      pausedByUser.current = false;
      element.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      element.pause();
    }
  }
  return <>
    <Browser><video ref={video} id="dcg-comparison-loop" className="dcg-comparison-recording" muted loop playsInline preload="none" poster={`${base}dcg-before-after-walkthrough-poster.webp`} width="1240" height="600" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="Screen recording of DCG’s before-and-after slider moving between an overgrown property and the completed cleanup"><source src={`${base}dcg-before-after-walkthrough.mp4`} type="video/mp4" /><a href={`${base}dcg-before-after-walkthrough.mp4`}>Watch the before-and-after demonstration</a></video></Browser>
    <div className="dcg-loop-controls"><p>Before → after. Recorded on the live website.</p><button onClick={toggle} aria-controls="dcg-comparison-loop" aria-label={playing ? 'Pause comparison animation' : 'Play comparison animation'}>{playing ? 'Pause animation' : 'Play animation'}</button></div>
  </>;
}
export default function DCGLandManagement() {
  const gallery = useRef(null);
  function move(direction, ref = gallery) {
    ref.current.scrollBy({ left: direction * ref.current.clientWidth * .8, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <div className="sp-case dcg-case">
    <PageMetadata title="DCG Land Management Website Case Study | 2e Studio" description={description} path="/work/dcg-land-management/" image="/dcg-land-management/dcg-social-share.jpg" />
    <meta property="og:image:alt" content="DCG Land Management’s live website, featuring equipment imagery and a clear estimate request action" />
    <meta name="twitter:image:alt" content="DCG Land Management website designed and developed by 2e Studio" />
    <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:type" content="image/jpeg" />
    <script type="application/ld+json">{JSON.stringify({ '@context':'https://schema.org', '@type':'CreativeWork', name:'DCG Land Management LLC — Website Design Case Study', description, url:'https://jessie2e.com/work/dcg-land-management/', image:'https://jessie2e.com/dcg-land-management/dcg-social-share.jpg', creator:{'@type':'Organization', name:'2e Studio',url:'https://jessie2e.com/'}, about:{'@type':'Organization', name:'DCG Land Management LLC',url:live,areaServed:'Central and West Alabama'} })}</script>
    <header className="sp-nav"><a href="/" className="sp-logo"><img src="/2elogo.svg" alt="" />2e Studio</a><a href="/#portfolio">← Back to work</a></header>
    <main>
      <div className="dcg-hero-band">
        <section className="sp-wrap sp-hero">
          <p className="sp-label">LIVE CLIENT WEBSITE · LAND MANAGEMENT</p>
          <div className="sp-hero-grid"><h1>Hard work.<br /><em>Clear purpose.</em><br />Built for DCG.</h1><div className="sp-intro"><p className="sp-client">DCG Land Management LLC</p><p>A working business. Real equipment. A website ready to get the conversation started.</p><p>For this Oakman, Alabama business, we designed and developed a custom website that puts the services, the work, and the next step in plain view.</p><a className="sp-button" href={live} target="_blank" rel="noreferrer">Visit DCG’s live website ↗</a></div></div>
          <div className="sp-facts"><div><span>CLIENT</span>DCG Land Management LLC<br />Oakman, Alabama</div><div><span>ROLE</span>Custom website design<br />+ development</div><div><span>STATUS</span>Completed · Launched<br />Paying client project</div></div>
        </section>
        <section className="sp-wrap sp-cover" aria-label="DCG desktop homepage"><Browser><Screenshot name="desktop-homepage" alt="DCG’s desktop homepage with bold service messaging, an excavator on a real jobsite, and prominent estimate and phone buttons" eager /></Browser></section>
      </div>
      <section className="sp-wrap sp-section sp-story"><div><p className="sp-label">01 / THE CHALLENGE</p><h2>A broad capability.<br />A clear introduction.</h2></div><div><p>Land clearing, grading, brush cutting, drainage, cleanup: DCG handles a wide range of property work across Central and West Alabama. The website needed to make that range easy to understand while presenting the business professionally.</p><p>We organized the experience around the questions a property owner brings: Can you handle this job? What does your work look like? How do I request an estimate?</p></div></section>
      <div className="sp-tinted"><section className="sp-wrap sp-section sp-story"><div><p className="sp-label">02 / THE DESIGN DECISIONS</p><h2>Confident by design.<br /><em>Grounded in the work.</em></h2><p>Deep navy, forest green, warm cream, and worksite orange give DCG a rugged, confident presence. Muted gold adds a supporting accent. Large, condensed headlines set a strong hierarchy; straightforward copy keeps the introduction approachable.</p><p>Real equipment imagery anchors the homepage. A quick service summary leads into clearly grouped services, so visitors can move from the big picture to the job they need done.</p><div className="sp-palette" aria-label="DCG palette: deep navy, forest green, worksite orange, warm cream, muted gold"><span style={{background:'#071f35'}} /><span style={{background:'#244a2a'}} /><span style={{background:'#cf682f'}} /><span style={{background:'#f6edd5'}} /><span style={{background:'#c5ab58'}} /></div></div><Browser><Screenshot name="desktop-services" alt="DCG’s service section organizing land clearing, grading, mowing, cleanup, drainage, and additional property services into numbered cards" /></Browser></section></div>
      <section className="sp-wrap sp-section dcg-proof"><div className="sp-section-heading"><div><p className="sp-label">03 / LET THE WORK SPEAK</p><h2>Show the process.<br />See the difference.</h2></div><p>A draggable before-and-after comparison lets visitors explore a property cleanup for themselves. Alongside it, real jobsite footage and a gallery show the equipment, the variety of work, and projects in progress.</p></div><ComparisonLoop /><figure className="dcg-gallery-showcase"><Browser><Screenshot name="jobsite-gallery" alt="DCG’s live website gallery, presenting real excavation, concrete cutting, equipment, construction, and ground-leveling photographs" /></Browser></figure><a className="sp-text-link" href={`${live}#results`} target="_blank" rel="noreferrer">Try the comparison on the live site ↗</a></section>
      <div className="sp-tinted dcg-inquiry-band"><section className="sp-wrap sp-section sp-form-section"><div className="sp-form-copy"><p className="sp-label">04 / FROM PROPERTY QUESTIONS TO PROJECT DETAILS</p><h2>A clear next step.<br />An easier first conversation.</h2><p>Estimate buttons lead directly to an inquiry form integrated with Formspree. Name, contact details, county or city, service selection, and project notes give DCG the basics for a follow-up. Call and text options stay close at hand.</p></div><Browser><picture><source media="(max-width: 640px)" srcSet={`${base}dcg-mobile-estimate-form.webp`} width="390" height="1000" /><Screenshot name="estimate-request-form" alt="DCG’s estimate request form with contact information, property location, service selection, and project details" /></picture></Browser><details className="dcg-area-detail"><summary>Making the service area clear</summary><p>DCG is based in Oakman and serves Central and West Alabama. A dedicated map and county information help visitors understand the coverage, with a direct call option to check a location.</p><Browser><Screenshot name="service-area" alt="DCG’s service-area map and local coverage information for Central and West Alabama" /></Browser></details></section></div>
      <section className="sp-wrap sp-section"><div className="sp-section-heading"><div><p className="sp-label">05 / DESIGNED FOR SMALL SCREENS</p><h2>Ready when<br />the job comes to mind.</h2></div><div><p>The mobile layout brings the introduction, service information, project imagery, and estimate path into a narrow screen. Large actions, a compact menu, and a stacked form keep the next step easy to find.</p><div className="sp-gallery-controls"><button onClick={() => move(-1)} aria-label="Previous mobile screenshots">←</button><button onClick={() => move(1)} aria-label="Next mobile screenshots">→</button></div></div></div><div className="sp-mobile-gallery" ref={gallery} tabIndex="0" role="region" aria-label="Swipeable DCG mobile screenshots" onKeyDown={event => { if (event.target === event.currentTarget && ['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}>{[
        ['mobile-homepage','A direct introduction','DCG’s mobile homepage with large estimate and phone actions'],
        ['mobile-services','Find the right service','DCG’s land clearing and property services on a mobile screen'],
        ['mobile-comparison','Explore the difference','DCG’s before-and-after property comparison on mobile'],
        ['mobile-gallery','See real jobsite work','DCG’s project imagery arranged for a mobile screen'],
        ['mobile-estimate-form','Request an estimate','DCG’s mobile estimate form with labeled fields and a submit button']
      ].map(([name,label,alt],i) => <figure key={name}><div className="sp-phone"><Screenshot name={name} alt={alt} /></div><figcaption><span>0{i+1}</span>{label}</figcaption></figure>)}</div></section>
      <div className="dcg-result-band"><section className="sp-wrap sp-section sp-story"><div><p className="sp-label">THE COMPLETED WEBSITE</p><h2>Real work.<br />A professional home.</h2></div><div><p>DCG now has a successfully launched website at dcg-land.com, bringing its services, project imagery, local coverage, and customer inquiry functionality into one place.</p><p>This completed, paying-client project was designed and developed by 2e Studio. The result shown here is the live website; leads, conversion rates, traffic, and search rankings have not been measured for this case study.</p><a className="sp-button" href={live} target="_blank" rel="noreferrer">Explore DCG Land Management ↗</a></div></section></div>
      <section className="sp-cta sp-wrap"><p className="sp-label">YOUR BUSINESS, CLEARLY PRESENTED</p><h2>Let’s build a website<br />that works for your business.</h2><a className="sp-button" href="/#contact">Start a project with 2e Studio ↗</a></section>
    </main><StudioFooter />
  </div>;
}
