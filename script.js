// 🔔 Надсилання в Slack при створенні задачі / челенджу
async function notifySlack(message) {
  await fetch("https://hooks.slack.com/services/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", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: message })
  });
}

import { db, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from './firebase-config.js';

const tasksRef = collection(db, 'tasks');

async function loadTasks() {
  const container = document.getElementById('tasksContainer');
  container.innerHTML = '';
  const snapshot = await getDocs(tasksRef);
  snapshot.forEach(docSnap => {
    const task = docSnap.data();
    renderTask(task, docSnap.id);
  });
}

function renderTask(task, id) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.desc}</p>
    <p><strong>Дедлайн:</strong> ${task.deadline}</p>
    <p><strong>Виконавець:</strong> ${task.assignee}</p>
    <button onclick="deleteTask('${id}')">Видалити</button>
  `;
  document.getElementById('tasksContainer').appendChild(li);
}

async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", id));
}

// Форма додавання
document.getElementById('taskForm').addEventListener('submit', async e => {
  e.preventDefault();
  const title = document.getElementById('taskTitle').value;
  const desc = document.getElementById('taskDescription').value;
  const deadline = document.getElementById('taskDeadline').value;
  const assignee = document.getElementById('taskAssignee').value;

  await addDoc(tasksRef, { title, desc, deadline, assignee });
  await notifySlack(`🆕 Нова задача: "${title}" від ${user.name}`);

  e.target.reset();
});

// Live-оновлення
onSnapshot(tasksRef, snapshot => {
  const container = document.getElementById('tasksContainer');
  container.innerHTML = '';
  snapshot.forEach(docSnap => {
    const task = docSnap.data();
    renderTask(task, docSnap.id);
  });
});

// Firebase логіка для мотивації (challenges)
import { db, collection, addDoc, deleteDoc, doc, onSnapshot } from './firebase-config.js';

const challengesRef = collection(db, 'challenges');

const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user) {
  alert("Увійдіть у акаунт.");
} else {
  onSnapshot(challengesRef, snapshot => {
    const container = document.getElementById('challengesContainer');
    if (!container) return;
    container.innerHTML = '';
    snapshot.forEach(docSnap => {
      const c = docSnap.data();
      if (c.email === user.email) {
        const item = document.createElement('li');
        item.className = 'challenge-item';
        item.innerHTML = `
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <p><strong>Дедлайн:</strong> ${c.deadline}</p>
          <button onclick="deleteChallengeFirebase('${docSnap.id}')"
            style="margin-top:10px;padding:6px 12px;border:none;border-radius:6px;background:#ff4d4f;color:#fff;cursor:pointer;">Видалити</button>`;
        container.appendChild(item);
      }
    });
  });
}

window.deleteChallengeFirebase = async function(id) {
  await deleteDoc(doc(db, 'challenges', id));
};

document.getElementById('challengeForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const title = document.getElementById('challengeTitle').value;
  const desc = document.getElementById('challengeDescription').value;
  const deadline = document.getElementById('challengeDeadline').value;
  await addDoc(challengesRef, { title, desc, deadline, email: user.email });
  await notifySlack(`🏁 Новий челендж: "${title}" від ${user.name}`);

  document.getElementById('challengeForm').reset();
  document.getElementById('challengeModal').style.display = 'none';
});

// Firebase логіка для reports (performance)
import { db, collection, addDoc, onSnapshot } from './firebase-config.js';

const reportsRef = collection(db, 'reports');
const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user) {
  alert("Увійдіть у акаунт.");
} else {
  onSnapshot(reportsRef, snapshot => {
    const reports = [];
    snapshot.forEach(docSnap => {
      const r = docSnap.data();
      if (r.email === user.email) reports.push(r);
    });
    drawChart(reports);
  });
}

function drawChart(data) {
  const ctx = document.getElementById('reportChart').getContext('2d');
  ctx.clearRect(0, 0, 600, 300);
  const weekly = data.filter(d => d.type === 'Щотижневий').length;
  const monthly = data.filter(d => d.type === 'Щомісячний').length;
  const personal = data.filter(d => d.type === 'Особистий').length;

  const bars = [weekly, monthly, personal];
  const labels = ['Щотижневі', 'Щомісячні', 'Особисті'];
  const colors = ['#0077ff', '#00c853', '#ff6f00'];

  bars.forEach((value, i) => {
    ctx.fillStyle = colors[i];
    ctx.fillRect(i * 200 + 50, 250 - value * 20, 100, value * 20);
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText(labels[i], i * 200 + 100, 270);
    ctx.fillText(value, i * 200 + 100, 240 - value * 20);
  });
}

// Firebase логіка для зустрічей (notes)
import { db, collection, addDoc, deleteDoc, onSnapshot, doc } from './firebase-config.js';

const notesRef = collection(db, 'notes');
const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user) {
  alert("Увійдіть у акаунт.");
} else {
  onSnapshot(notesRef, snapshot => {
    const table = document.getElementById('meetingTable');
    if (!table) return;
    table.innerHTML = '';
    snapshot.forEach(docSnap => {
      const m = docSnap.data();
      if (m.email === user.email) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${m.topic}</td><td>${m.date}</td><td>${m.contact}</td>
        <td><button onclick="deleteMeetingFirebase('${docSnap.id}')" style="padding:4px 8px;background:#ff4d4f;color:white;border:none;border-radius:6px;">✕</button></td>`;
        table.appendChild(row);
      }
    });
  });
}

