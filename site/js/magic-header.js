

document.write("<div id=\"fb-root\"></div>");

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function writeHeader(active) {
	document.write(getHeader(active));
}
function getHeader(active)
{
	var menu = "";
	
	menu += " <div id=\"header-wrapper\"> ";
	menu += "	<div id=\"header-logo\"> ";
	menu += "		<a href=\"index.html\"><img alt=\"magic building block logo\" src=\"images/header/logo.png\" /></a> ";
	menu += "	</div> ";
	menu += "	<div id=\"header-menu\"> ";
	menu += "		<div id=\"header-menu-links\"> ";
	menu += "			"+getHome(active)+" | "+getContactUs(active)+"&nbsp;&nbsp;";
    
    menu += "<div class=\"fb-like\" data-href=\"https://www.facebook.com/Magic-Building-Block-Preschool-Childcare-Center-133052263412902/\" data-width=\"200\" data-layout=\"button\" data-action=\"like\" data-show-faces=\"false\" data-share=\"false\"></div>";
    
	menu += "		</div> ";
	menu += "		<div id=\"header-menu-slogan\"> ";
	menu += "			<img src=\"images/header/serving-30-years.png\" alt=\"serving over 30 years\" /> ";
	menu += "		</div> ";
	menu += "	</div><!--header-logo--> ";
	menu += " </div><!--header-wrapper--> ";
	
	return menu;
}
function getContactUs(active)
{
	var clas = "";
	var page = "contact.html";
	if (active === "contact_us") {
		clas = "class=\"active\"";
		page = "contact.html";
	}
	return "<a href=\""+page+"\" "+clas+">contact us</a>";	
}
function getHome(active)
{
	var clas = "";
	var page = "index.html";
	if (active === "home") {
		clas = "class=\"active\"";
		page = "#";
	}
	return "<a href=\""+page+"\" "+clas+">home</a>";	
}