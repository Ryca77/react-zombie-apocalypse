
//get user location, plot on map
//get random infection point, plot on map
//get safe points, plot nearest on map after survival outcome is displayed
//get travel time betweem user location and nearest safe point - adjustable for car, cycle, walking
//get travel time betweem infection point and user's nearest safe point - make slower if user has selected one or more other items
//if outcome is failure, show total survival time and point at which overcome by infection

var fetch = require('isomorphic-fetch');

//add user location to map
var ADD_USER_LOCATION = 'ADD_USER_LOCATION';
var addUserLocation = function(location) {
	console.log(location);
	return {
		type: ADD_USER_LOCATION,
		location: location
	};
};

var getLocation = function(location) {
	return function(dispatch) {
		var latitude = location.lat;
    	var longitude = location.lng;
		var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyBOvMQKAtB336uW1OUdCgtPeay9VPmYsaE';
		return fetch(url)
		.then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var town = data.results[1].formatted_address;
            return dispatch(addUserLocation(town));
        })
        .catch(function() {
        	console.log('error');
        });
	}
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
exports.getLocation = getLocation;