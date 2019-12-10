// Smooth Scrolling
$('.btn--read').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

const headerNavItems = document.querySelectorAll('.headernav__item');
const headerNavItemsArr = Array.from(headerNavItems);

const headerNavLinks = document.querySelectorAll('.headernav__link');
const headerNavLinksArr = Array.from(headerNavLinks);

const introDetailHeading = document.querySelectorAll(
  '.introduction__detail-heading'
);

const introDetailHeadingArr = Array.from(introDetailHeading);

const introIcons = document.querySelectorAll('.introduction__icon');
const introIcsonsArr = Array.from(introIcons);

const introDetailBottom = document.querySelectorAll(
  '.introduction__detail-bottom'
);
const introDetailBottomArr = Array.from(introDetailBottom);

const introHeading = document.querySelector('.introduction__heading');

// Clear introduction active state
const clearIntroActive = () => {
  headerNavItems.forEach(el => {
    el.classList.remove('headernav__item--active');
  });
  headerNavLinksArr.forEach(el => {
    el.classList.remove('headernav__link--active');
  });
};

// Collapse all contents
const collapseDetailContent = () => {
  introDetailBottomArr.forEach(el => {
    el.classList.remove('introduction__detail-bottom--toggle');
    el.classList.add('introduction__detail-bottom--toggle');
  });
};

// Default all icons
const defaultIcons = () => {
  introIcsonsArr.forEach(el => {
    el.classList.remove('fa-minus');
    el.classList.add('fa-plus');
  });
};

headerNavItems.forEach((el, index) => {
  el.addEventListener('click', e => {
    e.preventDefault();

    // 1. Clear all active state
    clearIntroActive();

    // 2. Collapse all content & change all icons to default
    collapseDetailContent();
    defaultIcons();

    // 3. Change current event to active
    headerNavLinksArr[index].classList.add('headernav__link--active');
    el.classList.toggle('headernav__item--active');

    // 4. Change the content
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
      introHeading.textContent = 'Need home cleaning?';
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

introIcsonsArr.forEach((el, index) => {
  el.closest('.introduction__detail-top').addEventListener('click', e => {
    el.classList.toggle('fa-plus');
    el.classList.toggle('fa-minus');
    $(introDetailBottom[index]).slideToggle(300);
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

/**
 * Services page question animation
 */
const servicesQuestions = $('.services__question');
const servicesQuestionsArr = Array.from(servicesQuestions);

const servicesAnswers = $('.services__question--bottom');
const servicesAnswersArr = Array.from(servicesAnswers);

servicesQuestionsArr.forEach((el, index) => {
  el.addEventListener('click', e => {
    $(servicesAnswersArr[index]).slideToggle(300);
  });
});

/**
 *  About-us CountUp number animation
 */
$('.counter').each(function() {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo
    },

    {
      duration: 2000,
      easing: 'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    }
  );
});
