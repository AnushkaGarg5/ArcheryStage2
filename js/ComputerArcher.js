class ComputerArcher {
    constructor(x, y, width, height, archerAngle) {
    var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true};

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = archerAngle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/computerArcher.png");
      World.add(world, this.body);
    }
    display() {

      
      var pos = this.body.position
      var angle = this.body.angle

      Matter.Body.setAngle(this.body , this.angle)


      
      fill("#676e6a");
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image (this.image,0,0,100,100)
      pop();
      noFill();
    }
  }