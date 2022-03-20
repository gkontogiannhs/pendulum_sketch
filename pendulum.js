class Pendulum{
    constructor(len, angle){
        this.origin = createVector(width/2, 0);
        this.len = len;
        this.angle = angle;
        // given an angle,  x = sin(angle)*len
        // and y = cos(angle)*len
        this.object = createVector();
        this.angularVel = 0.0;
        this.angularAcc = 0.0;
        this.gravity = 1;
        this.color = {r: random(255), g: random(255), b: random(255)};
    }

    show(){
        strokeWeight(5);
        fill(0);
        // horizontal no one cares bar
        line(this.origin.x+35, this.origin.y, this.origin.x-35, this.origin.y);

        // first point fixess
        // second's point coordianates are changing
        fill(this.color.r, this.color.g, this.color.b);
        line(this.origin.x, this.origin.y, this.object.x, this.object.y);

         // oscillating object
        ellipse(this.object.x, this.object.y, 50, 50);
    }

    update(){      
        // calc the force
        let force = this.gravity * sin(this.angle);

        // angualar accelaration based on the force and lenght
        this.angularAcc = (-1 * force)/this.len;
        
        // new angular velocity
        this.angularVel += this.angularAcc;

        // add the angle offset
        this.angle += this.angularVel;

        // new x,y based on the above
        this.object.x = sin(this.angle)*this.len + this.origin.x;
        this.object.y = cos(this.angle)*this.len + this.origin.y;
    }
}
