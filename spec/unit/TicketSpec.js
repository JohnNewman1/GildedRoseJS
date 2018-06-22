describe('Ticket', function(){
  var Ticket = require('../../src/Ticket');
  beforeEach(function(){
    ticket = new Ticket("Backstage passes to a TAFKAL80ETC concert", 13, 4);
    ticketTwo = new Ticket("Backstage passes to a TAFKAL80ETC concert", 7, 6);
    ticketThree = new Ticket("Backstage passes to a TAFKAL80ETC concert", 2, 47);
    ticketFour = new Ticket("Backstage passes to a TAFKAL80ETC concert", 0, 20)

  });

  it("Reduces sellIn by 1 ", function(){
    ticket.sellInUpdate();
    expect(ticket.sellIn).toEqual(12);
  });

  it("Increases quality by 1 when sellIn is above 10", function(){
    ticket.qualityUpdate();
    expect(ticket.quality).toEqual(5);
  });

  it("Increase the quality by 2 when sellIn is between 5 and 10", function(){
    ticketTwo.qualityUpdate();
    expect(ticketTwo.quality).toEqual(8);
  });

  it("Increase the quality by 3 when sellIn is between 1 and 5", function(){
    ticketThree.qualityUpdate();
    expect(ticketThree.quality).toEqual(43);
  });

  it("Quality equal zero when sellIn is 0 or less", function(){
    ticketFour.qualityUpdate();
    expect(ticketFour.quality).toEqual(0);
  });

  it("Quality will not go above 50", function(){
    ticketThree.qualityUpdate();
    ticketThree.qualityUpdate();
    expect(ticketThree.quality).toEqual(50);
  });
});
