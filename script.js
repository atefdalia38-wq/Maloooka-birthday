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
