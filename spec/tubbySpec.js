describe("tubby tests", function(){
  var tubby

  function appendToDom(element,className,parent){
    parent = parent || document.body;
    element = document.createElement(element);
    element.classList.add(className);
    parent.appendChild(element);

    return element;
  };

  function setTubbyPosition(element){
    element.style.left="0%"
  }

  beforeEach(function() {
    tubby = appendToDom('div','tubby');
    setTubbyPosition(tubby);
  })

  it("should be on the page when page loads", function(){
    var tubby = document.querySelector(".tubby")
    expect(tubby).not.toBeNull();
  })
  it("should should start at an absolute position at left 0%", function(){
    var tubby = document.querySelector(".tubby")
    var tubbyPos = tubby.style.left
    expect (tubbyPos).toEqual('0%');

  })
  describe("tubby moves", function(){
    it("should by a prespecified amt of pixels from left to right")

  })
})