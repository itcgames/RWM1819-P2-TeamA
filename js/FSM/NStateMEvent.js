class NStateMEvent
{
  constructor(id, state)
  {
    this.id = id;
    this.currentState = state;
    this.states = [];
    this.states.push(state);
    this.allEvents = [];
    this.availableEvents = [];
    this.draw()
  }

  addState(state)
  {
    this.states.push(state);
  }

  addEvent(event)
  {
    this.allEvents.push(event);
  }

  updateAvailableEvents()
  {
    this.availableEvents = [];
    for (var i = 0; i < this.allEvents.length; i++) {
      this.allEvents[i].hideTrigger();
      if(this.allEvents[i].firstState.name === this.currentState.name)
      {
        this.availableEvents.push(this.allEvents[i]);
      }
      else if(this.allEvents[i].secondState.name === this.currentState.name && this.allEvents[i].twoWay)
      {
        this.availableEvents.push(this.allEvents[i]);
      }
    }
    for (var i = 0; i < this.availableEvents.length; i++) {
      this.availableEvents[i].showTrigger(this.currentState.name);
    }
  }

  changeState(event)
  {
    this.currentState = event.transition(this.currentState);
  }

  update()
  {
    this.currentState.update()
  }

  draw()
  {

    this.currentState.draw()
  }

}
