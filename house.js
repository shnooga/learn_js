function House(address, rooms, price, garage) {
    this.address=address;
    this.rooms=rooms;
    this.price=price;
    this.garage=garage;

    this.view = function() {
      document.write(this.address + ' has '+ this.rooms+' rooms, '+(this.garage?'a':'no')+' garage, and costs $' + this.price+'<BR>');
    }

    this.totalCost = function() {
      document.write('Total cost is: $' + eval(this.price + this.price * this.PROPERTY_TAX) +'<BR>');
    }
}
House.prototype.PROPERTY_TAX= .01;

house1 = new House('12 Oak ave', 4, 25000, false);
house1.view();
house1.totalCost();

house2 = new House('35 MLK drv', 2, 12000, true);
house2.view();
house2.totalCost();
