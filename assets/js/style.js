var toTopBtn = document.getElementById("toTop");

if (document.getElementById("years-of-exp")) {
  var today = new Date();
  var foundingDate = new Date(2019, 3, 1);
  var expYears = today.getFullYear() - foundingDate.getFullYear();
  document.getElementById("years-of-exp").innerHTML = expYears;
}

toTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
$("#toTop").hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 1500) {
    $("#toTop").fadeIn(1000);
  } else {
    $("#toTop").fadeOut(500);
  }
});
