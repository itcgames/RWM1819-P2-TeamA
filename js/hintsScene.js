var gameNs = {};

class HintsScene{

  constructor(title)
  {
    gameNs.hintsTxt = new hintsAndTips()
    document.addEventListener("keydown", this.keyHandler, true)
    this.title = title
    this.width = window.innerWidth;
    this.height = window.innerheight;
    var canvas = document.createElement("mycanvas")
    var ctx = mycanvas.getContext("2d")
    this.img = new Image()
    this.img.src = "img/hintFrame.png"
    mycanvas.style.position = "absolute";
    mycanvas.style.left = this.img.offsetLeft;
    mycanvas.style.top = this.img.offsetTop;
    gameNs.ctx = ctx
  }

  createDiv(divID)
  {
    var div = document.createElement("div");
    div.id = divID;
    if(div.id === "return")
    {
      console.log("return button created");
      div.innerHTML = "<img src=\'img/back.png\'>";
      this.div = div;

      div.style.visibility = "visible";
      div.style.position = "absolute";
      div.style.left = (this.width/ 2) - 450 +"px";
      div.style.top = (this.height/8) - 100 +'px';
    }
    div.addEventListener("click", this.onTouchStart,{passive:false});
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
         var el = document.getElementById( 'return' );
         el.parentNode.removeChild( el );
         gameNs.helpScene.createDiv("HelpBack")
         gameNs.helpScene.createDiv("Hints")
         gameNs.ctx.clearRect(0,0,mycanvas.width,mycanvas.height)
       }
    }
  }
}

keyHandler(e)
{
  if(gameNs.sceneManager.currentScene.title === gameNs.hintsScene.title)
  {
    if(e.keyCode === 39)//w key
    {
      gameNs.hintsTxt.nextHint()
    }
    else if( e.keyCode === 37)//a
    {
      gameNs.hintsTxt.prevHint()
    }
  }

}

  update()
  {
    gameNs.hintsTxt.update()
  }

  render()
  {
    var image = this.img;
    gameNs.ctx.drawImage(image, 150,200,1700,800)
    gameNs.hintsTxt.render()

  }

}
