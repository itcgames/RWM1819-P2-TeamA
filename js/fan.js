

class Fan
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
    this.imageX = x;
    this.imageY = y;

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

    // Fan shape
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new b2Vec2(-1 , -1),
		  new b2Vec2(0, -1),
		  new b2Vec2(0.40, -0.75),
      new b2Vec2(0.70 , -0.50),
		  new b2Vec2(0.90,-0.25),
      new b2Vec2(1, 0),
      new b2Vec2(0.90 , 0.25),
		  new b2Vec2(0.70,0.50),
      new b2Vec2(0.40, 0.75),
      new b2Vec2(0 , 1),
		  new b2Vec2(-1,1),
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
      new b2Vec2(-3, 0),
      new b2Vec2(-2.90,-0.125),
      new b2Vec2(-2.70 , -0.25),
      new b2Vec2(-2.40, -0.375),
      new b2Vec2(-2, -0.5),
      new b2Vec2(-1 , -0.5),
      new b2Vec2(-1,0.5),
      new b2Vec2(-2 , 0.5),
      new b2Vec2(-2.40, 0.375),
      new b2Vec2(-2.70,0.25),
      new b2Vec2(-2.90 , 0.125),
		  ]);


    this.body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Bottom platform
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-0.5, 1.2),
      new b2Vec2(-0.5,1.5),
      new b2Vec2(-2.5 , 1.5),
      new b2Vec2(-2.5, 1.2),
		  ]);



    this.body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Shaft shape
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-1,0.5),
      new b2Vec2(-1 , 1.2),
      new b2Vec2(-2,1.2),
      new b2Vec2(-2 ,0.5),
		  ]);



;
    this.body.CreateFixture(fixDef);

  }
  getPositionX(){
    return this.body.GetPosition().x;

  }
  getPositionY(){
    return this.body.GetPosition().y;
  }

  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
