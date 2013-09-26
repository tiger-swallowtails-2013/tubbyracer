
function typeRacer(container){
  var gameArea = container.querySelector('.gameArea')
  gameArea.addEventListener("keydown", function(e) {
    handleKeyPress(e)
  });

var timer = {
  tick: -3,
  stop: false,
  state: function(){
    if(stop)
      return 'after'
    else if(this.tick < 0){
      return 'before'
    }
    else    {
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


function getWhatUserIsSupposedToType() {
  return document.querySelector('.gameData').innerText;
}

function getWhatUserDoneDidSay() {
  console.log(document.querySelector('.gameArea').value)
  return document.querySelector('.gameArea').value;

}

function compareUserInputToExpectedInput(gameText, userText) {
  return gameText.slice(0, userText.length) == userText
}

function handleKeyPress(evnt) {

  var userInput = getWhatUserDoneDidSay()
  var gameText = getWhatUserDoneDidSay()
  return compareUserInputToExpectedInput(gameText,userInput)
}


  //  String.prototype.matchData = function (str){
  //   return this.slice(0, str.length) == str;

