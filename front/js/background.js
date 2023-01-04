const images = [  "4.jpg",];

const BG = "background"

const chosenImage = images[Math.floor(Math.random() * images.length) ];

const bgImage = document.createElement("img");
bgImage.className = BG;

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage); //html body 에 bgImage값을 넣는다.