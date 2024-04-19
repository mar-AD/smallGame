

let sezurs = document.querySelector(".img");
let place = document.querySelector(".middle");
let result = document.querySelector(".results");
let btn = document.querySelector(".btn");
let imgs = document.querySelectorAll(".imgg");
let imgcont= document.querySelector(".left")
let forcump = document.querySelector(".forcump")
let foruse = document.querySelector(".foruse")

let arrrray = [  
    'scissors.png',
    'rock.png',
    'paper.png'
] 


let computerPick;
let counter = 0;
let countClick=0;
let countuser = 0;
let countcomp = 0;

btn.addEventListener("click", ()=>{
    computerPick = arrrray[getComputerChoice()];
    if (counter<arrrray.length) {
        counter ++;   
        sezurs.classList.add("none");
        // result.classList.add("nonee")
    }else{
        counter = 0;
        
    }
    // seting a timeout to reload every 4s--------------------
    // countClick++;
    // console.log(countClick)
    // if (countClick>=5) {
    //     location.reload()
        
    // }
    
    // setTimeout(() => {
    //     location.reload()
    //  }, 4000);
    
})
// getting a random value ---------------------------

function getComputerChoice (){
    const i = Math.floor(Math.random() * arrrray.length);
    return i;
}


// the possible conditons ------------------------

for (let i = 0; i < imgs.length; i++) {
    const element = imgs[i];
    element.addEventListener("click", (t)=>{
    const tar = t.target;
    const userPick = tar.src.substring(tar.src.lastIndexOf('/') + 1);
    console.log(tar)
    
    countClick++;



    if (userPick=== computerPick) {
        setTimeout(() => {
            sezurs.src=computerPick;
        }, 500);
        place.innerHTML="you are even, try again";
        element.classList.add('none');
        imgcont.classList.add("flep");
    }else if (userPick=== 'scissors.png' && computerPick==='rock.png'){
        setTimeout(() => {
            sezurs.src=computerPick;
            place.innerHTML="the computer won";
            sezurs.classList.add("green");
            element.classList.add("red");
        }, 500);
        
        element.classList.add('none');
        imgcont.classList.add("flep");
    }else if (userPick=== 'scissors.png' && computerPick==='paper.png'){
        setTimeout(() => {
            sezurs.src=computerPick;
            place.innerHTML="the user won";
            element.classList.add("green");
            sezurs.classList.add("red");
        }, 500);
        
        element.classList.add('none');
        imgcont.classList.add("flep");
    }else if (userPick=== 'rock.png' && computerPick==='paper.png'){
        setTimeout(() => {
            sezurs.src=computerPick;
            place.innerHTML="the computer won";
            sezurs.classList.add("green");
            element.classList.add("red");
        }, 500);
        
        element.classList.add('none');
        imgcont.classList.add("flep");
    }else if (userPick=== 'rock.png' && computerPick==='scissors.png'){
        setTimeout(() => {
            sezurs.src=computerPick;
            place.innerHTML="the user won";
            element.classList.add("green");
            sezurs.classList.add("red");
        }, 500);
        
        
        element.classList.add('none');
        imgcont.classList.add("flep");
    }else if (userPick=== 'paper.png' && computerPick==='scissors.png'){
        setTimeout(() => {
            sezurs.src=computerPick;
            place.innerHTML="the computer won";
            sezurs.classList.add("green");
            element.classList.add("red");
        }, 500);
        
        element.classList.add('none');
        imgcont.classList.add("flep");
    }else if (userPick=== 'paper.png' && computerPick==='rock.png'){
        setTimeout(() => {
            sezurs.src=computerPick;
            place.innerHTML="the user won";
            element.classList.add("green");
            sezurs.classList.add("red");
        }, 500);
        
        element.classList.add('none');
        imgcont.classList.add("flep");
    }else{
        sezurs.src=computerPick;
        place.innerHTML="this is wrong";
        
    }
    if (countClick == 5) {
        setTimeout(() => {
        location.reload()
    }, 4000);
    }
    
    
})
}

        

