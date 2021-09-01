const imgOverlaySwiper = document.querySelector('.imgOverlaySwiper');
if (imgOverlaySwiper) {
  const swiper = new Swiper('.imgOverlaySwiper', {
    slidesPerView: 2.5,
    spaceBetween: 30,
  });
}


const reviewSwiper = document.querySelector('.reviewSwiper');
if (reviewSwiper) {

  const swiper = new Swiper('.reviewSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'column',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768:{
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1024:{
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    }
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
}

