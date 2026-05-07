import { audienceCards, contactItems, features, productTags, stats, whyCards } from "../data/content.js";
import image1 from "../assets/image1.png";
import { ProductCard } from "./Brand.jsx";

export function FeaturesSection() {
  return (
    <section id="features">
      <div className="section-inner features-grid">
        <div className="features-left">
          <span className="label">WHAT IT DOES</span>
          <h2 className="section-title">SMART <span className="accent">NFC</span> BUSINESS CARD</h2>
          <p className="section-sub">Share your contact, social profiles, website, location and more — all with a single tap!</p>
          <div className="features-list">
            {features.map(([icon, title, text]) => (
              <div className="feature-item" key={title}>
                <div className="feature-icon">{icon}</div>
                <div className="feature-text">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="features-visual">
          <div className="features-img">
            <img src={image1} alt="Professional networking" loading="lazy" />
          </div>
          <div className="features-img-badge">⚡ Instant Share</div>
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="why">
      <div className="section-inner">
        <span className="label">WHY CHOOSE US</span>
        <h2 className="section-title">THE <span className="accent">SMART</span> CHOICE</h2>
        <p className="section-sub">Five reasons professionals worldwide are switching to Techno Biz Connect</p>
        <div className="cards-row">
          {whyCards.map(([icon, title, text]) => (
            <div className="why-card" key={title}>
              <div className="why-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBanner() {
  return (
    <div className="stats-banner">
      {stats.map(([target, label]) => (
        <div className="stat-item" key={label}>
          <h3 className="count-stat" data-target={target}>0</h3>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export function ForWhoSection() {
  return (
    <section id="forwho">
      <div className="section-inner">
        <span className="label">PERFECT FOR</span>
        <h2 className="section-title">WHO <span className="accent">NEEDS</span> THIS?</h2>
        <p className="section-sub">From solo entrepreneurs to large enterprises, Techno Biz Connect works for everyone</p>
        <div className="forwho-grid">
          {audienceCards.map(([icon, label, src, alt]) => (
            <div className="forwho-card" key={label}>
              <img src={src} alt={alt} loading="lazy" />
              <div className="forwho-overlay">
                <div className="forwho-label"><span>{icon}</span>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section id="showcase">
      <div className="section-inner">
        <span className="label">THE PRODUCT</span>
        <h2 className="section-title text-center">YOUR CARD. <span className="accent">REINVENTED.</span></h2>
        <p className="section-sub text-center section-sub-center">Sleek. Smart. Unforgettable. One premium NFC card that does it all.</p>
        <div className="showcase-card-wrap">
          <div className="showcase-glow" />
          <ProductCard large />
        </div>
        <div className="tags-row">
          {productTags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="text-center">
          <a href="#contact" className="btn-primary btn-lg">Get Your Smart Card Now →</a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact">
      <div className="section-inner">
        <span className="label text-center label-block">GET IN TOUCH</span>
        <h2 className="section-title text-center">CONNECT <span className="accent">SMART.</span><br />LEAD BETTER.</h2>
        <p className="section-sub text-center contact-sub">Upgrade to a smarter way of networking. Choose Techno Biz Connect.</p>
        <div className="contact-card">
          <div className="contact-info">
            {contactItems.map(([icon, href, label]) => (
              <div className="contact-item" key={href}>
                <span className="contact-emoji">{icon}</span>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  {label}
                </a>
              </div>
            ))}
          </div>
          <div className="contact-cta-wrap">
            <a href="mailto:technovahubcareer@gmail.com" className="btn-primary btn-lg">Order Your Card Now →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-brand">TECHNOVA HUB<span>Empowering Minds · © 2025 Technova Hub. All rights reserved.</span></div>
      <div className="footer-copy">Built with ❤️ for smart professionals</div>
      <div className="footer-tag">TAP · CONNECT · GROW</div>
    </footer>
  );
}
