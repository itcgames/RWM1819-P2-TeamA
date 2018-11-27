class SceneManager
{
  /**
  *helper function that constructs new instance of SceneManager
 */
  constructor()
  {
    this.currentScene = null;
    this.scenes = {};
    this.titles = [];
    this.i = -1;
    this.NumScenes = -1;
  }

  /**
  *helper function that adds a new scene to titles
  *increments NumScenes
  @param {Scene} scene accepets instance of scene and adds it to titles
 */
  addScene(scene)
  {
    this.NumScenes++;
    this.titles.push(scene.title);
    this.scenes[this.NumScenes] = scene;
  }

  /**
  *helper function that goes to certain scene
  *increments NumScenes
  @param {string} title accepets instance of type string and finds scene
  *with that title
  */
  goToScene(title)
  {
    for(var i=0; i < this.titles.length; i++)
    {
      if(this.titles[i]==title)
      {
        this.i = i;
      }
    }
    this.currentScene = this.scenes[this.i];
  }

  /**
  *helper function that goes to next scene in the list
  *increments i for the index
  */
  goToNextScene()
  {
    this.i++;
    if(this.i > this.NumScenes)
    {
      this.i = 0;
    }
    this.currentScene = this.scenes[this.i];
  }

  update()
  {
    this.currentScene.update();
  }
  /**
  *helper function that renders background colour, font and font size
  */
  
  render()
  {
    this.currentScene.render();
  }
}
