function House(address, rooms, price, garage) {
  // Public properties
  this.address=address;
  this.rooms=rooms;
  this.price=price;
  this.garage=garage;
}

function view(aHouse) {
  document.write(aHouse.address + ' has '+ aHouse.rooms+' rooms, '+(aHouse.garage?'a':'no')+' garage, and costs $' + aHouse.price+'<BR>');
}

function totalCost(aHouse) {
  document.write('Total cost is: $' + eval(aHouse.price + aHouse.price * aHouse.PROPERTY_TAX) +'<BR>');
}
House.prototype.PROPERTY_TAX= .01;

house1 = new House('777 Sesame St', 4, 25000, false);
view(house1);
totalCost(house1);

house2 = new House('35 MLK drv', 2, 12000, true);
view(house2);
totalCost(house2);
