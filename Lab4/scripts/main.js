

function submitForm(){
	console.log("click")
	document.getElementById("successAlert").classList.remove("collapse");
	document.getElementById("successAlert").scrollIntoView();
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("email").value = "";
	document.getElementById("date").value = "";
}

function goToBooking(bookType){
	var elem = document.getElementById("selectService");
	elem.value = bookType;
	elem = document.getElementById("form");
	elem.scrollIntoView();
}