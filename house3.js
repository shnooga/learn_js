// Creating Class/Struct via prototype for more efficient mem usage
function House(address, rooms, price, hasGarage) {
  this.address = address;
  this.rooms = rooms;
  this.price = price;
  this.hasGarage = hasGarage;
}

// Save mem space with static property
House.PROPERTY_TAX= .01;
// Save mem space with prototy method
House.prototype.view = function() {
  //with (this) document.write(address + ' has '+rooms+' rooms, '+(garage?'a':'no')+' garage, and costs $'+price+'<BR>');
  document.write(this.address + ' has '+ this.rooms +' rooms, '+(this.hasGarage ? 'a' : 'no')+' garage, and costs $' + this.price + '<BR>');
}

House.prototype.totalCost = function() {
  document.write('Total cost is: $' + eval(this.price + this.price * House.PROPERTY_TAX) +'<BR>');
}


house1 = new House('12 Oak ave', 4, 25000, false);
house1.view();
house1.totalCost();

house2 = new House('35 MLK drv', 2, 12000, true);
house2.view();
house2.totalCost();
