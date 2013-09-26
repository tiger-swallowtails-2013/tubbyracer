describe("timer", function(){

  beforeEach(function(){
    timer.reboot();
  });

  describe("before the race begins", function(){
    it("should initialize tick at -3", function(){
      expect(timer.tick == -3);
    });
    it("should return a state of 'before'", function(){
      expect(timer.state === 'before');
    });
    it("should increment tick by 1", function(){
      timer.count();
      expect(timer.tick == -2);
    });
  });
  describe("during the race", function(){
    it("should return a state of 'during'", function(){
      for(var i = 0; i < 10; i++){
        timer.count();
      }
      expect(timer.state == 'during');
    });
  });
  describe("after the race is finished", function(){
    it("should return a state of 'after'", function(){
      timer.end();
      expect(timer.state == 'after');
    });
    it("should no longer increment tick", function(){
      for(var i = 0; i < 10; i++){
        timer.count();
      }
      var final_time = timer.tick;
      timer.end();
      timer.count();
      expect(timer.tick == final_time);
    });
  });
});
