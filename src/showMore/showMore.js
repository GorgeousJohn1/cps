// Info

const secInfo = document.querySelector('.sec-info');
const InfoText = secInfo.querySelector('.sec-info__text--hidden');
const showInfo = secInfo.querySelector('.expand-btn__text');

showInfo.addEventListener('click', (evt) => {
  if (showInfo.textContent === 'Читать далее') {
    InfoText.classList.remove('hidden');
    showInfo.textContent = 'Скрыть';
  } else {
    InfoText.classList.add('hidden');
    showInfo.textContent = 'Читать далее'
  }
})

//Brands

const secBrands = document.querySelector('.brand-swiper');
const brands = secBrands.querySelector('.brand-swiper__list');
const showBrands = secBrands.querySelector('.expand-btn__text');
showBrands.addEventListener('click', (evt) => {
  if (showBrands.textContent === 'Показать всё') {
    brands.classList.add('shown');
    showBrands.textContent = 'Скрыть';
  } else {
    brands.classList.remove('shown');
    showBrands.textContent = 'Показать всё'
  }
})

//Tech

const secTech = document.querySelector('.tech-swiper');
const techs = secTech.querySelector('.tech-swiper__list');
const showTech = secTech.querySelector('.expand-btn__text');

showTech.addEventListener('click', (evt) => {
  if (showTech.textContent === 'Показать всё') {
    techs.classList.add('shown');
    showTech.textContent = 'Скрыть';
  } else {
    techs.classList.remove('shown');
    showTech.textContent = 'Показать всё';
  }
})