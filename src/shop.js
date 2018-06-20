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
     if (this._ifSellInbelowZero(item)) { item.quality += n}
     this._ifQualitybelowZero(item) ? item.quality = 0 : item.quality += n;
     item.sellIn --
   }.bind(this));
 }

 _ifSellInbelowZero(item){
   return (item.sellIn <= 0)
 }

 _ifQualitybelowZero(item){
   return (item.quality <= 0)
 }
}
