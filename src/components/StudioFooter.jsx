export default function StudioFooter() {
  return <footer className="studio-footer">
    <div className="studio-footer-inner">
      <div className="studio-footer-brand"><a href="/" className="studio-footer-logo"><img src="/2elogo.svg" alt="" /><span>2e Studio</span></a>
      <p className="studio-footer-credit">Designed by 2e Studio</p></div>
      <nav className="studio-footer-actions" aria-label="Footer navigation"><a href="/resources/">Resources</a><a href="/website-care/">Website care</a></nav>
      <p className="studio-footer-notice">© {new Date().getFullYear()} 2e Studio by Jessie Towey. All rights reserved.</p>
      <nav className="studio-footer-social" aria-label="Connect with 2e Studio"><a href="https://linkedin.com/in/jessietowey" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Jessie2e" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:jessietowey@gmail.com">Email</a></nav>
    </div>
  </footer>;
}
