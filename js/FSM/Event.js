class Event
{
    constructor(id, state1, state2, twoWay)
    {
      this.id = id;
      this.idS1 = "";
      this.idS2 = "";
      this.firstState = state1;
      this.secondState = state2;
      this.twoWay = twoWay; // Boolean to say if state can be changed back using this event
      this.triggers = [];
    }

    // t: trigger( id: string, width: int, height: int, image: image)
    // fsm: Finite State Machine object
    // group: int to group trigger so you know when to show them (0: everytime)
    addTrigger(t, fsm)
    {
        var img = new Image();

        // Add clickable image trigger
        if(img.tagName == t.image.tagName)
        {
          // Create id
          this.triggers.push('triggerImg'+t.id);

          if(this.idS1 === "")
          {
            this.idS1 = t.id;
          }
          else {
            this.idS2 = t.id;
          }

          // If id doesnt exist
          if (document.getElementById("triggerImg"+t.id) == null)
          {
            var canv = document.createElement("canvas");  // Create canvas
            canv.id = 'triggerImg'+t.id // give id
            document.body.appendChild(canv);  // add canvas to document
            canv.height = 100; //get original canvas height
            canv.width = 100;  // get original canvas width
            canv.style = "border:1px solid #d3d3d3;"  // Canvas style
            var c = document.getElementById("triggerImg"+t.id); // Get canvas
            var ctx=c.getContext("2d");
            document.getElementById("triggerImg"+t.id).addEventListener("click", this.transition.bind(this, fsm, t.id));  // Call transition on click
            setTimeout(function(){ ctx.drawImage(t.image, 0 ,0, 100, 100);}, 1 * 100);  // Delay load
          }
        }
        this.hideTrigger(); // Hide trigger
    }

    // Hide the triggers so that only the available ones are showing
    hideTrigger()
    {
      for (var i = 0; i < this.triggers.length; i++) {
        if(document.getElementById(this.triggers[i]) != null)
        {
          document.getElementById(this.triggers[i]).style.display ="none";
        }
      }
    }

    // If this event is available, show the trigger
    showTrigger(stateName)
    {
      for (var i = 0; i < this.triggers.length; i++) {
        if(document.getElementById(this.triggers[i]) != null)
        {
          document.getElementById(this.triggers[i]).style.display ="block";
        }
      }
    }

    transition(fsm, id)
    {
      if(id === undefined || this.idS2 === "")
      {
        // First state to second
        if(fsm.currentState.name === this.firstState.name)
        {
          console.log(this.firstState.name + " to " + this.secondState.name);
          fsm.currentState = this.secondState;
        } // Second state to first if it is a two way event
        else if(fsm.currentState.name === this.secondState.name && this.twoWay)
        {
          console.log(this.secondState.name + " to "  + this.firstState.name);
          fsm.currentState = this.firstState;
        } // Error can't transition this way
        else if (this.twoWay === false)
        {
          console.log("Transition error! Can't transition backwards (" + this.secondState.name + " to " + this.firstState.name + ")");
        }
        else // Error state not found
        {
          console.log("Transition error! " + state.name + " not found in event " + this.id);
        }
      }
      else {
        // First state to second
        if(id === this.idS1)
        {
          console.log(this.firstState.name + " to " + this.secondState.name);
          fsm.currentState = this.secondState;
        } // Second state to first if it is a two way event
        else if(id === this.idS2 && this.twoWay)
        {
          console.log(this.secondState.name + " to "  + this.firstState.name);
          fsm.currentState = this.firstState;
        } // Error can't transition this way
        else if (this.twoWay === false)
        {
          console.log("Transition error! Can't transition backwards (" + this.secondState.name + " to " + this.firstState.name + ")");
        }
        else // Error state not found
        {
          console.log("Transition error! " + state.name + " not found in event " + this.id);
        }
      }

      if (typeof fsm.updateAvailableEvents !== "undefined") {
        fsm.updateAvailableEvents();
      }
    }
}
