class Shop {
  constructor(){
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  updateQuality(){
    this.items.forEach(function(item){
      var delta;
      if (this._ifSulfurus(item)) { return; }
      this._ifBrie(item) ? delta = 1 : delta = -1;
      if (this._ifSellInBelowZero(item)) { item.quality += delta; }
      this._ifQualityBelowZero(item) ? item.quality = 0 : item.quality += delta;
      if (this._ifQualityAboveFifty(item)) { item.quality = 50; }
      item.sellIn --;
    }.bind(this));
  }

   _ifSellInBelowZero(item){
     return (item.sellIn <= 0)
   }

  _ifBrie(item){
    return (item.name == "Aged Brie")
  }

   _ifSulfurus(item){
     return (item.name == "Sulfuras, Hand of Ragnaros")
   }

   _ifQualityBelowZero(item){
     return (item.quality <= 0)
   }

  _ifQualityAboveFifty(item){
    if (this._ifBrie(item)) { return (item.quality >= 50) }
  }
  
}
