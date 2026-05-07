import { useEffect, useRef } from "react";

export function useLandingInteractions() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const heroDotsRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("tbc-theme");
    document.documentElement.dataset.theme = savedTheme || "light";
  }, []);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    const canUseCustomCursor = window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!dot || !ring || !canUseCustomCursor) return undefined;

    let mx = 0;
    let my = 0;
    let dx = 0;
    let dy = 0;
    let rx = 0;
    let ry = 0;
    let frameId = 0;

    const handlePointerMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const animateCursor = () => {
      dx += (mx - dx) * 0.45;
      dy += (my - dy) * 0.45;
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      dot.style.transform = `translate3d(${dx}px,${dy}px,0) translate(-50%,-50%)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      frameId = requestAnimationFrame(animateCursor);
    };

    const interactiveSelector = "a,button,.why-card,.forwho-card,.feature-item,.tag,.card-mockup,.big-card,.contact-card";
    const updateHoverState = (event) => {
      document.body.classList.toggle("cursor-hover", Boolean(event.target.closest(interactiveSelector)));
    };
    const pressCursor = () => document.body.classList.add("cursor-pressed");
    const releaseCursor = () => document.body.classList.remove("cursor-pressed");

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointermove", updateHoverState, { passive: true });
    document.addEventListener("pointerdown", pressCursor);
    document.addEventListener("pointerup", releaseCursor);
    document.addEventListener("pointerleave", releaseCursor);
    animateCursor();

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointermove", updateHoverState);
      document.removeEventListener("pointerdown", pressCursor);
      document.removeEventListener("pointerup", releaseCursor);
      document.removeEventListener("pointerleave", releaseCursor);
      document.body.classList.remove("cursor-hover");
      document.body.classList.remove("cursor-pressed");
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");
          const siblings = [...entry.target.parentElement.querySelectorAll(".why-card,.forwho-card,.feature-item")];
          siblings.forEach((sibling, index) => {
            window.setTimeout(() => sibling.classList.add("visible"), index * 80);
          });
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(
      ".why-card,.forwho-card,.feature-item,.section-title,.section-sub,.stats-banner,.showcase-card-wrap,.tags-row,.contact-card"
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const target = Number.parseInt(element.dataset.target, 10);
          const isZero = target === 0;
          let current = 0;
          const duration = 1800;
          const step = duration / 60;
          const increment = target / 60;

          const timer = window.setInterval(() => {
            current += increment;
            if (current >= target) {
              element.textContent = `${isZero ? "ZERO" : Math.round(target)}${target === 5000 ? "+" : target === 98 ? "%" : ""}`;
              window.clearInterval(timer);
            } else {
              element.textContent = `${Math.round(current)}${target === 98 ? "%" : target === 5000 ? "+" : ""}`;
            }
          }, step);

          countObserver.unobserve(element);
        });
      },
      { threshold: 0.5 }
    );

    const counters = document.querySelectorAll(".count-stat");
    counters.forEach((counter) => countObserver.observe(counter));
    return () => countObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.boxShadow = window.scrollY > 30 ? "0 4px 30px rgba(0,0,0,0.12)" : "none";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      if (heroDotsRef.current) {
        heroDotsRef.current.style.transform = `translate(${x * 0.3}px,${y * 0.3}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const tiltTargets = document.querySelectorAll(".card-mockup,.big-card,.features-img");
    const handleTilt = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      event.currentTarget.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
    };
    const resetTilt = (event) => {
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    };

    tiltTargets.forEach((target) => {
      target.addEventListener("pointermove", handleTilt);
      target.addEventListener("pointerleave", resetTilt);
    });

    return () => {
      tiltTargets.forEach((target) => {
        target.removeEventListener("pointermove", handleTilt);
        target.removeEventListener("pointerleave", resetTilt);
      });
    };
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("tbc-theme", html.dataset.theme);
  };

  return {
    cursorDotRef,
    cursorRingRef,
    heroDotsRef,
    navRef,
    toggleTheme,
  };
}
