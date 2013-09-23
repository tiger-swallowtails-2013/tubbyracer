var timer = 5000;
var searchTimeout;

function onKeyUp(arg) {
  clearTimeout(timer);
  if (arg.keyCode == 13) {
      window.onunload = function(){alert("Bye now!");}          
  }
}

document.getElementById('my_text').onkeypress = function () {
  if (searchTimeout != undefined) clearTimeout(searchTimeout);
  var greeting = setTimeout(alert("Good Job"), onKeyUp)  



}