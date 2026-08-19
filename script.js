// ქორწილის ათვლა (06.09.2026 18:00)
const weddingDate = new Date('2026-09-06T18:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  } else {
    document.getElementById('days').innerText = '0';
    document.getElementById('hours').innerText = '0';
    document.getElementById('minutes').innerText = '0';
    document.getElementById('seconds').innerText = '0';
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// მუსიკის მართვა
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

function startMusicOnFirstInteraction() {
  if (music) {
    music.play().then(() => {
      musicBtn.classList.add('playing');
      musicBtn.innerText = '🎵';
    }).catch(() => {});
  }
  document.removeEventListener('click', startMusicOnFirstInteraction);
  document.removeEventListener('touchstart', startMusicOnFirstInteraction);
}

document.addEventListener('click', startMusicOnFirstInteraction);
document.addEventListener('touchstart', startMusicOnFirstInteraction);

if (musicBtn) {
  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (music.paused) {
      music.play();
      musicBtn.classList.add('playing');
      musicBtn.innerText = '🎵';
    } else {
      music.pause();
      musicBtn.classList.remove('playing');
      musicBtn.innerText = '🔇';
    }
  });
}
