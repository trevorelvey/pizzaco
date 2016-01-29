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

$(document).ready(function() {
  $("form#orderSelect").submit(function(event) {
    var inputTopping = $("select#Topping").val();
    var inputSauce = $("select#Sauce").val();
    var inputSize = $("select#Size").val();
    var orderConfirmation = new Order(inputTopping, inputSauce, inputSize);

    var total = orderConfirmation.orderPrice();

    $(".display").empty();
      $(".display").append("<li class='toppingli'>" + ("You've chosen: ") + inputTopping + "</li>");
      $(".display").append("<li class='sauceli'>" + ("With: ") + inputSauce + " </li>");
      $(".display").append("<li class='sizeli'>" + ("Size: ") + inputSize + " </li>");
      $(".display").append("<li> Total: $" + total + "</li>");
      $(".ticket").show();

    event.preventDefault();
  });
});
