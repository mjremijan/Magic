
function contactUsFormSubmitClick()
{
	var yourNameInput		= $("#yourName");
	var yourEmailInput		= $("#yourEmail");
	var emailSubjectInput	= $("#emailSubject");
	var emailMessageInput 	= $("#emailMessage");
	
	yourNameInput.removeClass("inputWarning");
	yourEmailInput.removeClass("inputWarning");
	emailSubjectInput.removeClass("inputWarning");
	emailMessageInput.removeClass("inputWarning");
	
	var warnUser = false;
	var validEmail = true;	
	
	var yourNameValue = $.trim(yourNameInput.val()); 
	if (yourNameValue.length === 0) {
		yourNameInput.addClass("inputWarning");
		warnUser = true;
	}
	
	var yourEmailValue = $.trim(yourEmailInput.val()); 
	if (yourEmailValue.length === 0) {
		yourEmailInput.addClass("inputWarning");
		warnUser = true;
	} else {
		var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		validEmail = pattern.test(yourEmailValue);
		if (validEmail === false) {
			yourEmailInput.addClass("inputWarning");
		}
	}
	
	var emailSubjectValue = $.trim(emailSubjectInput.val()); 
	if (emailSubjectValue.length === 0) {
		emailSubjectInput.addClass("inputWarning");
		warnUser = true;
	}
	
	var emailMessageValue = $.trim(emailMessageInput.val()); 
	if (emailMessageValue.length === 0) {
		emailMessageInput.addClass("inputWarning");
		warnUser = true;
	}
	
	if (warnUser === true) {
		alert("Please enter all information required" + ((validEmail === false) ? " and enter a valid email address." : ""));
	} 
	else
	if (validEmail === false) {
		alert("Please enter a valid email address.");
	} else {
		var contactUsForm = $("#contactUsForm");
		contactUsForm.attr("action", "send.php");
		contactUsForm.submit();		
	}
		
		
	return false;
}

$(document).ready(function(){   
	$("#contactUsFormSubmit").click(
		contactUsFormSubmitClick
	);
});	