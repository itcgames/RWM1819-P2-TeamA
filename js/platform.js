

class Platform
{
  constructor(x,y,w,h,world) {

     var	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
       ;

    this.b2Vec2 = Box2D.Common.Math.b2Vec2;

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;




    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(w,h);
		bodyDef.position.Set(x,y);


    bodyDef.type = b2Body.b2_staticBody;
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("Platform");


  }



  }
  /**
   * Draws an image after it is loaded.
   */
