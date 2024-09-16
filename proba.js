const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,    
    // slidesPerGroup: 1,
    // centeredSlides: true,
    centerInsufficientSlides: true,
    
    
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
      320: {
        // swiper.disable(),
        // slidesPerView: 1,
        
      },
      768: {
              
      }
    },      
    
  });