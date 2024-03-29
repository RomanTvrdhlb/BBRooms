import Swiper from './vendor/swiper';

const slider = document.querySelector('.nw-benefits-slider__container');

if(slider){
  const swiper = new Swiper(slider, {  
    slidesPerView: 3,  
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    loop:true,
    centeredSlides: true,
    speed: 1000,

    navigation: {
      prevEl:'.nw-benefits-slider__btn-prev',
      nextEl: '.nw-benefits-slider__btn-next',
    },
    
 
    breakpoints: {
      320: {
        slidesPerView: 1,
        autoplay: false,
      },

      576: {
        slidesPerView: 1.5,
        autoplay:{
          delay: 4000,
        },
      },

      1240: { 
        slidesPerView: 2.4,
      },

      1920: { 
        slidesPerView: 2.6,
      },

      2200: { 
        slidesPerView: 3,
      },
    },
  });
  }