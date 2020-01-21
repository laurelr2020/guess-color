'use strict'

let global;

function init(){
    global = new Global();
    global.createCanvasBackground();

    global.colorBox.draw();
}

function showNewColor(){
    global.colorBox.changeColor();
    global.colorBox.draw();
}