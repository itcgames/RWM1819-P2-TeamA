
class Magnet
{
  constructor(x,y,world) {
     var b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
       ;
     this.b2Vec2 = Box2D.Common.Math.b2Vec2

     // FSM variables
     this.stateInactive = new State("Inactive");
     this.stateActive = new State("Active");
     this.eventAttract = new Event("Attract", this.stateInactive, this.stateActive, false)
     this.eventNothing = new Event("Left zone", this.stateActive, this.stateInactive, false)
     this.fsm = new TwoStateTwoEvent("Magnet field", this.stateInactive, this.stateActive, this.eventAttract, this.eventNothing);

     document.addEventListener("mousemove",this.onMouseMove.bind(this), true);
     document.addEventListener("mousedown",this.onMouseDown.bind(this), true);
     document.addEventListener("mouseup",this.onMouseUp.bind(this), true);

     // image variables
     this.img = new Image(); // Image object
     this.img.src = "img/Magnet.png";
     this.img.width = 50;  // Width of one image
     // Set to a x coordinate halfway through last sprite
     this.imgX = (x *30) - 30; // X position on screen, Multipling and substracting to get position right
     this.imgY = (y *30) - 10;  // Y position on screen, Multipling and substracting to get position right

     // controllers for animation speed and where it starts
     this.animeSpeed = 30;
     this.animeSpeedIndex = 0;

     this.animeImg = new Image(); // Image object
     this.animeImg.src = "img/magnet_field.png";
     this.animeImg.animeIndex = 0;  // Index of what part of the animation to display
     this.animeImg.width = 14;  // Width of one image
     // Set to a x coordinate halfway through last sprite
     this.animeImg.widthThreshold = 25;  // After index goes past this value, index will reset
     this.animeImgX = this.imgX + 65; // X position on screen, Multipling and substracting to get position right
     this.animeImgY = this.imgY + 13;  // Y position on screen, Multipling and substracting to get position right




    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;
    // Top bend
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-1,0.5),
      new this.b2Vec2(-0.9, 0.3),
      new this.b2Vec2(-0.8,0.2),
      new this.b2Vec2(-0.7,0.1),
      new this.b2Vec2(-0.6,0.05),
      new this.b2Vec2(-0.5,0),
      new this.b2Vec2(-0.25, -0.15),
      new this.b2Vec2(0, -0.25),
      new this.b2Vec2(0,0),
      new this.b2Vec2(-0.8, 0.5),

		  ]);
		bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("Magnet");

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Top rect
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-0, -0.25),
      new this.b2Vec2(0.75 , -0.25),
      new this.b2Vec2(0.75,0),
      new this.b2Vec2(0 , 0),
		  ]);




    this.body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Bottom rect
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-0, 1),
      new this.b2Vec2(0.75 , 1),
      new this.b2Vec2(0.75,1.25),
      new this.b2Vec2(0 , 1.25),
		  ]);




    this.body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Bottom bend

    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-1,0.5),
      new this.b2Vec2(-0.9, 0.7),
      new this.b2Vec2(-0.8,0.8),
      new this.b2Vec2(-0.7,0.9),
      new this.b2Vec2(-0.6,0.95),
      new this.b2Vec2(-0.5,1),
      new this.b2Vec2(-0.25, 1.15),
      new this.b2Vec2(0, 1.25),
      new this.b2Vec2(0,1),
      new this.b2Vec2(-0.8, 0.5),
		  ]);



    this.body.CreateFixture(fixDef);



  }
  onMouseDown(e){
    console.log(gameStartedBool);
    if(gameStartedBool == false)
    {
    e.preventDefault();
    this.mousePosX = e.clientX;
    this.mousePosY = e.clientY;
    console.log("Y mouse =" +this.mousePosY);
    console.log("Y = " + this.body.GetPosition().y * 30);
    if(this.mousePosX < this.body.GetPosition().x*30 + (this.img.width)
    && this.mousePosX > this.body.GetPosition().x*30 - (this.img.width)
    && this.mousePosY  > this.body.GetPosition().y*30 - 16
    && this.mousePosY < (this.body.GetPosition().y*30 + (this.img.height / 20))){
      this.selected = true;
    }
    else{
      this.selected = false;
    }
  }
}

  onMouseMove(e){
    if(gameStartedBool == false)
    {
      e.preventDefault();
      this.mousePosX = e.clientX;
      this.mousePosY = e.clientY;
    }
  }
  onMouseUp(e){
    e.preventDefault();
    this.selected = false;
  }
  inZone()
  {
    if(this.fsm.currentState === this.stateInactive)
    {
      this.fsm.useEvent(this.eventAttract)
    }
  }

  outOfZone()
  {
    if(this.fsm.currentState === this.stateActive)
    {
      this.fsm.useEvent(this.eventNothing)
    }
  }


  render(){
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");

    ctx.drawImage(this.img, 0, 0, 1021, 926, this.imgX, this.imgY, 60, 50)
    if(this.fsm.currentState === this.stateActive)
    {
      this.animate();
      ctx.drawImage(this.animeImg, this.animeImg.animeIndex, 0, 43, 24, this.animeImgX, this.animeImgY, this.animeImg.width, 24)
    }
  }

  animate()
  {
    if(this.animeSpeedIndex < this.animeSpeed)
    {
      this.animeSpeedIndex++;
    }
    else
    {
      this.animeSpeedIndex = 0;
      if(this.animeImg.animeIndex < this.animeImg.widthThreshold)
      {
        this.animeImg.animeIndex = this.animeImg.animeIndex + this.animeImg.width
      }
      else {
        this.animeImg.animeIndex = 0;
      }
    }
  };

  getPositionX(){
    return this.body.GetPosition().x;

  }
  getPositionY(){
    return this.body.GetPosition().y;
  }

  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
  update(){
    // Drag And Drop
    this.imgX = (this.body.GetPosition().x *30)-30;
    this.imgY = (this.body.GetPosition().y *30)-10;
    if(this.selected == true){
    this.body.SetPosition(new this.b2Vec2(this.mousePosX / 30,this.mousePosY / 30));
    }
  }
}
