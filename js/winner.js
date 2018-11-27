class Winner
{
  constructor(title)
  {
    this.title = title;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  update()
 {
   var canvas = document.getElementById('mycanvas');
   var ctx = canvas.getContext('2d');
 }

 createDiv(divId)
 {
   var div = document.createElement("div");
   div.id = divId;
   if(div.id ==="PlayAgain")
   {
     div.innerHTML = "<img src=\'Assets/PlayAgain.png\'>";
     this.div = div;
     //var d = document.getElementById('yourDivId');
     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 4) - 100 +"px";
     div.style.top = (this.height/ 8) + 80 +'px';
   }

   if(div.id ==="Quit")
   {
     div.innerHTML = "<img src=\'Assets/ExitButton.png\'>";
     this.div = div;
     //var d = document.getElementById('yourDivId');
     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 4) - 100 +"px";
     div.style.top = (this.height/ 8)*3.25+80 +'px';
   }

    div.addEventListener("touchstart", this.onTouchStart,{passive:false});
    document.body.appendChild(div);
 }

 onTouchStart(e)
 {

   e.preventDefault();
   gameNs.counter = 0;

   var currentElement = e.target;
   var parentDiv = currentElement.parentNode;
   var parentDiv = currentElement.parentNode;
   var fullPath = currentElement.src;

   if (fullPath !== undefined)
   {

     var index = fullPath.lastIndexOf("/");
     var filename = fullPath;
     if(index !== -1)
     {
       //this.count+=1;


        filename = fullPath.substring(index+1,fullPath.length);
        console.log(filename);
        if(filename === "PlayAgain.png")
        {
              var div = document.getElementById("PlayAgain")
              gameNs.sceneManager.goToScene(gameNs.playScene.title);

          }
        else if(filename === "ExitButton.png")
          {
            var div = document.getElementById("Quit");
            div.innerHTML = "<img src=\'Assets/Mute.png\'>";
            gameNs.sceneManager.goToScene(gameNs.menuScene.title);

          }
          var el = document.getElementById( 'PlayAgain' );
          el.parentNode.removeChild( el );
          var el = document.getElementById( 'Quit' );
          el.parentNode.removeChild( el );

          var canvas = document.createElement("mycanvas");
          var ctx = mycanvas.getContext("2d");
          ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
        }
      }
    }

    render()
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');
      ctx.font = '55px Adventure Regular';
      ctx.fillText(this.title, this.width/2 - 170, 70);
      ctx.fillText('your score was '+gameNs.playerscore/1000+' seconds', window.innerWidth/2, window.innerHeight/2)

    }


}
