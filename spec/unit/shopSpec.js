describe("Shop", function(){

  var Shop = require('../../src/shop')
  var shop;

  beforeEach(function(){
    shop = new Shop();
    normalItem = { name: "normalItem", sellIn: 1, quality: 20 }
    sulfuras = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
    agedBrie = { name: "Aged Brie", sellIn: 2, quality: 5 }
    ticket = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 30 }
    conjured = { name: "Conjured Mana Cake", sellIn: 4, quality: 20 }
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

      it("Reduces sellIn by 1", function(){
        shop.updateQuality();
        expect(agedBrie.sellIn).toEqual(1);
      })

      it("Increases quality by 1", function(){
        shop.updateQuality();
        expect(agedBrie.quality).toEqual(6);
      });

      it("Increases quality by 2 when sellIn below zero", function(){
        agedBrie.sellIn = 0;
        shop.updateQuality();
        expect(agedBrie.quality).toEqual(7);
      });

      it("Quality will not go above 50", function(){
        agedBrie.quality = 50;
        shop.updateQuality();
        expect(agedBrie.quality).toEqual(50);
      });
    });

    describe("Ticket", function(){

      beforeEach(function(){
        shop.add(ticket);
      });

      it("Reduces sellIn by 1", function(){
        shop.updateQuality();
        expect(ticket.sellIn).toEqual(10);
      })

      it("Increases quality by 1 when sellIn is above 10", function(){
        shop.updateQuality();
        expect(ticket.quality).toEqual(31);
      });

      it("Increase the quality by 2 when sellIn is between 5 and 10", function(){
        ticket.sellIn = 6;
        shop.updateQuality();
        expect(ticket.quality).toEqual(32);
      });

      it("Increase the quality by 3 when sellIn is between 1 and 5", function(){
        ticket.sellIn = 2;
        shop.updateQuality();
        expect(ticket.quality).toEqual(33);
      });

      it("Quality equal zero when sellIn is 0 or less", function(){
        ticket.sellIn = 0;
        shop.updateQuality();
        expect(ticket.quality).toEqual(0);
      });

      it("Quality will not go above 50", function(){
        ticket.quality = 50;
        shop.updateQuality();
        expect(ticket.quality).toEqual(50);
      });
    });

    describe("Conjured", function(){

      beforeEach(function(){
        shop.add(conjured);
      });
      it("Reduces sellIn by 1 ", function(){
        shop.updateQuality();
        expect(conjured.sellIn).toEqual(3);
      });

      it("Reduces by 2 when sellIn is above 0", function(){
        shop.updateQuality();
        expect(conjured.quality).toEqual(18);
      });

      it("Reduces by 4 when sellIn is below 0", function(){
        conjured.sellIn = -2;
        shop.updateQuality();
        expect(conjured.quality).toEqual(16);
      });

      it("Quality can not go below 0", function(){
        conjured.quality = 0;
        shop.updateQuality();
        expect(conjured.quality).toEqual(0);
      });
    });
  });
});
