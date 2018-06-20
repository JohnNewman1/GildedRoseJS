class Shop {
  constructor(){
    this.items = [];
  }

  add(item) {
   this.items.push(item);
 }

 updateQuality(){
   this.items.forEach(function(item){
     var n = -1
     item.sellIn --
     if (this._ifSellInBelowZero(item)) { item.quality += n; }
     this._ifQualityBelowZero(item) ? item.quality = 0 : item.quality += n;
   }.bind(this));
 }

 _ifSellInBelowZero(item){
   return (item.sellIn <= 0)
 }

 _ifQualityBelowZero(item){
   return (item.quality <= 0)
 }
}
