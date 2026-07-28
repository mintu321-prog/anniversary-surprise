const images = [
  "images/IMG-20260728-WA0004.jpg",
  "images/IMG-20260728-WA0005.jpg"
];
let current = 0;

// PASSCODE
document.getElementById('unlockBtn').onclick = checkPass;
function checkPass(){
  let pass = document.getElementById('passInput').value;
  if(pass === "8080"){
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    startHearts(); startCounter(); startSlideshow();
  }else{ document.getElementById('errorMsg').style.display = 'block'; }
}

// OPEN LETTER
document.getElementById('openBtn').onclick = function(){
  document.getElementById('letter').classList.remove('hidden');
  this.style.display='none';
}

// COUNTER
function startCounter(){
  let start = new Date("2022-09-21");
  setInterval(()=>{
    let diff = Math.floor((new Date()-start)/86400000)
    document.getElementById('counter').innerText = diff + " Days Together ❤️"
  },1000)
}

// HEARTS
function startHearts(){
  setInterval(()=>{
    let h = document.createElement('div');
    h.className='heart';
    h.style.left = Math.random()*100+'%';
    document.querySelector('.hearts').appendChild(h);
    setTimeout(()=>h.remove(),6000)
  },300)
}

// 10 SEC SLIDESHOW
function startSlideshow(){
  let slides = document.querySelectorAll('.gallery img');
  setInterval(()=>{
    slides[current].classList.remove('active'); // আগেরটা fade out
    current = (current + 1) % images.length;
    slides[current].classList.add('active'); // নতুনটা fade in
  }, 10000); // 10 সেকেন্ড
}
