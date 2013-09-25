describe("typeracer", function(){
  var game, gameData, gameArea, gameText, userCorrectInput, userWrongInput;

  function appendToDom(element, className, parent){
    parent = parent || document.body;
    var element = document.createElement(element);
    element.classList.add(className);
    parent.appendChild(element);

    return element;
  };

  beforeEach(function(){
    game = appendToDom('div', 'game');
    gameData = appendToDom('p', 'gameData', game);
    gameArea = appendToDom('textarea', 'gameArea', game);

    gameText = gameData.innerText = "This is the game text"
    userWrongInput =gameArea.innerText = "This is not supposed to match"
    userCorrectInput = gameArea.innerText = "This is the game text"
    typeRacer(document);
  });

  // afterEach(function){
  //   document.body.removeChild(game);
  // };

  describe("Getting data", function() {
    it("should get the gameText from the DOM", function(){
      var text = getWhatUserIsSupposedToType()
      expect(text).toEqual(gameText);

    })

    it("should get the userCorrectInput from the DOM", function(){
      var some_text = getWhatUserDoneDidSay()
      expect(some_text).toEqual(userCorrectInput);
    })

  })

  describe("Compare user input to what user is supposed to type", function() {

    it("return true if the user input matches the original string", function() {

      expect(compareUserInputToExpectedInput(gameText, userCorrectInput)).toBeTruthy()
    });

    it("returns false if the user input does not match the original string", function(){
      expect(compareUserInputToExpectedInput(gameText, userWrongInput)).toBeFalsy()

    });

  });


});
