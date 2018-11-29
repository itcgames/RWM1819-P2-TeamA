
class GoalCup
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
    // Left Wall
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-1,0),
      new b2Vec2(-1.2, -2),
      new b2Vec2(-1,-2),
      new b2Vec2(-0.8,0),
		  ]);
		bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    var body = world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);
    body.SetUserData("Cup");

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    // Right Wall
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0.8,0),
      new b2Vec2(1, -2),
      new b2Vec2(1.2,-2),
      new b2Vec2(1,0),
      ]);
    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Bottom
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-1,0),
      new b2Vec2(1, 0),
      new b2Vec2(1,0.2),
      new b2Vec2(-1,0.2),
		  ]);

    body.CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var goalBodyDef = new b2BodyDef;

    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(-0.8,0),
      new b2Vec2(-0.8,-0.1),
      new b2Vec2(0.8,-0.1),
      new b2Vec2(0.8, 0),
		  ]);
		goalBodyDef.position.Set(x,y);
    goalBodyDef.type = b2Body.b2_staticBody;
    var goalBody = world.CreateBody(goalBodyDef);
    goalBody.CreateFixture(fixDef);
    goalBody.SetUserData("CupGoal");



  }


  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
