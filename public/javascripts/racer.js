

function typeRacer(container){
  var gameArea = container.querySelector('.gameArea')
  gameArea.addEventListener("keydown", function(e) {
    handleKeyPress(e)
  });
};

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

