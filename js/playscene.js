   var world;

class PlayScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    var   b2Vec2 = Box2D.Common.Math.b2Vec2
     ,	b2BodyDef = Box2D.Dynamics.b2BodyDef
     ,	b2Body = Box2D.Dynamics.b2Body
     ,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef
     ,	b2Fixture = Box2D.Dynamics.b2Fixture
     ,	b2World = Box2D.Dynamics.b2World
     ,	b2MassData = Box2D.Collision.Shapes.b2MassData
     ,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
     ,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
     ,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
       ;

    world = new b2World(
          new b2Vec2(0, 10)    //gravity
       ,  true                 //allow sleep
    );

    this.fan = new Fan(9,5,world);
    this.trampoline = new Trampoline(10,10,world);
    this.player = new PlayerBall(10,1,0.5,world);
    this.ball = new Ball(10,5,0.5,world);
    this.ball2 = new Ball(4.2,0.5,0.5,world);
    this.ramp = new Ramp(15,1,world);
    this.trampoline = new Trampoline(10,10,world);
    this.magnet = new Magnet(4,5,world);
    this.blowPipe = new BlowPipe(4,1.5,world);
    this.blowPipe2 = new BlowPipe(4,3,world);
    this.goalCup = new GoalCup(13,10,world);


    //Jamie
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

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
    fixDef.shape.SetAsBox(10, 0.5);
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
    bodyDef.position.x = 1;
    bodyDef.position.y = 10;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(1, 0.5);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

/*
    //Drag and drop
    this.drag = new Square(200,400,50,50, 'red', "drag");
    this.drop = new Square(400,500,75,75, 'green', "drop");

    var array = [];
    array.push(this.drop);
    if(this.drag.draggable != undefined){
      this.drag.draggable.addDropZones(array);
    }
    */


    //setup debug draw
    var debugDraw = new b2DebugDraw();
 debugDraw.SetSprite(document.getElementById("mycanvas").getContext("2d"));
 debugDraw.SetDrawScale(30.0);
 debugDraw.SetFillAlpha(0.3);
 debugDraw.SetLineThickness(1.0);
 debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
 world.SetDebugDraw(debugDraw);

  //  window.setInterval(update, 1000 / 60)


  this.scoreboard = new ScoreboardManager();

  this.scoreboard.initBoard("session")



  }
  init(){
    this.scoreboard.startTimer();
  }
  update()
  {
    this.ramp.update();
    this.blowPipe.update();
    this.blowPipe2.update();
    this.ball.update();
    this.magnet.update();
    this.trampoline.update();
    this.fan.update();

    this.player.checkCollision();
    this.player.checkFan(this.fan.getPositionX()
    ,this.fan.getPositionY());
    this.player.checkMagnet(this.magnet.getPositionX()
    ,this.magnet.getPositionY());
      world.Step(
          1 / 60   //frame-rate
       ,  10       //velocity iterations
       ,  10       //position iterations
    );
    world.DrawDebugData();
    world.ClearForces();

    this.time = this.scoreboard.getDisplayTimer();
    if(this.time == "1000:00"){
      this.scoreboard.addToBoard(55)
      console.log(this.scoreboard.getBoard());
      this.scoreboard.generate_table()
      gameNs.endScene.render();
    }


  }
  /**
   * render function which will overwrite the one inherited by scene
   * it defines a font and its size along with the background colour
   */
  render()
  {

   var canvas = document.createElement("mycanvas");
   var ctx = mycanvas.getContext("2d");
   document.body.style.background = "#ffffff";

   //this.drop.draw(ctx);
   //this.drag.draw(ctx);
   this.trampoline.render();
   this.ramp.render();
   this.fan.render();
   this.magnet.render();
   this.blowPipe.render();
   this.blowPipe2.render();

   if(this.time == "00:05"){
     gameNs.endScene.render();
   }

  ctx.fillStyle ='white';
  ctx.font = '55px Adventure Regular';
  ctx.strokeStyle = 'black';
  ctx.fillText(this.time,100,100);
 ctx.strokeText(this.time,100,100);

  }
}
