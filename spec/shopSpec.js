describe('Shop', function(){
  var shop;
  beforeEach(function(){
    shop = new Shop();
    item = jasmine.createSpy("item");
  });

  describe('#add', function(){
    it('adds a new item to the item array', function(){
      shop.add(item);
      expect(shop.items).toContain(item)
    });
  });
});
