const playBtn = document.querySelector('.main__btn-play');
const audio = new Audio('./assets/audio/forest.mp3');
let isPlay = false;

function playAudio() {
  if (!isPlay) {
    audio.currentTime = 0;
    audio.play();
    playBtn.classList.add('pause');
    isPlay = true;
  } else {
    audio.pause()
    isPlay = false;
    playBtn.classList.remove('pause');
  }
};

playBtn.addEventListener('click', playAudio);

/*----------------------CHANGE CLASS ACTIVE-------------------------------------------------------------*/

const menuList = document.querySelector('.header__container');

function changeClassActive(event) {
  const reActiveLink = document.querySelectorAll('.item-menu');
  reActiveLink.forEach((item) => item.classList.remove('active'));

  if (event.target.classList.contains('item-menu')) {
    event.target.classList.add('active')
  }
};

menuList.addEventListener("click", changeClassActive);

/*----------------------CHANGE IMAGE--------------------------------------------------------------------*/

const mainImage = document.querySelector('.main')

function changeImage(event) {
  if (event.target.classList.contains('item-menu')) {
    let background = event.target.dataset.bird;
    mainImage.style.background = `url('./assets/img/${background}.jpg') no-repeat top/cover`;
  }
};

menuList.addEventListener("click", changeImage);

/*----------------------CHANGE SOUND--------------------------------------------------------------------*/

function changeSound(event) {
  if (event.target.classList.contains('item-menu')) {
    let sound = event.target.dataset.bird;
    audio.src = `./assets/audio/${sound}.mp3`;
    isPlay = false;
    playAudio(isPlay)
  }
};

menuList.addEventListener("click", changeSound);