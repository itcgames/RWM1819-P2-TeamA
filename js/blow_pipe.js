
class BlowPipe
{
  constructor(x,y,world) {
    var   b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
       ;

       document.addEventListener("mousemove",this.onMouseMove.bind(this), true);
       document.addEventListener("mousedown",this.onMouseDown.bind(this), true);
       document.addEventListener("mouseup",this.onMouseUp.bind(this), true);
     // FSM variables
     this.stateReady = new State("Ready");
     this.stateEmpty = new State("Empty");
     this.eventBlow = new Event("Blow", this.stateReady, this.stateEmpty, false)
     this.fsm = new TwoStateTwoEvent("Fan", this.stateReady, this.stateEmpty, this.eventBlow);

    // image variables
     this.img = new Image(); // Image object
     this.img.src = "img/blowpipe.png";
     this.img.animeIndex = 70;  // Index of what part of the animation to display
     this.img.width = 69;  // Width of one image
     this.imgX = (x *30) - 14; // X position on screen, Multipling and substracting to get position right
     this.imgY = (y *30) - 9;  // Y position on screen, Multipling and substracting to get position right

     // controllers for animation speed and where it starts
     this.animeSpeed = 25;
     this.animeSpeedIndex = 0;

    this.b2Vec2 = Box2D.Common.Math.b2Vec2;
    this.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    this.b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    this.imageX = x;
    this.imageY = y;

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

    // Triangle
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new this.b2Vec2(0 , -0.1),
      new this.b2Vec2(1.1, 0.4),
		  new this.b2Vec2(1.1, 0.6),
		  new this.b2Vec2(0, 1.1),
		  ]);

    bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("PipeInflated");

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Box on end
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(1.1, 0.7),
      new this.b2Vec2(1.1, 0.3),
      new this.b2Vec2(1.55, 0.3),
      new this.b2Vec2(1.55, 0.7),

		  ]);

    this.body.CreateFixture(fixDef);

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Top back
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-0.4, -0.3),
      new this.b2Vec2(0, -0.1),
      new this.b2Vec2(0, 0.1),
      new this.b2Vec2(-0.4, -0.1),
		  ]);

    this.body.CreateFixture(fixDef);

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Bottom back
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(0, 0.9),
      new this.b2Vec2(0, 1.1),
      new this.b2Vec2(-0.4, 1.2),
      new this.b2Vec2(-0.4, 1),
		  ]);

    this.body.CreateFixture(fixDef);



  }
  onMouseDown(e){
    e.preventDefault();
    this.mousePosX = e.clientX;
    this.mousePosY = e.clientY;
    if(this.mousePosX < this.body.GetPosition().x*30 + (this.img.width * 2)
    && this.mousePosX > this.body.GetPosition().x*30
    && this.mousePosY  < this.body.GetPosition().y*30 + (this.img.height /2)
    && this.mousePosY > this.body.GetPosition().y*30 - (this.img.height/2)){
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

  update(){
    // Drag And Drop
    this.imgX = (this.body.GetPosition().x *30)-14;
    this.imgY = (this.body.GetPosition().y *30)-9;
    if(this.selected == true){
    this.body.SetPosition(new this.b2Vec2(this.mousePosX / 30,this.mousePosY / 30));
    }

    if(this.body.GetUserData() == "PipeDeflated"){

    this.fix = this.body.GetFixtureList();
    this.body.DestroyFixture(this.fix);
    this.fix = this.body.GetFixtureList();
    this.body.DestroyFixture(this.fix);
    this.fix = this.body.GetFixtureList();
    this.body.DestroyFixture(this.fix);
    this.fix = this.body.GetFixtureList();
    this.body.DestroyFixture(this.fix);
      // Works but causes an error
    /*  this.fix = this.body.GetFixtureList();
      console.log("GOT FIXTURES!!!");
while (this.fix) {
   this.body.DestroyFixture(this.fix);
   this.fix = this.fix.next();
}*/
      //this.body.DestroyFixture(this.body.GetFixtureList());
      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;
      // Triangle
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
  		  new this.b2Vec2(0 , 0.3),
        new this.b2Vec2(1.1, 0.4),
  		  new this.b2Vec2(1.1, 0.6),
  		  new this.b2Vec2(0, 0.7),
  		  ]);
      this.body.CreateFixture(fixDef);

      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;

      // Box on end
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
        new this.b2Vec2(1.1, 0.7),
        new this.b2Vec2(1.1, 0.3),
        new this.b2Vec2(1.55, 0.3),
        new this.b2Vec2(1.55, 0.7),
  		  ]);

      this.body.CreateFixture(fixDef);

      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;

      // Back top
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
        new this.b2Vec2(-0.4, 0.1),
        new this.b2Vec2(0, 0.3),
        new this.b2Vec2(0, 0.5),
        new this.b2Vec2(-0.4, 0.3),

  		  ]);

      this.body.CreateFixture(fixDef);

      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;

      // Back bottom
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
        new this.b2Vec2(0, 0.5),
        new this.b2Vec2(0, 0.7),
        new this.b2Vec2(-0.4, 0.8),
        new this.b2Vec2(-0.4, 0.6),
  		  ]);
      this.body.CreateFixture(fixDef);
      this.body.SetUserData("PipeUsed");
    }
  }

   hit()
  {
    if(this.fsm.currentState === this.stateReady)
    {
      this.fsm.changeState()
    }
  }

  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");

    this.hit()
    if(this.fsm.currentState === this.stateReady)
    {
      ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.imgX, this.imgY, this.img.width, this.img.height);
    }
    else {

      ctx.drawImage(this.img, this.img.animeIndex, 0, this.img.width, this.img.height, this.imgX, this.imgY, this.img.width, this.img.height);
    }
  }

  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
