class Shop {
  constructor(){
    this.items = [];
  }

  add(item) {
   this.items.push(item);
 }

 updateQuality(){
   this.items.forEach(function(item){
     if (this._ifSulfurus(item)) {return;}
     var n = -1
     if (this._ifSellInBelowZero(item)) { item.quality += n; }
     this._ifQualityBelowZero(item) ? item.quality = 0 : item.quality += n;
     item.sellIn --
   }.bind(this));
 }

 _ifSellInBelowZero(item){
   return (item.sellIn <= 0)
 }

 _ifSulfurus(item){
   return (item.name == "Sulfuras, Hand of Ragnaros")
 }

 _ifQualityBelowZero(item){
   return (item.quality <= 0)
 }
}
