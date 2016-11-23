
//get user location, plot on map
//get random infection point, plot on map
//get safe points, plot nearest on map after survival outcome is displayed
//get travel time betweem user location and nearest safe point - adjustable for car, cycle, walking
//get travel time betweem infection point and user's nearest safe point - make slower if user has selected one or more other items
//if outcome is failure, show total survival time and point at which overcome by infection

//add user location to map
var ADD_USER_LOCATION = 'ADD_USER_LOCATION';
var addUserLocation = function(location) {
	console.log(location);
	/*navigator.geolocation.getCurrentPosition(locationSuccess)
	
	function locationSuccess(position) {		
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var userLocation = {lat: latitude, lng: longitude};
		console.log(latitude);
		console.log(longitude);

		var map = document.getElementById('map');
		var marker = new google.maps.Marker({
    		position: userLocation,
    		map: map,
    		title: 'Your Location!'
    	});
	}*/

	return {
		type: ADD_USER_LOCATION,
		location: location
	};
};

//add items to list
var ADD_ITEM = 'ADD_ITEM';
var addItem = function(item) {
	return {
		type: ADD_ITEM,
		item: item
	};
};

exports.ADD_ITEM = ADD_ITEM;
exports.addItem = addItem;

exports.ADD_USER_LOCATION = ADD_USER_LOCATION;
exports.addUserLocation = addUserLocation;