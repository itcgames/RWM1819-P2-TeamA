class EndScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.title = title;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.img = new Image();
   this.bgimg = new Image();
    this.bgimg.src ="img/gameoverbg.png"
    this.img.src = "img/table.png";
    document.addEventListener("keydown", this.keyHandler, true);
  }


  keyHandler(e)
  {
    if(gameNs.win === true)
    {
      if(e.keyCode === 82)//w key
      {

        document.getElementById("table").style.display = "none";
        gameNs.ctx.clearRect(0,0,mycanvas.width,mycanvas.height)
        gameNs.sceneManager.goToScene(gameNs.playScene.title)
        gameNs.win = false
        startNumber = -1
        
      }

      if(e.keyCode === 77)
      {
        document.getElementById("table").style.display = "none";
        gameNs.ctx.clearRect(0,0,mycanvas.width,mycanvas.height)
        gameNs.sceneManager.goToScene(gameNs.menuScene.title)
        gameNs.win = false
        startNumber = -1
        gameNs.menuScene.createDiv("Play");
        gameNs.menuScene.createDiv("Options");
        gameNs.menuScene.createDiv("Tutorial");

      }
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
    var imagebg = this.bgimg;
    var image = this.img;
    ctx.drawImage(imagebg, 0 , 0,this.windowWidth, this.windowHeight ,0,0, this.windowWidth ,this.windowHeight);

  }


}
