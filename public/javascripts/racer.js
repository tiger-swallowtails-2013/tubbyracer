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
    else    {
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

var accuracyTracker = {
  correctWord: "",
  typedWord: "",
  addLetter: function(letter){
    this.typedWord+=letter;
  },
  removeLetter: function(){
    this.typedWord = this.typedWord.slice(0, (this.typedWord.length-1))
  },
  finished: function(){
    return (this.correctWord === this.typedWord)
  },
  onTrack: function(){
    var test = new RegExp(this.typedWord)
    if(this.correctWord.match(test)){
      return true;
    }
    else{
      return false;  
    }
  }
}

function typeRacer(container){
  var gameArea = container.querySelector("#gameArea");
  gameArea.disabled = true;
};
