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

const menuList = document.querySelector('.header__conteiner')

function changeClassActive(event) {
  const reActiveLink = document.querySelectorAll('.item-menu');
  reActiveLink.forEach((item) => item.classList.remove('active'));

  if (event.target.classList.contains('item-menu')) {
    event.target.classList.add('active')
  }
}

menuList.addEventListener("click", changeClassActive)


const mainImage = document.querySelector('.main')

function changeImage(event) {
  if (event.target.classList.contains('item-menu')) {
    let background = event.target.dataset.background;
    mainImage.style.background = "url('./assets/img/'+background+'.jpg') no-repeat top/cover";
  }
}


menuList.addEventListener("click", changeImage)

jsx style background image url