describe("Shop", function(){
  var shop;
  beforeEach(function(){
    shop = new Shop();
    normalItem = {name: "normalItem", sellIn: 1, quality: 20 }
    sulfuras = {name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
    agedBrie = {name: "Aged Brie", sellIn: 2, quality: 5}
  });

  describe("#add", function(){
    it("adds a new item to the item array", function(){
      shop.add(normalItem);
      expect(shop.items).toContain(normalItem)
    });
  });

  describe("updateQuality", function(){

    describe("NormalItems", function(){

      beforeEach(function(){
        shop.add(normalItem);
      });

      it("reduces sellIn by 1", function(){
        shop.updateQuality();
        expect(normalItem.sellIn).toEqual(0);
      })

      it("reduces quality by 1", function(){
        shop.updateQuality();
        expect(normalItem.quality).toEqual(19);
      });

      it("reduces quality by 2 when sellIn below zero", function(){
        normalItem.sellIn = 0;
        shop.updateQuality();
        expect(normalItem.quality).toEqual(18);
      });

      it(" quality will not go below zero", function(){
        normalItem.quality = 0;
        shop.updateQuality();
        expect(normalItem.quality).toEqual(0);
      });
    });

    describe("Sulfuras", function(){

      beforeEach(function(){
        shop.add(sulfuras);
      });

      it("reduces sellIn by 0", function(){
        console.log(shop._ifSulfurus(sulfuras))
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
        expect(sulfuras.quality).toEqual(80);
      });
    });

    describe("Aged Brie", function(){

      beforeEach(function(){
        shop.add(agedBrie);
      });

      it("reduces sellIn by 1", function(){
        shop.updateQuality();
        expect(agedBrie.sellIn).toEqual(1);
      })

      it("increases quality by 1", function(){
        shop.updateQuality();
        expect(agedBrie.quality).toEqual(6);
      });

      it("increases quality by 2 when sellIn below zero", function(){
        agedBrie.sellIn = 0;
        shop.updateQuality();
        expect(agedBrie.quality).toEqual(7);
      });

      it(" quality will not go above 50", function(){
        agedBrie.quality = 50;
        shop.updateQuality();
        expect(agedBrie.quality).toEqual(50);
      });
    });
  });
});
