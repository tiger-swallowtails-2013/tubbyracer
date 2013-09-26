describe("accuracy tracker", function(){
  accuracyTracker.correctWord = 'wood';
  accuracyTracker.typedWord = 'wo'

  it("should know the correct word", function(){
    expect(accuracyTracker.correctWord == "wood");
  });
  it("should know the word being typed", function(){
    expect(accuracyTracker.typedWord == "wo");
  });
  it("should add a letter to the word being typed", function(){
    accuracyTracker.addLetter('o');
    expect(accuracyTracker.typedWord == 'woo')
  });
  it("should remove a letter from the word being typed", function(){
    accuracyTracker.removeLetter();
    expect(accuracyTracker.typedWord == 'wo');
  });
  describe("word is incomplete", function(){
    it("should know if the word is incomplete", function(){
      expect(accuracyTracker.finished == false);
    });
    it("should know if word is on track", function(){
      expect(accuracyTracker.onTrack == true);
    });
    it("should know if word is off track", function(){
      accuracyTracker.addLetter('k');
      expect(accuracyTracker.onTrack == false);
    });
  });
  it("should know if the word is complete", function(){
    accuracyTracker.typedWord = 'wood';
    expect(accuracyTracker.finished == true)
  });
});
