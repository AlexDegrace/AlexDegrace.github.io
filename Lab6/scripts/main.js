

function submitForm(){
	document.getElementById("successAlert").classList.remove("collapse");
	window.scrollTo(0, 0);
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("email").value = "";
	document.getElementById("datepicker").value = "";
	document.getElementById("cardNumber").value = "";
	document.getElementById("nameCard").value = "";
}

function goToBooking(bookType){
	var yOffset = -250;
	var elem = document.getElementById("selectService");
	elem.value = bookType;
	elem = document.getElementById("form");
	const element = document.getElementById("appointment");
	const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
	window.scrollTo({top: y, behavior: 'smooth'});
}

// This funciton was inspiered by this tread https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
function goToSection(section){
	var yOffset= -200; 
	const element = document.getElementById(section);
	const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
	window.scrollTo({top: y, behavior: 'smooth'});
}

