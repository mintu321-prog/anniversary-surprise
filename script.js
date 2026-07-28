const message = "Every moment with you is my favourite memory. Happy Anniversary DOLA ❤️";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.querySelector("p").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

document.querySelector("p").innerHTML = "";
typeWriter();
