class MainItemUpdate {
  constructor(item, delta){
    this.item = item;
    this.delta = delta
  }
  update(){
    this.item.quality += this.delta;
  }
}

module.exports = MainItemUpdate;
