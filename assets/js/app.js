let swiper = new Swiper(".swiper", {
  effect: "coverflow",
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  slideShadows: true,
  coverFlowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
  },
  // button next prev
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
