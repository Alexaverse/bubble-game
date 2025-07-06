function makeBubble(){
    var clutter="";
for(var i = 1;i<=234;i++){
    clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.querySelector("#pbot").innerHTML=clutter;
}
function runTimer(){
    var timer=60;
    var time = setInterval(function(){
        if(timer>0){
            timer--;
        }
        else{
            clearInterval(time);
            document.querySelector("#pbot").innerHTML=`<h1>GAME OVER</h1>`
        }
        document.querySelector("#value").textContent=timer;    
    },1000)
}
var hitrn=0;
function Hit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn;

}
var score=0;
function increaseScore(){   
     score += 10;
    document.querySelector("#scr").textContent=score;
    
}
document.querySelector("#pbot").addEventListener("click",function(dets){
    var clicked = Number(dets.target.textContent);   
    if(clicked===hitrn){
        increaseScore();
        Hit();
        makeBubble();
    } 
})
Hit();
runTimer();
makeBubble();

