var gameNs={}

class OptionsScene
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
    this.pressed =false;
    this.count = 0;
    gameNs.widthVol = 0;
    this.heightVol = 200;
    this.x = 300;
    this.y=400;
    this.img=new Image();
    this.img.src="img/music.png";
    this.imgSize = 400;
    gameNs.volume=1.0;

  }
  update()
 {
   var canvas = document.getElementById('mycanvas');
   var ctx = canvas.getContext('2d');
 }

  createDiv(divId)
 {

   var timer;
   var Counter = 0;

   var div = document.createElement("div");
   div.id = divId;
   if(div.id ==="Mute")
   {
     console.log("Mute button created");
     div.innerHTML = "<img src=\'img/mute.png\'>";
     this.div = div;
     //var d = document.getElementById('yourDivId');
     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 2) - 100 +"px";
     div.style.top = (this.height/ 8) + 80 +'px';
     gameNs.volume = 0
   }
   else if(div.id ==="VolumeDown")
   {
     console.log("VolumeDown button created");
     div.innerHTML = "<img src=\'img/volumedown.png\'>";
     this.div = div;

     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 2) - 400 +"px";
     div.style.top = (this.height/ 8) * 3.25 + 80 +'px';
     if(gameNs.volume>0)
     gameNs.volume -=0.35;
   }
   else if(div.id ==="VolumeUp")
   {
     console.log("VolumeUp button created");
     div.innerHTML = "<img src=\'img/volumeup.png\'>";
     this.div = div;

     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 2) + 300 +"px";
     div.style.top = (this.height/8) * 3 + 80 +'px';
     if(gameNs.volume<1)
        gameNs.volume+=0.35
   }
   else if(div.id==="Back")
   {
     console.log("Back button created");
     div.innerHTML = "<img src=\'img/back.png\'>";
     this.div = div;

     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 2) - 450 +"px";
     div.style.top = (this.height/8) - 100 +'px';
   }
  // ctx.drawImage(image, 0 , this.height,100, this.heightVol ,this.x,this.y, this.widthVol,this.heightVol);
   div.addEventListener("touchstart", this.onTouchStart,{passive:false});
   document.body.appendChild(div);

 }

 onTouchStart(e)
 {

   e.preventDefault();
   gameNs.counter = 0;

   var currentElement = e.target;
   var parentDiv = currentElement.parentNode;
   console.log("Div id = " + parentDiv.id);
   console.log("Image URL = " + currentElement.src);

   var parentDiv = currentElement.parentNode;
   var fullPath = currentElement.src;
   console.log("Current element" + fullPath);

   if (fullPath !== undefined)
   {

     var index = fullPath.lastIndexOf("/");
     var filename = fullPath;
     if(index !== -1)
     {
       //this.count+=1;


        filename = fullPath.substring(index+1,fullPath.length);
        console.log(filename);
        if(filename === "mute.png")
        {
              var div = document.getElementById("Mute");
              div.innerHTML = "<img src=\'img/muted.png\'>";
          }
          if(filename === "muted.png")
          {
            var div = document.getElementById("Mute");
            div.innerHTML = "<img src=\'img/mute.png\'>";
          }

        else if (filename === "volumedown.png" )
        {
          console.log("button Pressed")
          if(gameNs.widthVol == 233)
          {

            gameNs.widthVol = 0;
            gameNs.imgSize = 0;
          }
          else if(gameNs.widthVol == 466)
          {
            gameNs.widthVol = 233;
            gameNs.imgSize = 133;
          }
          else if(gameNs.widthVol == 699)
          {
            gameNs.widthVol = 466;
            gameNs.imgSize = 266;
          }
           console.log("width: ", gameNs.widthVol);

           var canvas = document.createElement("mycanvas");
           var ctx = mycanvas.getContext("2d");
           ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);


        }
        else if (filename === "volumeup.png" )
        {
          if(gameNs.widthVol==0)
          {
            gameNs.widthVol = 233;
            gameNs.imgSize = 133;
          }
          else if(gameNs.widthVol == 233)
          {
            gameNs.widthVol = 466;
            gameNs.imgSize = 266;
          }
          else if(gameNs.widthVol == 466)
          {
            gameNs.widthVol = 699;
            gameNs.imgSize = 400;
          }

            console.log("width: ", gameNs.widthVol);

            var canvas = document.createElement("mycanvas");
            var ctx = mycanvas.getContext("2d");
            ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

        }

        else if (filename === "back.png" )
        {
         // gameNs.soundManager.playSound("Concentrate", true, 0.2);
          gameNs.sceneManager.goToScene(gameNs.menuScene.title);
          var el = document.getElementById( 'Back' );
          el.parentNode.removeChild( el );
          var el = document.getElementById( 'VolumeUp' );
          el.parentNode.removeChild( el );
          var el = document.getElementById( 'VolumeDown' );
          el.parentNode.removeChild( el );
          var el = document.getElementById( 'Mute' );
          el.parentNode.removeChild( el );
          gameNs.menuScene.createDiv("Play");
          gameNs.menuScene.createDiv("Options");
          gameNs.menuScene.createDiv("Tutorial");

        }
     }
   }
}

  /**
   * render function which will overwrite the one inherited by scene
   * it defines a font and its size along with the background colour
   */
  render()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

    document.body.style.background = "#FFFACD";
    ctx.font = '55px Adventure Regular';
    ctx.fillText(this.title, this.width/2 - 170, 70);

    var image = this.img;

    ctx.drawImage(image,0, 0,gameNs.widthVol, this.heightVol ,this.x,this.y, gameNs.imgSize,100);

  }


}
