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
        <path
          className="moon-shape"
          transform="translate(2 2) scale(1.25)"
          d="M8 15.904C5.77733 15.904 3.88833 15.1263 2.333 13.571C0.777666 12.0157 0 10.1267 0 7.904C0 5.878 0.66 4.12133 1.98 2.634C3.3 1.14667 4.93467 0.268667 6.884 0C6.938 0 6.991 0.00200004 7.043 0.00600004C7.095 0.01 7.146 0.0156664 7.196 0.0229998C6.85867 0.493666 6.59167 1.017 6.395 1.593C6.19833 2.169 6.1 2.77267 6.1 3.404C6.1 5.182 6.722 6.693 7.966 7.937C9.21 9.181 10.7213 9.80333 12.5 9.804C13.134 9.804 13.7383 9.70567 14.313 9.509C14.8877 9.31233 15.4037 9.04533 15.861 8.708C15.869 8.758 15.8747 8.809 15.878 8.861C15.8813 8.913 15.8833 8.966 15.884 9.02C15.628 10.9687 14.7563 12.603 13.269 13.923C11.7817 15.243 10.026 15.9033 8 15.904ZM7.999 14.904C9.46567 14.904 10.7823 14.4997 11.949 13.691C13.1157 12.8823 13.9657 11.8283 14.499 10.529C14.1657 10.6123 13.8323 10.679 13.499 10.729C13.1657 10.779 12.8323 10.804 12.499 10.804C10.4497 10.804 8.704 10.0833 7.262 8.642C5.82 7.20067 5.09933 5.45467 5.1 3.404C5.1 3.07067 5.125 2.73733 5.175 2.404C5.225 2.07067 5.29167 1.73733 5.375 1.404C4.075 1.93733 3.02067 2.78733 2.212 3.954C1.40333 5.12067 0.999333 6.43733 1 7.904C1 9.83733 1.68333 11.4873 3.05 12.854C4.41667 14.2207 6.06567 14.904 7.999 14.904Z"
        />
      )}
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="download-icon">
      <path d="M8 2.5v6.2" />
      <path d="m5.6 6.7 2.4 2.4 2.4-2.4" />
      <path d="M3.3 10.2v2.4h9.4v-2.4" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="whatsapp-icon">
      <path d="M11.6282 1.125C5.82134 1.13135 1.11866 5.84131 1.12501 11.6451C1.12649 13.4063 1.57123 15.1389 2.4183 16.6833L1.61213 21.635L6.56643 20.8291C11.6527 23.6175 18.0385 21.7575 20.8284 16.6735C23.6183 11.5895 21.7576 5.20794 16.671 2.41908C15.1255 1.57172 13.391 1.12669 11.6282 1.125ZM6.37589 5.89601H9.23903C9.36861 5.89601 9.49288 5.94745 9.58451 6.03903C9.67614 6.13061 9.72762 6.25482 9.72762 6.38433C9.71158 7.03557 9.82107 7.68381 10.0501 8.29371C10.1487 8.49788 10.1704 8.73073 10.1112 8.94959C10.052 9.16844 9.91576 9.3586 9.72762 9.48524L8.72601 10.4619C9.17012 11.3287 9.75081 12.1185 10.4458 12.801C11.1232 13.507 11.9102 14.0989 12.7764 14.5541L13.7536 13.553C14.2422 13.0647 14.4669 13.0647 14.9458 13.2308C15.5561 13.4596 16.2045 13.5691 16.8561 13.553C16.9838 13.559 17.1047 13.6123 17.1951 13.7027C17.2855 13.793 17.3388 13.9138 17.3448 14.0414V16.9031C17.3388 17.0306 17.2855 17.1514 17.1951 17.2417C17.1047 17.332 16.9838 17.3854 16.8561 17.3913C13.9821 17.2663 11.2577 16.0754 9.21459 14.0511C7.18615 12.0113 5.99412 9.28707 5.87263 6.41364C5.87381 6.27923 5.92674 6.15042 6.02047 6.05402C6.1142 5.95761 6.24149 5.90102 6.37589 5.89601Z" />
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
          <a
            id={link.href.slice(1)}
            className="portfolio-row"
            href={link.href}
            aria-label={link.ariaLabel}
            key={link.label}
          >
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
          <a
            id={link.href.slice(1)}
            className="credential-row"
            href={link.href}
            aria-label={link.ariaLabel}
            key={link.label}
          >
            <span>
              <strong>{link.label}</strong>
              <small>{link.detail}</small>
            </span>
            <span className="pdf-pill">
              PDF
              <DownloadIcon />
            </span>
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
        <a
          id="whatsapp"
          className="contact-pill primary-contact"
          href="#whatsapp"
          aria-label="Contact Brenda Vega on WhatsApp"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a id="linkedin" className="contact-pill" href="#linkedin" aria-label="Open Brenda Vega LinkedIn profile">
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
