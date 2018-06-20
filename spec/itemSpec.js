describe('Item', function(){
  var item;
  beforeEach(function(){
    item = new Item("Banana Pie", 4, 3);
  })

  it('initialises with the correct properties', function(){
    expect(item.name).toEqual("Banana Pie");
    expect(item.SellIn).toEqual(4);
    expect(item.quality).toEqual(3);
  });
});
