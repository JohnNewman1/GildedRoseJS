describe("Gilded Rose", function() {

  beforeEach(function(){
    normalItem = new Item("normalItem", 2, 20);
    agedBrie = new Item("Aged Brie", 1, 0);
    gildedRose = new Shop([normalItem, agedBrie]);
  })

  describe('updateQuality for normalItem', function(){

    it("should decrease the quality by 1 ", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(19);
    });

    it("should decrease the sellIn by 1 ", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(1);
    });
  });

  describe('updateQuality for Aged brie', function(){

    it("should increase the quality by 1", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[1].quality).toEqual(1);
    });

    it("should decrease the sellIn by 1 ", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[1].sellIn).toEqual(0)
    });

    it("should increase the quality by 2 when seelIn is 0", function() {
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(gildedRose.items[1].quality).toEqual(3)
    });
  });

  describe("updateQuality for Ticket", function(){
    beforeEach(function(){
      ticketOne = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)
      ticketTwo = new Item("Backstage passes to a TAFKAL80ETC concert", 12, 10)
      ticketThree = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 4)
      ticketFour = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 4)
      gildedRoseTwo = new Shop([ticketOne, ticketTwo, ticketThree, ticketFour]);
      gildedRoseTwo.updateQuality();

    })
    it("should increase the quality by 1 when sellIn is above 10 ", function(){
      expect(ticketTwo.quality).toEqual(11);
    });

    it("should increase the quality by 2 when sellIn is between 5 and 10 ", function(){
      expect(ticketThree.quality).toEqual(6);
    });

    it("should increase the quality by 3 when sellIn is between 1 and 5 ", function(){
      expect(ticketFour.quality).toEqual(7);
    });

    it("should make the quantity 0 when sellIn is 0 ", function(){
      expect(ticketOne.quality).toEqual(0);
    });
  });
});
