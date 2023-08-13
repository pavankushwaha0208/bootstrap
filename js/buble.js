let timer = 60;
let score = 0;
let hitrn= 0;

function scorem(){
    score += 10;
    document.querySelector("#sco").textContent = score;
}

function makebuble(){
    let culter = "";

    for(let i = 0; i <= 101; i++){
        let rn = Math.floor(Math.random()*10)
        // let ran = "pavan kushwaha"
        culter += `<div class = "bubble">${rn}</div>`
        document.querySelector(".pbtm").innerHTML = culter;
    }
}
function hitman(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitn").innerHTML = hitrn;
}

function runtime(){
   let mukesh = setInterval(function(){
        if(timer > 0){
            timer--
            document.querySelector("#runti").textContent = timer;
         }else{
            clearInterval(mukesh);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
         }
    },1000)
}
document.querySelector(".pbtm"
).addEventListener("click", function(dets){
    
    let clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn){
        scorem();
        makebuble();
        hitman();
    }
   
 

})

makebuble();
hitman();
runtime();