
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {
	document.getElementById("productTab").className.replace(" active", "");
	document.getElementById("cartTab").className.replace(" active", "");
	document.getElementById("clientTab").className.replace(" active", "");
 
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	if(tabName =="Products"){
		populateListProductChoices();
		document.getElementById("productTab").className += " active";
	}
	if(tabName =="Cart"){
		selectedItems();
		document.getElementById("cartTab").className += " active";
	}
	if(tabName =="Client"){
		document.getElementById("clientTab").className += " active";
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
	
	// onlyOrganic is true if the checkbox to see only organic is checked 
	var vegetarian = document.getElementById("vegetarian").checked;
	var glutenFree = document.getElementById("glutenFree").checked;
	var lactoseFree = document.getElementById("lactoseFree").checked;
	var nutsFree = document.getElementById("nutsFree").checked;
	var organic = document.getElementById("organic").checked;

	

	var meatDiv = document.getElementById("meat");
	var otherDiv = document.getElementById("other");
	var milkDiv = document.getElementById("milk");
	var vegeDiv = document.getElementById("vegetable");
	var nutDiv = document.getElementById("nuts");
	
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products,vegetarian,glutenFree,lactoseFree,nutsFree,organic);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	
	const oldProducts = document.getElementsByClassName("productCheckbox");
    while(oldProducts.length > 0){
        oldProducts[0].parentNode.removeChild(oldProducts[0]);
    }

		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var category = optionArray[i].category;
		// create the checkbox and add in HTML DOM
		var button = document.createElement("button");
		button.name = productName;
		button.innerHTML = productName + " - "+ optionArray[i].price +  "$ - X"+productsInCart[productName];
		button.classList.add("productCheckbox");
		button.onclick = function(){
			addItem(this.name)
		};

		//Add the product in the correct category
		if(category === "meat"){
			meatDiv.appendChild(button);
		}
		else if(category === "vegetable"){
			vegeDiv.appendChild(button);
		}
		else if(category === "nut"){
			nutDiv.appendChild(button);
		}
		else if(category === "milk"){
			milkDiv.appendChild(button);
		}
		else if(category === "other"){
			otherDiv.appendChild(button);
		}
		
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	console.log(productsInCart)
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.classList.add("selectedItem");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (var prodName in productsInCart) { 
		if (productsInCart[prodName] != 0) {
			para.appendChild(document.createTextNode(prodName+" - "+productsInCart[prodName]));
			para.appendChild(document.createElement("br"));
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice()+ "$"));
		
}

