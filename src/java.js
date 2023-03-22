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
  let profit = (num * 25) / 100;
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

function goToSignup() {
  window.location.href="signup.html";
}

let signupButton = document.querySelector("#join");
signupButton.addEventListener("click", goToSignup);