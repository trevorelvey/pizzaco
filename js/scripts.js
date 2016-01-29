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

Order.prototype.sizeOptions = function() {
  if (this.sze === "Large") {
    return 15;
  } else if (this.sze === "Medium") {
    return 12;
  } else {
    return 10;
  };
};

Order.prototype.orderPrice = function () {
  var result = this.toppingOptions() + this.sauceOptions() + this.sizeOptions();
  return result;
};

// UI

function resetFields() {
  $("input#toppingOptions").val("");
  $("input#sauceOptions").val("");
  $("input#sizeOptions").val("");
};

$(document).ready(function() {
  $("form#orderSelect").submit(function(event) {
    event.preventDefault();

    var inputToppings = #(this).find("input#toppingOptions").val();
    var inputSauce = #(this).find("input#sauceOptions").val();
    var inputSize = #(this).find("input#sizeOptions").val();
    var orderTotal = new Order(inputToppings, inputSauce, inputSize);

    orderTotal.orderPrice();

  });
});
