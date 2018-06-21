describe('Item', function(){
  var Item = require('../../src/item');
  var item;

  beforeEach(function(){
    item = new Item("Banana Pie", 4, 3);
  });

  it('Initialises with the correct properties', function(){
    expect(item.name).toEqual("Banana Pie");
    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(3);
  });
});
