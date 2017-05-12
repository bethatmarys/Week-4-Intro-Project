Pizza Graffiti

Pizza company that allows customers to choose the size and types of toppings and returns a price for each specific choice.

By Elizabeth Hansen

Description
This pizza site will offer the customer several choices for their personalized pizza. With each choice the price will change and the customer will see the  new cost.

Specifications for BDD
  | Behavior: this program should| Inputs Example: when it receives | Output: it should return|
  |------------------|:-------------:|------:|
 -|patron chooses size|:"Bob" makes a choice:|large:|
 +|patron chooses topping|"Bob" makes a choice|pepperoni|
 +|patron receives indivualized price |large pepperoni| $20|
 +|If player chooses to roll again, number is added to current turn|6|6 + previous roll total|
 +|If user clicks "hold", score is added to total and turn passes to other player|hold|score is held, turn is terminated|
 +|If 1 is rolled, player scores nothing and loses turn|1|pass to other player|
 +|If player score = 100, game terminates|100|game ends|


Setup/Installation Requirements
* Jquery
* Bootstrap
* Opens in browser

Support and contact details
Any question should be directed to Beth Hansen at bethatmarys@gmail.com


Technologies Used
* Jquery
* Bootstrap
* CSS
* Javascript

Copyright (c) 2017 Beth Hansen
