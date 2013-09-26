describe("word tracker", function(){
  wordTracker.correctWord = 'wood';
  wordTracker.typedWord = 'wo'

  it("should know the correct word", function(){
    expect(wordTracker.correctWord == "wood");
  });
  it("should know the word being typed", function(){
    expect(wordTracker.typedWord == "wo");
  });
  it("should add a letter to the word being typed", function(){
    wordTracker.addLetter('o');
    expect(wordTracker.typedWord == 'woo')
  });
  it("should remove a letter from the word being typed", function(){
    wordTracker.removeLetter();
    expect(wordTracker.typedWord == 'wo');
  });
  describe("word is incomplete", function(){
    it("should know if the word is incomplete", function(){
      expect(wordTracker.finished == false);
    });
    it("should know if word is on track", function(){
      expect(wordTracker.onTrack == true);
    });
    it("should know if word is off track", function(){
      wordTracker.addLetter('k');
      expect(wordTracker.onTrack == false);
    });
  });
  it("should know if the word is complete", function(){
    wordTracker.typedWord = 'wood';
    expect(wordTracker.finished == true)
  });
});
