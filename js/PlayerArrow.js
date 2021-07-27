class PlayerArrow {
  constructor(x, y, width, height ) {
    var options = {
      restitution: 0.8,
      friction: 2.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    //this.angle = angle;
  
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

  shoot(angle){
    var vel = p5.Vector.fromAngle(angle)
    vel.mult(15)
    Matter .Body.setStatic(this.body ,false)
    Matter.Body.setVelocity(this.body , {x:vel.x+300 , y:vel.y-10})
}

 display() {
  
  
    var pos = this.body.position;
    var angle = this.body.angle;

    
    if( keyIsDown(UP_ARROW) && angle> -0.3 ){
      angle-= 0.01;
      Matter.Body.setAngle(this.body , angle)}

    if (keyIsDown(DOWN_ARROW) && angle< 0.3 ){
      angle+= 0.01
      Matter.Body.setAngle(this.body , angle)}
   

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
  }
}
