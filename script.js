// =============================
// Loading Screen
// =============================

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 800);

    }, 2000);

});

// =============================
// Gift Box
// =============================

const gift = document.getElementById("gift");

gift.onclick = function () {

    document.querySelector(".gift-lid").style.transform = "rotate(-120deg)";

    setTimeout(() => {

        document.getElementById("giftContainer").style.display = "none";

        document.getElementById("website").style.display = "block";

    }, 1000);

};

// =============================
// Popup
// =============================

const popup = document.getElementById("popup");

document.getElementById("showMessage").onclick = function () {

    popup.style.display = "flex";

}

document.getElementById("openLetter").onclick = function () {

    popup.style.display = "flex";

}

document.getElementById("close").onclick = function () {

    popup.style.display = "none";

}

window.onclick = function(e){

    if(e.target==popup){

        popup.style.display="none";

    }

}

// =============================
// Floating Hearts
// =============================

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.color="#ff5d9e";

    heart.style.opacity=Math.random();

    heart.style.animation="fly 7s linear forwards";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,180);

// =============================
// Animation
// =============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{

transform:translateY(0) scale(.5);

opacity:1;

}

100%{

transform:translateY(-120vh) translateX(-50px) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
// =========================
// Confetti Effect
// =========================

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.top = "-20px";
    confetti.style.left = Math.random() * window.innerWidth + "px";

    confetti.style.width = "10px";
    confetti.style.height = "18px";

    const colors = [
        "#ff4f8b",
        "#ffd700",
        "#87cefa",
        "#98fb98",
        "#ff69b4",
        "#ffffff"
    ];

    confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    confetti.style.borderRadius = "4px";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    let y = -20;
    let x = parseFloat(confetti.style.left);

    const speed = 2 + Math.random() * 4;

    const interval = setInterval(() => {

        y += speed;
        x += Math.sin(y / 25);

        confetti.style.top = y + "px";
        confetti.style.left = x + "px";
        confetti.style.transform =
            `rotate(${y * 5}deg)`;

        if (y > window.innerHeight + 20) {

            clearInterval(interval);

            confetti.remove();

        }

    }, 16);

}

// يبدأ بعد فتح الهدية

gift.addEventListener("click", () => {

    let count = 0;

    const timer = setInterval(() => {

        createConfetti();

        count++;

        if (count > 180) {

            clearInterval(timer);

        }

    }, 35);

});
// =========================
// Fireworks
// =========================

function firework(x,y){

    const colors=[
        "#ff4f8b",
        "#ffd700",
        "#00c2ff",
        "#7fff00",
        "#ffffff",
        "#ff8fab"
    ];

    for(let i=0;i<35;i++){

        const p=document.createElement("div");

        p.className="firework";

        p.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        p.style.left=x+"px";
        p.style.top=y+"px";

        document.body.appendChild(p);

        const angle=Math.random()*360;

        const distance=80+Math.random()*120;

        const dx=Math.cos(angle*Math.PI/180)*distance;

        const dy=Math.sin(angle*Math.PI/180)*distance;

        p.animate([

        {
            transform:"translate(0,0)",
            opacity:1
        },

        {
            transform:`translate(${dx}px,${dy}px)`,
            opacity:0
        }

        ],{

            duration:1200,

            easing:"ease-out"

        });

        setTimeout(()=>{

            p.remove();

        },1200);

    }

}

gift.addEventListener("click",()=>{

    setTimeout(()=>{

        firework(window.innerWidth/2,250);

        setTimeout(()=>{

            firework(250,300);

        },300);

        setTimeout(()=>{

            firework(window.innerWidth-250,300);

        },600);

    },900);

});
// =========================
// Typing Effect
// =========================

const message = `Happy Birthday ganim benim ❤️

I wish you endless happiness,
lots of success,
beautiful memories,
good health,
and a life full of love.

May all your dreams come true.

Thank you for being such an amazing person.

Never stop smiling...

Because your smile is the most beautiful thing in this world. 💖

Happy Birthday guzelim 🎂✨❤️`;

const typingElement = document.getElementById("typingText");

let index = 0;

function typeMessage(){

    if(index < message.length){

        typingElement.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage,40);

    }

}

document.getElementById("showMessage").onclick = function(){

    popup.style.display="flex";

    typingElement.innerHTML="";

    index=0;

    typeMessage();

}

document.getElementById("openLetter").onclick = function(){

    popup.style.display="flex";

    typingElement.innerHTML="";

    index=0;

    typeMessage();

}
