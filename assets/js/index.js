/* Header carousel */
const owl1 = $('.owl-carousel--1');

$('.owl-carousel--1').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  autoplay: true,
  dots: false,
  autoplayTimeout: 8000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

// Go to the previous item
Array.from($('.header__icon--left')).forEach(el => {
  el.closest('.header__icon--left').addEventListener('click', e => {
    owl1.trigger('prev.owl.carousel', [500]);
  });
});

// Go to the next item
Array.from($('.header__icon--right')).forEach(el => {
  el.closest('.header__icon--right').addEventListener('click', e => {
    owl1.trigger('next.owl.carousel', [500]);
  });
});

$('.owl-carousel--2').owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>"
  ],
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

const owl2 = $('.owl-carousel--2');
owl2.owlCarousel();

// Go to the previous item
Array.from($('.clients__icon--left')).forEach(el => {
  el.closest('.clients__icon--left').addEventListener('click', e => {
    owl2.trigger('prev.owl.carousel', [500]);
  });
});

// Go to the next item
Array.from($('.header__icon--right')).forEach(el => {
  el.closest('.header__icon--right').addEventListener('click', e => {
    owl2.trigger('next.owl.carousel', [500]);
  });
});

// Smooth Scrolling
// $('.btn--read').on('click', function(event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800,
//       function() {
//         window.location.hash = hash;
//       }
//     );
//   }
// });

/* Navbar Scripts */
// jQuery to collapse the navbar on scroll
$(window).on('scroll load', function() {
  if ($('.navigation').offset().top > 20) {
    $('.navigation').addClass('navigation--collapse');
  } else {
    $('.navigation').removeClass('navigation--collapse');
  }
});

/* Headernav & introduction Scripts */
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
    $(el).hide(300);
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
  el.closest('.headernav__item').addEventListener('click', e => {
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

/* Home page icons animation */
let i = 0;

$(window).scroll(function() {
  if ($('.icons').length) {
    const iTop = $('.icons').offset().top - window.innerHeight;

    if (i === 0 && $(window).scrollTop() > iTop) {
      $('.icons__box').animate(
        {
          opacity: 1
        },
        800
      );
      $('.icons__box').css({ transform: 'translateY(0)' });
      i = 1;
    }
  }
});

/* Home page client animation */
let c = 0;

$(window).scroll(function() {
  if ($('.clients').length) {
    const cTop = $('.clients').offset().top - window.innerHeight;

    if (c === 0 && $(window).scrollTop() > cTop) {
      $('.clients__box').animate(
        {
          opacity: 1
        },
        800
      );

      $('.clients__box').css({ transform: 'scale(1)' });
      c = 1;
    }
  }
});
/* SERVICES PAGES QUESTION */
const servicesQuestions = $('.services__question');
const servicesQuestionsArr = Array.from(servicesQuestions);

const servicesAnswers = $('.services__question--bottom');
const servicesAnswersArr = Array.from(servicesAnswers);

servicesQuestionsArr.forEach((el, index) => {
  el.addEventListener('click', e => {
    $(servicesAnswersArr[index]).slideToggle(300);
  });
});

/* About-us CountUp number animation */
let a = 0;
$(window).scroll(function() {
  if ($('.numbers').length) {
    const oTop = $('.numbers').offset().top - window.innerHeight;

    if (a === 0 && $(window).scrollTop() > oTop) {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo
          },

          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          }
        );
      });
      a = 1;
    }
  }
});
