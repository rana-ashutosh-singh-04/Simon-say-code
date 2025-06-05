let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["red","orange","grey","skyblue"]

let p = document.querySelector("p");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game sarted")
        started =true;

        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq = [];
    level++;
    const audio = document.querySelectorAll("")
    p.innerText = `Level ${level}`;
     let randIdx  = Math.floor(Math.random()*3);
     let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq)
    gameFlash(randbtn);

}
function btnPress(){ 
    // console.log(this);
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
        
    
}

function checkAns(idx){
    // let idx = level - 1;
    // console.log("curr level : ", level);
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
       setTimeout(levelUp, 1000);
       }
    }else{
        p.innerHTML = `Game over! your score was <br>${level}</br><br> press any key to start.</br>`

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150
    )
        reset();

    }

}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}

document.addEventListener("keydown",function() 
{
     const audio = document.getElementById("welcomeAudio");
     audio.play();
}, {once:true})