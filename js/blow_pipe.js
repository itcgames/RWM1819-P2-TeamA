
class BlowPipe
{
  constructor(x,y,readyBool,world) {
    var	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
       ;
    this.b2Vec2 = Box2D.Common.Math.b2Vec2;
    this.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    this.b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    this.imageX = x;
    this.imageY = y;
    var ready = readyBool;

    if(ready == true){
    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;

    // Triangle
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new this.b2Vec2(0 , -0.1),
      new this.b2Vec2(1.1, 0.4),
		  new this.b2Vec2(1.1, 0.6),
		  new this.b2Vec2(0, 1.1),
		  ]);

    bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("PipeInflated");

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Box on end
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(1.1, 0.7),
      new this.b2Vec2(1.1, 0.3),
      new this.b2Vec2(1.55, 0.3),
      new this.b2Vec2(1.55, 0.7),

		  ]);

    this.body.CreateFixture(fixDef);

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Top back
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-0.4, -0.3),
      new this.b2Vec2(0, -0.1),
      new this.b2Vec2(0, 0.1),
      new this.b2Vec2(-0.4, -0.1),
		  ]);

    this.body.CreateFixture(fixDef);

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Bottom back
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(0, 0.9),
      new this.b2Vec2(0, 1.1),
      new this.b2Vec2(-0.4, 1.2),
      new this.b2Vec2(-0.4, 1),
		  ]);

    this.body.CreateFixture(fixDef);

    //Create Deflated objects
  }else{
    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;


    var bodyDef = new b2BodyDef;


    // Triangle
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new this.b2Vec2(0 , 0.3),
      new this.b2Vec2(1.1, 0.4),
		  new this.b2Vec2(1.1, 0.6),
		  new this.b2Vec2(0, 0.7),
		  ]);
    bodyDef.position.Set(x,y);
    bodyDef.type = b2Body.b2_staticBody;
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("PipeUsed")

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Box on end
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(1.1, 0.7),
      new this.b2Vec2(1.1, 0.3),
      new this.b2Vec2(1.55, 0.3),
      new this.b2Vec2(1.55, 0.7),

		  ]);
    this.body.CreateFixture(fixDef);

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Back top
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(-0.4, 0.1),
      new this.b2Vec2(0, 0.3),
      new this.b2Vec2(0, 0.5),
      new this.b2Vec2(-0.4, 0.3),

		  ]);
    this.body.CreateFixture(fixDef);

    var fixDef = new this.b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    // Back bottom
    fixDef.shape = new this.b2PolygonShape;
    fixDef.shape.SetAsArray([
      new this.b2Vec2(0, 0.5),
      new this.b2Vec2(0, 0.7),
      new this.b2Vec2(-0.4, 0.8),
      new this.b2Vec2(-0.4, 0.6),
		  ]);
    this.body.CreateFixture(fixDef);
  }

  }

  update(){
    if(this.body.GetUserData() == "PipeDeflated"){
      var fix = this.body.GetFixtureList();
while (fix) {
   this.body.DestroyFixture(fix);
   fix = fix.next();
}
      //this.body.DestroyFixture(this.body.GetFixtureList());
      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;
      // Triangle
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
  		  new this.b2Vec2(0 , 0.3),
        new this.b2Vec2(1.1, 0.4),
  		  new this.b2Vec2(1.1, 0.6),
  		  new this.b2Vec2(0, 0.7),
  		  ]);
      this.body.CreateFixture(fixDef);
      this.body.SetUserData("PipeUsed")

      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;

      // Box on end
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
        new this.b2Vec2(1.1, 0.7),
        new this.b2Vec2(1.1, 0.3),
        new this.b2Vec2(1.55, 0.3),
        new this.b2Vec2(1.55, 0.7),
  		  ]);

      this.body.CreateFixture(fixDef);

      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;

      // Back top
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
        new this.b2Vec2(-0.4, 0.1),
        new this.b2Vec2(0, 0.3),
        new this.b2Vec2(0, 0.5),
        new this.b2Vec2(-0.4, 0.3),

  		  ]);

      this.body.CreateFixture(fixDef);

      var fixDef = new this.b2FixtureDef;
      fixDef.density = 1;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.5;

      // Back bottom
      fixDef.shape = new this.b2PolygonShape;
      fixDef.shape.SetAsArray([
        new this.b2Vec2(0, 0.5),
        new this.b2Vec2(0, 0.7),
        new this.b2Vec2(-0.4, 0.8),
        new this.b2Vec2(-0.4, 0.6),
  		  ]);
      this.body.CreateFixture(fixDef);
    }
  }

  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
