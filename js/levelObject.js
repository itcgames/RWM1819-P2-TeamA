

class Level
{
  constructor(x,y,world) {

     var	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
       ;


    this.b2Vec2 = Box2D.Common.Math.b2Vec2;
    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 9;
    bodyDef.position.y = 13;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(14, 0.5);
    var groundBody = world.CreateBody(bodyDef);
    groundBody.CreateFixture(fixDef);
    groundBody.SetUserData("Ground");

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 9;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(14, 0.5);
    var groundBody = world.CreateBody(bodyDef);
    groundBody.CreateFixture(fixDef);
    groundBody.SetUserData("Ground");

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 19.25;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.3, 13.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 0;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.3, 13.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 23.25;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.3, 13.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

  }









  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
