'use client';
import { useState, useEffect, useRef } from 'react';
import './globals.css';

/* ============================================================
   DATA
   ============================================================ */
const FEATURES = [
  { icon: '⟳', title: 'Haptic Navigation',  description: 'Eye-free turn-by-turn guidance through intuitive patented mechanism. Navigate safely without looking at your screen.' },
  { icon: '⚡', title: 'Accident Detection', description: 'Advanced accident detection sensors detect abnormal tilts and crashes, triggering instant SOS alerts.' },
  { icon: '◉', title: 'Fleet Intelligence', description: 'Real-time telematics, behaviour analytics, and carbon tracking for modern mobility platforms.' },
  { icon: '⊙', title: 'Group Sync',         description: 'Leader-follower route coordination for seamless group rides and delivery coordination.' },
];

const STATS = [
  { value: '6 to 10 hrs', label: 'Daily rider screen exposure' },
  { value: '260M+',    label: 'Riders in India' },
  { value: '40%',      label: 'Accident reduction potential' },
];

const SPECS = [
  { name: 'ESP-based MCU', detail: 'Bluetooth & Wi-Fi connectivity for multiple use-cases' },
  { name: 'Eye-Free GPS',    detail: 'No need to see the screen, focus on the route!' },
  { name: 'Integrated Safety', detail: 'Accident and Tilt Detection' },
];

const IMPACT = [
  { icon: '↓', title: 'Reduce Accidents',  desc: 'Eliminate screen distraction for millions of riders' },
  { icon: '↑', title: 'Optimise Routes',   desc: 'AI-driven navigation reduces fuel consumption' },
  { icon: '○', title: 'Enable Innovation', desc: 'Data platform for fleet optimisation & route connects' },
];

const TESTIMONIALS = [
  { quote: 'Gripz can change how gig/delivery fleet operates. Riders can be safer and faster while reducing the accident risks.', name: 'Ravi Sharma',  role: 'Operations Head, SwiftDeliver' },
  { quote: 'The eye-free navigation is a game changer. Riders no longer need to look at their phones. It feels like the future of two-wheeler tech.',          name: 'Priya Mehta',  role: 'Co-Founder, BikeMania' },
  { quote: 'I integrated GripzAI in my vehicle and the eye-free GPS removed the screen dependencies. I can focus while driving.',                    name: 'Ankit Joshi',  role: 'Gig Worker, Zomato' },
  { quote: 'Finally a safety device that does not require replacing the whole vehicle. Retrofit, plug in, done. Brilliant.',                             name: 'Deepa Nair',   role: 'Founder, GreenGo Mobility' },
  { quote: 'This helped me drive quickly and deliver my parcels quickly.',                     name: 'Suresh Nagaraju', role: 'Gig Worker, InstaMark/Rapido' },
];

