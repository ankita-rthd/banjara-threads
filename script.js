/* Banjara Art Showcase — shared behavior
 * - Sticky nav scroll state
 * - Mobile hamburger toggle (with click-outside + Escape)
 * - Reveal-on-scroll via IntersectionObserver
 * Vanilla JS; no dependencies.
 */
(() => {
  "use strict";

  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  // ---- 1. Scroll state on nav ----
  if (nav) {
    const handleScroll = () => {
      if (window.scrollY > 24) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  // ---- 2. Mobile hamburger ----
  if (nav && navToggle) {
    const closeNav = () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    const openNav = () => {
      nav.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
    };
    navToggle.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) closeNav();
      else openNav();
    });
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("is-open")) return;
      if (e.target === navToggle || navToggle.contains(e.target)) return;
      if (navList && navList.contains(e.target)) {
        // let the link fire, then close
        if (e.target.tagName === "A") setTimeout(closeNav, 50);
        return;
      }
      closeNav();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  // ---- 3. Reveal on scroll ----
  const revealTargets = document.querySelectorAll(".reveal");
  if (revealTargets.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // ---- 4. Footer year ----
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
