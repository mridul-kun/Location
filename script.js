const toggleBtn = document.getElementById('themeToggle');
const mapFrame = document.getElementById('mapFrame');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

function applyTheme(isDark) {
  mapFrame.classList.toggle('dark-mode', isDark);
  toggleBtn.classList.toggle('dark-mode', isDark);
  sunIcon.style.display = isDark ? 'none' : 'block';
  moonIcon.style.display = isDark ? 'block' : 'none';
}

const savedTheme = localStorage.getItem('mapTheme');
applyTheme(savedTheme === 'dark');

toggleBtn.addEventListener('click', () => {
  const isDark = !mapFrame.classList.contains('dark-mode');
  applyTheme(isDark);
  localStorage.setItem('mapTheme', isDark ? 'dark' : 'light');
});

// Search: opens real Google Maps search in a new tab (no Places API needed)
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;
  window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, '_blank');
});

// Category chips: same behavior, opens real Google Maps search for that category
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const label = chip.textContent.trim().replace(/^\S+\s/, ''); // strip emoji
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(label)}`, '_blank');
  });
});