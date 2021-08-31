var overlay = document.getElementById("overlay");
var currentImg = 1;
function setCurrentImg(current) {
  currentImg = parseInt(current);
  document.getElementById("img").src =
    `./assets/images/gallery/${current}.jpg` ||
    `./assets/images/gallery/${current}.JPG`;
  if (currentImg === 41) {
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
  // var type = img.src.split("/").pop().split(".")[1];
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
