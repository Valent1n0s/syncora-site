// lang.js — централізований файл перекладів SyncOra
const translations = {
  uk: {
    navHome: "Головна",
    navTasks: "Управління",
    navComm: "Комунікація",
    navPerf: "Продуктивність",
    navMot: "Мотивація",
    footerText: "© 2025 SyncOra. Всі права захищені.",
    langButton: "Укр"
  },
  en: {
    navHome: "Home",
    navTasks: "Management",
    navComm: "Communication",
    navPerf: "Performance",
    navMot: "Motivation",
    footerText: "© 2025 SyncOra. All rights reserved.",
    langButton: "En"
  }
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  currentLang = lang;
  const nav = document.querySelectorAll('.navigation ul li a');
  nav[0].innerText = t.navHome;
  nav[1].innerText = t.navTasks;
  nav[2].innerText = t.navComm;
  nav[3].innerText = t.navPerf;
  nav[4].innerText = t.navMot;

  const footer = document.querySelector('footer p');
  if (footer) footer.innerText = t.footerText;

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.innerText = t.langButton;
}