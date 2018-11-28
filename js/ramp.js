
class Ramp
{
  constructor(x,y,world) {
    var   b2Vec2 = Box2D.Common.Math.b2Vec2
     ,	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
       ;

    // image variables
    this.img = new Image(); // Image object
    this.img.src = "img/Ramp.png";
    this.img.width = 50;  // Width of image
    this.img.height = 19;  // Height of image
    this.imgX = (x *30); // X position on screen, Multipling and substracting to get position right
    this.imgY = (y *30);  // Y position on screen, Multipling and substracting to get position right

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;




    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new b2Vec2(0 , 0),
		  new b2Vec2(1, 1),
		  new b2Vec2(0, 1),
		  ]);
		bodyDef.position.Set(x,y);


    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

  }


  render(){
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");

    ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.imgX, this.imgY, this.img.width / 2 + 7, this.img.height * 2 - 7);
  }
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
