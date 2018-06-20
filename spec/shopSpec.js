describe("Shop", function(){
  var shop;
  beforeEach(function(){
    shop = new Shop();
    item = jasmine.createSpy("item");
    sulfuras = jasmine.createSpy("Sulfuras");
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
        item.sellIn = 0;
        shop.updateQuality();
        expect(item.quality).toEqual(18);
      });
      it(" quality will not go below zero", function(){
        item.quality = 0;
        shop.updateQuality();
        expect(item.quality).toEqual(0);
      });
    });

    describe("Sulfuras", function(){

      beforeEach(function(){
        shop.add(sulfuras);
        sulfuras.name = "Sulfuras, Hand of Ragnaros";
        sulfuras.sellIn = 0;
        sulfuras.quality = 80;
      });

      it("reduces sellIn by 0", function(){
        shop.updateQuality();
        expect(sulfuras.sellIn).toEqual(0);
      })

      it("reduces quality by 0", function(){
        shop.updateQuality();
        expect(sulfuras.quality).toEqual(80);
      });

      it("reduces quality by 0 when sellIn below zero", function(){
        sulfuras.sellIn = -2;
        shop.updateQuality();
        expect(item.quality).toEqual(80);
      });

    });

    });
  });
});
