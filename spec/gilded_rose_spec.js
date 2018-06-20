describe("Gilded Rose", function() {
  var gildedRose;
  var normalItem;
  var agedBrie;
  beforeEach(function(){
    normalItem = new Item("normalItem", 2, 20);
    agedBrie = new Item("Aged Brie", 1, 0);
    gildedRose = new Shop([normalItem, agedBrie]);
  })

  it("foo should be first item in array", function() {
    expect(gildedRose.items[0]).toEqual(normalItem);
  });

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

    it("should increase the sellIn by 2 when seelIn is 0", function() {
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(gildedRose.items[1].quality).toEqual(3)
    });
  });
});
