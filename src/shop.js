class Shop {
  constructor(items=[]){
    this.items = items;
  }

  add(item) {
    this.items.push(item);
  }

  updateQuality(){
    this.items.forEach(function(item){

      if (this._ifSulfurus(item)) { return; }
      if (this._ifTicket(item)) {
          this._ticketUpdate(item);
          return;
        }
      this._standardUpdate(item);
    }.bind(this));
  }

  _standardUpdate(item){
    var delta;
    this._ifBrie(item) ? delta = 1 : delta = -1;
    if (this._ifConjured(item)) { delta = -2 };
    if (this._ifSellInBelowZero(item)) { item.quality += delta; }
    item.quality += delta;
    if (this._ifQualityBelowZero(item)) { item.quality = 0 }
    if (this._ifQualityAboveFifty(item)) { item.quality = 50; }
    item.sellIn --;
  }

  _ticketUpdate(item) {
    if (this._ifSellInBelowZero(item)) { item.quality = 0}
    else if (item.sellIn < 6) {item.quality += 3}
    else if (item.sellIn < 11 ) {item.quality += 2}
    else {
      item.quality += 1;
      if (this._ifQualityAboveFifty(item)) {item.quality = 50}
    }
    item.sellIn --;
  }

  _ifTicket(item){
    return (item.name == "Backstage passes to a TAFKAL80ETC concert")
  }

  _ifBrie(item){
    return (item.name == "Aged Brie")
  }

   _ifSulfurus(item){
     return (item.name == "Sulfuras, Hand of Ragnaros")
   }

   _ifConjured(item){
     return (item.name == "Conjured Mana Cake")
   }

   _ifSellInBelowZero(item){
     return (item.sellIn <= 0)
   }

   _ifQualityBelowZero(item){
     return (item.quality <= 0)
   }

  _ifQualityAboveFifty(item){
    if (this._ifBrie(item) || this._ifTicket(item)) { return (item.quality >= 50) }
  }

}
