// Подключение и настройка Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
    
  
  // Пагинатор
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {

    768: {
      spaceBetween: 0,     
    },
  }
  
});

// Проверяем изменение размера экрана
function checkScreenSize() {

  if (window.innerWidth < 768){
    // Включаем стили Swiper
    styleSwiperLink.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    
    // Включаем навигацию Swiper 
    swiper.enable();
    

    // Изменяем высоту контейнера с кнопками
    containerButtons.style.height = '132px';
    
  } else {
    // Отключаем стили Swiper
    styleSwiperLink.href = "";

    // Устанавливаем активным первый слайд
    swiper.slideTo([0], 0, false);

    // Отключаем навигацию Swiper    
    swiper.disable();

    // Изменяем высоту контейнера с кнопками учитывая раскрыт список или нет
    if (statusContainerButtons === 'show') {
      containerButtons.style.height = 'auto'; 
    } else {
      containerButtons.style.height = '200px'; 
    }
         
  }
}

// Изменяем высоту контейнера с кнопками учитывая раскрыт список или нет, меняем содержимое кнопки
function changeContainerButtonsSize() {
  if (statusContainerButtons === 'hide') {
    buttonShowHide.innerHTML = '<img src="./images/hide-arrow.svg" alt="Показать всё">&nbsp;&nbsp;Скрыть';
    containerButtons.style.height = 'auto';        
    statusContainerButtons = 'show';
  } else if (statusContainerButtons === 'show') {
    buttonShowHide.innerHTML = '<img src="./images/show-all-arrow.svg" alt="Показать всё">&nbsp;&nbsp;Показать всё';    
    containerButtons.style.height = '200px';    
    statusContainerButtons = 'hide';
  }
}

// Объявляем переменные
let styleSwiperLink = document.getElementById('style-swiper');
let buttonShowHide = document.querySelector('.show-hide-btn');
let containerButtons = document.querySelector('.brand-btns');
let statusContainerButtons = 'hide';

// Обработка события загрузки страницы
window.addEventListener('load', checkScreenSize);

// Обработка события изменения размера страницы
window.addEventListener('resize', checkScreenSize);

// Обработка события нажатия кнопки "Скрыть/Показать всё"
buttonShowHide.addEventListener('click', changeContainerButtonsSize);