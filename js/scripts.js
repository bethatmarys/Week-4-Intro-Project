function Size(small, medium large){
  this.small = small;
  this.medium = medium;
  this.large = large;
  }

function Toppings(pepperoni, ham, pinapple){
  this.pepperoni = pepperoni;
  this.ham = ham;
  this.pinapple = pinapple;
}

Size.prototype.pizzaSize = function() {
  return this.small || this.medium || this.large;
}

Topping.prototype.pizzaTopping = function() {
  return this.pepperoni + ", " + this.ham + ", " + this.pinapple;
}

function resetFields() {
    $("input#small").val("")
    $("input#medium").val("")
    $("input#large").val("")
    $("input#pepperoni").val("")
    $("input#ham").val("")
    $("input#pinapple").val("")
}
