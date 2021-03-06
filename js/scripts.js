//Business logic

function Pizza(size, topping) {
  this.selectedSize = size;
  this.selectedTopping = topping;
  }


Pizza.prototype.orderSize = function() {
  return "You have selected a " + this.selectedSize + " size pizza.";
}

Pizza.prototype.orderTopping = function() {
  return "You have selected " + this.selectedTopping + " as a topping.";
}

//Front end logic
$(document).ready(function() {
  $("#pizzaChoice").submit(function(event) {
  event.preventDefault();

  var size = $("select#selectSize").val();
  var topping = $("select#toppingChoice").val();
  var newPizza = new Pizza(size, topping);
  var price = 10;

  if (size === "blank") {
    price += 0;
  } else if (size === "small") {
    price += 1;
  } else if (size === "medium") {
    price += 5;
  } else if (size === "large") {
    price += 10;
  }

  if (topping === "blank") {
    price += 0;
  } else if (topping === "pepperoni") {
    price += 4;
  } else if (topping === "ham") {
    price += 2;
  } else if (topping === "sausage") {
    price += 6;
  }


$("#results").show();
    $(".selectSize").text(newPizza.orderSize());
    $(".price").text("$" + price + ".");
    $(".toppingChoice").text(newPizza.orderTopping());
    $(".price").text("$" + price + ".");
    $(".toppingChoice").html("You have added " + topping + " topping to your pizza.");
  });
});
