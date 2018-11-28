
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

    // image variables
    this.img = new Image(); // Image object
    this.img.src = "img/trampoline.png";
    this.img.animeIndex = 0;  // Index of what part of the animation to display
    this.img.width = 50;  // Width of one image
    // Set to a x coordinate halfway through last sprite
    this.img.widthThreshold = 175;  // After index goes past this value, index will reset
    this.imgX = (x *30) - 45; // X position on screen, Multipling and substracting to get position right
    this.imgY = (y *30) - 8;  // Y position on screen, Multipling and substracting to get position right

    this.animeSpeed = 10;
    this.animeSpeedIndex = 0;

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
    world.CreateBody(bodyDef).CreateFixture(fixDef);

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
    world.CreateBody(bodyDef).CreateFixture(fixDef);

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
    world.CreateBody(bodyDef).CreateFixture(fixDef);

  }


  render(){
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    var image = this.img;
    this.animate();

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
        this.img.animeIndex = this.img.animeIndex + this.img.width
      }
      else {
        this.img.animeIndex = 0;
      }
    }
  };

  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
