/* 3.0
const title = document.getElementById("title");
console.log(title);
*/

/* 3.1
const title = document.getElementById("title");
title.innerText = "HELLO WORLD!";

console.log(title.className);
console.log(title.id);
*/

/* 3.2
const hellos = document.getElementsByClassName("hello");
const title = document.getElementsByTagName("h1");

const title = document.querySelectorAll(".hello h1");
const hi = document.getElementsByTagName("div");
console.log(title);
console.log(hi);


const title = document.querySelector(".hello h1");

title.innerText = "HEllo";
*/

/*
const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "tomato";
}

function handleMouseEnter() {
  title.innerText = "mouse is here";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone.";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
*/

/*
const title = document.querySelector(".hello h1");

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowOffline() {
  alert("WIFIFIFIWFIWFIIWFIIWFIWF");
}

function handleWindowOnline() {
  alert("HELLO WIFI");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

/*
const h1 = document.querySelector(".hello h1");

function handleMouseClick() {
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }

  h1.style.color = newColor;
}

h1.addEventListener("click", handleMouseClick);
*/

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
