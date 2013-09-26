describe("timer", function(){

  beforeEach(function(){
    timer.reboot();
  });

  describe("before the race begins", function(){
    it("should initialize tick at -3", function(){
      expect(timer.tick).toEqual(-3);
    });
    it("should return a state of 'before'", function(){
      expect(timer.state()).toEqual('before');
    });
    it("should increment tick by 1", function(){
      timer.count();
      expect(timer.tick).toEqual(-2);
    });
  });
  describe("during the race", function(){
    it("should return a state of 'during'", function(){
      for(var i = 0; i < 10; i++){
        timer.count();
      }
      expect(timer.state()).toEqual('during');
    });
  });
  describe("after the race is finished", function(){
    it("should return a state of 'after'", function(){
      timer.end();
      expect(timer.state()).toEqual('after');
    });
    it("should no longer increment tick", function(){
      for(var i = 0; i < 10; i++){
        timer.count();
      }
      var final_time = timer.tick;
      console.log(timer.tick)
      timer.end();
      timer.count();
      console.log(timer.tick)
      expect(timer.tick).toEqual(final_time);
    });
  });
});
