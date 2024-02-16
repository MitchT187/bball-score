let count = 0
let score = document.getElementById("score-brd")
let away = document.getElementById("score-brd2")
function freethrow(){
   count = count + 1
    score.innerText = count    
}

function twoPoint(){
   count = count + 2
    score.innerText = count    
}

function threePoint(){
   count = count + 3
    score.innerText = count    
}

function freethrow2(){
   count = count + 1
    away.innerText = count    
}

function twoPoint2(){
   count = count + 2
    away.innerText = count    
}

function threePoint2(){
   count = count + 3
    away.innerText = count    
}

function newGame(){
    count = 0
    away.innerText = count
    score.innerText = count  
}
