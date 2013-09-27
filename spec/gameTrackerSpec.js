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
    results = appendToDom('div', 'mainResults', main);
    // class .incorrect identifies typed text is off track - change color to red in css

    mainText = mainData.innerText = "This is the game text"
    userCorrectInput = mainArea.innerText = "This is the game text"

    typeRacer(document)
  });

  afterEach(function() {
    document.body.removeChild(main);
  });

  describe("before start typing", function(){
    it ("should retrieve main sentence ", function(){
      var gameSentence = tracker.getWhatUserIsSupposedToType()
      expect(mainText).toEqual(gameSentence)
    })
    it ("should listen for the button click event to start the countdown", function(){
      spyOn(game, 'handleButtonClick')
      var buttonClickEvent = new Event('click')
      mainButton.dispatchEvent(buttonClickEvent)
      expect(game.handleButtonClick).toHaveBeenCalledWith(buttonClickEvent)
    })

  })

  describe("start typing", function(){

    it ("should listen for keystrokes", function(){
      spyOn(game, 'handleKeyPress')
      var keyDownEvent = new Event('keydown')
      mainArea.dispatchEvent(keyDownEvent)
      expect(game.handleKeyPress).toHaveBeenCalledWith(keyDownEvent)
    })

    it ("should match the user input against the given sentence", function(){
      mainArea.dispatchEvent(new Event('keydown'))
      expect(tracker.compareUserInputToExpectedInput()).toBeTruthy()
    })

    it ("should know if sentence doesn't match", function(){
      mainArea.innerText = "This is not supposed to match"
      mainArea.dispatchEvent(new Event('keydown'))
      expect(tracker.compareUserInputToExpectedInput()).toBeFalsy()
    })
    it ("should tell the user if the sentence doesn't match", function(){
      mainArea.innerText = "This is not supposed to match"
      mainArea.dispatchEvent(new Event('keydown'))
      expect(mainArea.className).toEqual('mainArea incorrect')
    })
    it ("should tell the user if the sentence does match", function(){
      mainArea.innerText = "This is the ga"
      mainArea.dispatchEvent(new Event('keydown'))
      expect(mainArea.className).toEqual('mainArea correct')
    })
    it ("should constantly be adjusting between matching and not matching", function(){
      mainArea.innerText = "This is not supposed to match"
      mainArea.dispatchEvent(new Event('keydown'))
      mainArea.innerText = "This is the ga"
      mainArea.dispatchEvent(new Event('keydown'))
      expect(mainArea.className).toEqual('mainArea correct')
    })
    it ("should tell the user when the entire sentence matched", function(){
      mainArea.dispatchEvent(new Event('keydown'))
      expect(tracker.finish()).toBeTruthy()
    })
  })
  describe("game complete", function(){
    it ("should display the results once the game is complete", function(){
      mainArea.dispatchEvent(new Event('keydown'))
      expect(results.innerText).toMatch("words per minute!")
    })
  })

  
})
