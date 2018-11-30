var gameNs = {};
var startNumber = 0;
var trampJump = false;


class PlayerBall
{
  constructor(x,y,radius,world) {
     var	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,  listener = new Box2D.Dynamics.b2ContactListener;
       ;
    this.b2Vec2 = Box2D.Common.Math.b2Vec2
    this.listener = new Box2D.Dynamics.b2ContactListener;

    this.world = world;

    this.fanOn = true;
    this.trampJump = false;

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
    this.body = world.CreateBody(bodyDef);
    this.bodyAndFixture = this.body.CreateFixture(fixDef);

    this.impApplied = false;
	//	body.GetBody().ApplyImpulse(
	//		new b2Vec2(100000,100000),
	//		body.GetBody().GetWorldCenter()
	//	);
    this.body.SetUserData("Player");

    gameNs.maxParticles = 200;
    gameNs.particleSize = 1;
    gameNs.objectSize = 10;
    gameNs.life = 0;
    gameNs.maxLife = 200;
    gameNs.loop = false;
    gameNs.alpha = 255;

    gameNs.particles = [];
    gameNs.canvas = document.querySelector('canvas');
    gameNs.ctx = gameNs.canvas.getContext('2d');

    gameNs.canvas.width = window.innerWidth;
    gameNs.canvas.height = window.innerHeight;

    gameNs.emitters = [new Emitter(new VectorTwo(this.body.GetPosition().x * 30, this.body.GetPosition().y* 30 ), VectorTwo.fromAngle(0, 2))];

   update();

    //addNewParticles();

    document.addEventListener("keydown",this.keyHandler, true);
    this.startNumber = 0;
    this.win = false;

  }
  keyHandler(e){
    if(e.keyCode === 13){
      startNumber = 1;
    }
    if(e.keyCode === 84){
      startNumber = -2;
    }
    if(e.keyCode === 82){
      startNumber = -1;
    }
  }

  checkFan(fanX,fanY)
  {
    if(this.fanOn == true)
    {
     if(this.body.GetPosition().x > fanX && this.body.GetPosition().x < fanX +3 && this.body.GetPosition().y > fanY - 1.5
     && this.body.GetPosition().y < fanY + 1.5){
      // if(this.impApplied == false){
   		    this.bodyAndFixture.GetBody().ApplyForce(
   			  new this.b2Vec2(10,-3),
   		  	this.bodyAndFixture.GetBody().GetWorldCenter()
   		   );
      //this.impApplied = true;
      //}
      }
    }
  }
   checkMagnet(magnetX,magnetY)
   {
      var playerX = this.body.GetPosition().x;
      var playerY = this.body.GetPosition().y;
      this.distance = 0;
      if(playerX < magnetX)
      {
      this.distance = Math.sqrt(magnetX - playerX)*(magnetX - playerX) + (magnetY - playerY)*(magnetY - playerY);
    }
    else{
      this.distance = Math.sqrt(playerX - magnetX)*(playerX - magnetX) + (playerY - magnetY)*(playerY - magnetY);
    }
      if(magnetY > playerY)
      {
        this.powerY = playerY - magnetY;
      }
      else{
        this.powerY = magnetY - playerY;
      }
        var powerX = magnetX - playerX;
        if(this.distance < 50){

  		    this.bodyAndFixture.GetBody().ApplyForce(
   			  new this.b2Vec2(powerX,this.powerY),
    		  this.bodyAndFixture.GetBody().GetWorldCenter()
    		   );

         }


  }
  getWinState()
  {
    return this.win;
  }

  update(){

    if(startNumber == 0){
      this.body.SetPosition(new this.b2Vec2(this.imageX,this.imageY));
    }
    gameNs.emitters[0].position.x = this.body.GetPosition().x *30;
    gameNs.emitters[0].position.y = this.body.GetPosition().y* 30;
    ///console.log( gameNs.emitters[0] );



  }
  checkTrampoline()
  {
    return trampJump;
  }
  setTrampoline()
  {
    trampJump = false;
  }
  checkCollision()
  {
    //console.log(this.body.GetUserData());
    this.listener.BeginContact = function(contact) {
         //console.log(contact.GetFixtureA().GetBody().GetUserData());
         //console.log(contact.GetFixtureB().GetBody().GetUserData());
         if(contact.GetFixtureA().GetBody().GetUserData() == "Player" && contact.GetFixtureB().GetBody().GetUserData() == "CupGoal"
       || contact.GetFixtureA().GetBody().GetUserData() == "CupGoal" && contact.GetFixtureB().GetBody().GetUserData() == "Player")
         {
           console.log("WINNER WINNER CHICKEN DINNERS");

           addBurstParticles();
           this.loop= true;
         }
         if(contact.GetFixtureA().GetBody().GetUserData() == "Player" && contact.GetFixtureB().GetBody().GetUserData() == "Ramp"
       || contact.GetFixtureA().GetBody().GetUserData() == "Ramp" && contact.GetFixtureB().GetBody().GetUserData() == "Player")
         {
           addBurstParticles();
           this.win = true;

         }
         if(contact.GetFixtureA().GetBody().GetUserData() == "Player" && contact.GetFixtureB().GetBody().GetUserData() == "TrampolineTop"
       || contact.GetFixtureA().GetBody().GetUserData() == "TrampolineTop" && contact.GetFixtureB().GetBody().GetUserData() == "Player")
         {
           trampJump = true;
           console.log("TrampHit");
         }
         if(contact.GetFixtureA().GetBody().GetUserData() == "Ball" && contact.GetFixtureB().GetBody().GetUserData() == "TrampolineTop"
       || contact.GetFixtureA().GetBody().GetUserData() == "TrampolineTop" && contact.GetFixtureB().GetBody().GetUserData() == "Ball")
         {
           trampJump = true;
         }
         if(contact.GetFixtureA().GetBody().GetUserData() == "Ball" && contact.GetFixtureB().GetBody().GetUserData() == "PipeInflated")
         {
           contact.GetFixtureB().GetBody().SetUserData("PipeDeflated");
         }
         if(contact.GetFixtureA().GetBody().GetUserData() == "PipeInflated" && contact.GetFixtureB().GetBody().GetUserData() == "Ball")
         {
           contact.GetFixtureA().GetBody().SetUserData("PipeDeflated");
         }
    }
    this.listener.EndContact = function(contact) {
         //console.log(contact.GetFixtureA().GetBody().GetUserData());
    }
    this.listener.PostSolve = function(contact, impulse) {
        // Can overide contact here
    }
    this.listener.PreSolve = function(contact, oldManifold) {
        // Includes impulse from contact
    }
    this.world.SetContactListener(this.listener);
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
