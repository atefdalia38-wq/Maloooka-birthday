let count = 0;

function showMessage() {

    const btn = document.querySelector("button");
    const surprise = document.getElementById("surprise");

    count++;

    if(count < 6){

        btn.style.position = "fixed";

        let x = Math.random() * (window.innerWidth - 220);
        let y = Math.random() * (window.innerHeight - 80);

        btn.style.left = x + "px";
        btn.style.top = y + "px";

    }else{

        btn.style.position = "static";
        surprise.style.display = "block";

    }

}
