describe("Order", function() {

  it("creates an order ticket with user choices", function() {
    var testOrder = new Order ("Hawaiian", "Red Sauce", "Large");
    expect(testOrder.toppings).to.equal("Hawaiian");
    expect(testOrder.sauce).to.equal("Red Sauce");
    expect(testOrder.sze).to.equal("Large");
  });

  it("adds function for toppings", function() {
    var testOrder = new Order ("Hawaiian");
    expect(testOrder.toppingOptions()).to.equal(2);
  });

  it("adds function for sauces", function() {
    var testOrder = new Order ("Hawaiian", "Red Sauce");
    expect(testOrder.sauceOptions()).to.equal(0);
  });

  it("add function for size", function() {
    var testOrder = new Order ("Hawaiian", "Red Sauce", "Large");
    expect(testOrder.sizeOptions()).to.equal(15)
  });

  it("add function for pizza price", function() {
    var testOrder = new Order ("Hawaiian", "Red Sauce", "Large");
    expect(testOrder.orderPrice()).to.equal(17);
  });
});
