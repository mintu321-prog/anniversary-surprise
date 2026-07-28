// 1. PASSCODE CHECK - 8080
document.getElementById('unlockBtn').addEventListener('click', checkPass);
document.getElementById('passInput').addEventListener('keypress', function(e){
  if(e.key === 'Enter') checkPass();
});

function checkPass(){
  let pass = document.getElementById('passInput').value;
  if(pass === "8080"){
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    startHearts();
    startCounter();
  }else{
    document.getElementById('errorMsg').style.display = 'block';
    document.getElementById('passInput').value = ""; // ভুল হলে খালি করে দিবে
  }
}

// 2. OPEN LETTER BUTTON
document.getElementById('openBtn').addEventListener('click', function(){
  document.getElementById('letter').classList.remove('hidden');
  this.style.display='none';
})

// 3. COUNTER 21 Sep 2022 থেকে
function startCounter(){
  let start = new Date("2022-09-21");
  setInterval(()=>{
    let diff = Math.floor((new Date()-start)/86400000)
    document.getElementById('counter').innerText = diff + " Days Together ❤️"
  },1000)
}

// 4. FLOATING HEARTS
function startHearts(){
  setInterval(()=>{
    let h = document.createElement('div');
    h.className='heart';
    h.style.left = Math.random()*100+'%';
    document.querySelector('.hearts').appendChild(h);
    setTimeout(()=>h.remove(),6000)
  },300)
}
