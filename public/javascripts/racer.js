function typeRacer(container) {
  var gameArea = container.querySelector('.mainArea')
  gameArea.addEventListener("keydown", function(e) {
    handleKeyPress(e);
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
    if(stop){
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
    this.tick++;
  },
  end: function(){
    this.stop = true;
  },
  reboot: function(){
    this.tick = -3;
    this.state = 'before';
    this.stop = false;
  }
}

var wordTracker = {
  correctWord: "",
  typedWord: "",
  addLetter: function(letter){
    this.typedWord+=letter;
  },
  removeLetter: function(){
    this.typedWord = this.typedWord.slice(0, (this.typedWord.length-1))
  },
  finished: function(){
    return (this.correctWord == this.typedWord)
  },
  onTrack: function(){
    var test = new RegExp(typedWord)
    if(correctWord.match(test)){
      return true;
    }
    else{
      return false;
    }
  }
}

var game = {

  begin: function() {
    timer.reboot();
  },
  getWhatUserIsSupposedToType: function() {
    return document.querySelector('.mainData').innerText;
  },
  getWhatUserDoneDidSay: function() {
    return document.querySelector('.mainArea').value;
  },
  compareUserInputToExpectedInput: function(gameText, userText) {
    return gameText.slice(0, userText.length) == userText
  },
  handleKeyPress: function(evnt) {
    var userInput = getWhatUserDoneDidSay()
    var gameText = getWhatUserIsSupposedToType()
    return compareUserInputToExpectedInput(gameText,userInput)
  },
  handleButtonClick: function(evnt) {
    this.begin()
  },
  currentWord: function() {
    var gameData = this.getWhatUserIsSupposedToType()
    return gameData.split(" ")[0]
  }
}
  //  String.prototype.matchData = function (str){
  //   return this.slice(0, str.length) == str;

