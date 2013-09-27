describe("timer", function(){
  it ("should have startTime to be null when not started",function() {
    expect(timer.startTime).toBeNull()
  })

  it("should have a startTime value after started", function(){
    timer.start()
    expect(timer.startTime).not.toBeNull()
  })

  it("should have an endTime to be null when not finished", function(){
    expect(timer.endTime).toBeNull()
  })

  it("should have an endTime when finished", function(){
    timer.end()
    expect(timer.endTime).not.toBeNull()
  })
  it("should return the difference between startTime and endTime", function(){
    timer.start()
    timer.end()
    expect(timer.timeElapsed()).toEqual((timer.endTime - timer.startTime)/1000)
  })
  
});
