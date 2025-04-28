// script.js

// Усього тексту на сайті
const translations = {
  uk: {
    // Навігація
    navHome:      "Головна",
    navTasks:     "Координація задач",
    navComm:      "Комунікація",
    navPerf:      "Продуктивність",
    navMot:       "Мотивація",

    // Hero
    mainTitle:    "Ласкаво просимо в SyncOra",
    subtitle:     "Ваша платформа для сучасної командної роботи",
    heroDesc:     "Обʼєднуйте команди, керуйте проєктами, аналізуйте продуктивність і підтримуйте мотивацію співробітників. Створено для тих, хто прагне ефективності у віддаленій роботі.",
    btnLearn:     "Докладніше",

    // Можливості (features-intro)
    featuresTitle:    "Наші можливості",
    featuresSubtitle: "Все необхідне для ефективної командної роботи",

    // Картки можливостей
    taskTitle:   "Координація задач",
    taskDesc:    "Планування і управління проєктами для максимальної організованості.",
    commTitle:   "Комунікація",
    commDesc:    "Швидкі чати, відеозустрічі та спільна робота над документами.",
    perfTitle:   "Моніторинг продуктивності",
    perfDesc:    "Трекінг часу, аналітика KPI та автоматичні звіти для прийняття рішень.",
    motTitle:    "Мотивація",
    motDesc:     "Підвищення залученості через гейміфікацію, нагороди та челенджі.",

    // Page headers
    pageTasksTitle:    "Координація задач",
    pageTasksSubtitle: "Плануйте, організовуйте та керуйте завданнями вашої команди ефективно й прозоро.",
    pageCommTitle:     "Комунікація",
    pageCommSubtitle:  "Налаштуйте чати, відеозустрічі та обмін файлами для швидкої взаємодії.",
    pagePerfTitle:     "Продуктивність",
    pagePerfSubtitle:  "Відстежуйте ефективність команди в реальному часі та отримуйте аналітичні звіти.",
    pageMotTitle:      "Мотивація",
    pageMotSubtitle:   "Створюйте челенджі та нагороджуйте співробітників, щоб підтримувати їх ентузіазм.",

    // Action buttons на підсторінках
    actionCreateTask:      "Створити нове завдання",
    actionStartComm:       "Почати комунікацію",
    actionStartMonitoring: "Запустити моніторинг",
    actionStartChallenge:  "Запустити челендж",

    // Модалки
    modalTaskTitle:   "Нове завдання",
    modalTaskBtn:     "Додати завдання",
    modalCommTitle:   "Нова комунікація",
    modalCommBtn:     "Запустити чат",
    modalReportTitle: "Звіт по продуктивності",
    modalReportBtn:   "Згенерувати звіт",

    // Форми
    formTitleLabel:       "Назва",
    formDescLabel:        "Опис",
    formDeadlineLabel:    "Дедлайн",
    formAssigneeLabel:    "Відповідальний",
    formCommTypeLabel:    "Тип комунікації",
    formCommWithLabel:    "Учасники",
    formChallengeName:    "Назва челенджу",
    formChallengeDesc:    "Опис челенджу",

    // Список завдань
    tasksListHeader: "Створені завдання",

    // Футер
    footerText:    "© 2025 SyncOra. Всі права захищені."
  },
  en: {
    navHome:      "Home",
    navTasks:     "Task Coordination",
    navComm:      "Communication",
    navPerf:      "Performance",
    navMot:       "Motivation",

    mainTitle:    "Welcome to SyncOra",
    subtitle:     "Your platform for modern team collaboration",
    heroDesc:     "Unite your teams, manage projects, analyze performance and keep motivation high. Built for those who strive for remote efficiency.",
    btnLearn:     "Learn More",

    featuresTitle:    "Our Features",
    featuresSubtitle: "Everything you need for effective teamwork",

    taskTitle:   "Task Coordination",
    taskDesc:    "Project planning and task management for seamless workflows.",
    commTitle:   "Communication",
    commDesc:    "Fast chats, video meetings and document collaboration.",
    perfTitle:   "Performance Monitoring",
    perfDesc:    "Track time, analyze KPIs and auto-generate reports for decisions.",
    motTitle:    "Motivation",
    motDesc:     "Boost engagement with gamified challenges and rewards.",

    pageTasksTitle:    "Task Coordination",
    pageTasksSubtitle: "Plan, organize and manage your team’s tasks efficiently and transparently.",
    pageCommTitle:     "Communication",
    pageCommSubtitle:  "Set up chats, video calls and file sharing for seamless interaction.",
    pagePerfTitle:     "Performance",
    pagePerfSubtitle:  "Monitor your team’s performance in real time with detailed analytics.",
    pageMotTitle:      "Motivation",
    pageMotSubtitle:   "Create challenges and reward your team to keep motivation high.",

    actionCreateTask:      "Create New Task",
    actionStartComm:       "Start Communication",
    actionStartMonitoring: "Start Monitoring",
    actionStartChallenge:  "Start Challenge",

    modalTaskTitle:   "New Task",
    modalTaskBtn:     "Add Task",
    modalCommTitle:   "New Communication",
    modalCommBtn:     "Start Chat",
    modalReportTitle: "Performance Report",
    modalReportBtn:   "Generate Report",

    formTitleLabel:       "Title",
    formDescLabel:        "Description",
    formDeadlineLabel:    "Deadline",
    formAssigneeLabel:    "Assignee",
    formCommTypeLabel:    "Type",
    formCommWithLabel:    "Participants",
    formChallengeName:    "Challenge Name",
    formChallengeDesc:    "Challenge Description",

    tasksListHeader:  "Created Tasks",

    footerText:    "© 2025 SyncOra. All rights reserved."
  }
};

