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

function typeRacer(container){
  var gameArea = container.querySelector("#gameArea");
  gameArea.disabled = true;
};
