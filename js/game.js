var gameNs = {};
class Game
{
  /**
  *helper funtion that constructs game setting up each of the animated sprites
  *can also set ptoperties of the sprite objects, width, height, image, its y position and fps
  */
  constructor()
  {
    console.log("game constructed");
  }
  /**
  *helper funtion that records the time when the application is loaded
  */
  initWorld() //prints out “Initialising game world”
  {
    //this.touchTest = new TouchTest();
    gameNs.sceneManager = new SceneManager();
    gameNs.menuScene = new MenuScene('RWM');
    gameNs.playScene = new PlayScene('Play');
    gameNs.optionsScene = new OptionsScene('Options');

    gameNs.sceneManager.addScene(gameNs.menuScene);
    gameNs.sceneManager.addScene(gameNs.playScene);
    gameNs.sceneManager.addScene(gameNs.optionsScene);
    gameNs.sceneManager.goToScene(gameNs.menuScene.title);

  //  document.addEventListener("click", this.clickHandler.bind(null, gameNs.sceneManager));
    //draw(sceneManager);
  }
  /**
  *Update function called every frame. sets the current time when the function is called
  * calls updates for each sprite object and clears the screen
  */
  update()
  {
    window.requestAnimationFrame(gameNs.game.update);
    gameNs.sceneManager.update();
    gameNs.sceneManager.render();
  }
//  clickHandler(sceneManager)
  //{
    //gameNs.sceneManager.goToNextScene();
  //  gameNs.sceneManager.render();
//  }
  draw()
  {
    window.requestAnimationFrame(gameNs.game.draw);
    gameNs.sceneManager.render();


  }

}
