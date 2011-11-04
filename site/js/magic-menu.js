function writeMenu(active) {
	document.write(getMenu(active));
}
function getMenu(active)
{
	var menu = "";
	
	menu += " <div id=\"menu-wrapper\"> ";
	menu += " 	<div id=\"menu-centered-dropshadow\"> ";
	menu += " 		<img src=\"images/menu/centered-dropshadow.png\"/> ";
	menu += " 	</div> ";
	menu += " 	<div id=\"menu-centered-items\"> ";
	menu += " 	   <ul> ";	
	menu += " 		  " + getLocation(active);
	menu += " 		  " + getPhilosophy(active);
	menu += " 		  " + getCurriculum(active);
	menu += " 		  " + getRates(active);	
	menu += " 	   </ul> ";
	menu += " 	</div><!--menu-centered-items--> ";
	menu += " </div><!--menu-wrapper--> ";
	
	return menu;
}
function getCurriculum(active)
{
	var clas = "";
	var page = "curriculum.html";
	if (active === "curriculum") {
		clas = "class=\"active\"";
		page = "#";
	}
	return "<li class=\"first\"><a "+clas+" href=\""+page+"\">Curriculum</a></li> ";
}
function getRates(active)
{
	var clas = "";
	var page = "rates.html";
	if (active === "rates") {
		clas = "class=\"active\"";
		page = "#";
	}
	return "<li class=\"first\"><a "+clas+" href=\""+page+"\">Rates</a></li> ";
}
function getPhilosophy(active)
{
	var clas = "";
	var page = "philosophy.html";
	if (active === "philosophy") {
		clas = "class=\"active\"";
		page = "#";
	}
	return "<li class=\"first\"><a "+clas+" href=\""+page+"\">Philosophy</a></li> ";
}
function getLocation(active)
{
	var clas = "";
	var page = "locations.html";
	if (active === "locations") {
		clas = "class=\"active\"";
		page = "#";
	}
	return "<li class=\"first\"><a "+clas+" href=\""+page+"\">Locations</a></li> ";
}