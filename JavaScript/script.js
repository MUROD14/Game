let front = 0;
let back = 0;
let coin = document.querySelector("#coin");
let flipBtn = document.querySelector("#flip-coin");
let restartBtn = document.querySelector("#restrat-btn");

flipBtn.addEventListener("click", () => {
    let i = Math.floor( Math.random() * 2 );
    coin.style.animation = "none";
    if(i){
        setTimeout(
            () => {
                coin.style.animation = "spin-front 3s ease forwards"
            },
            100
        );
        front++;
    } else {
        setTimeout(
            () => {
                coin.style.animation = "spin-back 3s ease forwards"
            },
            100
        );
        back++;
    }
    setTimeout(updateStates, 3000);
    disabledButton();
});

// textContent - ichindaki textni olib baradi

function updateStates() {
    document.querySelector("#front-count").textContent = `Front :  ${front}`;
    document.querySelector("#back-count").textContent = `Back : ${back}`;
}

function disabledButton() {
    flipBtn.disabled = true;
    setTimeout (
        () => {
            flipBtn.disabled = false;
        }, 2000
    ) 
}

restartBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    front = 0;
    back = 0;
    updateStates();
    flipBtn.disabled = false;
});