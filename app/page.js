'use client';

import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleWatchDemo = () => {
  setShowVideoModal(true);
};

  const features = [
    {
      title: "Haptic Navigation",
      description: "Eye-free turn-by-turn guidance through intuitive vibration patterns. Navigate safely without looking at your screen.",
      icon: "⟳"
    },
    {
      title: "Accident Detection",
      description: "Advanced gyroscope and IMU sensors detect abnormal tilts and crashes, triggering instant SOS alerts.",
      icon: "⚡"
    },
    {
      title: "Fleet Intelligence",
      description: "Real-time telematics, behavior analytics, and carbon tracking for modern mobility platforms.",
      icon: "◉"
    },
    {
      title: "Group Sync",
      description: "Leader-follower route coordination for seamless group rides and delivery coordination.",
      icon: "⊙"
    }
  ];

  const stats = [
    { value: "6-10hrs", label: "Daily rider exposure" },
    { value: "100K+", label: "Gig riders in India" },
    { value: "40%", label: "Accident reduction potential" }
  ];

  return (
    <div className="page-container">
      {/* Navigation */}
    return (
  <div className="page-container">
    {/* Video Modal */}
    {showVideoModal && (
      <div className="video-modal" onClick={() => setShowVideoModal(false)}>
        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowVideoModal(false)}>✕</button>
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/z8aba3sh2T0?autoplay=1"
              title="Gripz AI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    )}

    {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">GRIPZ</span>
            <span className="logo-ai">AI</span>
          </div>
          <div className="nav-links">
            <a href="#product">Product</a>
            <a href="#technology">Technology</a>
            <a href="#contact" className="contact-btn">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          DeepTech Mobility
        </div>
        <h1 className="hero-title">
          Intelligence at
          <br />
          <span className="gradient-text">Your Fingertips</span>
        </h1>
        <p className="hero-subtitle">
          The world's first IoT-enabled smart handlebar grip, transforming<br />
          two-wheelers into intelligent, connected, and safer mobility systems.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={handleWatchDemo}>Join Beta Program</button>
          <button className="btn-secondary" onClick={handleWatchDemo}>Watch Demo</button>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">The Challenge</span>
            <h2 className="section-title">Distraction is deadly</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-number">01</div>
              <h3>Screen Dependency</h3>
              <p>Riders constantly glance at phones for navigation, increasing cognitive load and reaction time by 40%.</p>
            </div>
            <div className="problem-card">
              <div className="problem-number">02</div>
              <h3>Gig Economy Risk</h3>
              <p>Delivery riders operate 6-10 hours daily under time pressure, amplifying accident risk exponentially.</p>
            </div>
            <div className="problem-card">
              <div className="problem-number">03</div>
              <h3>No Retrofit Solutions</h3>
              <p>Existing safety tech is either expensive, helmet-bound, or requires vehicle replacement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="product-section" id="product">
        <div className="section-container">
          <div className="product-layout">
            <div className="product-visual">
              <div className="product-mockup">
                <div className="grip-outline">
                  <div className="grip-sensor"></div>
                  <div className="grip-sensor"></div>
                  <div className="grip-sensor"></div>
                  <div className="haptic-pulse"></div>
                </div>
              </div>
            </div>
            <div className="product-info">
              <span className="section-label">Smart Grip System</span>
              <h2 className="section-title">Retrofit intelligence<br />for every handlebar</h2>
              <p className="product-description">
                A universal, vehicle-agnostic grip that embeds haptic motors, 
                gyroscopes, and connectivity directly into the rider's natural touchpoint.
              </p>
              <div className="tech-specs">
                <div className="spec">
                  <div className="spec-icon">●</div>
                  <div>
                    <div className="spec-title">ESP-based MCU</div>
                    <div className="spec-detail">Bluetooth & WiFi connectivity</div>
                  </div>
                </div>
                <div className="spec">
                  <div className="spec-icon">●</div>
                  <div>
                    <div className="spec-title">6-axis IMU</div>
                    <div className="spec-detail">Accident & tilt detection</div>
                  </div>
                </div>
                <div className="spec">
                  <div className="spec-icon">●</div>
                  <div>
                    <div className="spec-title">Haptic Motors</div>
                    <div className="spec-detail">Directional vibration feedback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section" id="technology">
        <div className="section-container">
          <div className="section-header centered">
            <span className="section-label">Core Features</span>
            <h2 className="section-title">Eye-free, intelligent,<br />always connected</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact-section">
        <div className="section-container">
          <div className="impact-layout">
            <div className="impact-content">
              <span className="section-label">Impact</span>
              <h2 className="section-title">Safety meets<br />sustainability</h2>
              <div className="impact-list">
                <div className="impact-item">
                  <div className="impact-icon">↓</div>
                  <div>
                    <h4>Reduce Accidents</h4>
                    <p>Eliminate screen distraction for millions of riders</p>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-icon">↑</div>
                  <div>
                    <h4>Optimize Routes</h4>
                    <p>AI-driven navigation reduces fuel consumption</p>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-icon">○</div>
                  <div>
                    <h4>Enable Innovation</h4>
                    <p>Data platform for fleet optimization & insurance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="impact-visual">
              <div className="carbon-meter">
                <div className="meter-circle">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="2" 
                      strokeDasharray="283" strokeDashoffset="70" transform="rotate(-90 50 50)"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ff88" />
                        <stop offset="100%" stopColor="#0088ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="meter-label">
                    <div className="meter-value">-28%</div>
                    <div className="meter-text">Carbon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to transform<br />your ride?</h2>
            <p className="cta-subtitle">Join our beta program and be among the first to experience intelligent mobility.</p>
            <form className="cta-form">
              <input type="email" placeholder="Enter your email" className="email-input" />
              <button type="submit" className="submit-btn">Get Early Access</button>
            </form>
            <p className="cta-note">For fleet partnerships & enterprise inquiries: <a href="mailto:hello@gripz.ai">hello@gripz.ai</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-text">GRIPZ</span>
              <span className="logo-ai">AI</span>
            </div>
            <p className="footer-tagline">Intelligence at your fingertips</p>
          </div>
          <div className="footer-right">
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#product">Features</a>
              <a href="#technology">Technology</a>
              <a href="#">Pricing</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="mailto:hello@gripz.ai">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Gripz AI. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
