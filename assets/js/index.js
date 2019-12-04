const introItems = document.querySelectorAll('.introduction__item');
const introItemsArr = Array.from(introItems);
const introLinks = document.querySelectorAll('.introduction__link');
const introLinksArr = Array.from(introLinks);

const clearIntroActive = () => {
  introItemsArr.forEach(el => {
    el.classList.remove('introduction__item--active');
  });
  introLinksArr.forEach(el => {
    el.classList.remove('introduction__link--active');
  });
};

introItemsArr.forEach((el, index) => {
  el.addEventListener('click', e => {
    e.preventDefault();
    // 1. Clear all active state
    clearIntroActive();
    // 2. Change index 0 to dark text and change current text color to white
    introLinksArr[index].classList.add('introduction__link--active');
    el.classList.toggle('introduction__item--active');
  });
});

const headerIcons = document.querySelectorAll('.header__icon');
const headerIconsArr = Array.from(headerIcons);
const header = document.querySelector('.header');

headerIconsArr.forEach((el, index) => {
  el.addEventListener('click', e => {
    if (index === 0) {
      header.style.backgroundImage = "url('/assets/img/hero2.jpg')";
    }
  });
});
