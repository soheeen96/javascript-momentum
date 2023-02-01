const imgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const body = document.querySelector("#wrap");

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;

//body.style.cssText = `backgroundImage:url("./img/${chosenImg}")`;
body.style.cssText = `background:url(./img/${chosenImg}) center no-repeat; background-size: cover;`;
//document.body.appendChild(bgImg);
