const playBtn = document.querySelector('.main__btn-play');
let isPlay = false;

const audio = new Audio();

function playAudio() {
  audio.src = './assets/audio/forest.mp3';
  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    playBtn.classList.add('pause');
    isPlay = true;
  } else {
    audio.pause()
    isPlay = false;
    playBtn.classList.remove('pause');
  }
}

playBtn.addEventListener('click', playAudio)