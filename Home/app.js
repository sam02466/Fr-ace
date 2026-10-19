function selectCategory(catKey, btnElement) {
  document.querySelectorAll('.category-card').forEach(card => card.classList.remove('selected'));
  if (btnElement) btnElement.classList.add('selected');
  const title = document.getElementById('active-category-title');
  const labels = {trending:'Trending',betting:'Betting',slots:'Slots',sports:'Sports',casino:'Live Casino',rummy:'Cards', 'all-games':'All Games',contest:'Contests'};
  if (title) title.textContent = labels[catKey] || 'Games';
  if (typeof window.renderLiveGames === 'function') window.renderLiveGames(catKey);
}
