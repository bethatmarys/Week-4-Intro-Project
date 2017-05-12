function Size(small, medium, large) {
  this.small = small;
  this.medium = medium;
  this.large = large;
  }

function Topping(pepperoni, ham, pinapple){
  this.pepperoni = pepperoni;
  this.ham = ham;
  this.pinapple = sausage;
}

Size.prototype.pizzaSize = function() {
  return "You have chosen " + "#selectSize" + ".";
}

Topping.prototype.pizzaTopping = function() {
  return "You have chosen " + "toppingChoice" + ".";
}

function resetFields() {
    $("input#small").val("")
    $("input#medium").val("")
    $("input#large").val("")
    $("input#pepperoni").val("")
    $("input#ham").val("")
    $("input#sausage").val("")
}
$(document).ready(function() {
  $("#pizzaChoice").submit(function(event) {
  event.preventDefault();

  var size = $("select#selectSize").val();
  var topping = $("select#toppingChoice").val();

  var newOrder = new Order(size, topping);

  var price = 10;

  if (size === "small") {
    price += 1;
  } else if (size === "medium") {
    price += 5;
  } else if (size === "large") {
    price += 10;
  }
  if (topping === "pepperoni") {
    price += 4;
  } else if (topping === "ham") {
    price += 2;
  } else if (topping === "sausage") {
    price += 6;
  }


$("#results").show();
  // newTicket.movie.forEach(function(movie) {
    $(".selectSize").text(newOrder.pizzaSize());
    $(".price").text("$" + price + ".");
    $(".toppingChoice").text(pizzaOrder.toppingChoice());
    $(".price").text("$" + price + ".");

    $(".toppingChoice").html("You have chosen a " + "<b>" + topping +  "</b>" + " pizza.");
  });
});
