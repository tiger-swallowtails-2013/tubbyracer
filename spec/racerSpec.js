describe("typeracer", function(){
  var game, gameData, gameArea;

  function appendToDom(element, className, parent){
    parent = parent || document.body;
    var element = document.createElement(element);
    element.classList.add(className);
    parent.appendChild(element);

    return element;
  };

  beforeEach(function){
    game = appendToDom('div', 'game');
    gameData = appendToDom('p', 'gameData', game);
    gameArea = appendToDom('textarea', 'gameArea', game);

    typeRacer(document);
  };

  // afterEach(function){
  //   document.body.removeChild(game);
  // };
});
