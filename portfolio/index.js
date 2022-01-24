const iconNav = document.querySelector('.nav__icon');
const headerNav = document.querySelector('.header__nav');
iconNav.addEventListener('click', function (f) {
  document.body.classList.toggle('lock')
  iconNav.classList.toggle('open');
  headerNav.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((item) => item.addEventListener('click', closeMenu));

function closeMenu(event) {
  if (event.target.classList.contains('nav__link')) {
    document.body.classList.remove('lock')
    iconNav.classList.remove('open');
    headerNav.classList.remove('open');
  }
};


console.log('Score 75/79\n\n - Вёрстка соответствует макету +42\n блок <header> +3\n секция hero +6\n секция skills +6\n секция portfolio +6\n секция video +3\n секция price +6\n секция contacts +6\n блок <footer> +6\n\n - Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. +15\n\n - На ширине экрана 768рх и меньше реализовано адаптивное меню +22')