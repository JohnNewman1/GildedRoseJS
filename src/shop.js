class Shop {
  constructor(){
    this.items = [];
  }

  add(item) {
   this.items.push(item);
 }

 updateQuality(){
   this.items.forEach(function(item){
     item.sellIn --
     item.quality --
   });
 }
}
