const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('copyProfile').addEventListener('click', async () => {
  const feedback = document.getElementById('copyFeedback');
  try {
    await navigator.clipboard.writeText('https://github.com/briantipster');
    feedback.textContent = 'GitHub profile link copied!';
  } catch {
    feedback.textContent = 'Visit: https://github.com/briantipster';
  }
});
