class PlayerArcher {
    constructor(x, y, width, height) {
    var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true};

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/playerArcher.png");
      World.add(world, this.body);
    }
    display() {

      push();
      var pos = this.body.position ;
      var angle = this.body.angle


      if( keyIsDown(UP_ARROW) && angle> -0.3 ){
        angle-= 0.01;
        Matter.Body.setAngle(this.body , angle)}
  
      if (keyIsDown(DOWN_ARROW) && angle< 0.3 ){
       
        angle+= 0.01
        Matter.Body.setAngle(this.body , angle)}

        
      fill("#676e6a");
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image , 0,0,this.width,this.height,this.angle)
      pop();
    }
  }