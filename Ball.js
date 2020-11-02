class Ball {
  constructor(x, y) {
    var options = {
        //'restitution':0.8,
        'frictionAir':0.05,
        'density':0.8
    }
    this.body = Bodies.circle(x, y, 100, options);
    this.radius=100;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse( 0, 0, this.radius,this.radius);
    pop();
  }
}
