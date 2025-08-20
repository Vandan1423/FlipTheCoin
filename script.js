let flipBtn = document.querySelector(".flip-btn");
let coin = document.querySelector(".coin");
let result = document.querySelector(".result");

const clickable = [flipBtn, coin];

let coinToss;

for (let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener("click", () => {
        randNum = Math.random();
        coin.classList.add("coin-animation");
        setTimeout(() => {
            if (randNum >= 0.5) {
                coinToss = "Heads";
                coin.setAttribute("src", "./resources/heads.svg");
                result.innerText = coinToss;
                coin.classList.remove("coin-animation");
            }
            if (randNum < 0.5) {
                coinToss = "Tails";
                coin.setAttribute("src", "./resources/tails.svg");
                result.innerText = coinToss;
                coin.classList.remove("coin-animation");
            }
        }, 2000);
    });
}
