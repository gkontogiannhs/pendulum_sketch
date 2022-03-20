class Pendulum{
    constructor(len, angle){
        this.fixedPos = createVector(width/2, 3);
        this.len = len;
        this.angle = angle;
        //this.pos = createVector(Math.sin(this.angle)*this.len + width/2, Math.cos(this.angle)*this.len);
        this.x = Math.sin(this.angle)*this.len + width/2;
        this.y = Math.cos(this.angle)*this.len;
        //this.omega = Math.sqrt(9.81/this.len);
    }

    show(){
        strokeWeight(5);
        fill(0);
        // horizontal no one cares bar
        line(this.fixedPos.x+35, this.fixedPos.y, this.fixedPos.x-35, this.fixedPos.y);

        // first point fixes
        // second's point coordianates are changing
        fill(0, 70, 90);
        line(this.fixedPos.x, this.fixedPos.y, this.x, this.y);

         // oscillating object
        ellipse(this.x, this.y, 50, 50);
    }

    update(){      
        this.angle += 0.005;
        this.x = Math.sin(this.angle)*this.len + width/2;
        this.y = Math.cos(this.angle)*this.len;
    }
}