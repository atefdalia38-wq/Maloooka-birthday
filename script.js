function showMessage() {

    const surprise = document.getElementById("surprise");
    const btn = document.querySelector("button");

    btn.classList.add("shake");

    setTimeout(() => {
        btn.classList.remove("shake");
    }, 700);

    if (surprise.style.display === "block") {
        surprise.style.display = "none";
    } else {
        surprise.style.display = "block";
    }

}
