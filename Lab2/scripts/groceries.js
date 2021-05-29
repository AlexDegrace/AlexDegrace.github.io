	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "ramen",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		lactoseFree: false,
		nutsFree: true,
		price: 0.99
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 1.59
	},
	{
		name: "walnuts",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: false,
		price: 1.89
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 2.35
	},
	{
		name: "pistachio",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: false,
		price: 2.89
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: false,
		nutsFree: true,
		price: 2.99
	},
	{
		name: "almond",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: false,
		price: 3.55
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: false,
		nutsFree: true,
		price: 3.99
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 10.00
	},
	{
		name: "chiken nuget",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		lactoseFree: true,
		nutsFree: true,
		price: 12.99
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction,organic) {
	let product = [];
	for (let i=0; i<prods.length; i+=1) {
		if (((restriction == "Vegetarian") && (prods[i].vegetarian == true)) && (!organic || prods[i].organic)){
			product.push(prods[i]);
		}
		else if (((restriction == "GlutenFree") && (prods[i].glutenFree == true)) && (!organic || prods[i].organic)){
			product.push(prods[i]);
		}
		else if (((restriction == "LactoseFree") && (prods[i].lactoseFree == true)) && (!organic || prods[i].organic)){
			product.push(prods[i]);
		}
		else if (((restriction == "NutsFree") && (prods[i].nutsFree == true)) && (!organic || prods[i].organic)){
			product.push(prods[i]);
		}
		else if (restriction == "None" && (!organic || prods[i].organic)){
			product.push(prods[i]);
		}
	}
	return product;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	//round to two decimal place
	totalPrice = totalPrice.toFixed(2);
	return totalPrice;
}
