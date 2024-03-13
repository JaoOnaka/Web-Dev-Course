var height = 0
var width = 0
var lifes = 1
var time = 15
var genFlyTime = 0

var level = window.location.search
level = (level.replace("?", ""))

if(level === "normal") {
    genFlyTime = 1500
} else if(level === "hard") {
    genFlyTime = 1000
} else if(level === 'bgigachad') {
    genFlyTime = 750
}

function adjustGameSize() {
    height = window.innerHeight
    width = window.innerWidth

    console.log(height, width)
}

adjustGameSize()

var timer = setInterval(function(){
    
    time--
    
    if (time < 0){
        clearInterval(timer)
        clearInterval(genFly)
        window.location.href = "victory.html"
    } else {
        document.getElementById("timer").innerHTML = time
    }
}, 1000)

function randomPos() {
    
    if(document.getElementById("fly")) {
        document.getElementById("fly").remove()

        if(lifes > 3) {
            window.location.href = "game_over.html"
        } else {
            document.getElementById("l" + lifes).src = "img/empty_heart.png"
            lifes++
        }
    }

    var posX = Math.floor(Math.random() * width) - 90
    var posY = Math.floor(Math.random() * height) - 90
    
    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    console.log(posX, posY)
    
    var fly = document.createElement("img")
    fly.src = "img/fly.png"
    fly.className = randomSize() + " " + randomDirection()
    fly.style.left = posX + 'px'
    fly.style.top = posY + 'px'
    fly.style.position = 'absolute'
    fly.id = 'fly'
    fly.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(fly)
}

function randomSize() {
    var imgClass = Math.floor(Math.random() * 3)
    
    switch(imgClass){
        case 0:
            return 'fly1'
        case 1:
            return 'fly2'
        case 2:
            return 'fly3'
    }
}

function randomDirection() {
    var imgClass = Math.floor(Math.random() * 2)
    
    switch(imgClass){
        case 0:
            return 'directionA'
        case 1:
            return 'directionB'
    }
}