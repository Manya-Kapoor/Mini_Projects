// steps
// keypress -> game starts
// btn flash + level 1 
// user presses btn -> check if user's seq == game's seq
// if yes -> level up
// else game over

let gameseq = [];
let userseq = []; // empty array to store sequece

let btns = ["red", "yellow", "green", "purple"]; // used to store colours of btns

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game start");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) { // to flash btn in general (jo btn flash hona h woh as argument aayega)
    btn.classList.add("flash"); // btn ki classlist mein hum 'flash' class add krr denge
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) { // to flash btn in general (jo btn flash hona h woh as argument aayega)
    btn.classList.add("userflash"); // btn ki classlist mein hum 'flash' class add krr denge
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {

    userseq = []; // jab bhi level up ho toh userseq arr khali ho jaayega aur user ko shuru se saara sequence follow krna hoga...for that we'll empty the arr
    level++; // level number increases
    h2.innerText = `Level ${level}`;

    // random btn choosen by game code
    let randomIndex = Math.floor(Math.random() * 3);  // choosing a random index from btns array
    let randomColour = btns[randomIndex]; // choose a random colour
    let randomButton = document.querySelector(`.${randomColour}`); // randomColour ki class ka btn access kr sakte h
    // console.log(randomIndex);
    // console.log(randomColour);
    // console.log(randomButton);
    gameseq.push(randomColour); // when a randcolor is generated it is pushed into gameseq arr
    console.log(gameseq);
    gameFlash(randomButton); // randomButton ko flash krwao
}

function checkSeq(idx) {
    console.log("curr level: ", level);

    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) { // if user has reached the end of gameseq arr
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    }
    else {
        console.log("Hawwww diff value :(");
        h2.innerHTML = `Game over! Your score : <b> ${level} </b> <br> Press any key to restart `;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        resetGame(); // jab game over hogi toh game reset krni hogi
    }
}

function btnPress() { // when user presses btn
    let buton = this;
    userflash(buton); // btn flashes when user clicks it

    userColour = buton.getAttribute("id"); // user btn press karega uska colour uss btn wala colour hi hoga that we can access using its id
    userseq.push(userColour);
    console.log(userseq);

    checkSeq(userseq.length-1); // checking last index
}


let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resetGame() {
    started = false; // i.e. game kabhi start hua hi nhi
    gameseq = []; // gameseq reset and emptied
    userseq = []; // userseq reinitialised
    level = 0; // level reset
}
