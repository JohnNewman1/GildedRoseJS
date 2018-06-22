describe('MainItemUpdate',function(){
  var item;
  var main;
  var MainItemUpdate = require('../../src/mainItemUpdate');
  beforeEach(function(){
    item = {name: "Dogs Bone", quality: 3}
    main = new MainItemUpdate(item, -1);
  });

  describe('#update', function(){
    it('reduces sellIn by arg', function(){
      main.update();
      expect(item.quality).toEqual(2);
    })
  });
});
