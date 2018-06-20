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
     if (this._ifbelowZero(item)) { item.quality += n}
     item.sellIn --
     item.quality += n
   }.bind(this));
 }

 _ifbelowZero(item){
   return (item.sellIn <= 0)
 }
}
