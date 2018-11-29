/**
 * MenuScene class inherits Scene
 *
 */
class MenuScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.title = title;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.createDiv("Play");
    this.createDiv("Options");
    this.createDiv("Tutorial");

  //  this.soundManager = new SoundManager()
  //  this.soundManager.init()
  //  this.soundManager.loadSoundFile("backGround", "img/audio/backGround.mp3")


  }
   createDiv(divId)
  {

      var div = document.createElement("div");
      div.id = divId;
      if(div.id === "Play")
      {
        div.innerHTML = "<img src=\'img/playbutton.png\'>";
        this.div = div;
        //var d = document.getElementById('yourDivId');
        div.style.position = "absolute";
        div.style.left = (this.width/ 2) - 135 +"px";
        div.style.top = (this.height/ 8) + 40 +'px';
      }
      else if(div.id === "Options")
      {
        div.innerHTML = "<img src=\'img/optionsbutton.png\'>";
        this.div = div;

        div.style.position = "absolute";
        div.style.left = (this.width/ 2) - 135 +"px";
        div.style.top = (this.height/ 8) * 3 + 40 +'px';
      }
      else if(div.id === "Tutorial")
      {
        div.innerHTML = "<img src=\'img/tutorialbutton.png\'>";
        this.div = div;

        div.style.position = "absolute";
        div.style.left = (this.width/ 2) - 135 +"px";
        div.style.top = (this.height/8) * 5 + 40 +'px';
      }

    div.addEventListener("click", this.onTouchStart,{passive:false});
    document.body.appendChild(div);

  }
  onTouchStart(e)
  {

    //gameNs.sceneManager.goToScene(gameNs.optionsScene.title);

    e.preventDefault();
    var currentElement = e.target;
    var parentDiv = currentElement.parentNode;
    console.log("Div id = " + parentDiv.id);
    console.log("Image URL = " + currentElement.src);

    var parentDiv = currentElement.parentNode;
    var fullPath = currentElement.src;
    console.log("Current element" + fullPath);

    if (fullPath !== undefined)
    {
      console.log(gameNs.count);
      var index = fullPath.lastIndexOf("/");
      console.log("Path: " + index);
      var filename = fullPath;
      if(index !== -1)
      {
        gameNs.count += 1;

         filename = fullPath.substring(index+1,fullPath.length);
         console.log(filename);
         if(filename === "playbutton.png")
         {

           gameNs.sceneManager.goToScene(gameNs.playScene.title);
           gameNs.playScene.init();
           gameNs.timerStart = true;
           gameNs.start = Date.now();

         }
         else if (filename === "optionsbutton.png" )
         {
          // gameNs.soundManager.playSound("Concentrate", true, 0.2);
           gameNs.sceneManager.goToScene(gameNs.optionsScene.title);
           gameNs.optionsScene.createDiv("Mute");
           gameNs.optionsScene.createDiv("VolumeUp");
           gameNs.optionsScene.createDiv("VolumeDown");
           gameNs.optionsScene.createDiv("Back");


         }
         else if (filename === "tutorialbutton.png" )
         {
           gameNs.sceneManager.goToScene(gameNs.tutorialScene.title);
           gameNs.timerStart = true;
           gameNs.start = Date.now();
           //throw new Error("Something went badly wrong!");
          // div.style.background = "Teal";
           //gameNs.soundManager.Stop();
           //gameNs.count = 0;
      //   gameNs.sceneManager.goToScene(gameNs.optionsScene.title);

         }

         if(gameNs.sceneManager.currentScene != gameNs.menuScene.title)
      {
         var el = document.getElementById( 'Play' );
         el.parentNode.removeChild( el );
         var el = document.getElementById( 'Options' );
         el.parentNode.removeChild( el );
         var el = document.getElementById( 'Tutorial' );
         el.parentNode.removeChild( el );
       }


      }
    }
 }
 update()
 {

 }
  render()
  {

    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#bbcfed";
    ctx.font = '55px Adventure Regular';
    ctx.fillText(this.title, this.width/2 - 170, 70);

  }
}
