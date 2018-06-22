class IsellInQuality {
  constructor(){
    this.neededMethods = [ 'sellInUpdate', 'qualityUpdate']
  }

  implement(obj) {
    this.neededMethods.forEach(function(method) {
      if(typeof obj[method] !== 'function') {
        throw 'Item must implement method ' + method;
      }
    });
  }
}

module.exports = IsellInQuality;
