let radius
let insideCircle
let insideSquare
let pi


function setup() {
    radius = min(250, window.innerWidth)
    console.log(window.innerWidth)
    createCanvas(radius*2, radius*2)
    reset()
}

function reset() {
    insideCircle = 0
    insideSquare = 0
    pi = 0
    updateText()
    resetCanvas()
}

function resetCanvas() {
    background(113, 184, 147)
    noStroke()
    fill(50)
    circle(width/2, height/2, radius*2)
}

function updateText() {
    document.getElementById("insideCircle").innerHTML = insideCircle
    document.getElementById("insideSquare").innerHTML = insideSquare
    document.getElementById("aproximatePi").innerHTML = pi
}

function drawPoint(x, y) {
    push()

    distance = dist(x, y, width/2, height/2)
    if (distance < radius) {
        fill(238, 150, 75)
    }
    else {
        fill(244, 211, 94)
    }
    circle(x, y, 5)

    pop()
}

function evaluatePoint(x, y) {
    distance = dist(x, y, width/2, height/2)
    if (distance < radius) {
        insideCircle++
    }
    insideSquare++
}

function populateRandom(num) {
    let pts = []
    for (let i=0; i < num; i++) {
        x = random() * width
        y = random() * height
        
        drawPoint(x, y)
        evaluatePoint(x, y)
    }
    pi = round(4 * insideCircle / insideSquare, 4)
    updateText()
}
