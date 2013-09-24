describe("Timer", function() {
  
  it("should be able to time the input", function() {
    var container = document.createElement('div')

    var gameArea = appendChild(container, 'textarea', 'gameArea');

    var submitButton = document.createElement('input')
    submitButton.id = "finishedRacing"
    container.appendChild(submitButton);

    var results = document.createElement('p');
    results.id = "results";
    container.appendChild(results);

    typeRacer(container);

    gameArea.onfocus();

    submitButton.dispatchEvent(new Event('click'));

    expect(results.innerHTML).toMatch(/Congrats! You took \d+\.\d+ seconds\./);
  });

  function appendChild(container, tagType, id) {
    var newTag = document.createElement(tagType);
    newTag.id = id;
    container.appendChild(newTag)    
    return newTag;
  }
});
