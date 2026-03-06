'use client';

import { useState, useEffect } from 'react';
import './globals.css';

/* ============================================================
   DATA
   ============================================================ */
const FEATURES = [
  { icon: '⟳', title: 'Haptic Navigation',  description: 'Eye-free turn-by-turn guidance through intuitive vibration patterns. Navigate safely without looking at your screen.' },
  { icon: '⚡', title: 'Accident Detection', description: 'Advanced gyroscope and IMU sensors detect abnormal tilts and crashes, triggering instant SOS alerts.' },
  { icon: '◉', title: 'Fleet Intelligence', description: 'Real-time telematics, driving analytics, and carbon tracking for modern mobility platforms.' },
  { icon: '⊙', title: 'Group Sync',         description: 'Leader-follower route coordination for seamless group rides and delivery coordination.' },
];

const STATS = [
  { value: '6 to 10 hrs', label: 'Daily rider screen exposure' },
  { value: '70%+',    label: 'Riders relly on mobile screens for navigation - MoRTH' },
  { value: '40%',      label: 'Accident reduction potential via Gripz AI' },
];

const SPECS = [
  { name: 'ESP-based MCU', detail: 'Bluetooth & Wi-Fi connectivity' },
  { name: '6-axis IMU',    detail: 'Accident & tilt detection' },
  { name: 'Eye Free Navigation', detail: 'Patented Eye Free Technology' },
];

const IMPACT = [
  { icon: '↓', title: 'Reduce Accidents',  desc: 'Eliminate screen distraction for millions of riders' },
  { icon: '↑', title: 'Optimise Routes',   desc: 'AI-driven navigation reduces fuel consumption' },
  { icon: '○', title: 'Enable Innovation', desc: 'Data platform for time optimisation & safety' },
];

const TESTIMONIALS = [
  { quote: 'Gripz can completely change how our gig work force operates. Riders are safer and faster without risk.', name: 'Ravi Sharma',  role: 'Hardware Lead, Temple' },
  { quote: 'The eye free navigation is a game changer. Riders no longer need to look at their phones. It feels like the future of two-wheeler tech.',  name: 'Priya Mehta',  role: 'Co-Founder, ZipRide' },
  { quote: 'We integrated Gripz across 30 bikes in two weeks. The time optimization value was real - anyone can copy a new route from another gig worker as well!.',   name: 'Ankit Joshi',  role: 'CTO, UrbanMile Logistics' },
  { quote: 'Finally a safety device that does not require replacing the whole vehicle. Retrofit, plug in, done. Brilliant.', name: 'Deepa Nair',   role: 'Founder, GreenGo Mobility' },
  { quote: 'The accident detection alone can save many riders. This product is not a nice-to-have but it is essential.',   name: 'Navin Gaur', role: 'COO, IIIT Delhi IC' },
];

