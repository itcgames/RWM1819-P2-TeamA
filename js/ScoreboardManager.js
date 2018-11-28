class ScoreboardManager
{
  constructor()
  {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.scoreboard =  []
    this.count = 0
    this.playerName = ""
    this.session = false
    this.local = false

    this.storageType = "none";


   this.minutes;
   this.seconds;
   this.duration=0;
   this.posX=405;
   this.posY=50;
   this.timerActive = true;


  }
  startTimer(){
    this.timerActive = true;
    this.beginDate = new Date();
    console.log(this.beginDate.getTime())

  }
  stopTimer(){

    this.timerActive = false;
  }
  getTimeMilliSeconds(){
    this.endDate = new Date();
    return (this.endDate.getTime() - this.beginDate.getTime())
  }
  getTimeSeconds(){

    return (this.getTimeMilliSeconds() / 1000)
  }
  getTimeMinutes(){

    return (this.getTimeSeconds() / 60)

  }
  getTimeHours(){

    return (getTimeMinutes() / 60)

  }
  getScorePerMin(score){
    return Math.trunc(score / this.getTimeMinutes());
  }
  getDisplayTimer()
  {
    if(this.timerActive == true){

      this.diff = this.duration + (((Date.now() - this.beginDate) / 1000) | 0);

       // does the same job as parseInt truncates the float
       this.minutes = (this.diff / 60) | 0;
       this.seconds = (this.diff % 60) | 0;

       this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
       this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;


       setInterval(this.timer, 1000);


    }
    return(this.minutes+":"+this.seconds)


  }
  clearLocalStorage()
  {

    localStorage.removeItem('Scoreboard');

  }
  clearSessionStorage()
  {
    sessionStorage.removeItem('Scoreboard');
  }
  initBoard(storageType)
  {

    if(storageType == "local" || storageType == "Local"){
      this.storageType = "local"
      if((localStorage.getItem('Scoreboard') === null))
      {

        localStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
      }
      this.scoreboard = JSON.parse(localStorage.getItem('Scoreboard'));

      if(this.scoreboard == null)
      {
        this.scoreboard = []
      }
    }
    else if (storageType == "session" || storageType == "Session") {
      this.storageType = "session"
      if((sessionStorage.getItem('Scoreboard') === null))
      {
        sessionStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
      }
      this.scoreboard = JSON.parse(sessionStorage.getItem('Scoreboard'));

      if(this.scoreboard == null)
      {
        this.scoreboard = []
      }
    }
    else{
      console.log("Please enter a valid storage type")
    }


  }
  //Takes user input, adds the score which is passed
  //to the function along with a userID which is created
  //To the leaderboardd as an object in the form {name: "Aaron", score:100, playerID:1}
  addToBoard(score)
  {
    this.stopTimer();

    if(this.count <1)
    {
      var seconds = this.getTimeSeconds()
      var time = this.getDisplayTimer()
      var spm = this.getScorePerMin(score)
      while (this.playerName === "" || this.playerName == null)
      {
          this.playerName = prompt ("Please enter your name","");
      }
        this.playerID = this.scoreboard.length + 1;
        var object = {name: this.playerName,
                      score: score,
                      time: time,
                      spm: spm,
                      seconds: seconds,
                      playerID: this.playerID}

        this.scoreboard.push(object);

        switch(this.storageType) {
            case "local":
            localStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
              break;
            case "session":
            sessionStorage.setItem('Scoreboard', JSON.stringify(this.scoreboard));
              break;
      }
        this.count = this.count + 1;
    }

  }

  getBoard()
  {
    return this.scoreboard
  }

  filterName(name)
  {
    this.scoreboard.filter(function(scoreboard)
    {
      return (scoreboard.name == name);
    })

  }

  filterTime(val)
  {
    this.scoreboard.sort(function(a,b){

      if(val === 1){
        return a.seconds - b.seconds
      }
      else if (val === -1){
        return b.seconds - a.seconds
      }
    })
  }

  filterScore(val)
  {
    //Filter
    //var byTime = this.scoreboard.slice(0)

    this.scoreboard.sort(function(a,b){

      if(val === 1){
        return a.score - b.score
      }
      else if (val === -1){
        return b.score - a.score
      }
    })
  }

  filterSPM(val)
  {
    //Filter
    this.scoreboard.sort(function(a,b){
      if(val === 1){
        return a.spm - b.spm
      }
      else if (val === -1){
        return b.spm - a.spm
      }
    })
  }
  generate_table() {



      var tablecontents = "";
      tablecontents = "<table>";
      tablecontents += "<tr>";
      tablecontents += "<td>" + "Pos" + "</td>";
      tablecontents += "<td>" + "Name"+ "</td>";
      tablecontents += "<td>" + "Time" + "</td>";
      tablecontents += "</tr>";
      for (var i = 0; i < this.scoreboard.length; i ++)
     {
        tablecontents += "<tr>";
        tablecontents += "<td>" + i + "</td>";
        tablecontents += "<td>" + this.scoreboard[i].name + "</td>";
        tablecontents += "<td>" + this.scoreboard[i].time + "</td>";
        tablecontents += "</tr>";
     }
     tablecontents += "</table>";
     document.getElementById("table").style.display = "block";
     document.getElementById("table").innerHTML=tablecontents;

}
  render()
  {

    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    var imagebg = this.bgimg;
    var image = this.img;

    var y = 1;
    var i = 1;
    var j = 0;

    for(var i = 0; i < this.scoreboard.length; i++){

      var stringName = this.scoreboard[i].name;
      var stringTime = this.scoreboard[i].time;

      ctx.fillStyle ='black';
    //  ctx.font = '50px Adventure Regular';
      //ctx.fillText(positionText, this.windowWidth/7*2, this.windowHeight/8);
      ctx.font = '40px Adventure Regular';
      ctx.fillText(stringName, this.windowWidth/3, (51 * y) + this.windowHeight/4.8);
      ctx.fillText(stringTime, this.windowWidth/7 * 4.2, (51* y) + this.windowHeight/4.8);
      y=y+1;
      j=j+1;
    }
    //Output for order lowest to highest

/*

    this.position = this.keyValue.indexOf(this.findPos.toString());
      console.log(this.position);
      if(j <= 1)
      {


        this.position = this.position + 1;
      }

    //  console.log("positionText"+this.positionArray);
/*
      for (var key in this.leaderboard) {
      // check if the property/key is defined in the object itself, not in parent

      if (this.ordered.hasOwnProperty(key) && j < 7 ) {
        var positionText = "You placed "+ this.position +" out of "+this.positionArray.length;
        var stringName = (this.ordered)[key];
        this.diff = this.duration - (((Date.now() - gameNs.start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        this.minutes = (key/ 60) | 0;
        this.seconds = (key % 60) | 0;

        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        var stringScore = (this.minutes+":"+this.seconds);
        var positionText = "You placed "+ this.position +" out of "+this.keyValue.length;


        i = i+1;
        ctx.fillStyle ='black';
        ctx.font = '50px Adventure Regular';
        ctx.fillText(positionText, this.windowWidth/7*2, this.windowHeight/8);
        ctx.font = '40px Adventure Regular';
        ctx.fillText(stringName, this.windowWidth/3, (51 * y) + this.windowHeight/4.8);
        ctx.fillText(stringScore, this.windowWidth/7 * 4.2, (51* y) + this.windowHeight/4.8);
        y=y+1;
        j=j+1;

        */
      }

      //ctx.fillText("Press Back to return to the menu  <-", this.windowWidth/7 * 1.7, this.windowHeight/6 * 5.8);
}
