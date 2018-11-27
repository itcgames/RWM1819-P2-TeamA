
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
    this.imageX = x;
    this.imageY = y;
    var ready = readyBool;

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

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;



    // Box on end
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(1.1, 0.7),
      new b2Vec2(1.1, 0.3),
      new b2Vec2(1.55, 0.3),
      new b2Vec2(1.55, 0.7),

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



    // Top back
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.1),
      new b2Vec2(0, -0.1),
      new b2Vec2(-0.4, -0.3),
      new b2Vec2(-0.4, -0.1),

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



    // Bottom back
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.9),
      new b2Vec2(0, 1.1),
      new b2Vec2(-0.4, 1.2),
      new b2Vec2(-0.4, 1),

		  ]);
		bodyDef.position.Set(x,y);

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

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

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;



    // Box on end
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(1.1, 0.7),
      new b2Vec2(1.1, 0.3),
      new b2Vec2(1.55, 0.3),
      new b2Vec2(1.55, 0.7),

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



    // Back top
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.5),
      new b2Vec2(0, 0.3),
      new b2Vec2(-0.4, 0.1),
      new b2Vec2(-0.4, 0.3),

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



    // Back bottom
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
      new b2Vec2(0, 0.5),
      new b2Vec2(0, 0.7),
      new b2Vec2(-0.4, 0.8),
      new b2Vec2(-0.4, 0.6),

		  ]);
		bodyDef.position.Set(x,y);

    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    world.CreateBody(bodyDef).CreateFixture(fixDef);
  }

  }


  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
