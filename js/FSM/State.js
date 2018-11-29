class State {
  constructor(name, image) {
    this.name = name;
    if(image != undefined)
    {
      this.imageWidth = image.width;
  	  this.imageHeight = image.height;
  	  this.image = image.image;
    }
  }

  update()
  {

  }

  draw()
  {
    var c = document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.drawImage(this.image, 0 ,0, this.imageWidth, this.imageHeight,
                              0, 0, 100, 100);
  }
}
