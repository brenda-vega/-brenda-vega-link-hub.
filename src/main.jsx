import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const portfolioLinks = [
  {
    number: '01',
    label: 'Strategy & Marketing',
    href: '#strategy-marketing',
    ariaLabel: 'Open Strategy and Marketing portfolio',
  },
  {
    number: '02',
    label: 'Visual Design',
    href: '#visual-design',
    ariaLabel: 'Open Visual Design portfolio',
  },
  {
    number: '03',
    label: 'UI/UX Design',
    href: '#ui-ux-design',
    ariaLabel: 'Open UI/UX Design portfolio',
  },
];

const credentialLinks = [
  {
    label: 'Design CV',
    detail: '2026 · 2PP',
    href: '#design-cv',
    ariaLabel: 'Open Design CV PDF',
  },
  {
    label: 'Strategy CV',
    detail: '2026 · 2PP',
    href: '#strategy-cv',
    ariaLabel: 'Open Strategy CV PDF',
  },
  {
    label: 'Full Bio',
    detail: '2026 · 4PP',
    href: '#full-bio',
    ariaLabel: 'Open Full Bio PDF',
  },
];

function ThemeIcon({ isDark }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="theme-icon">
      {isDark ? (
        <>
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2.5 12h3M18.5 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
        </>
      ) : (
        <path d="M20 15.3A8.2 8.2 0 0 1 8.7 4a7.2 7.2 0 1 0 11.3 11.3Z" />
      )}
    </svg>
  );
}

function SectionHeading({ id, number, title, meta, editorial = false }) {
  return (
    <div className="section-heading">
      <div className="section-title-group">
        <span className="section-number">{number}</span>
        <h2 id={id} className={editorial ? 'editorial-heading' : undefined}>
          {title}
        </h2>
      </div>
      {meta ? <span className="section-meta">{meta}</span> : null}
    </div>
  );
}

function PortfolioList() {
  return (
    <section className="portfolio-section" aria-labelledby="portfolio-heading">
      <SectionHeading id="portfolio-heading" number="03" title="Portafolios" meta="3 / 3" editorial />
      <div className="portfolio-list">
        {portfolioLinks.map((link) => (
          <a className="portfolio-row" href={link.href} aria-label={link.ariaLabel} key={link.label}>
            <span className="row-number">{link.number}</span>
            <span className="row-title">{link.label}</span>
            <span className="row-year">2026</span>
            <span className="row-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="credentials-section" aria-labelledby="credentials-heading">
      <SectionHeading id="credentials-heading" number="04" title="Credentials" meta="3 PDFs" editorial />
      <div className="credential-list">
        {credentialLinks.map((link) => (
          <a className="credential-row" href={link.href} aria-label={link.ariaLabel} key={link.label}>
            <span>
              <strong>{link.label}</strong>
              <small>{link.detail}</small>
            </span>
            <span className="pdf-pill">PDF ⇩</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <SectionHeading id="contact-heading" number="05" title="Get in touch" editorial />
      <div className="contact-list">
        <a className="contact-pill primary-contact" href="#whatsapp" aria-label="Contact Brenda Vega on WhatsApp">
          <span aria-hidden="true" className="whatsapp-mark">
            ◉
          </span>
          WhatsApp
        </a>
        <a className="contact-pill" href="#linkedin" aria-label="Open Brenda Vega LinkedIn profile">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <>
      <header className="site-header" aria-label="Site header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="brenda.vega home">
            brenda.vega
          </a>
          <div className="header-actions">
            <a className="top-link" href="#linkedin" aria-label="Open Brenda Vega LinkedIn profile">
              LinkedIn
            </a>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              aria-pressed={isDark}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              <ThemeIcon isDark={isDark} />
            </button>
          </div>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <p className="discipline">Marketing · Visual Systems · UI/UX</p>
            <h1 id="intro-heading">
              Brenda
              <span>
                Vega<i>.</i>
              </span>
            </h1>
            <div className="title-rule" aria-hidden="true" />
            <p className="intro">
              Sistemas visuales diseñados para comunicar con claridad y <em>dirección.</em>
            </p>
          </div>

          <nav className="hero-actions" aria-label="Primary links">
            <a href="#strategy-marketing" className="button-pill primary-pill">
              Explore Work
            </a>
            <a href="#design-cv" className="button-pill secondary-pill">
              Download CV
            </a>
            <a href="#whatsapp" className="text-link">
              Say Hello <span aria-hidden="true">→</span>
            </a>
          </nav>
        </section>

        <PortfolioList />

        <div className="lower-grid">
          <Credentials />
          <Contact />
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 · Brenda Vega — All Rights Reserved</p>
          <p>V.04 · MX</p>
        </div>
      </footer>
    </>
  );
}

const rootElement = document.getElementById('root');
const root = rootElement.__brendaVegaRoot || createRoot(rootElement);
rootElement.__brendaVegaRoot = root;

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    root.unmount();
    delete rootElement.__brendaVegaRoot;
  });
}
