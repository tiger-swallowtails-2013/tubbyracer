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
  // describe("tubby moves", function(){
    
    it("should move by a prespecified amt of pixels from left to right", function(){
      var initial_position = tubbyObj.position
      var amt_to_move_by = 10
      tubbyObj.moveTubby(amt_to_move_by)
      expect(tubbyObj.position).toEqual(initial_position + amt_to_move_by)
    })
  // })
})