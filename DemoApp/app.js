var faker = require("faker");

var productName = faker.commerce.productName();
var price = faker.commerce.price();

for (var i =0; i < 10; i++) {
	console.log(productName);
	console.log(price);
}