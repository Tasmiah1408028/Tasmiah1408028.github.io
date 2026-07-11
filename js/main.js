/* =============================================================
   Renders the portfolio from PORTFOLIO (data.js) and wires up
   all interactions: theme, nav, reveal-on-scroll, filters, etc.
   ============================================================= */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  const D = PORTFOLIO;

  /* ---------- Hero ---------- */
  function renderHero() {
    $("#heroEyebrow").textContent = D.profile.title;
    $("#heroName").textContent = D.profile.name;
    $("#heroTagline").textContent = D.profile.tagline;
    const photo = $("#heroPhoto");
    photo.src = D.profile.photo;
    photo.alt = D.profile.name;

    const socials = [
      { label: "LinkedIn", href: D.profile.linkedin },
      { label: "Google Scholar", href: D.profile.scholar },
      { label: "Email", href: "mailto:" + D.profile.email },
    ];
    const wrap = $("#heroSocials");
    socials.forEach((s) => {
      const a = el("a", null, s.label);
      a.href = s.href;
      if (s.href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      wrap.appendChild(a);
    });

    const stats = $("#heroStats");
    D.stats.forEach((s) => {
      const box = el("div", "stat");
      box.appendChild(el("div", "stat__value", s.value));
      box.appendChild(el("div", "stat__label", s.label));
      stats.appendChild(box);
    });
  }

  /* ---------- About ---------- */
  function renderAbout() {
    $("#aboutSummary").textContent = D.about.summary;
    $("#aboutInterests").textContent = D.about.interests;
    const ul = $("#aboutHighlights");
    D.about.highlights.forEach((h) => ul.appendChild(el("li", null, h)));
  }

  /* ---------- Research ---------- */
  function renderResearch() {
    const grid = $("#researchGrid");
    D.research.forEach((r, i) => {
      const card = el("article", "rcard reveal");
      card.style.transitionDelay = (i % 3) * 0.08 + "s";
      card.innerHTML = `
        <span class="rcard__period">${r.period}</span>
        <span class="rcard__venue">${r.venue}</span>
        <h3 class="rcard__title">${r.title}</h3>
        <p class="rcard__desc">${r.description}</p>
        <div class="rcard__tags">${r.tags
          .map((t) => `<span>${t}</span>`)
          .join("")}</div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Publications + filter ---------- */
  function renderPublications() {
    const list = $("#pubList");
    const types = ["All", ...new Set(D.publications.map((p) => p.type))];
    const filters = $("#pubFilters");

    types.forEach((t, i) => {
      const b = el("button", i === 0 ? "active" : null, t);
      b.dataset.type = t;
      b.addEventListener("click", () => {
        filters.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        list.querySelectorAll(".pub").forEach((pub) => {
          const show = t === "All" || pub.dataset.type === t;
          pub.classList.toggle("hide", !show);
        });
      });
      filters.appendChild(b);
    });

    D.publications.forEach((p, i) => {
      const li = el("li", "pub");
      li.dataset.type = p.type;
      li.innerHTML = `
        <div class="pub__num">${String(i + 1).padStart(2, "0")}</div>
        <div class="pub__body">
          <span class="pub__type">${p.type}</span>
          <h3 class="pub__title">${p.title}</h3>
          <p class="pub__authors">${p.authors} <span class="pub__year">(${p.year})</span></p>
          <p class="pub__venue">${p.venue}</p>
        </div>`;
      list.appendChild(li);
    });
  }

  /* ---------- Experience + Education timelines ---------- */
  function renderExperience() {
    const tl = $("#expTimeline");
    D.experience.forEach((e) => {
      const item = el("div", "tl-item reveal");
      item.innerHTML = `
        <div class="tl-head">
          <span class="tl-role">${e.role}</span>
          <span class="tl-period">${e.period}</span>
        </div>
        <p class="tl-org">${e.org}</p>
        <span class="tl-badge">${e.type}</span>
        <ul class="tl-points">${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>`;
      tl.appendChild(item);
    });

    const edu = $("#eduTimeline");
    D.education.forEach((e) => {
      const item = el("div", "tl-item reveal");
      item.innerHTML = `
        <div class="tl-head">
          <span class="tl-role">${e.degree}</span>
          <span class="tl-period">${e.period}</span>
        </div>
        <p class="tl-org">${e.school}</p>
        ${e.note ? `<p class="tl-note">${e.note}</p>` : ""}`;
      edu.appendChild(item);
    });
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    const grid = $("#skillsGrid");
    D.skills.forEach((s, i) => {
      const card = el("div", "skill-card reveal");
      card.style.transitionDelay = (i % 3) * 0.08 + "s";
      card.innerHTML = `
        <h3>${s.group}</h3>
        <ul>${s.items.map((it) => `<li>${it}</li>`).join("")}</ul>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Teaching + Awards ---------- */
  function renderTeaching() {
    const t = $("#teachList");
    D.teaching.forEach((x) => {
      const item = el("div", "teach-item");
      item.innerHTML = `
        <h4>${x.role}</h4>
        <p class="meta">${x.org} · ${x.period}</p>
        <p>${x.detail}</p>`;
      t.appendChild(item);
    });

    const a = $("#awardList");
    D.awards.forEach((x) => {
      const item = el("div", "award-item");
      item.innerHTML = `
        <span class="yr">${x.year}</span>
        <div><h4>${x.title}</h4><span class="org">${x.org}</span></div>`;
      a.appendChild(item);
    });
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    const actions = [
      { label: "Email me", href: "mailto:" + D.profile.email, primary: true },
      { label: "LinkedIn", href: D.profile.linkedin },
      { label: "Google Scholar", href: D.profile.scholar },
      { label: "Résumé (PDF)", href: D.profile.resumeProfessional },
    ];
    const wrap = $("#contactActions");
    actions.forEach((a) => {
      const btn = el("a", "btn " + (a.primary ? "btn--primary" : "btn--ghost"), a.label);
      btn.href = a.href;
      if (a.href.startsWith("http") || a.href.endsWith(".pdf")) {
        btn.target = "_blank";
        btn.rel = "noopener";
      }
      wrap.appendChild(btn);
    });

    $("#footerText").textContent =
      "© " + "2026" + " " + D.profile.name + " · Built with HTML, CSS & JavaScript";
  }

  /* ---------- Theme toggle ---------- */
  function initTheme() {
    const root = document.documentElement;
    const toggle = $("#themeToggle");
    const stored = localStorage.getItem("th-theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", initial);
    const setIcon = () =>
      (toggle.textContent =
        root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙");
    setIcon();
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("th-theme", next);
      setIcon();
    });
  }

  /* ---------- Navigation: burger, scroll state, active link ---------- */
  function initNav() {
    const nav = $("#nav");
    const burger = $("#navBurger");
    const links = $("#navLinks");

    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        links.classList.remove("open");
      })
    );

    const sections = [...document.querySelectorAll("main section[id], #top")];
    const navAnchors = [...links.querySelectorAll("a")];

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 20);

      // progress bar
      const h = document.documentElement.scrollHeight - window.innerHeight;
      $("#scrollProgress").style.width = (y / h) * 100 + "%";

      // active link
      let current = "";
      sections.forEach((s) => {
        if (s.offsetTop - 120 <= y) current = s.id;
      });
      navAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + current)
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((n) => obs.observe(n));
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderResearch();
    renderPublications();
    renderExperience();
    renderSkills();
    renderTeaching();
    renderContact();
    initTheme();
    initNav();
    initReveal();
  });
})();
