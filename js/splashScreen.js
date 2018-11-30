class SplashScene
{
  constructor(title)
  {
    this.title = title
    this.width = window.innerWidth
    this.height = window.innerHeight;
    this.img = new Image()
    this.img.src = "img/TitleScreen.png"
    var canvas = document.getElementById("mycanvas")
    mycanvas.style.position = "absolute"
    mycanvas.style.left = this.img.offsetLeft
    mycanvas.style.top = this.img.offsetTop
    this.width = window.innerWidth
    this.height = window.innerHeight
    var startTxt = "Press enter to start!"
    this.startTxt = startTxt
    document.addEventListener("keydown", this.keyHandler, true);
  }

  update()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = mycanvas.getContext('2d');
  }

  keyHandler(e)
  {
    if(gameNs.sceneManager.currentScene.title === gameNs.splashScene.title)
    {
      if(e.keyCode === 13)//w key
      {
        gameNs.sceneManager.goToScene(gameNs.menuScene.title)
        gameNs.menuScene.createDiv("Play");
        gameNs.menuScene.createDiv("Options");
        gameNs.menuScene.createDiv("Tutorial");
      }
    }
  }

  render()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = mycanvas.getContext('2d');
    var image = this.img;
    ctx.drawImage(image, 0,0,this.width,this.height)
    ctx.font = "45px Adventure"
    ctx.fillStyle = "Black"
    ctx.fillText(this.startTxt, 300,800)
  }


}
