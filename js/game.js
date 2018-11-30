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
    gameNs.endScene = new EndScene('endScene');
    gameNs.helpScene = new HelpScene('Help')
    gameNs.hintsScene = new HintsScene('Hints')

    gameNs.sceneManager.addScene(gameNs.menuScene);
    gameNs.sceneManager.addScene(gameNs.playScene);
    gameNs.sceneManager.addScene(gameNs.optionsScene);
    gameNs.sceneManager.addScene(gameNs.helpScene);
    gameNs.sceneManager.addScene(gameNs.hintsScene)

    gameNs.sceneManager.addScene(gameNs.endScene);
    gameNs.sceneManager.goToScene(gameNs.menuScene.title);

    gameNs.audioManager = new AudioManager();
    gameNs.audioManager.init();
    gameNs.audioManager.loadSoundFile("bg","img/audio/background.mp3" )
    gameNs.audioManager.loadSoundFile("blowPipe","img/audio/Blowpipe.wav" )
    gameNs.audioManager.loadSoundFile("drop","img/audio/drop.mp3" )
    gameNs.audioManager.loadSoundFile("fan","img/audio/Fan.wav" )
    gameNs.audioManager.loadSoundFile("goal","img/audio/goal.mp3" )
    gameNs.audioManager.loadSoundFile("hitGround","img/audio/Hit_ground.wav")
    gameNs.audioManager.loadSoundFile("magnet","img/audio/Magnet.wav")
    gameNs.audioManager.loadSoundFile("tramp","img/audio/Tramp.wav")
    gameNs.audioManager.loadSoundFile("win","img/audio/Win.wav")




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
    //this.draw();
    //console.log("update called")
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
