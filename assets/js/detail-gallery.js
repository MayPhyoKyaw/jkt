let overlay = document.getElementById("overlay");
let detailImages = document.getElementById("detailActivityBlog");
function setCurrentImg(current) {
    const totalImg = detailImages.children.length;
    const firstChild = detailImages.children[0].children[0];
    const lastChild = detailImages.children[totalImg-1].children[0];
    document.getElementById("img").src = current.src;
    let currentImg = current.parentNode;
    if(currentImg === firstChild) {
        document.getElementById("left-arrow").style.display = "none";
        document.getElementById("right-arrow").style.display = "block";
    } else if (currentImg === lastChild) {
        document.getElementById("left-arrow").style.display = "block";
        document.getElementById("right-arrow").style.display = "none";
    } else {
        document.getElementById("left-arrow").style.display = "block";
        document.getElementById("right-arrow").style.display = "block";
        console.log("other")
    }
}

function previousImg(e) {
    const totalImg = detailImages.children.length;
    let currentSrc = e.nextElementSibling.src;
    let currentImg;
    for(i=0; i<totalImg; i++) {
        let allSrc = detailImages.children[i].children[0].children[0].src;
        if(currentSrc === allSrc) {
            document.getElementById("img").src = detailImages.children[i-1].children[0].children[0].src;
            currentImg = detailImages.children[i-1].children[0].children[0];
        }
    }
    setCurrentImg(currentImg);
}

function nextImg(e) {
    const totalImg = detailImages.children.length;
    let currentSrc = e.previousElementSibling.src;
    let currentImg;
    for(i=0; i<totalImg; i++) {
        let allSrc = detailImages.children[i].children[0].children[0].src;
        if(currentSrc === allSrc) {
            document.getElementById("img").src = detailImages.children[i+1].children[0].children[0].src;
            currentImg = detailImages.children[i+1].children[0].children[0];
        }
    }
    setCurrentImg(currentImg);
}

function PopUpImg(img) {
  console.log(img);
  overlay.style.display = "block";
  let current = img.src.split("/").pop().split(".")[0];
  setCurrentImg(img);
    console.log(current)
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

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}