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
	menu += "			"+getHome(active)+" | "+getContactUs(active)+" ";
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
	var page = "#";
	if (active === "contactus") {
		clas = "class=\"active\"";
		page = "#";
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