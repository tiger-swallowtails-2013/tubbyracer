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
  startTime: null,
  endTime: null,

  start: function(){
    this.startTime = new Date()
  },
  end: function(){
    this.endTime = new Date()
  },
  timeElapsed: function(){
    return (this.endTime - this.startTime)/1000
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
    timer.start()
  },

  calculateWPM: function(){
    return ((tracker.getWhatUserIsSupposedToType().split(" ").length)/(timer.timeElapsed()/60))
  },

  displayResults: function() {
    document.querySelector('.mainResults').innerText = "You typed at " + this.calculateWPM() + " words per minute!  You go Glen Coco";
  },

  handleKeyPress: function(evnt) {
    if (tracker.finish()) {
      timer.end()
      this.displayResults()
    } else {

      if(tracker.compareUserInputToExpectedInput()) {
        this.showCorrect()
      } else {
        this.showMistake()
      }
    }
  },
  handleButtonClick: function(evnt) {
    this.begin();
  },

  showMistake: function() {
    document.querySelector('.mainArea').className = 'mainArea incorrect';
  },

  showCorrect: function() {
    document.querySelector('.mainArea').className = 'mainArea correct';
  },

  getTextCharLength: function() {
    return (tracker.getWhatUserIsSupposedToType().split("").length / 100) * 10
  }
}
