

class PlayerBall
{
  constructor(x,y,radius,world) {
    var   b2Vec2 = Box2D.Common.Math.b2Vec2
     ,	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
       ;
    this.imageX = x;
    this.imageY = y;
    this.body;
    var fixDef = new b2FixtureDef;
    fixDef.density = radius * 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;


    bodyDef.type = b2Body.b2_dynamicBody;
    bodyDef.position.x = x;
    bodyDef.position.y = y;
    fixDef.shape = new b2CircleShape(radius);

    this.body = world.CreateBody(bodyDef)
    this.body.CreateFixture(fixDef);
	//	body.GetBody().ApplyImpulse(
	//		new b2Vec2(100000,100000),
	//		body.GetBody().GetWorldCenter()
	//	);

  }
  checkFan(fanX,fanY)
  {
     if(this.body.GetPosition().x > fanX && this.body.GetPosition().y > fanY - 2
     && this.body.GetPosition().y < fanY + 2){
       console.log("YIKES");
     }
     console.log(this.body.GetPosition().x);
     console.log(fanX);

  }
  getPositionX()
  {

  }
  getPositionY()
  {

  }

  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
