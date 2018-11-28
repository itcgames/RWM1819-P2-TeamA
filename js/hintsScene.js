var gameNs = {};

class HintsScene{

  constructor(title)
  {
    this.title = title
    this.width = window.innerWidth;
    this.height = window.innerheight;

    this.createDiv("Back")
  }

  createDiv(divID)
  {
    var div = document.createElement("div");
    div.id = divId;
    if(div.id === "Back")
    {
      console.log("Back button created");
      div.innerHTML = "<img src=\'img/back.png\'>";
      this.div = div;

      div.style.visibility = "visible";
      div.style.position = "absolute";
      div.style.left = (this.width/ 2) - 450 +"px";
      div.style.top = (this.height/8) - 100 +'px';
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

         gameNs.sceneManager.goToScene(gameNs.helpScene.title);
         gameNs.timerStart = true;
         gameNs.start = Date.now();

       }
       if(gameNs.sceneManager.currentScene != gameNs.menuScene.title)
       {
         var el = document.getElementById( 'Hints' );
         el.parentNode.removeChild( el );
         var el = document.getElementById( 'Back' );
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
    var canvas = document.createElement("mycanvas")
    var ctx = mycanvas.getContext("2d")
    ctx.clearRect(0,0,mycanvas.width, mycanvas.height)
    document.body.style.backGround = "#bbcfed"
    ctx.font = '55px Impact';
    ctx.fillText(this.title, this.width/2 - 170, 70)
  }

}
