var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $(".read").click(function () {
    $(this).prev().toggle();
    $(this).siblings(".dots").toggle();
    if ($(this).text() == "Read more") {
      $(this).text("Read less");
    } else {
      $(this).text("Read more");
    }
  });
});