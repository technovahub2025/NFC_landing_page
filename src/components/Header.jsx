import darkLogo from "../assets/dark_logo.png";
import lightLogo from "../assets/light_logo.png";
import { navItems } from "../data/content.js";

export function Header({ isMenuOpen, navRef, onMenuToggle, onThemeToggle }) {
  return (
    <>
      <nav id="navbar" ref={navRef}>
        <div className="nav-logo">
          <div className="nav-logo-mark">
            <img className="nav-logo-img nav-logo-img-light" src={lightLogo} alt="Techno Biz Connect" />
            <img className="nav-logo-img nav-logo-img-dark" src={darkLogo} alt="Techno Biz Connect" />
          </div>
          <div className="logo-text">TECHNO BIZ CONNECT<span>TAP • CONNECT • GROW</span></div>
        </div>
        <ul className="nav-links">
          {navItems.map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="theme-toggle" type="button" aria-label="Toggle theme" onClick={onThemeToggle} />
          <a href="#contact" className="btn-primary">Get Your Card</a>
          <button className="nav-hamburger" type="button" aria-label="Menu" aria-expanded={isMenuOpen} onClick={onMenuToggle}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={isMenuOpen ? "mobile-menu open" : "mobile-menu"}>
        {navItems.map(([href, label]) => (
          <a href={href} key={href} onClick={onMenuToggle}>{label}</a>
        ))}
      </div>
    </>
  );
}
