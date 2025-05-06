document.getElementById('searchInput').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  const aiCards = document.querySelectorAll('.ai-card');

  aiCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    if (name.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
