	
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
		price: 0.99,
		category:"other",
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 1.59,
		category:"vegetable",
	},
	{
		name: "walnuts",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: false,
		price: 1.89,
		category:"nut",
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 1.99,
		category:"vegetable",
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 2.35,
		category:"other",
	},
	{
		name: "pistachio",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: false,
		price: 2.89,
		category:"nut",
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: false,
		nutsFree: true,
		price: 2.99,
		category:"milk",
	},
	{
		name: "almond",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: false,
		price: 3.55,
		category:"nut",
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		lactoseFree: false,
		nutsFree: true,
		price: 3.99,
		category:"milk",
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		lactoseFree: true,
		nutsFree: true,
		price: 10.00,
		category:"meat",
	},
	{
		name: "chicken nugget",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		lactoseFree: true,
		nutsFree: true,
		price: 12.99,
		category:"meat",
	}
];

var productsInCart = {
	"ramen" : 0,
	"carrot" : 0,
	"walnuts" : 0,
	"brocoli" : 0,
	"bread" : 0,
	"pistachio" : 0,
	"yogurt" : 0,
	"almond" : 0,
	"milk" : 0,
	"salmon" : 0,
	"chicken nugget" : 0,
};


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vegetarian,glutenFree,lactoseFree,nutsFree,organic) {
	let product = [];
	for (let i=0; i<prods.length; i+=1) {
		if((!vegetarian || prods[i].vegetarian) &&(!glutenFree || prods[i].glutenFree) &&(!lactoseFree || prods[i].lactoseFree) &&(!nutsFree || prods[i].nutsFree) &&(!organic || prods[i].organic)){
			product.push(prods[i]);
		}
		else if(!vegetarian && !glutenFree && !lactoseFree && !nutsFree && !organic){
			product.push(prods[i]);
		}
	}
	return product;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice() {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		totalPrice += products[i].price * productsInCart[products[i].name];

	}
	//round to two decimal place
	//totalPrice = totalPrice.toFixed(2);
	return totalPrice;
}

//Add an item to be put in the cart when add to cart button is click
function addItem(name){
	productsInCart[name] = productsInCart[name] + 1;
	console.log(name + " " + productsInCart[name]);
	var numOfProduct = productsInCart[name];
	var elem = document.getElementsByName(name)[0];
	var elemContent = elem.innerHTML;
	console.log(elemContent);
	var numOfProductStr = "X"+numOfProduct;
	elem.innerHTML = elemContent.replace(/X(.)*/g,numOfProductStr);
}
	

/* Clear the content of the cart */

function clearCart(){
	productsInCart = {
		"ramen" : 0,
		"carrot" : 0,
		"walnuts" : 0,
		"brocoli" : 0,
		"bread" : 0,
		"pistachio" : 0,
		"yogurt" : 0,
		"almond" : 0,
		"milk" : 0,
		"salmon" : 0,
		"chicken nugget" : 0,
	};
	populateListProductChoices();
	selectedItems();
}