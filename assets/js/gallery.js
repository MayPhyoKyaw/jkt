var overlay = document.getElementById("overlay");
var currentImg = 1;
function setCurrentImg(current) {
  var scripts = document.getElementsByTagName("script");
  var currentScript = scripts[scripts.length-1];
  var url = currentScript.src.split("/");
  url.pop();
  url.pop();
  currentImg = parseInt(current);
  document.getElementById("img").src =
    `${url.join("/")}/images/gallery/${current}.jpg` ||
    `${url.join("/")}/images/gallery/${current}.JPG`;
  if (currentImg === 49) {
    document.getElementById("right-arrow").style.display = "none";
  } else if (currentImg === 1) {
    document.getElementById("left-arrow").style.display = "none";
  } else {
    document.getElementById("left-arrow").style.display = "block";
    document.getElementById("right-arrow").style.display = "block";
  }
  document.getElementById("current").innerHTML = currentImg;
}

function nextImg() {
  currentImg += 1;
  setCurrentImg(currentImg);
}
function prevImg() {
  currentImg -= 1;
  setCurrentImg(currentImg);
}

function showImg(img) {
  overlay.style.display = "block";
  var current = img.src.split("/").pop().split(".")[0];
  setCurrentImg(current);
}
function hideImg(e) {
  if (
    e.target.id === "img" ||
    e.target.id === "right-arrow" ||
    e.target.id === "left-arrow"
  ) {
    return;
  }
  overlay.style.display = "none";
}
