// Ember & Olive — small interactions for the restaurant landing page.

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

// Close the mobile navigation after a link is selected.
mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  });
});

// Menu category filtering.
const filterButtons = document.querySelectorAll('.filter-btn');
const dishCards = document.querySelectorAll('.dish-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    dishCards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

// Set the earliest selectable reservation date to today (local browser date).
const bookingDate = document.querySelector('#booking-date');
if (bookingDate) {
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  bookingDate.min = localDate;
}

// Demo reservation submission: validates fields and displays a confirmation locally.
const bookingForm = document.querySelector('#booking-form');
const formFeedback = document.querySelector('#form-feedback');
const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 4200);
}

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  const data = new FormData(bookingForm);
  const guestName = String(data.get('name')).trim();
  const date = String(data.get('date'));
  const time = String(data.get('time'));
  const guests = String(data.get('guests'));

  const prettyDate = new Date(`${date}T12:00:00`).toLocaleDateString(undefined, {
    weekday: 'short', month: 'long', day: 'numeric'
  });

  const message = `Thanks, ${guestName}! Your request for ${guests} on ${prettyDate} at ${time} is ready. This demo does not send it to the restaurant.`;
  if (formFeedback) formFeedback.textContent = message;
  showToast('Reservation request preview created. Connect a booking service to receive real requests.');
  bookingForm.reset();
  if (bookingDate) bookingDate.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
});

// Keep the footer year current.
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
