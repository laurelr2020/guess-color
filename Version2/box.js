'use strict'

class Box{
    constructor(over, down, width, height, color){
        this.color = color;

        this.draw = function() {
            global.context.fillStyle = this.color;
            global.context.fillRect(over, down, width, height);
        }

        this.changeColor = function() {
            let red = generateRandomColor();
            let green = generateRandomColor();
            let blue = generateRandomColor();

            this.color = "rgb(" + red + "," + green + "," + blue + ")";
        }
    }
}

function generateRandomColor(){
    let colorMax = 255;
    return Math.floor(Math.random() * colorMax);
}