/* 
  PARTNER LOGOS — replace src values with your real logo files
  once uploaded to the /public folder. Name them logo1.png, logo2.png, logo3.png
*/
const PARTNER_LOGOS = [
  { name: 'Partner 1', src: '/logo1.png' },
  { name: 'Partner 2', src: '/logo2.png' },
  { name: 'Partner 3', src: '/logo3.png' },
];
// Duplicate for seamless infinite scroll
const TICKER_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function Home() {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showModal,     setShowModal]     = useState(false);
  const [email,         setEmail]         = useState('');
  const [name,          setName]          = useState('');
  const [company,       setCompany]       = useState('');
  const [submitted,     setSubmitted]     = useState(false);

  /* Sticky nav */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  /* Form submit */
  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  /* Smooth scroll to contact */
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>

      {/* ── VIDEO MODAL ── */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Close">✕</button>
            <iframe
              src="https://www.youtube.com/embed/z8aba3sh2T0?autoplay=1"
              title="Gripz AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ── NAVIGATION — macOS liquid glass style, centered links ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo — left */}
          <a href="/" className="nav-logo" aria-label="Gripz AI home">
            <img src="/logo.png" alt="Gripz AI" className="nav-logo-img" />
          </a>

          {/* Centered pill */}
          <div className="nav-pill">
            <a href="#product">Product</a>
            <a href="#technology">Technology</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Right CTA */}
          <a href="#contact" className="nav-right-cta btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
            Join Beta
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-glow" aria-hidden="true" />

        {/* YC Badge with shine */}
        <a href="https://www.ycombinator.com" target="_blank" rel="noreferrer" className="yc-badge">
          <span className="yc-shine" aria-hidden="true" />
          <span className="yc-logo">Y</span>
          <span className="yc-text">Backed by Y Combinator</span>
        </a>

        <div className="hero-badge">
          <span className="badge-dot" aria-hidden="true" />
          <span className="label">DeepTech Mobility</span>
        </div>

        <h1 className="hero-title">
          Intelligence at
          <br />
          <span className="gradient-text">Your Fingertips</span>
        </h1>

        <p className="hero-sub">
          The world's first IoT-enabled smart handlebar grip — transforming
          two-wheelers into intelligent, connected, and safer mobility systems.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Join Beta Program
          </button>
          <button className="btn btn-ghost" onClick={() => setShowModal(true)}>
            Watch Demo ↗
          </button>
        </div>

        {/* Scroll indicator — responsive, hidden on mobile */}
        <div className="hero-scroll" aria-hidden="true" />
      </section>

      {/* ── PARTNER LOGO TICKER ── */}
      <section className="ticker-section" aria-label="Partners">
        <p className="ticker-label label">Trusted by forward-thinking teams</p>
        <div className="ticker-track">
          <div className="ticker-inner">
            {TICKER_LOGOS.map((logo, i) => (
              <div className="ticker-item" key={i}>
                <img src={logo.src} alt={logo.name} className="ticker-logo" />
              </div>
            ))}
          </div>
        </div>
        {/* Fade edges */}
        <div className="ticker-fade-left"  aria-hidden="true" />
        <div className="ticker-fade-right" aria-hidden="true" />
      </section>

      {/* ── PROBLEM ── */}
      <section className="problem-section" aria-labelledby="problem-heading">
        <div className="container">
          <div className="section-header">
            <span className="label">The Challenge</span>
            <h2 id="problem-heading" className="section-title">Distraction is deadly</h2>
          </div>
          <div className="problem-grid">
            {[
              { n: '01', title: 'Screen Dependency',    body: 'Riders constantly glance at phones for navigation, increasing cognitive load and reaction time by 40%.' },
              { n: '02', title: 'Gig Economy Risk',      body: 'Delivery riders operate 6–10 hours daily under time pressure, amplifying accident risk exponentially.' },
              { n: '03', title: 'No Retrofit Solutions', body: 'Existing safety tech is expensive, helmet-bound, or requires a full vehicle replacement.' },
            ].map((card) => (
              <div className="problem-card" key={card.n}>
                <span className="problem-num">{card.n}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section className="product-section section" id="product" aria-labelledby="product-heading">
        <div className="container">
          <div className="product-layout">
            <div className="product-image-wrap">
              <div className="product-image-bg" aria-hidden="true" />
              <img src="/product-grip.png" alt="Gripz AI smart 2/3-Wheeler grip" className="product-img" />
            </div>
            <div className="product-info">
              <span className="label">Smart Grip System</span>
              <h2 id="product-heading" className="section-title">
                Retrofit intelligence
                <br />for every handlebar
              </h2>
              <p className="product-desc">
                A universal, vehicle-agnostic grip that embeds haptic motors,
                gyroscopes, and connectivity directly into the rider's natural touchpoint.
              </p>
              <div className="specs">
                {SPECS.map((s) => (
                  <div className="spec-row" key={s.name}>
                    <div className="spec-dot" aria-hidden="true" />
                    <div>
                      <div className="spec-name">{s.name}</div>
                      <div className="spec-detail">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section section" id="technology" aria-labelledby="features-heading">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Core Features</span>
            <h2 id="features-heading" className="section-title">
              Eye-free, intelligent,
              <br />always connected
            </h2>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`feature-card${activeFeature === i ? ' active' : ''}`}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div className="feature-icon-wrap" aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section" aria-label="Key statistics">
        <div className="container">
          <div className="stats-row">
            {STATS.map((s) => (
              <div className="stat-block" key={s.label}>
                <div className="stat-num">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="impact-section section" aria-labelledby="impact-heading">
        <div className="container">
          <div className="impact-layout">
            <div className="impact-info">
              <span className="label">Impact</span>
              <h2 id="impact-heading" className="section-title">
                Safety meets<br />sustainability
              </h2>
              <div className="impact-list">
                {IMPACT.map((item) => (
                  <div className="impact-item" key={item.title}>
                    <div className="impact-icon" aria-hidden="true">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carbon-wrap" aria-label="28% carbon reduction indicator">
              <div className="carbon-meter">
                <svg viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <linearGradient id="meterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#00ff88" />
                      <stop offset="100%" stopColor="#0077ff" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                  <circle cx="100" cy="100" r="88" fill="none" stroke="url(#meterGrad)" strokeWidth="3"
                    strokeLinecap="round" strokeDasharray="553" strokeDashoffset="138"
                    transform="rotate(-90 100 100)" />
                </svg>
                <div className="carbon-label">
                  <div className="carbon-value">−28%</div>
                  <div className="carbon-desc">Carbon reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section" aria-labelledby="testi-heading">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Testimonials</span>
            <h2 id="testi-heading" className="section-title">
              What our customers<br />are saying
            </h2>
          </div>
        </div>
        <div className="testi-track-wrap">
          {/* Fade edges */}
          <div className="testi-fade-left"  aria-hidden="true" />
          <div className="testi-fade-right" aria-hidden="true" />
          <div className="testi-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars" aria-label="5 stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author">
                  <div className="testi-avatar" aria-hidden="true">{t.name[0]}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / BETA FORM ── */}
      <section className="cta-section" id="contact" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-inner">
            <h2 id="cta-heading" className="section-title">
              Ready to transform<br />your ride?
            </h2>
            <p className="cta-sub">
              Join our beta programme and be among the first to experience intelligent mobility.
            </p>

            {submitted ? (
              <div className="cta-success" role="alert">
                🎉 You're on the list! We'll be in touch soon.
              </div>
            ) : (
              <form className="beta-form" onSubmit={handleSubmit} noValidate>
                <div className="beta-form-row">
                  <div className="beta-form-field">
                    <label htmlFor="beta-name">Full Name</label>
                    <input
                      id="beta-name" type="text" className="cta-input"
                      placeholder="Ravi Sharma"
                      value={name} onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="beta-form-field">
                    <label htmlFor="beta-email">Email Address *</label>
                    <input
                      id="beta-email" type="email" className="cta-input"
                      placeholder="ravi@company.com"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="beta-form-field beta-form-full">
                  <label htmlFor="beta-company">Company / Fleet Name</label>
                  <input
                    id="beta-company" type="text" className="cta-input"
                    placeholder="e.g. SwiftDeliver, ZipRide..."
                    value={company} onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary beta-submit">
                  Get Early Access →
                </button>
              </form>
            )}

            <p className="cta-note">
              Fleet partnerships &amp; enterprise:{' '}
              <a href="mailto:hello@gripz.ai">hello@gripz.ai</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── GIANT WORDMARK (like cubic.dev footer) ── */}
      <div className="wordmark-section" aria-hidden="true">
        <span className="wordmark-text">GRIPZ AI</span>
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer" aria-label="Site footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" style={{ display: 'inline-block', marginBottom: '0.875rem' }}>
              <img src="/logo.png" alt="Gripz AI" className="nav-logo-img" />
            </a>
            <p className="footer-tagline">Intelligence at your fingertips</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#product">Features</a>
            <a href="#technology">Technology</a>
            <a href="#">Pricing</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>
            <a href="mailto:hello@gripz.ai">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Gripz AI. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
