class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
        
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        eclipse(this.x, this.y, 24, 24);
    }
}

let bubble1 = new Bubble;
let bubble2 = new Bubble;

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    
}

draw();