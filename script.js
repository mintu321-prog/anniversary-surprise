// PASSCODE CHECK
function checkPass(){
  let pass = document.getElementById('passInput').value;
  if(pass === "8080"){
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    startHearts(); // হার্ট চালু
    startCounter(); // কাউন্টার চালু
  }else{
    document.getElementById('errorMsg').style.display = 'block';
  }
}

// Enter চাপলে কাজ করবে
document.addEventListener('keypress', function(e){
  if(e.key === 'Enter' && document.getElementById('lockScreen').style.display !== 'none'){
    checkPass();
  }
})

// তোমার আগের কোড - typing, letter open, counter
document.getElementById('openBtn').onclick = function(){
  document.getElementById('letter').classList.remove('hidden');
  this.style.display='none';
}

// কাউন্টার 21 Sep 2022 থেকে
function startCounter(){
  let start = new Date("2022-09-21");
  setInterval(()=>{
    let diff = Math.floor((new Date()-start)/86400000)
    document.getElementById('counter').innerText = diff + " Days Together ❤️"
  },1000)
}

// ভাসমান হার্ট
function startHearts(){
  setInterval(()=>{
    let h = document.createElement('div');
    h.className='heart';
    h.style.left = Math.random()*100+'%';
    document.querySelector('.hearts').appendChild(h);
    setTimeout(()=>h.remove(),6000)
  },300)
              }const text =
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

// প্রতি ১ মিনিট পর ছবি বদলাবে
setInterval(() => {
    current = (current + 1) % images.length;
    slider.src = images[current];
}, 60000);

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
