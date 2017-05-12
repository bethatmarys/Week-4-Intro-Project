function Pizza(size, topping) {
  this.selectedSize = size;
  this.selectedTopping = topping;
  }

// function Topping(pepperoni, ham, pinapple){
//   this.pepperoni = pepperoni;
//   this.ham = ham;
//   this.pinapple = sausage;
// }

Pizza.prototype.orderPizza = function() {
  return "You have chosen " + this.selectedSize + ".";
  return "You have chosen " + this.selectedTopping + ".";
}

// Topping.prototype.orderPizza = function() {
//   return "You have chosen " + this.selectedTopping + ".";
// }

// function resetFields() {
//     $("input#small").val("")
//     $("input#medium").val("")
//     $("input#large").val("")
//     $("input#pepperoni").val("")
//     $("input#ham").val("")
//     $("input#sausage").val("")
// }
$(document).ready(function() {
  $("#pizzaChoice").submit(function(event) {
  event.preventDefault();

  var size = $("select#selectSize").val();
  var topping = $("select#toppingChoice").val();

  var newPizza = new Pizza(size, topping);

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
    $(".selectSize").text(newPizza.orderPizza());
    $(".price").text("$" + price + ".");
    $(".toppingChoice").text(newPizza.orderPizza());
    $(".price").text("$" + price + ".");

    $(".toppingChoice").html("You have chosen a " + "<b>" + topping +  "</b>" + " pizza.");
  });
});
