const apiKey = 'UxfSEhDor1r1v1sLqoxWvXTZJ7VwuhQUX1VyBCUjg_g';
const url = `https://api.unsplash.com/search/photos?query=js&per_page=30&orientation=landscape&client_id=${apiKey}`;


async function getData() {
  const res = await fetch(url);
  const resData = await res.json();
  console.log(resData);

  showDate(resData)
}
getData(url);

/*------------SHOW IMAGES---------------------------------------*/

function showDate(data) {
  data.results.map(e => createImages(e));
}

/*------------CREATE IMAGES-------------------------------------*/

function createImages(elem) {
  const mainGrid = document.querySelector('.main__grid');
  const img = document.createElement('img');

  img.classList.add('main-img')
  img.src = `${elem.urls.regular}`;
  img.alt = `image`;
  mainGrid.append(img);
}