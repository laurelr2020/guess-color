'use strict'

class Message{
    constructor(over, down, message){
        this.over = over;
        this.down = down; 
        this.message = message;
    }

    writeMessage(){
        global.context.fillStyle = "whitesmoke";
        global.context.font = "25px monospace";
        global.context.fillText(this.message, this.over, this.down);
    }
}