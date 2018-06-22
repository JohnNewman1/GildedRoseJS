describe('IsellInQuality', function(){
  var IsellInQuality = require('../../src/IsellInQuality')
  beforeEach(function(){
    interface = new IsellInQuality();
    obj = {sellInUpdate: function(){}}
    obj2 = {qualityUpdate: function(){}}
  });

  it('It throws a error if object does not have sellIn method', function(){
    expect( function(){ interface.implement(obj) }).toThrow('Item must implement method qualityUpdate')
  })
});
