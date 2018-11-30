

class Level
{
  constructor(width,height,world) {

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

    //Ground floor
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 0;
    console.log(height)
    bodyDef.position.y = height;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(width, 0.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //Roof
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 0;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(width, 0.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);


    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //Left of drag
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = width - 5;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.3, height);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    // Top Wall
    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //Left Wall
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 0;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.3, height);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;

    //Far Right
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = width - 0.3;
    bodyDef.position.y = 0;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.3, height);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

  }









  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
