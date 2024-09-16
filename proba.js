const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // slidesPerView: 2,
    spaceBetween: 16,    
    // slidesPerGroup: 1,
    centeredSlides: true,
    
    
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
      320: {
        // swiper.disable(),
        slidesPerView: 1,
      },
      768: {
        // swiper.disable(),
        slidesPerView: 2,
      }
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    
    
  });