// BDD

function Order(toppings, sauce, sze) {
  this.toppings = toppings;
  this.sauce = sauce;
  this.sze = sze;
};

Order.prototype.toppingOptions = function() {
  if (this.toppings === "Hawaiian") {
    return 2;
  } else if (this.toppings === "Pepperoni") {
    return 1;
  } else {
    return 0;
  };
};

Order.prototype.sauceOptions = function() {
  if (this.sauce === "Red Sauce") {
    return 0;
  } else {
    return 2;
  };
};
