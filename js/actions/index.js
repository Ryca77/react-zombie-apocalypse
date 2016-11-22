//fetch population data
//get user location, plot on map
//get random infection point, plot on map
//calculate survival time and show visually on map

//add user location to map
var ADD_USER_LOCATION = 'ADD_USER_LOCATION';
var addUserLocation = function(marker) {
	return {
		type: ADD_USER_LOCATION,
		marker: marker
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