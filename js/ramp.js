

class Ramp
{
  constructor(x,y,world) {

     var	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
       ;
    this.b2Vec2 = Box2D.Common.Math.b2Vec2
    this.imageX = x;
    this.imageY = y;
    this.mousePosX = 1;
    this.mousePosY = 1;

    var fixDef = new b2FixtureDef;
    fixDef.density = 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;




    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsArray([
		  new this.b2Vec2(0 , 0),
		  new this.b2Vec2(1, 1),
		  new this.b2Vec2(0, 1),
		  ]);
		bodyDef.position.Set(x,y);


    bodyDef.type = b2Body.b2_staticBody;
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("Ramp");
    console.log(this.body.GetPosition());

    document.addEventListener("mousemove",this.onMouseMove.bind(this), true);
    document.addEventListener("mousedown",this.onMouseDown.bind(this), true);
    document.addEventListener("mouseup",this.onMouseUp.bind(this), true);




  }
  getPositionX()
  {
    this.body.GetPosition();
  }
  onMouseDown(e)
  {
    e.preventDefault();
    this.mousePosX = e.clientX;
    this.mousePosY = e.clientY;
    if(this.body.GetPosition().x*30 < this.mousePosX + 20 && this.body.GetPosition().x*30 > this.mousePosX - 20)
    {
      this.selected = true;
    }
    else
    {
      this.selected = false;
    }
  }
  onMouseMove(e)
  {
      e.preventDefault();
      this.mousePosX = e.clientX;
      this.mousePosY = e.clientY;
  }
  onMouseUp(e)
  {
    e.preventDefault();
  }
  update(){
    if(this.selected == true)
    {
    this.body.SetPosition(new this.b2Vec2(this.mousePosX / 30,this.mousePosY / 30));
    }
  }
  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {

    }
}
