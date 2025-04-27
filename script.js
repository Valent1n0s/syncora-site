// Переклад текстів
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

// Зміна мови
function changeLanguage(lang) {
  if (!translations[lang]) return;
  document.getElementById('main-title').innerText = translations[lang].mainTitle;
  document.getElementById('subtitle').innerText = translations[lang].subtitle;
  document.getElementById('task-title').innerText = translations[lang].taskTitle;
  document.getElementById('task-desc').innerText = translations[lang].taskDesc;
  document.getElementById('comm-title').innerText = translations[lang].commTitle;
  document.getElementById('comm-desc').innerText = translations[lang].commDesc;
  document.getElementById('perf-title').innerText = translations[lang].perfTitle;
  document.getElementById('perf-desc').innerText = translations[lang].perfDesc;
  document.getElementById('mot-title').innerText = translations[lang].motTitle;
  document.getElementById('mot-desc').innerText = translations[lang].motDesc;
}
<script>
function openModal() {
  document.getElementById('reportModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('reportModal').style.display = 'none';
}

// Закриття модального вікна при кліку поза ним
window.onclick = function(event) {
  const modal = document.getElementById('reportModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
</script>
<script>
function openTaskModal() {
  document.getElementById('taskModal').style.display = 'block';
}

function closeTaskModal() {
  document.getElementById('taskModal').style.display = 'none';
}

// Закриття модального вікна при кліку поза вікном
window.onclick = function(event) {
  const modal = document.getElementById('taskModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Обробка форми
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('taskForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const deadline = document.getElementById('taskDeadline').value;
    const assignee = document.getElementById('taskAssignee').value;
    console.log('Нова задача:', { title, description, deadline, assignee });
    alert('Завдання "' + title + '" створено успішно!');
    closeTaskModal();
    form.reset();
  });
});
</script>
