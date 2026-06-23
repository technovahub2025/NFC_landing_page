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
  const [chatOpen, setChatOpen] = useState(false);
  const [openSignal, setOpenSignal] = useState(0);
  const { cursorDotRef, cursorRingRef, heroDotsRef, navRef, toggleTheme } = useLandingInteractions();

  const handleChatToggle = () => {
    setChatOpen((value) => {
      const next = !value;
      if (next) {
        setOpenSignal((signal) => signal + 1);
      }
      return next;
    });
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

      <div className="tvh-root" aria-live="polite">
        <button
          type="button"
          className={`tvh-fab${chatOpen ? ' shake' : ''}`}
          style={{ right: '20px', bottom: '20px' }}
          onClick={handleChatToggle}
          aria-label={chatOpen ? 'Close chat' : 'Open chat'}
        >
          {chatOpen ? <X size={26} strokeWidth={2.2} /> : <MessageCircle size={26} strokeWidth={2.2} />}
        </button>
        <ChatWindow
          open={chatOpen}
          openSignal={openSignal}
          onClose={() => setChatOpen(false)}
          onNudge={() => setChatOpen(true)}
        />
      </div>
    </>
  );
}
