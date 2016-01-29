// BDD

function Order(toppings, sauce, sze) {
  this.toppings = toppings;
  this.sauce = sauce;
  this.sze = sze;
};

Order.prototype.toppingOptions = function() {
  if (this.toppings === NaN) {
    alert("Please pick a topping!");
  } else if (this.toppings === "Hawaiian") {
    return 2;
  } else if (this.toppings === "Pepperoni") {
    return 1;
  } else {
    return 0;
  };
};

Order.prototype.sauceOptions = function() {
  if (this.toppings === NaN) {
    alert("Please pick a sauce!");
  } else if (this.sauce === "Red Sauce") {
    return 0;
  } else {
    return 2;
  };
};

Order.prototype.sizeOptions = function() {
  if (this.toppings === NaN) {
    alert("Please pick a size!");
  } else if (this.sze === "Large") {
    return 5;
  } else if (this.sze === "Medium") {
    return 2;
  } else {
    return 0;
  };
};

Order.prototype.orderPrice = function () {
  var base = 10;
  var result = base + this.toppingOptions() + this.sauceOptions() + this.sizeOptions();
  return result;
};

// UI

// function resetFields() {
//   $("input#toppingOptions").val("");
//   $("input#sauceOptions").val("");
//   $("input#sizeOptions").val("");
// };
//
$(document).ready(function() {
  $("form#orderSelect").submit(function(event) {
    event.preventDefault();

    var inputTopping = $("select#Topping").val();
    var inputSauce = $("select#Sauce").val();
    var inputSize = $("select#Size").val();
    var orderConfirmation = new Order(inputTopping, inputSauce, inputSize);

    $("ul.orderList").append("<li><span class='order'>" + orderConfirmation.orderPrice() + "</span></li>");

  });
});
