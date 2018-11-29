

class Fan
{
  constructor(x,y,world) {
     var b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
       ;
    // FSM variables
    this.b2Vec2 = Box2D.Common.Math.b2Vec2;
    this.stateOn = new State("On");
    this.stateOff = new State("Off");
    this.eventSwitch = new Event("Switch", this.stateOn, this.stateOff, true)
    this.fsm = new TwoStateTwoEvent("Fan", this.stateOff, this.stateOn, this.eventSwitch);

    // image variables
    this.img = new Image(); // Image object
    this.img.src = "img/Fan.png";
    this.img.animeIndex = 27;  // Index of what part of the animation to display
    this.img.width = 24;  // Width of one image
    this.img.bladeWidth = 16;  // Width of one image
    this.img.height = 28;  // Height of one image
    // Set to a x coordinate halfway through last sprite
    this.img.widthThreshold = 70;  // After index goes past this value, index will reset
    this.imgX = (x *30) - 90; // X position on screen, Multipling and substracting to get position right
    this.imgBladeX = (x *30) - 33; // X position on screen, Multipling and substracting to get position right
    this.imgY = (y *30) - 22;  // Y position on screen, Multipling and substracting to get position right
    this.imgBladeY = (y *30) - 29;  // Y position on screen, Multipling and substracting to get position right

    // controllers for animation speed
    this.animeSpeed = 10;
    this.animeSpeedIndex = 0;

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

    // Fan shape
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new this.b2Vec2(-1 , -1),
		  new this.b2Vec2(-0.5, -1), //  0
		  new this.b2Vec2(-0.25, -0.75),   //.4
      new this.b2Vec2(-0.1 , -0.50),   // .7
		  new this.b2Vec2(0.01,-0.25),    //.9
      new this.b2Vec2(.05, 0),          // 1
      new this.b2Vec2(0.01 , 0.25),
		  new this.b2Vec2(-0.1,0.50),
      new this.b2Vec2(-0.25, 0.75),
      new this.b2Vec2(-0.5 , 1),
		  new this.b2Vec2(-1,1),
		  ]);
		bodyDef.position.Set(x,y);


    bodyDef.type = b2Body.b2_staticBody;
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("Fan");


    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Back shape
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-3, 0),
      new this.b2Vec2(-2.90,-0.125),
      new this.b2Vec2(-2.70 , -0.25),
      new this.b2Vec2(-2.40, -0.375),
      new this.b2Vec2(-2, -0.5),
      new this.b2Vec2(-1 , -0.5),
      new this.b2Vec2(-1,0.5),
      new this.b2Vec2(-2 , 0.5),
      new this.b2Vec2(-2.40, 0.375),
      new this.b2Vec2(-2.70,0.25),
      new this.b2Vec2(-2.90 , 0.125),
		  ]);


    this.body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Bottom platform
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-0.5, 1.2),
      new this.b2Vec2(-0.5,1.5),
      new this.b2Vec2(-2.5 , 1.5),
      new this.b2Vec2(-2.5, 1.2),
		  ]);



    this.body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Shaft shape
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-1,0.5),
      new this.b2Vec2(-1 , 1.2),
      new this.b2Vec2(-1.75,1.2),
      new this.b2Vec2(-1.75 ,0.5),
		  ]);

    this.body.CreateFixture(fixDef);

    document.addEventListener("mousemove",this.onMouseMove.bind(this), true);
    document.addEventListener("mousedown",this.onMouseDown.bind(this), true);
    document.addEventListener("mouseup",this.onMouseUp.bind(this), true);
  };


  onMouseDown(e){
    e.preventDefault();
    this.mousePosX = e.clientX;
    this.mousePosY = e.clientY;
    if(this.mousePosX < this.body.GetPosition().x*30
    && this.mousePosX > this.body.GetPosition().x*30 - (this.img.width * 2)
    && this.mousePosY  < this.body.GetPosition().y*30 + (this.img.height)
    && this.mousePosY > this.body.GetPosition().y*30 - (this.img.height)){
      this.selected = true;
    }
    else{
      this.selected = false;
    }

  }
  onMouseMove(e){
      e.preventDefault();
      this.mousePosX = e.clientX;
      this.mousePosY = e.clientY;
  }
  onMouseUp(e){
    e.preventDefault();
    this.selected = false;
  }

  getPositionX(){
    return this.body.GetPosition().x;
  }

  hit()
  {
    this.fsm.changeState();
  }

  render(){
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    if(this.fsm.currentState === this.stateOn)
    {
      this.animate();
    }



    ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.imgX, this.imgY, this.img.width * 3 + 9, this.img.height * 2 + 10);
    ctx.drawImage(this.img, this.img.animeIndex,0, this.img.bladeWidth,this.img.height,this.imgBladeX, this.imgBladeY,this.img.bladeWidth * 2 ,this.img.height * 2 + 3)
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
      if(this.img.animeIndex < this.img.widthThreshold)
      {
        this.img.animeIndex = this.img.animeIndex + this.img.bladeWidth + 4
      }
      else {
        this.img.animeIndex = 27;
      }
    }
  };

  getPositionY(){
    return this.body.GetPosition().y;
  }
  update(){
    // Drag And Drop
    this.fsm.changeState();
    this.imgX = (this.body.GetPosition().x *30) -90;
    this.imgY = (this.body.GetPosition().y *30) -22;
    this.imgBladeX = (this.body.GetPosition().x *30) -33;
    this.imgBladeY = (this.body.GetPosition().y *30) -29;
    if(this.selected == true){
    this.body.SetPosition(new this.b2Vec2(this.mousePosX / 30,this.mousePosY / 30));
    }
  }

  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
