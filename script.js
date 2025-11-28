const revealItems = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

revealItems.forEach(item => observer.observe(item));

document.querySelectorAll("[data-tilt]").forEach(card => {
  const strength = 10;
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * strength;
    const ry = ((x - rect.width / 2) / rect.width) * strength;
    card.style.transform = `rotateX(${-rx}deg) rotateY(${ry}deg) translateZ(0)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

const form = document.getElementById("quote-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.reset();
    const toast = document.createElement("div");
    toast.textContent =
      translations[currentLanguage]?.["contact.form.toast"] ||
      translations.sv["contact.form.toast"];
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.padding = "12px 16px";
    toast.style.borderRadius = "12px";
    toast.style.background =
      "linear-gradient(120deg, rgba(255,107,53,0.95), rgba(255,145,71,0.95))";
    toast.style.color = "#0a0f1f";
    toast.style.fontWeight = "700";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
    toast.style.zIndex = "30";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  });
}

const hero = document.querySelector(".hero");
if (hero) {
  hero.addEventListener("pointermove", e => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const percentX = x / rect.width;
    const percentY = y / rect.height;
    hero.style.backgroundPosition = `${percentX * 20}px ${percentY * 20}px`;
  });
}

const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navClose = document.querySelector(".nav-close");
const mobileLinks = document.querySelectorAll(".mobile-links a");
const langButtons = document.querySelectorAll(".lang-btn");

const translations = {
  sv: {
    "meta.title": "Elektrikern i Stockholm | Bright Elteknik",
    "nav.services": "Tjänster",
    "nav.benefits": "Fördelar",
    "nav.emergency": "Jour 24/7",
    "nav.contact": "Kontakt",
    "nav.phone": "08-520 250 00",
    "nav.book": "Boka elektriker",
    "nav.theme": "Byt tema",
    "nav.open": "Öppna meny",
    "nav.close": "Stäng meny",
    "mobile.call": "Ring 08-520 250 00",
    "mobile.call.aria": "Ring Elektrikern i Stockholm",
    "hero.tagline": "LOKAL NÄRVARO • STOCKHOLM",
    "hero.title": "Behöver du en elektriker i Stockholm?",
    "hero.lead1":
      "Behöver ni hjälp av duktiga elektriker som kommer i tid och utför arbetet korrekt? Vi tar hand om omtrådningar, stigarbyten, elarbeten i lägenheter och villor samt jour, laddboxar och servicejobb.",
    "hero.lead2":
      "Sedan 2015 har vi gjort tusentals installationer i Stockholm – från småfix till hela entreprenader. Hör av er för en kostnadsfri offert.",
    "hero.cta.primary": "Boka gratis offert",
    "hero.cta.secondary": "Läs om våra samarbeten",
    "hero.panel.label": "Jourerbjudande",
    "hero.panel.title": "Jour-elektriker på plats inom 60 minuter med fast pris.",
    "hero.panel.metric1": "Jour",
    "hero.panel.metric2": "Certifierat team",
    "hero.panel.metric3": "Svar",
    "hero.panel.metric3caption": "Inom 15 min",
    "hero.panel.metric4": "Alltid",
    "hero.panel.metric4caption": "Certifierade",
    "logoLoop.label": "Betalningslogotyper",
    "services.eyebrow": "Tjänster",
    "services.title": "Tjänster för hem, företag och BRF",
    "services.lead1":
      "Vi utför omtrådningar, stigarbyten, elarbeten i lägenheter och villor samt jour, laddboxar och servicejobb åt företag.",
    "services.lead2":
      "Vi åtar oss både små och stora projekt och lämnar alltid en tydlig offert innan start så att du vet exakt vad arbetet kostar.",
    "services.items.troubleshooting.title": "Jour & felsökning",
    "services.items.troubleshooting.body":
      "Jour-elektriker på plats inom 60 minuter. Fast pris 3 990 kr inkl. ROT – 1 timmes arbete ingår.",
    "services.items.installation.title": "Elarbeten i hemmet",
    "services.items.installation.body":
      "Installera uttag, lampor och dimmers eller byt elcentral och dra om elen i hela hemmet.",
    "services.items.maintenance.title": "Service & entreprenad",
    "services.items.maintenance.body":
      "Regelbundna kontroller, driftgenomgångar och serviceavtal för företag och BRF.",
    "services.items.ev.title": "Laddboxar",
    "services.items.ev.body":
      "Kompletta laddboxlösningar inklusive grävarbeten, betalning och driftsättning.",
    "services.items.panel.title": "Stigarbyten & elcentraler",
    "services.items.panel.body":
      "Byt stigar och centraler tryggt – vi dokumenterar och kvalitetssäkrar hela vägen.",
    "services.items.solar.title": "Energieffektivisering",
    "services.items.solar.body":
      "Vi synar elanläggningen och föreslår smarta åtgärder som sänker förbrukningen.",
    "services.items.lighting.title": "Belysning & Plejd",
    "services.items.lighting.body":
      "Boka belysningskonsult eller låt oss skapa smarta Plejd-scenarion för hem och kontor.",
    "services.items.security.title": "Drift & service",
    "services.items.security.body":
      "Kompletta underhållsavtal där vi ser till att anläggningen fungerar perfekt över tid.",
    "services.items.access.title": "Hyr en elektriker",
    "services.items.access.body":
      "Har du flera småjobb? Hyr in en av våra elektriker med servicebil några timmar.",
    "services.items.homeauto.title": "Smart hem & styrning",
    "services.items.homeauto.body":
      "Integrera belysning, värme och scenarion med app och röststyrning.",
    "services.items.fiber.title": "Belysning för BRF",
    "services.items.fiber.body":
      "Vi beräknar, levererar och installerar belysning i allt från källargångar till restauranger.",
    "services.items.partners.title": "Kontakta oss",
    "services.items.partners.body": "Ring, maila eller fyll i formuläret så återkopplar vi blixtsnabbt.",
    "certs.eyebrow": "Certifierade partners",
    "certs.title": "Vårt arbete backas av ledande certifieringar",
    "certs.lead":
      "Vi kvalitetssäkrar installationerna tillsammans med branschorganisationer och tillsynsmyndigheter.",
    "jour.eyebrow": "EL-Jour 24/7",
    "jour.title": "Vi står alltid till hands för att hjälpa våra kunder",
    "jour.lead": "Allvarligt strömavbrott eller akuta fel? Ring oss direkt så säkrar vi din anläggning.",
    "jour.cta.primary": "Ring akut",
    "jour.cta.secondary": "Kontakt",
    "jour.stat1": "Snabb återkoppling",
    "jour.stat2": "Akut support",
    "jour.stat3": "Elsäkerhet",
    "jour.stat3caption": "Alltid i fokus",
    "benefits.eyebrow": "Fördelar",
    "benefits.title": "Vi garanterar – därför väljer kunderna oss",
    "benefits.items.expertise.title": "Allt under ett tak",
    "benefits.items.expertise.body":
      "Vi erbjuder alla typer av eltjänster samt drift och styrning som behövs för att hålla fastigheter igång.",
    "benefits.items.safety.title": "Hög servicenivå",
    "benefits.items.safety.body":
      "Vi kommer i tid, arbetar enligt svenska elsäkerhetsregler och lämnar arbetsplatsen i toppskick.",
    "benefits.items.tailored.title": "Prisvärda tjänster",
    "benefits.items.tailored.body":
      "Genom smarta inköp och effektivt utförande kan vi erbjuda konkurrenskraftiga priser på kvalitetsmaterial.",
    "benefits.items.payment.title": "Snabb & tydlig offert",
    "benefits.items.payment.body":
      "Alla uppdrag börjar med en kostnadsfri offert så att du vet exakt vad arbetet kostar.",
    "benefits.items.experience.title": "Reco sedan sju år",
    "benefits.items.experience.body":
      "Vi är stolta över att vara rekommenderade av RECO sju år i rad – ett kvitto på nöjda kunder.",
    "sidecard.eyebrow": "Lokal närvaro",
    "sidecard.title": "En elektriker nära dig i Stockholm",
    "sidecard.body":
      "Stockholm är stort och att åka tvärs över stan tar tid. Vi utgår från Enskede men har erfarna elektriker i bland annat Nacka, Hammarby Sjöstad, Huddinge, Värmdö och Nynäshamn – samma team hanterar även jouruppdrag.",
    "sidecard.chips.brf": "Enskede",
    "sidecard.chips.smart": "Nacka",
    "sidecard.chips.fiber": "Hammarby Sjöstad",
    "sidecard.chips.panel": "Huddinge",
    "sidecard.chips.solar": "Värmdö & Nynäshamn",
    "sidecard.payments.title": "Enkla och säkra betalningar",
    "sidecard.payments.swish": "Swish",
    "sidecard.payments.card": "Kort",
    "sidecard.payments.klarna": "Klarna",
    "sidecard.payments.installment": "Delbetalning",
    "sidecard.payments.invoice": "Faktura",
    "guide.eyebrow": "Guiden",
    "guide.title": "Så hittar du rätt elektriker",
    "guide.tip1": "Kontrollera att elföretaget är registrerat hos Elsäkerhetsverket.",
    "guide.tip2": "Säkerställ att elföretaget faktiskt får utföra de arbeten du behöver hjälp med.",
    "guide.tip3": "Be om tydlig offert och tidslinje – vi levererar båda.",
    "process.eyebrow": "Process",
    "process.title": "Vår väg till en trygg installation",
    "process.step1.title": "1. Behov & rådgivning",
    "process.step1.body": "Vi tar in förutsättningar och mål – digitalt eller på plats.",
    "process.step2.title": "2. Design & offert",
    "process.step2.body": "Du får en skräddarsydd lösning med kostnadsfri offert.",
    "process.step3.title": "3. Installation",
    "process.step3.body": "Behöriga elektriker installerar med full dokumentation.",
    "process.step4.title": "4. Överlämning",
    "process.step4.body": "Genomgång, egenkontroll och support när du behöver den.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Kontakta Elektrikern i Stockholm",
    "contact.jour.label": "Jour",
    "contact.jour.caption": "Jour 24/7 – 08-520 250 00",
    "contact.email.label": "E-post",
    "contact.address.label": "Besöksadress",
    "contact.address.street": "Heliosgatan 45<br>120 63 Stockholm",
    "contact.address.hours": "Mån–fre 07:30–17:30",
    "contact.cta.mail": "Maila info@brightel.se",
    "contact.cta.call": "Ring 08-520 250 00",
    "contact.form.title": "Snabb offert",
    "contact.form.name": "Namn",
    "contact.form.namePlaceholder": "Ditt namn",
    "contact.form.email": "E-post",
    "contact.form.emailPlaceholder": "din@epost.se",
    "contact.form.service": "Vilken tjänst gäller det?",
    "contact.form.options.default": "Välj alternativ",
    "contact.form.options.troubleshooting": "Jour & felsökning",
    "contact.form.options.installation": "Elarbeten i hemmet",
    "contact.form.options.ev": "Laddbox",
    "contact.form.options.solar": "Energieffektivisering",
    "contact.form.options.panel": "Service & entreprenad",
    "contact.form.options.other": "Annat",
    "contact.form.message": "Beskriv behovet",
    "contact.form.messagePlaceholder": "Kort beskrivning...",
    "contact.form.submit": "Skicka",
    "contact.form.note":
      "Beskriv vad du vill ha hjälp med så återkopplar vi blixtsnabbt – alltid med en kostnadsfri offert.",
    "contact.form.toast": "Tack! Vi hör av oss inom kort och bekräftar din förfrågan.",
    "footer.heading": "Elektrikern i Stockholm",
    "footer.body": "Bright Elteknik – lokala elektriker som levererar jour, installationer och service sedan 2015.",
    "footer.start": "Start",
    "footer.copy": "© 2025 Bright Elteknik. Alla rättigheter förbehållna.",
    "lang.group": "Språk",
    "lang.sv-label": "Visa svenska",
    "lang.en-label": "Visa engelska"
  },
  en: {
    "meta.title": "Elektrikern i Stockholm | Bright Elteknik",
    "nav.services": "Services",
    "nav.benefits": "Benefits",
    "nav.emergency": "Emergency 24/7",
    "nav.contact": "Contact",
    "nav.phone": "Call 08-520 250 00",
    "nav.book": "Book an electrician",
    "nav.theme": "Toggle theme",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "mobile.call": "Call 08-520 250 00",
    "mobile.call.aria": "Call Elektrikern i Stockholm",
    "hero.tagline": "LOCAL PRESENCE • STOCKHOLM",
    "hero.title": "Need an electrician in Stockholm?",
    "hero.lead1":
      "Need electricians who show up on time and complete the work correctly? We handle rewirings, riser replacements, apartments, villas, on-call jobs and service assignments for businesses.",
    "hero.lead2":
      "Since 2015 we have completed thousands of installations across Stockholm – everything from small fixes to full-scale projects. Reach out for a free quote.",
    "hero.cta.primary": "Book a free quote",
    "hero.cta.secondary": "See our partnerships",
    "hero.panel.label": "Emergency offer",
    "hero.panel.title": "On-call electricians on site within 60 minutes at a fixed price.",
    "hero.panel.metric1": "On-call",
    "hero.panel.metric2": "Certified team",
    "hero.panel.metric3": "Response",
    "hero.panel.metric3caption": "Within 15 min",
    "hero.panel.metric4": "Always",
    "hero.panel.metric4caption": "Certified",
    "logoLoop.label": "Payment logos",
    "services.eyebrow": "Services",
    "services.title": "Services for homes, HOAs and companies",
    "services.lead1":
      "We take care of rewiring, riser replacements, residential work, on-call services, EV chargers and service contracts.",
    "services.lead2":
      "Every assignment starts with a clear quote so you know exactly what the work will cost.",
    "services.items.troubleshooting.title": "Emergency & troubleshooting",
    "services.items.troubleshooting.body":
      "On-call electricians on site within 60 minutes. Fixed price SEK 3,990 (ROT) including one hour of work.",
    "services.items.installation.title": "Residential electrical work",
    "services.items.installation.body":
      "Install outlets, lighting and dimmers or replace the electrical panel and rewire entire homes.",
    "services.items.maintenance.title": "Service & contracts",
    "services.items.maintenance.body":
      "Scheduled inspections, operations reviews and service agreements for businesses and HOAs.",
    "services.items.ev.title": "EV chargers",
    "services.items.ev.body":
      "Complete EV charging solutions including groundwork, payment handling and commissioning.",
    "services.items.panel.title": "Risers & panels",
    "services.items.panel.body":
      "Safe replacement of risers and panels with full documentation and quality assurance.",
    "services.items.solar.title": "Energy efficiency",
    "services.items.solar.body":
      "We review your installation and suggest smart actions that reduce consumption.",
    "services.items.lighting.title": "Lighting & Plejd",
    "services.items.lighting.body":
      "Book a lighting consultant or let us create smart Plejd scenes for homes and offices.",
    "services.items.security.title": "Operations & service",
    "services.items.security.body":
      "Comprehensive maintenance contracts to keep your electrical systems running flawlessly.",
    "services.items.access.title": "Hire an electrician",
    "services.items.access.body":
      "Need to cross off multiple small tasks? Hire one of our electricians with a service van for a few hours.",
    "services.items.homeauto.title": "Smart home & control",
    "services.items.homeauto.body":
      "Integrate lighting, heating and scenes via app or voice control.",
    "services.items.fiber.title": "Lighting for HOAs",
    "services.items.fiber.body":
      "We calculate, deliver and install lighting for everything from stairwells to restaurants.",
    "services.items.partners.title": "Get in touch",
    "services.items.partners.body": "Call, email or use the form and we will get back to you quickly.",
    "certs.eyebrow": "Certified partners",
    "certs.title": "Our work is backed by leading certifications",
    "certs.lead": "We ensure quality together with industry organizations and authorities.",
    "jour.eyebrow": "Emergency electricians 24/7",
    "jour.title": "We are always ready to support our customers",
    "jour.lead": "Serious outage or urgent fault? Call us right away and we will secure your system.",
    "jour.cta.primary": "Emergency call",
    "jour.cta.secondary": "Contact",
    "jour.stat1": "Rapid response",
    "jour.stat2": "Emergency support",
    "jour.stat3": "Electrical safety",
    "jour.stat3caption": "Always in focus",
    "benefits.eyebrow": "Benefits",
    "benefits.title": "We guarantee – that's why customers choose us",
    "benefits.items.expertise.title": "Everything under one roof",
    "benefits.items.expertise.body":
      "All types of electrical services plus operations and control to keep your property running.",
    "benefits.items.safety.title": "High service level",
    "benefits.items.safety.body":
      "We arrive on time, follow Swedish electrical safety rules and leave the site spotless.",
    "benefits.items.tailored.title": "Cost-effective",
    "benefits.items.tailored.body":
      "Efficient execution and smart purchasing let us offer competitive prices on quality material.",
    "benefits.items.payment.title": "Fast & clear quotes",
    "benefits.items.payment.body":
      "Every job starts with a free quote so you know the exact cost before we begin.",
    "benefits.items.experience.title": "Reco recommended",
    "benefits.items.experience.body":
      "Proud to be recommended by RECO seven years in a row – proof of satisfied customers.",
    "sidecard.eyebrow": "Local presence",
    "sidecard.title": "An electrician close to you in Stockholm",
    "sidecard.body":
      "Based in Enskede with teams in Nacka, Hammarby Sjöstad, Huddinge, Värmdö and Nynäshamn – the same electricians also cover emergency calls.",
    "sidecard.chips.brf": "Enskede",
    "sidecard.chips.smart": "Nacka",
    "sidecard.chips.fiber": "Hammarby Sjöstad",
    "sidecard.chips.panel": "Huddinge",
    "sidecard.chips.solar": "Värmdö & Nynäshamn",
    "sidecard.payments.title": "Simple and secure payments",
    "sidecard.payments.swish": "Swish",
    "sidecard.payments.card": "Card",
    "sidecard.payments.klarna": "Klarna",
    "sidecard.payments.installment": "Installments",
    "sidecard.payments.invoice": "Invoice",
    "guide.eyebrow": "Guide",
    "guide.title": "How to choose the right electrician",
    "guide.tip1": "Check that the company is registered with the Swedish Electrical Safety Agency.",
    "guide.tip2": "Make sure they are authorized to perform the work you need.",
    "guide.tip3": "Ask for a clear quote and timeline – we deliver both.",
    "process.eyebrow": "Process",
    "process.title": "Our path to a safe installation",
    "process.step1.title": "1. Needs & consultation",
    "process.step1.body": "We review requirements and goals – remotely or on site.",
    "process.step2.title": "2. Design & quote",
    "process.step2.body": "You receive a tailored solution with a free quote.",
    "process.step3.title": "3. Installation",
    "process.step3.body": "Licensed electricians install with full documentation.",
    "process.step4.title": "4. Handover",
    "process.step4.body": "Walkthrough, quality control and support whenever you need it.",
    "contact.eyebrow": "Contact",
    "contact.title": "Contact Elektrikern i Stockholm",
    "contact.jour.label": "Emergency",
    "contact.jour.caption": "On-call 24/7 – 08-520 250 00",
    "contact.email.label": "Email",
    "contact.address.label": "Address",
    "contact.address.street": "Heliosgatan 45<br>120 63 Stockholm",
    "contact.address.hours": "Mon–Fri 07:30–17:30",
    "contact.cta.mail": "Email info@brightel.se",
    "contact.cta.call": "Call 08-520 250 00",
    "contact.form.title": "Quick quote",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "you@email.com",
    "contact.form.service": "Which service do you need?",
    "contact.form.options.default": "Choose option",
    "contact.form.options.troubleshooting": "Emergency & troubleshooting",
    "contact.form.options.installation": "Residential electrical work",
    "contact.form.options.ev": "EV charger",
    "contact.form.options.solar": "Energy efficiency",
    "contact.form.options.panel": "Service & contracts",
    "contact.form.options.other": "Other",
    "contact.form.message": "Describe your need",
    "contact.form.messagePlaceholder": "Short description...",
    "contact.form.submit": "Send",
    "contact.form.note": "Tell us what you need and we will get back to you quickly with a free quote.",
    "contact.form.toast": "Thank you! We will be in touch shortly.",
    "footer.heading": "Elektrikern i Stockholm",
    "footer.body": "Bright Elteknik – local electricians delivering emergency, installation and service since 2015.",
    "footer.start": "Home",
    "footer.copy": "© 2025 Bright Elteknik. All rights reserved.",
    "lang.group": "Language",
    "lang.sv-label": "View Swedish content",
    "lang.en-label": "View English content"
  }
};

let currentLanguage = "sv";

const applyLanguage = lang => {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang]?.[key];
    if (value === undefined) return;
    const target = el.dataset.i18nTarget || "text";
    if (target === "text") {
      el.textContent = value;
    } else if (target === "html") {
      el.innerHTML = value;
    } else {
      el.setAttribute(target, value);
    }
  });
  langButtons.forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("schibler-lang", lang);
};

const storedLanguage = localStorage.getItem("schibler-lang");
applyLanguage(storedLanguage || "sv");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang || "sv");
  });
});

const setMenuState = open => {
  if (!mobileMenu) return;
  mobileMenu.classList.toggle("active", open);
  document.body.classList.toggle("menu-open", open);
  if (navToggle) navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
};

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => setMenuState(!mobileMenu.classList.contains("active")));
}

if (navClose) {
  navClose.addEventListener("click", () => setMenuState(false));
}

mobileMenu?.addEventListener("click", e => {
  if (e.target === mobileMenu) setMenuState(false);
});

mobileLinks.forEach(link => link.addEventListener("click", () => setMenuState(false)));

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const applyTheme = theme => {
  root.classList.toggle("light", theme === "light");
  if (themeToggle) {
    themeToggle.textContent = theme === "light" ? "🏙️" : "🌇";
    themeToggle.dataset.theme = theme;
  }
};

themeToggle?.addEventListener("click", () => {
  const nextTheme = themeToggle.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
});

const heroVideo = document.querySelector(".hero-video");
if (heroVideo) {
  const sources = (heroVideo.dataset.sources || "")
    .split(",")
    .map(src => src.trim())
    .filter(Boolean);
  let currentVideo = 0;

  const playCurrentVideo = () => {
    if (!sources.length) return;
    heroVideo.src = sources[currentVideo];
    heroVideo.load();
    const playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {});
    }
  };

  heroVideo.addEventListener("ended", () => {
    currentVideo = (currentVideo + 1) % sources.length;
    playCurrentVideo();
  });

  playCurrentVideo();
}

const heroPanel = document.querySelector(".hero-panel");
const heroSection = document.querySelector(".hero");
const heroPanelPlaceholder = document.getElementById("hero-panel-placeholder");

const relocateHeroPanel = () => {
  if (!heroPanel || !heroSection || !heroPanelPlaceholder) return;
  if (window.innerWidth <= 720) {
    if (heroPanel.parentElement !== heroPanelPlaceholder) {
      heroPanelPlaceholder.appendChild(heroPanel);
    }
  } else if (heroPanel.parentElement !== heroSection) {
    heroSection.appendChild(heroPanel);
  }
};

relocateHeroPanel();
window.addEventListener("resize", relocateHeroPanel);
