import darkLogo from "../assets/dark_logo.png";
import lightLogo from "../assets/light_logo.png";

function CardLogoImages() {
  return (
    <>
      <img className="card-logo-img card-logo-img-light" src={lightLogo} alt="Techno Biz Connect" />
      <img className="card-logo-img card-logo-img-dark" src={darkLogo} alt="Techno Biz Connect" />
    </>
  );
}

export function LogoMark({ compact = false }) {
  return (
    <>
      <div className={compact ? "card-badge-small" : "logo-badge"}>
        <CardLogoImages />
      </div>
      <div className={compact ? "card-brand" : "logo-text"}>
        TECHNO BIZ CONNECT<span>TAP · CONNECT · GROW</span>
      </div>
    </>
  );
}

export function ProductCard({ large = false }) {
  if (large) {
    return (
      <div className="big-card">
        <div className="big-card-shine" />
        <div className="big-card-logo">
          <div className="big-card-badge">
            <CardLogoImages />
          </div>
          <div className="big-card-brand">TECHNO BIZ CONNECT<span>TAP · CONNECT · GROW</span></div>
        </div>
        <div className="big-card-name">TECHNO BIZ CONNECT</div>
        <div className="big-card-sub">TAP · CONNECT · GROW · SMARTER NETWORKING</div>
        <div className="big-card-nfc">
          <div className="nfc-rings"><div className="nfc-icon">📶</div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-mockup">
      <div className="card-shine" />
      <div className="card-logo-area">
        <LogoMark compact />
      </div>
      <div className="card-main-name">TECHNO BIZ CONNECT</div>
      <div className="card-tagline">TAP · CONNECT · GROW · SMARTER NETWORKING</div>
      <div className="card-nfc" />
    </div>
  );
}
