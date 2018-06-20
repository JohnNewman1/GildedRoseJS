describe("Shop", function(){
  var shop;
  beforeEach(function(){
    shop = new Shop();
    item = jasmine.createSpy("item");
  });

  describe("#add", function(){
    it("adds a new item to the item array", function(){
      shop.add(item);
      expect(shop.items).toContain(item)
    });
  });

  describe("updateQuality", function(){

    describe("NormalItems", function(){
      beforeEach(function(){
        shop.add(item);
        item.name = "normalItem";
        item.sellIn = 2;
        item.quality = 20;
      });

      it("reduces sellIn by 1", function(){
        shop.updateQuality();
        expect(item.sellIn).toEqual(1)
      })
    });
  });
});