// Далі у функції applyLanguage(lang) додаєте оновлення всіх цих елементів, наприклад:
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // навігація
  document.querySelector('nav .navigation ul li:nth-child(1) a').innerText = t.navHome;
  document.querySelector('nav .navigation ul li:nth-child(2) a').innerText = t.navTasks;
  document.querySelector('nav .navigation ul li:nth-child(3) a').innerText = t.navComm;
  document.querySelector('nav .navigation ul li:nth-child(4) a').innerText = t.navPerf;
  document.querySelector('nav .navigation ul li:nth-child(5) a').innerText = t.navMot;

  // hero
  document.getElementById('main-title').innerText   = t.mainTitle;
  document.getElementById('subtitle').innerText    = t.subtitle;
  document.getElementById('hero-description').innerText = t.heroDesc;
  document.querySelector('.btn').innerText          = t.btnLearn;

  // intro
  document.querySelector('.section-title').innerText    = t.featuresTitle;
  document.querySelector('.section-subtitle').innerText = t.featuresSubtitle;

  // картки
  document.getElementById('task-title').innerText = t.taskTitle;
  document.getElementById('task-desc').innerText  = t.taskDesc;
  document.getElementById('comm-title').innerText = t.commTitle;
  document.getElementById('comm-desc').innerText  = t.commDesc;
  document.getElementById('perf-title').innerText = t.perfTitle;
  document.getElementById('perf-desc').innerText  = t.perfDesc;
  document.getElementById('mot-title').innerText  = t.motTitle;
  document.getElementById('mot-desc').innerText   = t.motDesc;

  // підсторінки (якщо вони є в DOM)
  const pageTitle = document.querySelector('.page-title h1');
  const pageSub  = document.querySelector('.page-subtitle');
  if (pageTitle && pageSub) {
    // визначаємо за класом body або іншою ознакою, на якій сторінці ми
    const page = document.body.dataset.page; // наприклад <body data-page="tasks">
    if (page === 'tasks') {
      pageTitle.innerText = t.pageTasksTitle;
      pageSub.innerText   = t.pageTasksSubtitle;
      document.querySelector('.task-action .btn-large').innerText = t.actionCreateTask;
    }
    if (page === 'communication') {
      pageTitle.innerText = t.pageCommTitle;
      pageSub.innerText   = t.pageCommSubtitle;
      document.querySelector('.communication-action .btn-large').innerText = t.actionStartComm;
    }
    if (page === 'performance') {
      pageTitle.innerText = t.pagePerfTitle;
      pageSub.innerText   = t.pagePerfSubtitle;
      document.querySelector('.performance-action .btn-large').innerText = t.actionStartMonitoring;
    }
    if (page === 'motivation') {
      pageTitle.innerText = t.pageMotTitle;
      pageSub.innerText   = t.pageMotSubtitle;
      document.querySelector('.motivation-action .btn-large').innerText = t.actionStartChallenge;
    }
  }

  // модалки
  const mod = document.getElementById('taskModal');
  if (mod) {
    document.querySelector('#taskModal .modal-content h2').innerText = t.modalTaskTitle;
    document.querySelector('#taskForm button').innerText             = t.modalTaskBtn;
  }
  // та аналогічно для інших модалок...

  // список завдань
  const listH = document.querySelector('.task-list h2');
  if (listH) listH.innerText = t.tasksListHeader;

  // футер
  document.querySelector('footer p').innerText = t.footerText;

  // оновлюємо текст кнопки перемикання
  document.getElementById('lang-toggle').innerText = (lang === 'uk' ? 'Укр' : 'En');
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
// бургер-меню
function toggleMenu() {
  const navList = document.querySelector('.navigation ul');
  if (navList) {
    navList.classList.toggle('show');
  }
}

// прив’язка обробника після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu-toggle');
  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }
});
