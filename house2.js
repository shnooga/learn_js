function House(address, rooms, price, garage) {
  var _address = address;
  var _rooms = rooms;
  var _price = price;
  var _garage = garage;

  function getAddress() {
    return _address;
  }

  function getRooms() {
    return _rooms;
  }

  function getPrice() {
    return _price;
  }

  function hasGarage() {
    return _garage;
  }

  // Expose only these methods
  return {
    getAddress: getAddress,
    getRooms: getRooms,
    getPrice: getPrice,
    hasGarage: hasGarage,
  }
}

function view(myHouse) {
  //with (this) document.write(address + ' has '+rooms+' rooms, '+(garage?'a':'no')+' garage, and costs $'+price+'<BR>');
  document.write(myHouse.getAddress() + ' has '+ myHouse.getRooms() +' rooms, '+(myHouse.hasGarage() ? 'a' : 'no')+' garage, and costs $' + myHouse.getPrice() + '<BR>');
}

function totalCost(myHouse) {
  document.write('Total cost is: $' + eval(myHouse.getPrice() + myHouse.getPrice() * myHouse.PROPERTY_TAX) +'<BR>');
}


// Save mem space
House.prototype.PROPERTY_TAX= .01;

house1 = new House('12 Oak ave', 4, 25000, false);
view(house1);
totalCost(house1);

house2 = new House('35 MLK drv', 2, 12000, true);
view(house2);
totalCost(house2);
