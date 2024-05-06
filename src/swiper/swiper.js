// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swipers = document.querySelectorAll(".swiper");

let mySwiper;
//вот это я колдун
swipers.forEach(element => {
  function mobileSwiper() {
    if (window.innerWidth < 768 && element.dataset.mobile == 'false') {
      mySwiper = new Swiper(element, {
        direction: 'horizontal',
        loop: 'true',
        spaceBetween: 16,
        watchOverflow: 'true',
        pagination: {
          el: element.querySelector('.swiper-pagination'),
          clickable: 'true'
        },
        grabCursor: 'true',
        mousewheel: { 
          sensitivity: 1,
        },
        breakpoints: {
          240: {
            slidesPerView: 0.7,
          },
          320: {
            slidesPerView: 1.2,
          },
          380: {
            slidesPerView: 1.5,
          },
          440: {
            slidesPerView: 1.8,
          },
          520: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 2.2,
          },
          576: {
            slidesPerView: 2.4
          },
          768: {
            enabled: false,
            spaceBetween: 0,
            pagination: {
              enabled: false
            }
          }
        }
  
      });
  
      element.dataset.mobile = 'true';
    }
  
    if (window.innerWidth >= 768) {
      element.dataset.mobile = "false";
  
      if (element.classList.contains("swiper-initialized")) {
        mySwiper.destroy();
      }
    }
  }
  
  mobileSwiper();
  window.addEventListener("resize", () => {
    mobileSwiper();
  });
});

