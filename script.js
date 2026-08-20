/* =========================================================
   Ewa Międzobrodzka — site interactions
   Vanilla JS, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Theme toggle (respects system + saved choice) ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var STORAGE_KEY = "em-theme";

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (saved) applyTheme(saved);

  if (toggle) {
    toggle.addEventListener("click", function () {
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    });
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close menu after selecting a link (mobile)
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scrollspy: highlight active nav link ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = {};
  document.querySelectorAll(".nav-menu a[href^='#']").forEach(function (a) {
    navLinks[a.getAttribute("href").slice(1)] = a;
  });

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          Object.keys(navLinks).forEach(function (key) {
            navLinks[key].classList.toggle("active", key === id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Publication filters ---------- */
  var chips = Array.prototype.slice.call(document.querySelectorAll(".pub-filters .chip"));
  var pubs = Array.prototype.slice.call(document.querySelectorAll(".pub"));
  var groups = Array.prototype.slice.call(document.querySelectorAll(".pub-year-group"));
  var emptyMsg = document.querySelector(".pub-empty");

  function filterPubs(tag) {
    var anyVisible = false;
    pubs.forEach(function (pub) {
      var tags = (pub.getAttribute("data-tags") || "").split(/\s+/);
      var show = tag === "all" || tags.indexOf(tag) !== -1;
      pub.hidden = !show;
      if (show) anyVisible = true;
    });
    // Hide year groups that end up empty
    groups.forEach(function (group) {
      var visible = group.querySelectorAll(".pub:not([hidden])").length;
      group.style.display = visible ? "" : "none";
    });
    if (emptyMsg) emptyMsg.hidden = anyVisible;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) {
        c.classList.remove("is-active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");
      filterPubs(chip.getAttribute("data-filter"));
    });
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
