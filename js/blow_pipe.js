
class BlowPipe
{
  constructor(x,y,readyBool,world) {
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
     this.img.src = "img/blowpipe.png";
     this.img.animeIndex = 70;  // Index of what part of the animation to display
     this.img.width = 69;  // Width of one image
     this.imgX = (x *30) - 14; // X position on screen, Multipling and substracting to get position right
     this.imgY = (y *30) - 9;  // Y position on screen, Multipling and substracting to get position right

     // controllers for animation speed and where it starts
     this.animeSpeed = 25;
     this.animeSpeedIndex = 0;

    var ready = readyBool;
    this.ready = ready;
    if(ready == true){
    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;



    // Triangle
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new b2Vec2(0 , -0.1),
      new b2Vec2(1.1, 0.4),
		  new b2Vec2(1.1, 0.6),
		  new b2Vec2(0, 1.1),
		  ]);

    bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    var body = world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;




    // Box on end
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(1.1, 0.7),
      new b2Vec2(1.1, 0.3),
      new b2Vec2(1.55, 0.3),
      new b2Vec2(1.55, 0.7),

		  ]);




    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;





    // Top back
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.1),
      new b2Vec2(0, -0.1),
      new b2Vec2(-0.4, -0.3),
      new b2Vec2(-0.4, -0.1),

		  ]);




    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;





    // Bottom back
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.9),
      new b2Vec2(0, 1.1),
      new b2Vec2(-0.4, 1.2),
      new b2Vec2(-0.4, 1),

		  ]);




    body.CreateFixture(fixDef);

    //Create Deflated objects
  }else{
    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    var bodyDef = new b2BodyDef;


    // Triangle
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new b2Vec2(0 , 0.3),
      new b2Vec2(1.1, 0.4),
		  new b2Vec2(1.1, 0.6),
		  new b2Vec2(0, 0.7),
		  ]);
    bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    var body = world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);




    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;





    // Box on end
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(1.1, 0.7),
      new b2Vec2(1.1, 0.3),
      new b2Vec2(1.55, 0.3),
      new b2Vec2(1.55, 0.7),

		  ]);




    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;





    // Back top
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.5),
      new b2Vec2(0, 0.3),
      new b2Vec2(-0.4, 0.1),
      new b2Vec2(-0.4, 0.3),

		  ]);




    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;





    // Back bottom
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.5),
      new b2Vec2(0, 0.7),
      new b2Vec2(-0.4, 0.8),
      new b2Vec2(-0.4, 0.6),

		  ]);




    body.CreateFixture(fixDef);
  }

  }


  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    //this.animate();


    if(this.ready === true)
    {
      ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.imgX, this.imgY, this.img.width, this.img.height);
    }
    else {

      ctx.drawImage(this.img, this.img.animeIndex, 0, this.img.width, this.img.height, this.imgX, this.imgY, this.img.width, this.img.height);
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
      this.ready = !this.ready;
    }
  };

  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
