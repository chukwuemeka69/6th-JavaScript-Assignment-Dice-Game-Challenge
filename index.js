let randomNum1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".dice .img1").setAttribute("src", `images/dice${randomNum1}.png`);
let randomNum2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".dice .img2").setAttribute("src", `images/dice${randomNum2}.png`);
let result = " ";

function winner(randomNum1, randomNum2) {
    if (randomNum1 > randomNum2) {
       result = "Player 1 wins.";
    }
    else if (randomNum1 === randomNum2) {
        result = "Draw !";
    }
    else {
        result = "Player 2 wins.";
    }
}
winner(randomNum1, randomNum2);
document.querySelector("h1").textContent = result;