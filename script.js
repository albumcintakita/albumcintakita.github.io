document.addEventListener('DOMContentLoaded', (event) => {
  const playPauseBtn = document.getElementById('playPauseBtn');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const stickyItem = document.getElementById('stickyItem');

  playPauseBtn.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      stickyItem.classList.add('hide'); // Sembunyikan elemen sticky saat musik diputar
    } else {
      backgroundMusic.pause();
      stickyItem.classList.remove('hide'); // Tampilkan kembali elemen sticky saat musik dijeda
    }
  });
});