window.deleteMeetingFirebase = async function(id) {
  await deleteDoc(doc(db, 'notes', id));
};

document.getElementById('meetingForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const topic = document.getElementById('meetingTopic').value;
  const date = document.getElementById('meetingDate').value;
  const contact = document.getElementById('meetingContact').value;
  await addDoc(notesRef, { topic, date, contact, email: user.email });
  e.target.reset();
});

// === GOOGLE CALENDAR OAUTH2 + EVENT CREATION ===
const googleBtn = document.getElementById('googleCalendarBtn');
if (googleBtn) {
  googleBtn.addEventListener('click', () => {
    const topic = document.getElementById('meetingTopic').value;
    const date = document.getElementById('meetingDate').value;
    const contact = document.getElementById('meetingContact').value;
    const desc = document.getElementById('meetingAction')?.value || 'Зустріч команди';

    if (!topic || !date || !contact) {
      alert("Заповніть форму зустрічі перед додаванням у Google Calendar.");
      return;
    }

    const startDateTime = new Date(date + 'T10:00:00'); // За замовчуванням 10:00
    const endDateTime = new Date(date + 'T11:00:00');

    const params = new URLSearchParams({
      text: topic,
      details: desc + ' — Контакт: ' + contact,
      dates: `${startDateTime.toISOString().replace(/[-:]|\.\d{3}/g, "")}/${endDateTime.toISOString().replace(/[-:]|\.\d{3}/g, "")}`,
      location: "Online",
    });

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&${params.toString()}&pli=1`;

    window.open(calendarUrl, '_blank');
  });
}

// 🎥 Jitsi Meet Integration
const startBtn = document.getElementById('startVideoBtn');
if (startBtn) {
  startBtn.addEventListener('click', () => {
    const topic = document.getElementById('meetingTopic').value.trim();
    const date = document.getElementById('meetingDate').value;
    if (!topic || !date) {
      alert("Введіть тему та дату для створення кімнати.");
      return;
    }

    const roomId = "syncora_" + topic.replace(/\s+/g, '_') + "_" + date.replace(/-/g, '');
    const iframe = document.getElementById('videoFrame');
    const container = document.getElementById('videoMeetingContainer');
    iframe.src = "https://meet.jit.si/" + roomId;
    container.style.display = 'block';
    container.scrollIntoView({ behavior: "smooth" });
  });
}