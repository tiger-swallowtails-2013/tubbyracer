describe("word tracker", function(){
  wordTracker.correctWord = 'wood';
  wordTracker.typedWord = 'wo'

  it("should know the correct word", function(){
    expect(wordTracker.correctWord).toEqual("wood");
  });
  it("should know the word being typed", function(){
    expect(wordTracker.typedWord).toEqual("wo");
  });
  it("should add a letter to the word being typed", function(){
    wordTracker.addLetter('o');
    expect(wordTracker.typedWord).toEqual('woo')
  });
  it("should remove a letter from the word being typed", function(){
    wordTracker.removeLetter();
    expect(wordTracker.typedWord).toEqual('wo');
  });
  describe("word is incomplete", function(){
    it("should know if the word is incomplete", function(){
      expect(wordTracker.finished()).toBeFalsy();
    });
    it("should know if word is on track", function(){
      expect(wordTracker.onTrack()).toBeTruthy();
    });
    it("should know if word is off track", function(){
      wordTracker.addLetter('k');
      expect(wordTracker.onTrack()).toBeFalsy();
    });
  });
  it("should know if the word is complete", function(){
    wordTracker.typedWord = 'wood';
    expect(wordTracker.finished()).toBeTruthy();
  });
});
