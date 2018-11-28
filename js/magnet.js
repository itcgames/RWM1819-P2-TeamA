
class Magnet
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
      new b2Vec2(-1,0.5),
      new b2Vec2(-0.9, 0.3),
      new b2Vec2(-0.8,0.2),
      new b2Vec2(-0.7,0.1),
      new b2Vec2(-0.6,0.05),
      new b2Vec2(-0.5,0),
      new b2Vec2(-0.25, -0.15),
      new b2Vec2(0, -0.25),
      new b2Vec2(0,0),
      new b2Vec2(-0.8, 0.5),

		  ]);
		bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    var body = world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Top rect
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-0, -0.25),
      new b2Vec2(0.75 , -0.25),
      new b2Vec2(0.75,0),
      new b2Vec2(0 , 0),
		  ]);




    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Bottom rect
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-0, 1),
      new b2Vec2(0.75 , 1),
      new b2Vec2(0.75,1.25),
      new b2Vec2(0 , 1.25),
		  ]);




    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Bottom bend

    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-1,0.5),
      new b2Vec2(-0.9, 0.7),
      new b2Vec2(-0.8,0.8),
      new b2Vec2(-0.7,0.9),
      new b2Vec2(-0.6,0.95),
      new b2Vec2(-0.5,1),
      new b2Vec2(-0.25, 1.15),
      new b2Vec2(0, 1.25),
      new b2Vec2(0,1),
      new b2Vec2(-0.8, 0.5),
		  ]);



    body.CreateFixture(fixDef);



  }


  render(){
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    this.animate();

    ctx.drawImage(this.img, 0, 0, 1021, 926, this.imgX, this.imgY, 60, 50)
    ctx.drawImage(this.animeImg, this.animeImg.animeIndex, 0, 43, 24, this.animeImgX, this.animeImgY, this.animeImg.width, 24)
    //console.log(this.animeImg.width)
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

  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