const PARTNER_LOGOS = [
  { name: 'Partner 1', src: '/logo1.png' },
  { name: 'Partner 2', src: '/logo2.png' },
  { name: 'Partner 3', src: '/logo3.png' },
];
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
  const [carbonVisible, setCarbonVisible] = useState(false);
  const carbonRef = useRef(null);

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

  /* Scroll-triggered carbon meter animation */
  useEffect(() => {
    const el = carbonRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCarbonVisible(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Form submit */
  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  /* CHANGE 1 — scroll without changing the URL.
     e.preventDefault() stops the browser from adding #product / #contact to the URL.
     The page still glides smoothly to the right spot. */
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

      {/* ── NAVIGATION ── */}
      {/* CHANGE 1 — every nav link now calls scrollTo() and prevents the URL from changing */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="/" className="nav-logo" aria-label="Gripz AI home">
            {/* CHANGE 2 — logo height controlled by nav-logo-img in CSS (bumped to 42px) */}
            <img src="/logo.png" alt="Gripz AI" className="nav-logo-img" />
          </a>

          <div className="nav-pill">
            <a href="#product"    onClick={(e) => { e.preventDefault(); scrollTo('product');    }}>Product</a>
            <a href="#technology" onClick={(e) => { e.preventDefault(); scrollTo('technology'); }}>Technology</a>
            <a href="#contact"    onClick={(e) => { e.preventDefault(); scrollTo('contact');    }}>Contact</a>
          </div>

          <a href="#contact" className="nav-right-cta btn btn-primary"
             onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Join Beta
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-glow" aria-hidden="true" />

        <a href="https://msh.meity.gov.in/schemes/tide" target="_blank" rel="noreferrer" className="yc-badge">
          <span className="yc-shine" aria-hidden="true" />
          <span className="yc-text">Backed by Government of India</span>
        </a>

        <h1 className="hero-title">
          Intelligence at
          <br />
          <span className="gradient-text">Your Fingertips</span>
        </h1>

        <p className="hero-sub">
         The first patented central nervous system for two/three-wheelers, 
         turning your handlebar into an intelligent command center that feels the road, 
         reads the rider, and responds before danger does.
         </p>

        {/* CHANGE 6 — removed flex-wrap so buttons never wrap and push the scroll line out of place */}
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
            Join Beta Program
          </button>
          <button className="btn btn-ghost" onClick={() => setShowModal(true)}>
            Watch Demo ↗
          </button>
        </div>
      </section>

      {/* ── PARTNER LOGO TICKER ── */}
      {/* CHANGE 3 — label text size + logo size handled in CSS */}
      <section className="ticker-section" aria-label="Partners and investors">
        <p className="ticker-label">Trusted by forward-thinking teams</p>
        <div className="ticker-track">
          <div className="ticker-inner">
            {TICKER_LOGOS.map((logo, i) => (
              <div className="ticker-item" key={i}>
                <img src={logo.src} alt={logo.name} className="ticker-logo" />
              </div>
            ))}
          </div>
        </div>
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
              { n: '02', title: 'Gig Economy Risk',      body: 'Delivery riders operate 6 to 10 hours daily under time pressure, amplifying accident risk exponentially.' },
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
              <img src="/product-grip.png" alt="Gripz AI smart handlebar grip" className="product-img" />
            </div>
            <div className="product-info">
              <span className="label">Smart Grip System</span>
              <h2 id="product-heading" className="section-title">
                Retrofit intelligence
                <br />for every handlebar
              </h2>
              <p className="product-desc">
                A universal, vehicle-agnostic grip that embeds multiple sensors to create physical intelligence and connectivity directly into the rider's natural touchpoint.
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

            {/* CHANGE 4 — strokeWidth bumped from 3 → 7 so the coloured arc is clearly visible */}
            <div className="carbon-wrap" aria-label="28% carbon reduction indicator" ref={carbonRef}>
              <div className="carbon-meter">
                <svg viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <linearGradient id="meterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#4fd1c5" />
                      <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                  <circle cx="100" cy="100" r="88" fill="none" stroke="url(#meterGrad)" strokeWidth="7"
                    strokeLinecap="round" strokeDasharray="553"
                    strokeDashoffset={carbonVisible ? 138 : 553}
                    style={{ transition: carbonVisible ? "stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1) 0.2s" : "none" }}
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
              <form className="beta-form" onSubmit={async function handleSubmit(e) {
  e.preventDefault();
  if (!email) return;
  
  await fetch('https://formspree.io/f/xbdzjyzq', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, company }),
  });
  
  setSubmitted(true);
}} noValidate>
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
              <a href="mailto:hello@gripz.ai">surya@gripz.ai</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── GIANT WORDMARK ── */}
      <div className="wordmark-section" aria-hidden="true">
        <span className="wordmark-text">GRIPZ AI</span>
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer" aria-label="Site footer">
        <div className="footer-main">
          <div className="footer-brand">
            {/* CHANGE 5 — footer logo uses footer-logo-img class which is bigger */}
            <a href="/" style={{ display: 'inline-block', marginBottom: '0.875rem' }}>
              <img src="/logo.png" alt="Gripz AI" className="footer-logo-img" />
            </a>
            <p className="footer-tagline">Intelligence at your fingertips</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#product"    onClick={(e) => { e.preventDefault(); scrollTo('product');    }}>Features</a>
            <a href="#technology" onClick={(e) => { e.preventDefault(); scrollTo('technology'); }}>Technology</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:surya@gripz.ai">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 GripzAI Private Limited. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
