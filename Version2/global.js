'use strict'

class Global{
    constructor(){
        let canvas = document.getElementById("canvas");
        this.context = canvas.getContext('2d');

        this.colorBox = new Box(150, 100, 200, 200, "rgb(0, 0, 0)");
    }

    createCanvasBackground(){
        this.context.fillStyle = "lightgray";
        this.context.fillRect(0, 0, 500, 400);

        this.context.lineWidth = 2;
        this.context.strokeStyle="palevioletred";
        this.context.strokeRect(0, 0, 500, 400);
    }

    clearCanvas(){
        this.context.clearRect(0, 0, 500, 400);
        this.createCanvasBackground();
    }
}