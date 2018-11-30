   var world;
   var TutorialEnd = 0;

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
    this.tutorialStart = false;

    this.level = new Level(23.8,12.5,world);

    this.fan = new Fan(22.6,6,world);
    this.trampoline = new Trampoline(21.3,11,world);
    this.player = new PlayerBall(2,1,0.5,world);
    this.ball = new Ball(10,5,0.5,world);
    this.ramp = new Ramp(20.1,1,world);
    this.magnet = new Magnet(20.8,3,world);
    this.blowPipe = new BlowPipe(20.5,9,world);
    this.goalCup = new GoalCup(17,12.2,world);



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
  this.scoreboard.clearSessionStorage();

  }
  init(){
    this.scoreboard.startTimer();
    gameNs.audioManager.playAudio("bg",true,gameNs.volume);
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

      this.tutorialStart = false;

      startNumber = 0;
    }
    // Tutorial
    if(startNumber == -2)
    {
      try{
        while(world.GetBodyList()){
          world.DestroyBody(world.GetBodyList());
          world.GetBodyList().next();
        }}catch(e){
            return true; //ignore them :)
}
    this.level = new Level(35.8,20.5,world);
    this.fan = new Fan(34.6,18,world);
    this.player = new PlayerBall(10,6,0.5,world);
    this.goalCup = new GoalCup(27,20.2,world);

    this.magnet = new Magnet(2000.8,3,world);
    this.ball = new Ball(1000,5,0.5,world);
    this.trampoline = new Trampoline(2100.3,11,world);
    this.blowPipe = new BlowPipe(2000.5,9,world);
    this.ramp = new Ramp(2000.1,1,world);

    this.tutorialText = new tutorialText("Place the highlighted object between the arrows.",100,800);
    this.arrow = new Arrow(180,300,"right");
    this.arrow2 = new Arrow(220,260,"down");
    this.arrow3 = new Arrow(260,300,"left");
    this.arrow4 = new Arrow(220,340,"up");
    this.highlight = new Highlight(1000,550,200,200);
    this.prompt = new Prompt(1250,500,"leftClick");

    this.tutorialCount = 0;
    this.textChanged = false;

    this.tutorialStart = true;
    TutorialEnd = -1;

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
   world.DrawDebugData();

   if(this.tutorialStart == true)
   {
     if(this.tutorialCount < 200){
     this.tutorialCount = this.tutorialCount + 1;
      }
      else if(this.textChanged == false){
        this.tutorialText = new tutorialText("Press Enter to start",100,800);
        this.textChanged = true;
      }
     ctx.save();
     this.tutorialText.drawText();
     this.tutorialText.drawBackground();
     this.arrow.drawImage();
     this.arrow2.drawImage();
     this.arrow3.drawImage();
     this.arrow4.drawImage();
     this.highlight.drawImage();
     this.prompt.drawImage();
     ctx.restore();

     if(TutorialEnd == 1)
     {
       this.tutorialText = new tutorialText("Press R to return to start the level",100,800);
       this.diamondAchievement = new DiamondAchievement("Tutorial Complete!");
       console.log("TUTORIAL DONE");
       TutorialEnd = 2;
     }
     if(TutorialEnd == 2)
     {
       this.diamondAchievement.drawImage();
     }
   }


   this.trampoline.render();
   this.ramp.render();
   this.fan.render();
   this.magnet.render();
   this.blowPipe.render();
   //partilce effect draw

  ctx.fillStyle ='white';
  ctx.font = '55px Adventure Regular';
  ctx.strokeStyle = 'black';
  ctx.fillText(this.time,100,100);
  ctx.strokeText(this.time,100,100);

  }
}
