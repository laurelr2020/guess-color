'use strict'

class Box{
    constructor(over, down, width, height, color){
        this.color = color;

        this.draw = function() {
            global.context.fillStyle = this.color;
            global.context.fillRect(over, down, width, height);

            let colorString = getColorString(this.color);
            let colorMessage = new Message(over - 150, down + 250, colorString);
            colorMessage.writeMessage();
        }

        this.changeColor = function() {
            let red = generateRandomColor();
            let green = generateRandomColor();
            let blue = generateRandomColor();

            this.color = "rgb(" + red + "," + green + " , " + blue + ")";
        }
    }
}

function generateRandomColor(){
    let colorMax = 256;
    return Math.floor(Math.random() * colorMax);
}

function getColorString(color){
    let colorList = color.replace(/[^\d,]/g, '').split(',');
    let string = "red: " + colorList[0] + " | green: " + colorList[1] + " | blue: " + colorList[2];

    return string;
}