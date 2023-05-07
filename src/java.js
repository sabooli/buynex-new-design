var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centerSlides: "true",
  grabCursor: "true",
  autoplay: {
    delay: 3600,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlides: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
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


const numInput = document.getElementById("investment");

numInput.addEventListener("input", () => {
  const num = parseFloat(numInput.value.replace(/,/g, ""));
  if (!isNaN(num)) {
    numInput.value = num.toLocaleString();
  }
});

function showVipProfit(event) {
  event.preventDefault();
  let input = document.querySelector("#investment");
  let numWithSep = input.value;
  let num = parseInt(numWithSep.replaceAll(",", ""));
  let h3 = document.querySelector("#profit");
  let profit = (num * 0.25) / 100;
  h3.innerHTML = "It amounts to " + profit.toLocaleString();
}

let vipButton = document.querySelector("#vip");
vipButton.addEventListener("click", showVipProfit);

function showInvestorProfit(event) {
  event.preventDefault();
  let input = document.querySelector("#investment");
  let numWithSep = input.value;
  let num = parseInt(numWithSep.replaceAll(",", ""));
  let h3 = document.querySelector("#profit");
  let profit = (num * 4.8) / 100;
  h3.innerHTML = "It amounts to " + profit.toLocaleString();
}

let investorButton = document.querySelector("#investor");
investorButton.addEventListener("click", showInvestorProfit);

function showReferralProfit(event) {
  event.preventDefault();
  let input = document.querySelector("#investment");
  let numWithSep = input.value;
  let num = parseInt(numWithSep.replaceAll(",", ""));
  let h3 = document.querySelector("#profit");
  let profit = (num * 0.5) / 100;
  h3.innerHTML = "It amounts to " + profit.toLocaleString();
}

let referralButton = document.querySelector("#referral");
referralButton.addEventListener("click", showReferralProfit);
