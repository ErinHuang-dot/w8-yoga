"use strict";

$('.icon-ham').click(function (e) {
  e.preventDefault();
  $('.dropdown').toggleClass('active');
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  buttonClass: 'btn secondary',
  prevArrow: '<',
  nextArrow: '>'
});
"use strict";

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  buttonClass: 'btn secondary',
  prevArrow: '<',
  nextArrow: '>'
});
"use strict";

var imgOverlaySwiper = document.querySelector('.imgOverlaySwiper');

if (imgOverlaySwiper) {
  var swiper = new Swiper('.imgOverlaySwiper', {
    slidesPerView: 2.5,
    spaceBetween: 30
  });
}

var reviewSwiper = document.querySelector('.reviewSwiper');

if (reviewSwiper) {
  var _swiper = new Swiper('.reviewSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'column'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row'
        }
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row'
        }
      }
    }
  });
}

var profileSwiper = document.querySelector('.profileSwiper');

if (profileSwiper) {
  var _swiper2 = new Swiper('.profileSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}

var recomSwiper = document.querySelector('.recomSwiper');

if (recomSwiper) {
  var _swiper3 = new Swiper('.recomSwiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 30
      }
    }
  });
}
//# sourceMappingURL=all.js.map
