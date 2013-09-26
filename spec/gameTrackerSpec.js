describe("game tracker", function(){
  var main, mainData, mainArea, mainText, userCorrectInput, userWrongInput;

  function appendToDom(element, className, parent){
    parent = parent || document.body;
    var element = document.createElement(element);
    element.classList.add(className);
    parent.appendChild(element);

    return element;
  };

  beforeEach(function(){
    main = appendToDom('div', 'main');
    mainData = appendToDom('p', 'mainData', main);
    mainArea = appendToDom('textarea', 'mainArea', main);
    mainButton = appendToDom('button', 'mainStart', main);

    mainText = mainData.innerText = "This is the game text"
    userWrongInput =mainArea.innerText = "This is not supposed to match"
    userCorrectInput = mainArea.innerText = "This is the game text"
    typeRacer(document)
  });

  afterEach(function() {
    document.body.removeChild(main);
  });

  describe("before start typing", function(){
    it ("should retrieve main sentence ", function(){
      var gameSentence = game.getWhatUserIsSupposedToType()
      expect(mainText).toEqual(gameSentence)
    })
    it ("should listen for the button click event to start the countdown", function(){
      spyOn(game, 'handleButtonClick')
      var buttonClickEvent = new Event('click')
      mainButton.dispatchEvent(buttonClickEvent)
      expect(game.handleButtonClick).toHaveBeenCalledWith(buttonClickEvent)
    })
    it ("should hold the first word in the main sentence", function(){
      expect(game.currentWord()).toEqual(mainText.split(" ")[0])
    })

  })

  describe("start typing", function(){

    it ("should listen for keystrokes", function(){
      spyOn(game, 'handleKeyPress')
      var keyDownEvent = new Event('keydown')
      mainArea.dispatchEvent(keyDownEvent)
      expect(game.handleKeyPress).toHaveBeenCalledWith(keyDownEvent)
    })


  })
})
