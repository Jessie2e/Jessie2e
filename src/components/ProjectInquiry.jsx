import { useState } from 'react';

const INITIAL = { name: '', businessName: '', preferredContact: 'Email', email: '', phone: '', message: '', currentSite: '', timeline: '', budget: '', foundUs: '' };

export default function ProjectInquiry() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const change = ({ target }) => setValues(previous => ({ ...previous, [target.name]: target.value }));
  const submit = async event => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xdeozrrz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ inquiryType: 'Project Inquiry', ...values }),
      });
      if (!response.ok) throw new Error('Message not sent');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };
  const field = (name, label, type = 'text', required = false, placeholder = '') => (
    <div className="form-group">
      <label htmlFor={`inquiry-${name}`}>{label}{!required && <span className="form-optional"> · optional</span>}</label>
      <input id={`inquiry-${name}`} name={name} type={type} className="form-control" value={values[name]} onChange={change} required={required} placeholder={placeholder} autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'off'} />
    </div>
  );
  return (
    <div className="contact-form-card inquiry-card" id="project-form">
      {status === 'sent' ? (
        <div className="builder-success" role="status">
          <span className="builder-success-mark" aria-hidden="true">✓</span>
          <h3>Your note is on its way.</h3>
          <p>I’ll follow up by {values.preferredContact.toLowerCase()} to talk through your project, recommend a scope, and put together a clear quote.</p>
        </div>
      ) : (
        <div className="quick-inquiry-panel">
          <p className="builder-eyebrow">Start with a conversation</p>
          <h3>Tell me what you’re building.</h3>
          <p className="builder-step-intro">A few basics are enough. I’ll help you choose what your website needs and send a quote before you commit.</p>
          <form className="contact-form contact-form-editorial quick-inquiry-form" onSubmit={submit}>
            {field('name', 'Your name', 'text', true)}
            {field('businessName', 'Business or project name')}
            {field('foundUs', 'How did you find 2e Studio?', 'text', false, 'Google, ChatGPT, another AI tool, Instagram…')}
            <div className="form-group quick-span-2">
              <label htmlFor="inquiry-preferredContact">How should I get back to you?</label>
              <select id="inquiry-preferredContact" name="preferredContact" className="form-control" value={values.preferredContact} onChange={change}>
                <option>Email</option><option>Text</option><option>Call</option>
              </select>
            </div>
            {field('email', 'Email address', 'email', true)}
            {values.preferredContact !== 'Email' && field('phone', 'Phone number', 'tel', true)}
            <div className="form-group quick-span-2">
              <label htmlFor="inquiry-message">What would you like help with?</label>
              <textarea id="inquiry-message" name="message" className="form-control" value={values.message} onChange={change} required rows={4} placeholder="Tell me about your business and what you want people to do on your site. If you already use Shopify or a booking tool, mention it here." />
            </div>
            <details className="inquiry-extras quick-span-2">
              <summary>A few extra details, if you know them</summary>
              <div className="inquiry-extra-fields">
                {field('currentSite', 'Current website or social page', 'text', false, 'A link, if you have one')}
                {field('timeline', 'When would you like it ready?', 'text', false, 'No rush, this season, a specific date…')}
                {field('budget', 'Budget you have in mind', 'text', false, 'A range is fine, or leave this blank')}
              </div>
            </details>
            {status === 'error' && <p className="inquiry-error quick-span-2" role="alert">Your message didn’t send. Try again, or email <a href="mailto:jessietowey@gmail.com">jessietowey@gmail.com</a>.</p>}
            <button type="submit" className="contact-submit quick-span-2" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send my project note'}<span aria-hidden="true">→</span></button>
            <p className="inquiry-note quick-span-2">This is an inquiry, not a booking or payment. Your final scope and price will be agreed together.</p>
          </form>
        </div>
      )}
    </div>
  );
}
