let count = 0
let count2 = 0
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
   count2 = count2 + 1
    away.innerText = count2    
}

function twoPoint2(){
   count2 = count2 + 2
    away.innerText = count2    
}

function threePoint2(){
   count2 = count2 + 3
    away.innerText = count2    
}

function newGame(){
    count = 0
    count2 = 0
    away.innerText = count2
    score.innerText = count  
}

