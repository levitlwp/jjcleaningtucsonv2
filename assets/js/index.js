const introItems = document.querySelectorAll('.introduction__item');
const introItemsArr = Array.from(introItems);

const introLinks = document.querySelectorAll('.introduction__link');
const introLinksArr = Array.from(introLinks);

const introDetailHeading = document.querySelectorAll(
  '.introduction__detail-heading'
);
const introDetailHeadingArr = Array.from(introDetailHeading);

const introHeading = document.querySelector('.introduction__heading');

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
    // 2. Change current event to active
    introLinksArr[index].classList.add('introduction__link--active');
    el.classList.toggle('introduction__item--active');
    // 3. Change the content

    // RESIDENTIAL
    if (index === 0) {
      // Details
      introDetailHeadingArr.forEach((el, index) => {
        if (index === 0) {
          el.textContent = 'Furniture treatment';
        } else if (index == 1) {
          el.textContent = 'Packing and unpacking';
        } else if (index === 2) {
          el.textContent = 'Window washing';
        }
      });

      // Heading on the right
      introHeading.textContent = 'Superior result';
    }

    // BUSINESS
    if (index === 1) {
      introDetailHeadingArr.forEach((el, index) => {
        if (index === 0) {
          el.textContent = 'Janitorial services';
        } else if (index == 1) {
          el.textContent = 'Speciality services';
        } else if (index === 2) {
          el.textContent = 'Flooring';
        }
      });

      // Heading on the right
      introHeading.textContent = 'Superior results';
    }

    // EXTERIOR
    if (index === 2) {
      introDetailHeadingArr.forEach((el, index) => {
        if (index === 0) {
          el.textContent = 'Window cleaning';
        } else if (index == 1) {
          el.textContent = 'Gutter cleaning';
        } else if (index === 2) {
          el.textContent = 'Driveway resealing';
        }
      });

      // Heading on the right
      introHeading.textContent = 'Super external clean';
    }

    // GREEN
    if (index === 3) {
      introDetailHeadingArr.forEach((el, index) => {
        if (index === 0) {
          el.textContent = 'Kitchens';
        } else if (index == 1) {
          el.textContent = 'Bathrooms';
        } else if (index === 2) {
          el.textContent = 'Seasonal';
        }
      });

      // Heading on the right
      introHeading.textContent = 'Get started now!';
    }
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
