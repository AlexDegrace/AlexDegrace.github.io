var expert = 1;

$(window).scroll(function(){
	if($(document).scrollTop() > 155){//Here 200 may be not be exactly 200px
	  $('#header').hide();
	  $('#navbar').show();
	}
  });

$(window).scroll(function(){
	if($(document).scrollTop() < 145){//Here 200 may be not be exactly 200px
	  $('#header').show();
	  $('#navbar').hide();
	}
  });


jQuery(function () {
    $("#cardNumber").keyup(function () {
        var value = this.value;
        var regEx = new RegExp('^[0-9]{16}$');
        if (!regEx.test(value)) {
            $("#cardNumberError").show()
        }
		else{
			$("#cardNumberError").hide()
		}
    });
});

jQuery(function () {
    $("#nameCard").keyup(function () {
        var value = this.value;
        var regEx = new RegExp('^[a-z\- A-z]*$');
        if (!regEx.test(value)) {
            $("#nameCardError").show()
        }
		else{
			$("#nameCardError").hide()
		}
    });
});

jQuery(function () {
    $("#phone").keyup(function () {
        var value = this.value;
        var regEx = new RegExp('^[0-9]{3} [0-9]{3}-[0-9]{4}$');
        if (!regEx.test(value)) {
            $("#phoneError").show()
        }
		else{
			$("#phoneError").hide()
		}
    });
});

jQuery(function () {
    $("#email").keyup(function () {
        var value = this.value;
        var regEx = new RegExp('^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$');
        if (!regEx.test(value)) {
            $("#emailError").show()
        }
		else{
			$("#emailError").hide()
		}
    });
});

jQuery(function () {
    $("#firstName").keyup(function () {
        var value = this.value;
        var regEx = new RegExp('^[a-z\- A-z]*$');
        if (!regEx.test(value)) {
            $("#firstNameError").show()
        }
		else{
			$("#firstNameError").hide()
		}
    });
});

jQuery(function () {
    $("#lastName").keyup(function () {
        var value = this.value;
        var regEx = new RegExp('^[a-z\- A-z]*$');
        if (!regEx.test(value)) {
            $("#lastNameError").show()
        }
		else{
			$("#lastNameError").hide()
		}
    });
});

$(document).ready(function(){
    $("#selectExpert").change(function(){
		expert = $(this).children("option:selected").val();
    });
});

$(function() {
	$( "#datepicker" ).datepicker({
		beforeShowDay: function(date) {
			var day = date.getDay();
			if(expert == 1){
				return [(day != 6 && day != 0), ''];
			}
			else if(expert == 2){
				return [(day != 4 && day != 5 && day != 6 && day != 0), ''];
			}
			else if(expert == 3){
				return [(day != 1 && day != 2 && day != 3 && day != 4), ''];
			}
			else if(expert == 4){
				return [(day != 1 && day != 0), ''];
			}
		}
	});
});

$('a').click( function(e) {
	e.preventDefault();
	var yOffset= -100;
	var element;
	var id = $(this).attr('id');
	if(id == 'serviceNavButton'){
		element = document.getElementById("services");
	}
	else if(id == 'expertsNavButton'){
		element = document.getElementById("experts");
	}
	else{
		element = document.getElementById("appointment");
	}
	var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
	window.scrollTo({top: y, behavior: 'smooth'});
	return false; 
});