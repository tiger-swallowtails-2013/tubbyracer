function typeRacer(container) {
  // alert(container.getElementByName('gameArea'))
  var start = container.getElementById("gameArea");
  var finish = container.getElementById("gameFinish");
  var results = container.getElementById("gameResults");
  var game = container.getElementById("game")

  var start_time = 0;

  start.onfocus = function(){
    start_time = new Date();
    // console.log("start:" + start_time);
  };


  start.addEventListener('paste', function(){
    game.innerHTML="<img src=/gifs/newman.gif>";
  });

  finish.addEventListener('click', function() {
    finish_time = new Date();
    // console.log("finish:" + finish_time);
    total_time = Math.round((finish_time - start_time)/1000);
    var message = "Congrats! You took" + " " + total_time + " " + "seconds.";
    results.innerText = message;
  });
}
