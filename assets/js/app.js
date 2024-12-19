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

// Menghapus overlay setelah halaman selesai dimuat
window.addEventListener("load", function () {
  const loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.style.transition = "opacity 0.5s";
  loadingOverlay.style.opacity = 0;
  setTimeout(() => {
    loadingOverlay.style.display = "none";
  }, 500); // Sembunyikan overlay sepenuhnya setelah animasi selesai
});
