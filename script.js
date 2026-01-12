/* BetterHealth: minimal JS (menu, theme toggle, form UX, back-to-top) */
(function () {
  const root = document.documentElement;

  // ---- Theme (persisted)
  const themeBtn = document.querySelector("[data-theme-toggle]");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    root.dataset.theme = savedTheme;
  } else {
    // Match system preference by default
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = prefersDark ? "dark" : "light";
  }

  themeBtn?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  // ---- Mobile nav
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navList = document.querySelector("[data-nav-list]");
  navToggle?.addEventListener("click", () => {
    const open = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  // Close menu when clicking a link (mobile)
  navList?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    if (navList.classList.contains("is-open")) {
      navList.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  // ---- Header elevation on scroll
  const header = document.querySelector("[data-elevate]");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-elevated", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Back to top
  const toTop = document.querySelector("[data-to-top]");
  const onTop = () => {
    if (!toTop) return;
    toTop.classList.toggle("is-visible", window.scrollY > 700);
  };
  window.addEventListener("scroll", onTop, { passive: true });
  onTop();
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---- Footer year
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  // ---- Form (client-side UX only)
  const form = document.getElementById("bookingForm");
  const status = document.querySelector("[data-form-status]");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!status) return;

    // This is a static site: show friendly message.
    // To make the form send emails, connect to Formspree or Netlify Forms.
    status.textContent = "Thanks! Your request is ready. To make this form actually send, connect it to Formspree/Netlify (see note on the page).";

    // Reset after a moment so the user can see the message.
    window.setTimeout(() => {
      form.reset();
    }, 1200);
  });
})();
