var gameNs = {};

class HelpScene{

  constructor(title)
  {
    this.title = title
    this.width = window.innerWidth;
    this.height = window.innerheight;
    gameNs.control = new HelpScreen()
    document.addEventListener("keydown", this.keyHandler, true);
    var canvas = document.createElement("mycanvas")
    var ctx = mycanvas.getContext("2d")
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height)
    gameNs.ctx = ctx
    gameNs.canvas = canvas
  }

  createDiv(divID)
  {
    var div = document.createElement("div");
    div.id = divID;
    if(div.id === "HelpBack")
    {
      console.log("Back button created");
      div.innerHTML = "<img src=\'img/back.png\'>";
      this.div = div;

      div.style.visibility = "visible";
      div.style.position = "absolute";
      div.style.left = (this.width/ 2) - 600 +"px";
      div.style.top = (this.height/8) - 50 +'px';
    }
    else if(div.id === "Hints")
    {
      console.log("Hint button created")
      div.innerHTML = "<img src=\'img/hintsButton.png\'>";
      this.div = div;

      div.style.position = "absolute";
      div.style.left = (this.width/ 2) - 135 +"px";
      div.style.top = (this.height/ 8) * 3 + 40 +'px';
    }
    div.addEventListener("touchstart", this.onTouchStart,{passive:false});
    document.body.appendChild(div);
  }

  onTouchStart(e)
{
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
       if(filename === "back.png")
       {

         gameNs.sceneManager.goToScene(gameNs.optionsScene.title);
         var el = document.getElementById( 'HelpBack' );
         el.parentNode.removeChild( el );
         var el = document.getElementById( 'Hints' );
         el.parentNode.removeChild( el );
         gameNs.optionsScene.createDiv("Mute");
         gameNs.optionsScene.createDiv("VolumeUp");
         gameNs.optionsScene.createDiv("VolumeDown");
         gameNs.optionsScene.createDiv("Back");
         gameNs.optionsScene.createDiv("HelpScreen");
       }
       else if (filename === "hintsButton.png" )
       {
        // gameNs.soundManager.playSound("Concentrate", true, 0.2);
         gameNs.sceneManager.goToScene(gameNs.hintsScene.title);
         var el = document.getElementById('Hints')
         el.parentNode.removeChild(el)
         var el = document.getElementById('HelpBack')
         el.parentNode.removeChild(el)
         gameNs.hintsScene.createDiv("return");

       }
    }
  }
}

  keyHandler(e)
  {
    if(e.keyCode === 87 || e.keyCode === 38)//w key
    {
      gameNs.control.highlightW()
      console.log("W pressed")
    }
    else if(e.keyCode === 65 || e.keyCode === 37)//a
    {
      gameNs.control.highlightA()
      console.log("A pressed")
    }
    else if(e.keyCode === 83 || e.keyCode === 40)//s key
    {
      gameNs.control.highLightS()
      console.log("S pressed")
    }
    else if(e.keyCode === 68 || e.keyCode === 39)// d key
    {
      gameNs.control.highLightD()
      console.log("D pressed")
    }
    else if(e.keyCode === 32)
    {
      gameNs.control.highLightSpace()
      console.log("Space pressed")
    }
    else {
      gameNs.ctx.clearRect(0,0,mycanvas.width, mycanvas.height)
    }
  }

  update()
  {
    gameNs.control.update()
  }

  render()
  {
    gameNs.control.render()
  }

}
