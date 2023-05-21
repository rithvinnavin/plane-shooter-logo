var splashimg
var gameState="wait"


function preload(){
splashimg=loadImage("assets/splash.gif")

}

function setup(){
createCanvas(windowWidth,windowHeight)

}

function draw(){
    if (gameState=="wait"){
background(splashimg)
}
}a