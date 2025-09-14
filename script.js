const storeText = document.querySelector(".storename");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let index = 0;

function gantiWarna() {
  if (storeText) { // pastikan elemen ada
    storeText.style.color = colors[index];
    index = (index + 1) % colors.length;
  }
}

setInterval(gantiWarna, 500);