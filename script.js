// =========================
// Popup
// =========================

const popup = document.getElementById("popup");
const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("close");

openBtn.onclick = () => {
    popup.style.display = "flex";
};

closeBtn.onclick = () => {
    popup.style.display = "none";
};

window.onclick = (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
};

// =========================
// Floating Hearts
// =========================

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.color = [
        "#ff4f8b",
        "#ff7bac",
        "#ff99c8",
        "#ffb6d9",
        "#ffcce6"
    ][Math.floor(Math.random() * 5)];

    heart.style.opacity = Math.random();

    heart.style.animation = `fly ${4 + Math.random() * 5}s linear forwards`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 180);

// =========================
// Add Animation Dynamically
// =========================

const style = document.createElement("style");

style.innerHTML = `
@keyframes fly{

0%{
transform:translateY(0) scale(0.5);
opacity:1;
}

100%{
transform:translateY(-120vh)
translateX(${Math.random()*200-100}px)
rotate(360deg)
scale(1.4);
opacity:0;
}

}
`;

document.head.appendChild(style);

// =========================
// Sparkle Effect
// =========================

function sparkle(){

    const star = document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.fontSize=(10+Math.random()*20)+"px";
    star.style.pointerEvents="none";
    star.style.opacity="1";
    star.style.transition="2s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.opacity="0";
        star.style.transform="scale(2)";

    },100);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(sparkle,600);
