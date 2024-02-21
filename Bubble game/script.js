function mackBubble (){
    let cutter = "";
    for (let i= 0; i<=167 ; i++) {
       let rn = Math.floor(Math.random() * 10)
       cutter += `<div class="bubble">${rn}</div>`      
    }
    document.querySelector("#pbtm") . innerHTML = cutter; 
}
mackBubble();

var timer = 60;
function runtimer (){
    var run = setInterval( ()=>{
     if (  timer > 0){ 
        timer--;
        document.querySelector("#timereval") . textContent = timer ;
    } else { 
        clearInterval(run);
        document.querySelector("#pbtm").innerHTML = `<h1 , class = " jay">Game Over</h1>`;
    }

    }, 1000)
}
runtimer(); 
var hitrn = 0;
function getHitval (){
    hitrn = Math.floor(Math.random()* 10);
    document.querySelector("#htval").textContent = hitrn;  

}
getHitval();

var score = 0;
function getScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clicked = (Number(details.target.textContent ) );
    if (clicked === hitrn) {
        getScore();
        mackBubble();
        getHitval();
    }
    
});

    







