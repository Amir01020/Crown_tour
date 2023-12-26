let oupen_tur_block = document.querySelector("#oupen_tur_block");
let clouce_tur_block = document.querySelector("#clouce_tur_block");
let turs_btn_oupen = document.querySelector("#turs_btn_oupen");
let turs_btn_clouce = document.querySelector("#turs_btn_clouce");

if (turs_btn_clouce.dataset.prev == "<MultilingualQuerySet []>") {
  turs_btn_clouce.style.display = "none";
}

turs_btn_clouce.onclick = (event) => {
  event.preventDefault();
  oupen_tur_block.classList.add("tur_clouce");
  clouce_tur_block.classList.remove("tur_clouce");
  turs_btn_clouce.classList.add("akti");
  turs_btn_oupen.classList.remove("akti");
};

turs_btn_oupen.onclick = (event) => {
  event.preventDefault();

  oupen_tur_block.classList.remove("tur_clouce");
  clouce_tur_block.classList.add("tur_clouce");
  turs_btn_clouce.classList.remove("akti");
  turs_btn_oupen.classList.add("akti");
};

let tur_img = [
  {
    name: "Пляжный",
    img: "/static/main/img/Пляжный.svg",
  },
  {
    name: "Национальный",
    img: "/static/main/img/Национальный.svg",
  },
  {
    name: "Шоппинг",
    img: "/static/main/img/Шоппинг.svg",
  },
  {
    name: "Экскурсии",
    img: "/static/main/img/Экскурсии.svg",
  },
  {
    name: "Горные лыжи",
    img: "/static/main/img/ГорныеЛыжи.svg",
  },
  {
    name: "Экстремальный",
    img: "/static/main/img/Экстремальный.svg",
  },
];

let type_tur_img = document.querySelectorAll(".type_tur_img");

for (let i of tur_img) {
  for (let item of type_tur_img) {
    if (item.dataset.type == i.name) {
      item.src = i.img;
    }
  }
}

let item_swip = document.querySelectorAll("#item_swip");
let swip_cont = document.querySelector("#swip_cont")
if (+item_swip.length < 3) {
    swip_cont.classList.add("swip_cont")
} else {
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
        slidesPerView: 3, // Настройки для больших экранов
        spaceBetween: 40,
      },
      // when window width is >= 768px
      940: {
        slidesPerView: 1, // Настройки для средних экранов
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1, // Настройки для средних экранов
        spaceBetween: 30,
      },
      // when window width is < 768px
      320: {
        slidesPerView: 1, // Настройки для маленьких экранов
        spaceBetween: 20,
      },
    },
  });
}
