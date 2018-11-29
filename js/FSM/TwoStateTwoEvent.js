class TwoStateTwoEvent {
  constructor(id, state1, state2, event1, event2)
  {
    this.id = id;
    this.currentState = state1;
    this.firstState = state1;
    this.secondState = state2;
    this.firstEvent = event1;
    if(event2 != undefined && event1.twoWay == false)
    {
      this.secondEvent = event2;
    }
  }

  changeState()
  {
    if(this.currentState === this.secondState && this.secondEvent != undefined && this.firstEvent.twoWay === false)
    {
      this.secondEvent.transition(this);
    }
    else
    {
      this.firstEvent.transition(this);
    }
  }

  useEvent(event)
  {
    if(this.secondEvent === event)
    {
      this.secondEvent.transition(this);
    }
    else if(this.firstEvent === event)
    {
      this.firstEvent.transition(this);
    }
    else
    {
      console.log("Error: Event not found in FSM");
    }
  }

  update()
  {
      this.currentState.update();
  }

  draw()
  {
    this.currentState.draw();
  }
}
