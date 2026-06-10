import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [openSignal, setOpenSignal] = useState(0);

  const {
    cursorDotRef,
    cursorRingRef,
    heroDotsRef,
    navRef,
    toggleTheme,
  } = useLandingInteractions();

  const openChat = () => {
    setOpen(true);
    setOpenSignal((value) => value + 1);
  };

  const handleNudge = () => {
    console.log("Nudge triggered");
  };

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

      <button
        onClick={openChat}
        aria-label="Open chat"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "#2563eb",
          color: "#fff",
          fontSize: "26px",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        }}
      >
        💬
      </button>

      <ChatWindow open={open} openSignal={openSignal} onClose={() => {}} onNudge={handleNudge} />
    </>
  );
}
