describe("Gilded Rose", function() {
  var gildedRose;
  var normalItem;
  beforeEach(function(){
    normalItem = new Item("normalItem", 2, 20);
    gildedRose = new Shop([normalItem]);
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

    describe('updateQuality for Aged brie', function(){

      it("should increase the quality by ", function() {

      });

      it("should decrease the sellIn by 1 ", function() {

      });

  });
});
