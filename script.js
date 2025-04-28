// script.js

// —————— ПЕРЕКЛАД ТЕКСТІВ ——————
const translations = {
  uk: {
    mainTitle: "Ласкаво просимо в SyncOra",
    subtitle: "Ваша платформа для сучасної командної роботи",
    taskTitle: "Координація задач",
    taskDesc: "Планування і управління проєктами для злагодженої роботи команди.",
    commTitle: "Комунікація",
    commDesc: "Швидка взаємодія через чати, відеозустрічі та спільні документи.",
    perfTitle: "Моніторинг продуктивності",
    perfDesc: "Аналізуйте ефективність роботи команди в реальному часі.",
    motTitle: "Мотивація",
    motDesc: "Підтримуйте командний дух через челенджі та гейміфікацію."
  },
  en: {
    mainTitle: "Welcome to SyncOra",
    subtitle: "Your platform for modern team collaboration",
    taskTitle: "Task Coordination",
    taskDesc: "Project planning and task management for efficient teamwork.",
    commTitle: "Communication",
    commDesc: "Fast interaction through chats, video meetings, and shared documents.",
    perfTitle: "Performance Monitoring",
    perfDesc: "Analyze team performance in real-time.",
    motTitle: "Motivation",
    motDesc: "Maintain team spirit through challenges and gamification."
  }
};

function changeLanguage(lang) {
  if (!translations[lang]) return;

  document.getElementById('main-title').innerText   = translations[lang].mainTitle;
  document.getElementById('subtitle').innerText     = translations[lang].subtitle;
  document.getElementById('task-title').innerText   = translations[lang].taskTitle;
  document.getElementById('task-desc').innerText    = translations[lang].taskDesc;
  document.getElementById('comm-title').innerText   = translations[lang].commTitle;
  document.getElementById('comm-desc').innerText    = translations[lang].commDesc;
  document.getElementById('perf-title').innerText   = translations[lang].perfTitle;
  document.getElementById('perf-desc').innerText    = translations[lang].perfDesc;
  document.getElementById('mot-title').innerText    = translations[lang].motTitle;
  document.getElementById('mot-desc').innerText     = translations[lang].motDesc;
}

// —————— ГАМБУРГЕР-МЕНЮ ——————
function toggleMenu() {
  const navList = document.querySelector('.navigation ul');
  if (navList) navList.classList.toggle('show');
}

// —————— МОДАЛЬНІ ВІКНА ——————
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// —————— ОБРОБКА ВІКОН ПРИ КЛІКУ ПО ЗОВНІ ——————
window.addEventListener('click', event => {
  ['reportModal', 'taskModal', 'challengeModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal && event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// —————— ОБРОБКА ФОРМИ НА СТОРІНЦІ ЗАВДАНЬ ——————
document.addEventListener('DOMContentLoaded', () => {
  // гамбургер
  const burger = document.querySelector('.menu-toggle');
  if (burger) burger.addEventListener('click', toggleMenu);

  // форма задач
  const taskForm = document.getElementById('taskForm');
  if (taskForm) {
    taskForm.addEventListener('submit', e => {
      e.preventDefault();
      const title       = document.getElementById('taskTitle').value;
      const description = document.getElementById('taskDescription').value;
      const deadline    = document.getElementById('taskDeadline').value;
      const assignee    = document.getElementById('taskAssignee').value;

      // TODO: тут можна додати логіку збереження чи рендерингу списку
      alert(`Завдання "${title}" створено успішно!`);

      closeModal('taskModal');
      taskForm.reset();
    });
  }

  // форма звітів
  const reportForm = document.getElementById('reportForm');
  if (reportForm) {
    reportForm.addEventListener('submit', e => {
      e.preventDefault();
      // аналогічно обробити звіт
      alert('Звіт відправлено!');
      closeModal('reportModal');
      reportForm.reset();
    });
  }

  // форма челенджів
  const challengeForm = document.getElementById('challengeForm');
  if (challengeForm) {
    challengeForm.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('challengeTitle').value;
      alert(`Челендж "${title}" створено!`);
      closeModal('challengeModal');
      challengeForm.reset();
    });
  }
});
