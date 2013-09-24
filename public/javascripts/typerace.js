function typeRacer(container) {
  var start = container.children.namedItem('gameArea');
  var start_time = 0;
  var finish = container.children.namedItem('finishedRacing');
  var results = container.children.namedItem('results');
  start.onfocus = function(){
    start_time = new Date();
    // console.log("start:" + start_time);
  };
  finish.onclick = function(){
    finish_time = new Date();
    // console.log("finish:" + finish_time);
    total_time = finish_time - start_time;
    results.innerHTML = "Congrats! You took" + " " + (total_time/600) + " " + "seconds.";
  };
}
