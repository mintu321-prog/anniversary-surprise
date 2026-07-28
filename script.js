const text =
"Every love story is beautiful, but ours is my favorite. ❤️";

let i = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

const btn = document.getElementById("openBtn");
const hero = document.querySelector(".hero");
const letter = document.getElementById("letter");

btn.onclick = function () {
    hero.style.display = "none";
    letter.style.display = "block";
};

const images = [
  "images/IMG-20260728-WA0004.jpg",
  "images/IMG-20260728-WA0005.jpg"
];

let current = 0;
const slider = document.getElementById("slider");

// প্রথম ছবি দেখাও
slider.src = images[current];

// প্রতি ৩ মিনিট পর ছবি বদলাবে
setInterval(() => {
    current = (current + 1) % images.length;
    slider.src = images[current];
}, 180000);

const startDate = new Date("September 21, 2022");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("counter").innerHTML =
        "❤️ Together for <b>" + days + "</b> Days ❤️";
}

updateCounter();
setInterval(updateCounter, 1000);
