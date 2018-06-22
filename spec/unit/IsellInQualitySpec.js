describe('IsellInQuality', function(){
  var IsellInQuality = require('../../src/IsellInQuality')
  beforeEach(function(){
    interface = new IsellInQuality();
    obj = {sellInUpdate: function(){}}
    obj2 = {qualityUpdate: function(){}}
    obj3 = {qualityUpdate: function(){}, sellInUpdate: function(){}}
  });

  it('It throws a error if object does not have sellInUpdate method', function(){
    expect( function(){ interface.implement(obj) }).toThrow('Item must implement method qualityUpdate')
  });

  it('It throws a error if object does not have qualityUpdate method', function(){
    expect( function(){ interface.implement(obj2) }).toThrow('Item must implement method sellInUpdate')
  });

  it('does not throwsa error if it has the methods', function(){
    expect( function(){ interface.implement(obj3) }).not.toThrow()
  });
});
