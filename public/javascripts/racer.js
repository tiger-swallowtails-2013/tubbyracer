function typeRacer(container){

};

function getWhatUserIsSupposedToType() {
  return document.querySelector('.gameData').innerText;
}

function getWhatUserDoneDidSay() {
  return document.querySelector('.gameArea').value;
}

function compareUserInputToExpectedInput(gameText, userText) {
  return gameText.slice(0, userText.length) == userText
}



  //  String.prototype.matchData = function (str){
  //   return this.slice(0, str.length) == str;

