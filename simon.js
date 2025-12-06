let btns = document.querySelectorAll(".square");
let h3 = document.querySelector("h3");
let divs = ["div1", "div2", "div3", "div4"];
let gameArr = [];
let level = 0;
let start = false;
let count = 1;
let i = -1;

function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}


function rndmFlash() {
    let rndmIdx = Math.floor(Math.random() * 4);
    let rndmColor = divs[rndmIdx];
    let rndmbtn = document.querySelector(`.${rndmColor}`);
    buttonFlash(rndmbtn);
    return rndmbtn.getAttribute("id");
}

function lossFlash(btn) {
    btn.classList.add("lossFlash");
    setTimeout(function () {
        btn.classList.remove("lossFlash");
    }, 100);
}

function startNewGame(btn) {
    buttonFlash(btn);
    let rndm = rndmFlash();
    gameArr.push(btn.getAttribute("id"));
    gameArr.push(rndm);
    count = 0;
}

function lossWarning() {
    lossFlash(document.querySelector("body"));
    let h4 = document.createElement("h4");
    h4.innerHTML = "<b>Press any Key to Start the Game</b>";
    h3.insertAdjacentElement("afterend", h4);
    let h5 = document.createElement("h4");
    h5.innerHTML = `<b>You loss the Game by making the Score ${gameArr.length}</b>`;
    h4.insertAdjacentElement("afterend", h5);
}

function removeWarning() {
    document.querySelector("h4").remove();
    document.querySelector("h4").remove();
    i = -1;
}

let max = -1;
for (btn of btns) {
    btn.addEventListener("click", function () {
        if (count == 1) {
            level++;
            h3.innerHTML = `<b> Level ${level} </b>`;
            console.log(gameArr);
            startNewGame(this);
            if (start == true) {
                removeWarning();
            }
        } else {
            i++;
            let ele = this.getAttribute("id");
            console.log(gameArr);
            buttonFlash(this);
            if (ele != gameArr[i]) {
                lossWarning();
                count = 1;
                start = true;
                level = 0;
                max = Math.max(gameArr.length, max);
                gameArr = [];
                document.querySelector("h2").innerHTML = `<b> Highest Score ${max} </b>`;
                h1.insertAdjacentElement("afterend", ddocument.querySelector("h2"));
            }

            if (i == gameArr.length - 1) {
                level++;
                h3.innerHTML = `<b> Level ${level} </b>`;
                i = -1;
                let rndm = rndmFlash();
                gameArr.push(rndm);
            }
        }
    });
}