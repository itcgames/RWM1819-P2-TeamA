
class Trampoline
{
  constructor(x,y,world) {
    var   b2Vec2 = Box2D.Common.Math.b2Vec2
     ,	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
       ;

    // FSM variables
    this.stateBounce = new State("Bounce");
    this.stateStill = new State("Still");
    this.eventJump = new Event("Jump", this.stateStill, this.stateBounce, false)
    this.eventStop = new Event("Stop", this.stateBounce, this.stateStill, false)
    this.fsm = new TwoStateTwoEvent("Tramp", this.stateBounce, this.stateStill, this.eventJump, this.eventStop);

    // image variables
    this.img = new Image(); // Image object
    this.img.src = "img/trampoline.png";
    this.img.animeIndex = 0;  // Index of what part of the animation to display
    this.img.width = 50;  // Width of one image
    // Set to a x coordinate halfway through last sprite
    this.img.widthThreshold = 175;  // After index goes past this value, index will reset
    this.imgX = (x *30) - 45; // X position on screen, Multipling and substracting to get position right
    this.imgY = (y *30) - 8;  // Y position on screen, Multipling and substracting to get position right

    // controllers for animation speed and where it starts
    this.animeSpeed = 10;   // Speed
    this.animeSpeedIndex = 0; // Counter
    this.animeCount = 0;      // Counter
    this.animeLimit = 15;      // How many times the animation plays

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 1.1;

    var bodyDef = new b2BodyDef;

    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = x;
    bodyDef.position.y = y;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(1, 0.2);
    var bodyTop = world.CreateBody(bodyDef);
    bodyTop.CreateFixture(fixDef);
    bodyTop.SetUserData("TrampolineTop");

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    //var bodyDef = new b2BodyDef;

    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = x -1.2;
    bodyDef.position.y = y + 0.3;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.2, 0.5);
    var bodyLeft = world.CreateBody(bodyDef);
    bodyLeft.CreateFixture(fixDef);
    bodyLeft.SetUserData("TrampolineLeft");

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    //var bodyDef = new b2BodyDef;

    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = x +1.2;
    bodyDef.position.y = y+0.3;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.2, 0.5);
    var bodyRight = world.CreateBody(bodyDef);
    bodyRight.CreateFixture(fixDef);
    bodyRight.SetUserData("TrampolineRight");
  }

  jump()
  {
    this.animeCount = 0;
    if(this.fsm.currentState === this.stateStill)
    {
      this.fsm.useEvent(this.eventJump)
    }
  }

  stop()
  {
    this.animeCount = 0;
    this.img.animeIndex = 0;
    if(this.fsm.currentState === this.stateBounce)
    {
      this.fsm.useEvent(this.eventStop)
    }
  }

  render(){
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    var image = this.img;
    if(this.fsm.currentState === this.stateBounce)
    {
      this.animate();
    }

    ctx.drawImage(image, this.img.animeIndex,0, 48,30,this.imgX, this.imgY,90,32)

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
        this.animeCount++;
        this.img.animeIndex = this.img.animeIndex + this.img.width
      }
      else {
        this.img.animeIndex = 0;
      }

      console.log(this.animeCount)
      if(this.animeCount >= this.animeLimit)
      {
        this.stop()
      }
    }
  };

  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
