

var timer = {
  startTime: null,
  endTime: null,

  startIt: function(){
    var textbox = document.querySelector('.mainArea')
    this.startTime = new Date()
    setTimeout(function() {
      textbox.disabled=false
      textbox.focus()
    }, 2000)
    
  },

  endIt: function(){
    this.endTime = new Date()
  },
  timeElapsed: function(){
    console.log(this.endTime)
    console.log(this.startTime)
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
  isFinished: function() {
    return this.getWhatUserDoneDidSay() == this.getWhatUserIsSupposedToType()
  },
  getPercentDone: function(){
    return this.getWhatUserDoneDidSay().length/this.getWhatUserIsSupposedToType().length;
  }
}

var game = {
 
  begin: function() {
    timer.startIt()
  },

  calculateWPM: function(){
    console.log("words: " + tracker.getWhatUserIsSupposedToType().split(" ").length)
    console.log("time: " + timer.timeElapsed())
    return Math.round((tracker.getWhatUserIsSupposedToType().split(" ").length)/(timer.timeElapsed()/60))
  },

  displayResults: function() {
    document.querySelector('.mainResults').innerText = "You typed at " + this.calculateWPM() + " words per minute!  You go Glen Coco";
  },

  handleKeyPress: function(evnt) {
      if(tracker.compareUserInputToExpectedInput()) {
        this.showCorrect()
        tubbyObj.moveTubby(tracker.getPercentDone()*80)
      } else {
        this.showMistake()
      }

      if (tracker.isFinished()) {
        // console.log(timer.startTime)
        // console.log(timer.end)
        timer.endIt();
        this.displayResults()
      } 

  
  },
  
  handleButtonClick: function(evnt) {
    this.begin();
  },

  currentWord: function() {
    var gameData = this.getWhatUserIsSupposedToType()
    return gameData.split(" ")[0]
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

function typeRacer(container) {

    var gameArea = container.querySelector('.mainArea')
    gameArea.addEventListener("keyup", function(e) {
      game.handleKeyPress(e);
    });

    var buttonClick = container.querySelector('.mainStart')
    buttonClick.addEventListener("click", function(e) {
      game.handleButtonClick(e);
    });


}

var tubbyObj = {
  position: 0,
  element: function(){
    return document.querySelector('.tubby');
  },
  moveTubby: function(amount) {
    this.position = amount;
    this.element().style.left = this.position + "%";
  }
}
