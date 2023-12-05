new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

});

let swiper = new Swiper(".mySwiper_1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 1140px
    1140: {
      slidesPerView: 3,  // Настройки для больших экранов
      spaceBetween: 40
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,  // Настройки для средних экранов
      spaceBetween: 30
    },
    // when window width is < 768px
    320: {
      slidesPerView: 1,  // Настройки для маленьких экранов
      spaceBetween: 20
    }
  }

});
let swiper_2 = new Swiper(".mySwiper_2", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 1140px
    1140: {
      slidesPerView: 3,  // Настройки для больших экранов
      spaceBetween: 40
    },
    // when window width is >= 768px
    940: {
      slidesPerView: 1,  // Настройки для средних экранов
      spaceBetween: 30
    },
    768: {
      slidesPerView: 1,  // Настройки для средних экранов
      spaceBetween: 30
    },
    // when window width is < 768px
    320: {
      slidesPerView: 1,  // Настройки для маленьких экранов
      spaceBetween: 20
    }
  }
});




let burger = document.querySelector('.burger_modls')
let my_burger_box = document.querySelector('.my_burger_box')
let oupen_burger = document.querySelector('#oupen_burger')
let cloase_burger = document.querySelector('#cloase_burger')


oupen_burger.onclick = () => {
  burger.classList.add('burger_modls_active')
  setTimeout(() => {
    my_burger_box.classList.add('box_active')

  }, 300);
}
cloase_burger.onclick = () => {
  my_burger_box.classList.remove('box_active')
  setTimeout(() => {
    burger.classList.remove('burger_modls_active')

  }, 300);
}