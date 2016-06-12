'use strict';

describe('Service: cardBuilder', function () {

  // load the service's module
  beforeEach(module('dnd4eCardPrinterApp'));

  // instantiate service
  var cardBuilder;
  beforeEach(inject(function (_cardBuilder_) {
    cardBuilder = _cardBuilder_;
  }));

  it('should do something', function () {
    expect(!!cardBuilder).toBe(true);
  });

});
