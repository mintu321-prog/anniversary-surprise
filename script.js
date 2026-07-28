// সব ছবির লিস্ট
const images = [
  "images/IMG-20260728-WA0004.jpg",
  "images/IMG-20260728-WA0005.jpg"
];

let current = 0;
let slider;

// 1. Passcode Check
document.getElementById('unlockBtn').onclick = checkPass;
document.getElementById('passInput').onkeypress = function(e){ if(e.key === 'Enter') checkPass(); };

function checkPass(){
  let pass = document.getElementById('passInput').value;
  if(pass === "8080"){
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    startHearts();
    startCounter();
    initSlider(); // স্লাইডশো চালু
  }else{
    document.getElementById('errorMsg').style.display = 'block';
  }
}

// 2. Open Letter Button
document.getElementById('openBtn').onclick = function(){
  document.getElementById('letter').classList.remove('hidden');
  this.style.display='none';
}

// 3. Days Counter
function startCounter(){
  let start = new Date("2022-09-21");
  setInterval(()=>{
    let diff = Math.floor((new Date()-start)/86400000)
    document.getElementById('counter').innerText = diff + " Days Together ❤️"
  },1000)
}

// 4. Flying Hearts
function startHearts(){
  setInterval(()=>{
    let h = document.createElement('div');
    h.className='heart';
    h.style.left = Math.random()*100+'%';
    document.querySelector('.hearts').appendChild(h);
    setTimeout(()=>h.remove(),6000)
  },300)
}

// 5. 10 SEC SLIDESHOW with Fade
function initSlider(){
  slider = document.getElementById("slider");
  slider.src = images[current]; // প্রথম ছবি

  setInterval(() => {
    // Fade out
    slider.style.opacity = 0;

    setTimeout(() => {
      current = (current + 1) % images.length;
      slider.src = images[current]; // নতুন ছবি
      // Fade in
      slider.style.opacity = 1;
    }, 1000); // 1 sec fade time

  }, 10000); // 10000ms = 10 সেকেন্ড
}
