function typeRacer(container) {
  // alert(container.getElementByName('gameArea'))
  var start = container.getElementsByClassName("gameArea")[0];
  var finish = container.getElementsByClassName("gameFinish")[0];
  var results = container.getElementsByClassName("gameResults")[0];

  var start_time = 0;

  start.onfocus = function(){
    start_time = new Date();
    // console.log("start:" + start_time);
  };

  finish.addEventListener('click', function() {
    finish_time = new Date();
    // console.log("finish:" + finish_time);
    total_time = Math.round((finish_time - start_time)/1000);
    var message = "Congrats! You took" + " " + total_time + " " + "seconds.";
    results.innerText = message;
  });
}
