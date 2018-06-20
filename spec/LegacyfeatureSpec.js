describe("Gilded Rose", function() {

  var Rose = require('../src/gilded_rose');

  beforeEach(function(){
    normalItem = new Rose.Item("normalItem", 2, 20);
    agedBrie = new Rose.Item("Aged Brie", 1, 0);
    gildedRose = new Rose.Shop([normalItem, agedBrie]);
  })

  describe('updateQuality for normalItem', function(){

    it("Decrease the quality by 1 ", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(19);
    });

    it("Decrease the sellIn by 1 ", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(1);
    });
  });

  describe('updateQuality for Aged brie', function(){

    it("Increase the quality by 1", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[1].quality).toEqual(1);
    });

    it("Decrease the sellIn by 1 ", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[1].sellIn).toEqual(0)
    });

    it("Increase the quality by 2 when seelIn is 0", function() {
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(gildedRose.items[1].quality).toEqual(3)
    });
  });

  describe("updateQuality for Ticket", function(){
    beforeEach(function(){
      ticketOne = new Rose.Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)
      ticketTwo = new Rose.Item("Backstage passes to a TAFKAL80ETC concert", 12, 10)
      ticketThree = new Rose.Item("Backstage passes to a TAFKAL80ETC concert", 10, 4)
      ticketFour = new Rose.Item("Backstage passes to a TAFKAL80ETC concert", 5, 4)
      gildedRoseTwo = new Rose.Shop([ticketOne, ticketTwo, ticketThree, ticketFour]);
      gildedRoseTwo.updateQuality();

    })
    it("Increase the quality by 1 when sellIn is above 10 ", function(){
      expect(ticketTwo.quality).toEqual(11);
    });

    it("Increase the quality by 2 when sellIn is between 5 and 10 ", function(){
      expect(ticketThree.quality).toEqual(6);
    });

    it("Increase the quality by 3 when sellIn is between 1 and 5 ", function(){
      expect(ticketFour.quality).toEqual(7);
    });

    it("Make the quantity 0 when sellIn is 0 ", function(){
      expect(ticketOne.quality).toEqual(0);
    });
  });

  describe("updateQuality for Sulfuras", function(){

    beforeEach(function(){
      sulfurasOne = new Rose.Item("Sulfuras, Hand of Ragnaros", 2, 80);
      gildedRoseThree = new Rose.Shop([sulfurasOne]);
      gildedRoseThree.updateQuality();
    });

    it("Keep the quality at 80 ", function(){
      expect(sulfurasOne.quality).toEqual(80)
    });

    it("Keep the Sulfuras sellIn the same", function(){
      expect(sulfurasOne.sellIn).toEqual(2)
    });
  });

  describe("Edge Cases", function(){

    beforeEach(function(){
      normalItem = new Rose.Item("Cucumber Crown", 0, 40);
      agedBrieFifty = new Rose.Item("Aged Brie", 5, 49);
      itemQualityZero = new Rose.Item("Robot Chicken", 2, 0)
      gildedRoseFour = new Rose.Shop([normalItem, agedBrieFifty, itemQualityZero]);
      gildedRoseFour.updateQuality();
    });
    it("Quality decreases by 2 when below 0 ", function(){
      expect(normalItem.quality).toEqual(38);
    });

    it("Items will not go above 50 quality", function(){
      expect(agedBrieFifty.quality).toEqual(50);
      gildedRoseFour.updateQuality();
      expect(agedBrieFifty.quality).toEqual(50);
    });

    it("items will not go below 0 quality", function(){
      expect(itemQualityZero.quality).toEqual(0);
    });
  });

  describe("Conjured", function(){

    beforeEach(function(){
      conjuredOne = new Rose.Item("Conjured Mana Cake", 0, 40);
      conjuredTwo= new Rose.Item("Conjured Mana Cake", 5, 2);
      gildedRoseFive = new Rose.Shop([conjuredOne, conjuredTwo]);
      gildedRoseFive.updateQuality();
    });

    it("Reduces conjured items by 2 when sellIn is above 0", function(){
      expect(conjuredTwo.quality).toEqual(0);
    });

    it("Reduces conjured items by 4 when sellIn is below 0", function(){
      expect(conjuredOne.quality).toEqual(36);
    });

    it("Quality can not go below 0", function(){
      gildedRoseFive.updateQuality();
      expect(conjuredTwo.quality).toEqual(0);
    });
  });
});
