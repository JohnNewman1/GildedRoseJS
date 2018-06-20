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
     item.sellIn --
     item.quality += n
   }.bind(this));
 }

 _ifSellInbelowZero(item){
   return (item.sellIn <= 0)
 }
}
