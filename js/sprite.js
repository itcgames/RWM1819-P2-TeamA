class Sprite
{
  /**
  *Helper function that creates new elements of Sprite class
  * @param {canvas} context loads canvas for image
  * @param {Image} Image loads in sprites Image variables
  *@param {int} fps manages frames per second
  *@param {int} y used to determine y position
  */
  constructor(context, Image, fps, y)
  {


    this.width = Image.width;
    this.height = Image.height
    this.img=Image.image;
    this.fps = fps;
    this.y = y;
    this.index = 0;
    this.frames = 1000/this.fps
    this.time = 0;

  }

  /**
  *helper function that updates Sprite
  *@param {Time} dT provides time for update
  */
  update(dT)
  {
    if(dT != null)
    {
      this.time = this.time + dT;
    }

    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    var img = this.img;

//draw sprite, passing all images variables
    ctx.drawImage(this.img, this.index*11 , 16, 63, 104, 0, this.y, this.width, this.height);

    if(this.frames<this.time)
    {
        this.index = this.index +1;
          if(this.index > 2)
          {
            this.index = 0;
          }
          this.time=0;
      }


  }

}
