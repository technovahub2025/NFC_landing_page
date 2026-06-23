import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Header } from "../components/Header.jsx";
import { Hero } from "../components/Hero.jsx";
import ChatWindow from "../components/ChatWindow.jsx";

import {
  ContactSection,
  FeaturesSection,
  Footer,
  ForWhoSection,
  ShowcaseSection,
  StatsBanner,
  WhySection,
} from "../components/Sections.jsx";

import { useLandingInteractions } from "../hooks/useLandingInteractions.js";

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cursorDotRef, cursorRingRef, heroDotsRef, navRef, toggleTheme } = useLandingInteractions();

  return (
    <>
      <div id="cursor-dot" ref={cursorDotRef} />
      <div id="cursor-ring" ref={cursorRingRef} />

      <Header
        isMenuOpen={isMenuOpen}
        navRef={navRef}
        onMenuToggle={() => setIsMenuOpen((value) => !value)}
        onThemeToggle={toggleTheme}
      />

      <main>
        <Hero dotsRef={heroDotsRef} />
        <FeaturesSection />
        <WhySection />
        <StatsBanner />
        <ForWhoSection />
        <ShowcaseSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
