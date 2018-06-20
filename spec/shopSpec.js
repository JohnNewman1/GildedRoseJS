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
        item.sellIn = 1;
        item.quality = 20;
      });

      it("reduces sellIn by 1", function(){
        shop.updateQuality();
        expect(item.sellIn).toEqual(0);
      })

      it("reduces quality by 1", function(){
        shop.updateQuality();
        expect(item.quality).toEqual(19);
      });

      it("reduces quality by 2 when sellIn below zero", function(){
        shop.updateQuality();
        shop.updateQuality();
        expect(item.quality).toEqual(17);
      });
    });
  });
});
