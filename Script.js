const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.ai-card');

searchInput.addEventListener('input', () => {
  const search = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(search) ? 'block' : 'none';
  });
});
