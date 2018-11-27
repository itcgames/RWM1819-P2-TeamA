
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
    this.imageX = x;
    this.imageY = y;

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 1.1;

    var bodyDef = new b2BodyDef;

    //create ground
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

    var bodyDef = new b2BodyDef;

    //create ground
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

    var bodyDef = new b2BodyDef;

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = x +1.2;
    bodyDef.position.y = y+0.3;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.2, 0.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

  }


  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
