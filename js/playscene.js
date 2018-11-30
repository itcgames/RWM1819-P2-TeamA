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
    console.log(window.innerWidth)
    this.level = new Level(window.innerWidth / 32,window.innerHeight / 40,world);

    this.player = new PlayerBall(2,2,0.5,world);
    if(window.innerWidth / 32 > 27)
    {
      console.log(window.innerWidth / 32)
      this.goalCup = new GoalCup(20,12.2,world);
    }

    // Contraptions
    this.fan = new Fan(window.innerWidth / 32 - 1,6,world);
    this.trampoline = new Trampoline(window.innerWidth / 32 - 3,11,world);
    this.ball = new Ball(10,5,0.5,world);
    this.ramp = new Ramp(window.innerWidth / 32 - 3,1,world);
    this.magnet = new Magnet(window.innerWidth / 32 - 3,3,world);
    this.blowPipe = new BlowPipe(window.innerWidth / 32 - 3,9,world);



    //Jamie
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');


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
  this.scoreboard.clearSessionStorage();

  this.am = new AudioManager();

  }
  init(){
    this.scoreboard.startTimer();
  }
  update()
  {
    this.player.update();
    this.ramp.update();
    this.blowPipe.update();
  //  this.blowPipe2.update();
    this.ball.update();
    this.magnet.update();
    this.trampoline.update();
    this.fan.update();
    if(this.player.checkTrampoline() == true){
      this.trampoline.jump();
      this.player.setTrampoline();
    }

    this.player.checkCollision();

    this.player.checkFan(this.fan.getPositionX()
    ,this.fan.getPositionY());
    this.player.checkMagnet(this.magnet.getPositionX()
    ,this.magnet.getPositionY());

    // Recreate if startNumber = -1
    if(startNumber == -1)
    {
      try{
        while(world.GetBodyList()){
          world.DestroyBody(world.GetBodyList());
          world.GetBodyList().next();
        }}catch(e){
            return true; //ignore them :)
}
      this.level = new Level(23.8,12.5,world);
      this.fan = new Fan(22.6,6,world);
      this.trampoline = new Trampoline(21.3,11,world);
      this.player = new PlayerBall(2,1,0.5,world);
      this.ball = new Ball(10,5,0.5,world);
      this.ramp = new Ramp(20.1,1,world);
      this.magnet = new Magnet(20.8,3,world);
      this.blowPipe = new BlowPipe(20.5,9,world);
      this.goalCup = new GoalCup(17,12.2,world);

      startNumber = 0;
    }
    if(startNumber == 1)
    {
      world.Step(
          1 / 60   //frame-rate
       ,  10       //velocity iterations
       ,  10       //position iterations
    );
  }
    world.DrawDebugData();
    world.ClearForces();
    this.player.update();

    this.time = this.scoreboard.getDisplayTimer();

    if(this.time == "5:00"){
      this.scoreboard.addToBoard(55)
    }


    if(this.player.getWinState() == true){
      this.scoreboard.addToBoard();
      this.scoreboard.filterTime(1);
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

   if(this.player.getWinState() == true){
     gameNs.endScene.render();
   }
   //partilce effect draw

  ctx.fillStyle ='white';
  ctx.font = '55px Adventure Regular';
  ctx.strokeStyle = 'black';
  ctx.fillText(this.time,100,100);
  ctx.strokeText(this.time,100,100);

  }
}
