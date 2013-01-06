// Creating Class/Struct via prototype for more efficient mem usage
function House(address, rooms, price, hasGarage) {
 
  // Public member
  this._price = price;
 
  // Private member
  var _rooms = rooms;
  var _address = address;
  var _hasGarage = hasGarage;
  var that = this;

  // Private method
  function priv_view() {
    return _address + ' has '+ _rooms +' rooms, ' + (_hasGarage ? 'a' : 'no') + ' garage, and costs $' + that._price + '<BR>';
  }

  // Privilege method
  this.view = function() {
    document.write(priv_view());
  }
}

// Public member (Save mem space with static property)
House.PROPERTY_TAX= .01;

// Public method (Save mem space with static property)
House.prototype.totalCost = function() {
      document.write('Total cost is: $' + eval(this._price + this._price * House.PROPERTY_TAX) +'<BR>');
}

house1 = new House('76 Memory Lane', 4, 25000, false);
house1.view();
house1.totalCost();

