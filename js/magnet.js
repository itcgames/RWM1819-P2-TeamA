
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
    this.imageX = x;
    this.imageY = y;



    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

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

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-0, -0.25),
      new b2Vec2(0.75 , -0.25),
      new b2Vec2(0.75,0),
      new b2Vec2(0 , 0),
		  ]);
		bodyDef.position.Set(x,y);

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-0, -0.25),
      new b2Vec2(0.75 , -0.25),
      new b2Vec2(0.75,0),
      new b2Vec2(0 , 0),
		  ]);
		bodyDef.position.Set(x,y + 1.25);

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-1,-0.5),
      new b2Vec2(-0.9, -0.3),
      new b2Vec2(-0.8,-0.2),
      new b2Vec2(-0.7,-0.1),
      new b2Vec2(-0.6,-0.05),
      new b2Vec2(-0.5,-0),
      new b2Vec2(-0.25, 0.15),
      new b2Vec2(0, 0.25),
      new b2Vec2(0,0),
      new b2Vec2(-0.8, -0.5),
		  ]);
		bodyDef.position.Set(x,y + 1);

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);



  }


  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
