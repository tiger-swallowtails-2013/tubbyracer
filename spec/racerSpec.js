describe("typeracer", function(){
  var game, gameData, gameArea;

  function appendToDom(element, idName, parent){
    parent = parent || document.body;
    var element = document.createElement(element);
    element.id = idName
    parent.appendChild(element);

    return element;
  };

  beforeEach(function(){
    game = appendToDom('div', 'game');
    gameData = appendToDom('p', 'gameData', game);
    gameArea = appendToDom('textarea', 'gameArea', game);
    startButton = appendToDom('button', 'startButton', game);

    typeRacer(game);
  });

  // afterEach(function){
  //   document.body.removeChild(game);
  // };
  describe("Timer", function(){
    it("should prevent the user from typing input before the start", function(){
      expect(gameArea.disabled).toBeTruthy();
    });
    describe("Start", function(){
      it("should log a start time", function(){

      });
      it("should allow the user to type input", function(){

      });
    });
    describe("Finish", function(){
      it("should log a finish time", function(){

      });
    });
  })
});
