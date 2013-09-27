function typeRacer(container) {
  var gameArea = container.querySelector('.mainArea')
  gameArea.addEventListener("keydown", function(e) {
    game.handleKeyPress(e);
  });

  var buttonClick = container.querySelector('.mainStart')
  buttonClick.addEventListener("click", function(e) {
    game.handleButtonClick(e);
  })
}

var timer = {
  tick: -3,
  stop: false,
  state: function(){
    if(this.stop == true){
      return 'after'
    }
    else if(this.tick < 0){
      return 'before'
    }
    else{
      return 'during'
    }
  },
  count: function(){
    this.stop ? this.tick : this.tick++;
  },
  end: function(){
    this.stop = true;
  },
  reboot: function(){
    this.tick = -3;
    this.stop = false;
  }
}

var tracker = {
  getWhatUserIsSupposedToType: function() {
    return document.querySelector('.mainData').innerText;
  },
  getWhatUserDoneDidSay: function() {
    return document.querySelector('.mainArea').value;
  },
  compareUserInputToExpectedInput: function() {
    var userInput = this.getWhatUserDoneDidSay()
    var gameText = this.getWhatUserIsSupposedToType()
    return gameText.slice(0, userInput.length) == userInput
  },
  finish: function() {
    return this.getWhatUserDoneDidSay() == this.getWhatUserIsSupposedToType()
  }
}

var game = {

  begin: function() {
    timer.reboot();
  },

  displayResults: function(wpm) {
    document.querySelector('.results').innerText = "You typed at " + wpm + " words per minute!  You go Glen Coco";
  },

  calculateResults: function(){
    return (tracker.getWhatUserIsSupposedToType().length)/(timer.tick/60)
  },

  handleKeyPress: function(evnt) {
    if (tracker.finish()) {
      timer.end();
      this.displayResults(this.calculateResults())
    } else {
    tracker.compareUserInputToExpectedInput()
    }
  },
  handleButtonClick: function(evnt) {
    this.begin();
  }
}
