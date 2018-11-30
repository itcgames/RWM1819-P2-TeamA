
class Ball
{
  constructor(x,y,radius,world) {
     var	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
       ;
    this.imageX = x;
    this.imageY = y;
    this.circRadius = radius;

    this.radius = radius;

    this.b2Vec2 = Box2D.Common.Math.b2Vec2;

    var fixDef = new b2FixtureDef;
    fixDef.density = radius * 1;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;

    var bodyDef = new b2BodyDef;


    bodyDef.type = b2Body.b2_dynamicBody;
    bodyDef.position.x = x;
    bodyDef.position.y = y;
    fixDef.shape = new b2CircleShape(radius);
    this.body = world.CreateBody(bodyDef);
    this.body.CreateFixture(fixDef);
    this.body.SetUserData("Ball");

    document.addEventListener("mousemove",this.onMouseMove.bind(this), true);
    document.addEventListener("mousedown",this.onMouseDown.bind(this), true);
    document.addEventListener("mouseup",this.onMouseUp.bind(this), true);

/*    var body = world.CreateBody(bodyDef).CreateFixture(fixDef);
		body.GetBody().ApplyImpulse(
			new b2Vec2(100000,100000),
			body.GetBody().GetWorldCenter()
		); */

  }
  onMouseDown(e){
    if(gameStartedBool == false)
    {
    e.preventDefault();
    this.mousePosX = e.clientX;
    this.mousePosY = e.clientY;
    if(this.mousePosX < this.body.GetPosition().x*30 + (this.circRadius *30)
    && this.mousePosX > this.body.GetPosition().x*30 - (this.circRadius *30)
    && this.mousePosY  < this.body.GetPosition().y*30 + (this.circRadius *30)
    && this.mousePosY > this.body.GetPosition().y*30 - (this.circRadius *30)){
      this.selected = true;
    }
    else{
      this.selected = false;
    }
  }

  }
  onMouseMove(e){
    if(gameStartedBool == false)
    {
      e.preventDefault();
      this.mousePosX = e.clientX;
      this.mousePosY = e.clientY;
    }
  }
  onMouseUp(e){
    e.preventDefault();
    this.selected = false;
  }
  update(){
    // Drag And Drop
    this.imgX = (this.body.GetPosition().x *30);
    this.imgY = (this.body.GetPosition().y *30);
    if(this.selected == true){
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
