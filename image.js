const body = document.querySelector("body");
const IMG_COUNT = 5;
const IMG_ARR = [
  "https://images.unsplash.com/photo-1504587883873-5b3537de4dd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
  "https://images.unsplash.com/photo-1517151065884-77dd5d38d947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3883&q=80",
  "https://images.unsplash.com/photo-1536183922588-166604504d5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3149&q=80",
  "https://images.unsplash.com/photo-1578334193086-0d6dbaf2a0d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1511769845651-1a2546138d09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
  "https://images.unsplash.com/photo-1504941214544-9c1c44559ab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
];

function paintImg(randomNum) {
  const img = new Image();
  img.src = IMG_ARR[randomNum];
  img.classList.add("bgImage");
  body.prepend(img);
}

function genRandom() {
  return Math.floor(Math.random() * IMG_ARR.length);
}

function init() {
  const randomNum = genRandom();
  paintImg(randomNum);
}

init();
