
let sezurs = document.querySelector(".img");
let place = document.querySelector(".middle");
let result = document.querySelector(".results");
let btn = document.querySelector(".btn");
let imgs = document.querySelectorAll(".imgg");
let imgcont = document.querySelector(".left");
let forcump = document.querySelector(".forcump");
let foruse = document.querySelector(".foruse");

let arrrray = [
    'scissors.png',
    'rock.png',
    'paper.png'
];

let computerPick;
let counter = 0;
let countClick = 0;
let countuser = 0;
let countcomp = 0;
let rounds = 0;

btn.addEventListener("click", () => {
    rounds++;
    console.log("Round:", rounds);
    if (rounds <= 5) {
        btn.disabled = true; 
        computerPick = arrrray[getComputerChoice()];
        if (counter < arrrray.length) {
            counter++;
            sezurs.classList.add("none");
        } else {
            counter = 0;
        }
    } else {
        displayWinner();
    }
});

function getComputerChoice() {
    const i = Math.floor(Math.random() * arrrray.length);
    return i;
}

for (let i = 0; i < imgs.length; i++) {
    const element = imgs[i];
    element.addEventListener("click", (t) => {
        const tar = t.target;
        const userPick = tar.src.substring(tar.src.lastIndexOf('/') + 1);
        countClick++;

        if (userPick === computerPick) {
            setTimeout(() => {
                sezurs.src = computerPick;
            }, 500);
            place.innerHTML = "You are even, try again";
            element.classList.add('none');
            imgcont.classList.add("flep");
            setTimeout(() => {
                resetCards();
            }, 2000);
        } else if ((userPick === 'scissors.png' && computerPick === 'rock.png') ||
            (userPick === 'rock.png' && computerPick === 'paper.png') ||
            (userPick === 'paper.png' && computerPick === 'scissors.png')) {
            setTimeout(() => {
                sezurs.src = computerPick;
                place.innerHTML = "The computer won";
                sezurs.classList.add("green");
                element.classList.add("red");
            }, 500);
            countcomp++;
            forcump.innerHTML = countcomp;
            element.classList.add('none');
            imgcont.classList.add("flep");
            setTimeout(() => {
                resetCards();
            }, 2000);
        } else {
            setTimeout(() => {
                sezurs.src = computerPick;
                place.innerHTML = "The user won";
                element.classList.add("green");
                sezurs.classList.add("red");
            }, 500);
            countuser++;
            foruse.innerHTML = countuser;
            element.classList.add('none');
            imgcont.classList.add("flep");
            setTimeout(() => {
                resetCards();
            }, 2000);
        }
        if (rounds === 5) {
            displayWinner();
        }
    });
}

function resetCards() {
    console.log("Resetting cards...");
    for (let img of imgs) {
        img.classList.remove('none');
        imgcont.classList.remove('flep');
        img.classList.remove('green', 'red');
        sezurs.classList.remove('none', 'green', 'red');
        sezurs.src = '';
        place.innerHTML = '';
    }
    btn.disabled = false;
}

function displayWinner() {
    if (countuser > countcomp) {
        foruse.classList.add("green");
        place.innerHTML = "USER WON";
    } else if (countuser < countcomp) {
        forcump.classList.add("green");
        place.innerHTML = "COMPUTER WON";
    } else {
        place.innerHTML = "It's a tie!";
    }
    setTimeout(() => {
        location.reload();
    }, 3000);
}
