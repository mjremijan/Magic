		var MYMAP = {
		  bounds: null,
		  map: null
		}
		MYMAP.init = function(selector, latLng, zoom) {
			var myOptions = {
				zoom:zoom,
				center: latLng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			this.map = new google.maps.Map($(selector)[0], myOptions);
			this.bounds = new google.maps.LatLngBounds();
		}
		MYMAP.placeMarkers = function(filename) {
			load1();
			load2();
			
			// Fit the map around the markers we added:
			//MYMAP.map.fitBounds(MYMAP.bounds);
		}
		
		function load1()
		{
		  var name = "Magic Building Block";
		  var address = "928 Lincoln Highway<br />Fairview Heights, IL 62208-2219";
		  var url = "http://g.co/maps/hrj39"
		  // create a new LatLng point for the marker
		  var lat = "38.592198";
		  var lng = "-89.968642";
		  var phone = "618-632-7339";
		  var point = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
		  // extend the bounds to include the new point
		  MYMAP.bounds.extend(point);
		  // add the marker itself
		  var marker = new google.maps.Marker({
			position: point,
			map: MYMAP.map
		  });
		  // create the tooltip and its text
		  var infoWindow = new google.maps.InfoWindow();
		  var html='<b>'+name+'</b><br />'+address+"<br />"+phone;
		  html += "<br /><a style='color:blue;' href='"+url+"'>Driving Directions</a>";
		  // add a listener to open the tooltip when a user clicks on one of the markers
		  google.maps.event.addListener(marker, 'click', function() {
			infoWindow.setContent(html);
			infoWindow.open(MYMAP.map, marker);
		  });
		}
		function load2()			
		{
		  var name = "Magic Building Block";
		  var address = "5601 Old Collinsville Road<br />Fairview Heights, IL 62208-2219";
		  var url = "http://g.co/maps/da8x6";
		  // create a new LatLng point for the marker
		  var lat = "38.579911";
		  var lng = "-89.966628";
		  var phone = "618-632-7338";
		  var point = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
		  // extend the bounds to include the new point
		  MYMAP.bounds.extend(point);
		  // add the marker itself
		  var marker = new google.maps.Marker({
			position: point,
			map: MYMAP.map
		  });
		  // create the tooltip and its text
		  var infoWindow = new google.maps.InfoWindow();
		  var html='<b>'+name+'</b><br />'+address+"<br />"+phone;
		  html += "<br /><a style='color:blue;' href='"+url+"'>Driving Directions</a>";
		  // add a listener to open the tooltip when a user clicks on one of the markers
		  google.maps.event.addListener(marker, 'click', function() {
			infoWindow.setContent(html);
			infoWindow.open(MYMAP.map, marker);
		  });
		}
		
		$(document).ready(function() {
		  $("#locations-map").css({
			height: 375,
			width: 375
		  });
		  //var myLatLng = new google.maps.LatLng(38.592634,-89.975483);
		  var myLatLng = new google.maps.LatLng(38.587759,-89.967556);
		  MYMAP.init('#locations-map', myLatLng, 13);
		  MYMAP.placeMarkers('markers.xml');
		});