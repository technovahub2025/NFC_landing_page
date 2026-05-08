import image2Phone from "../assets/image_2.png";
import { ProductCard } from "./Brand.jsx";

export function Hero({ dotsRef }) {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-dots" ref={dotsRef} />
      <div className="hero-sparkles" />
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">SMARTER CONNECTS • STRONGER IMPACT</div>
          <h1 className="hero-h1">ONE TAP.<span className="accent">INFINITE</span>POSSIBILITIES.</h1>
          <p className="hero-p">
            Techno Biz Connect brings your professional identity to life with smart <strong>NFC technology.</strong>{" "}
            Share everything — in one tap.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary btn-lg">Get Your Card →</a>
            <a href="#features" className="btn-outline btn-lg">See How It Works</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-frame">
            <ProductCard showTapLabel />
            <div className="phone-mockup">
              <img className="phone-mockup-img" src={image2Phone} alt="NFC contact preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
