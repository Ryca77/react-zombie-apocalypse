
//get user location, plot on map
//get random infection point, plot on map
//get safe points, plot nearest on map after survival outcome is displayed
//get travel time betweem user location and nearest safe point - adjustable for car, cycle, walking
//get travel time betweem infection point and user's nearest safe point - make slower if user has selected one or more other items
//if outcome is failure, show total survival time and point at which overcome by infection

var fetch = require('isomorphic-fetch');

//add user location name
var ADD_USER_LOCATION = 'ADD_USER_LOCATION';
var addUserLocation = function(location) {
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

//add user marker to map
/*var ADD_USER_MARKER = 'ADD_USER_MARKER';
var addUserMarker = function(coords) {
	return {
		type: ADD_USER_MARKER,
		coords: coords
	};
};*/

//add items to list
var ADD_ITEM = 'ADD_ITEM';
var addItem = function(item) {
	return {
		type: ADD_ITEM,
		item: item
	};
};

var ADD_ESCAPE_DATA = 'ADD_ESCAPE_DATA';
var addEscapeData = function(user, infection, safe) {
	return {
		type:ADD_ESCAPE_DATA,
		userCoords: user,
		infectionCoords: infection,
		safePlaceCoords: safe
	};
};

var ADD_USER_JOURNEY_TIME = 'ADD_USER_JOURNEY_TIME';
var addUserJourneyTime = function(time) {
	return {
		type:ADD_USER_JOURNEY_TIME,
		userJourneyTime: time
	};
};

var getUserJourney = function(user, safe, items) {
	return function(dispatch) {
		var userLat = user.lat;
		var userLng = user.lng;
		var safePlaceCoords = safe;

        var nearestSafeLat = null;
        var diffLat = Math.abs(userLat - safePlaceCoords[0].lat)
        for(var i = 0; i < safePlaceCoords.length; i++) {
        	var newNearest = Math.abs(userLat - safePlaceCoords[i].lat);
        	if(newNearest < diffLat) {
        		diffLat = newNearest;
        		nearestSafeLat = safePlaceCoords[i].lat;
        	}
        }
        console.log(nearestSafeLat);
        console.log(diffLat);

        var nearestSafeLng = null;
        var diffLng = Math.abs(userLng - safePlaceCoords[0].lng)
        for(var i = 0; i < safePlaceCoords.length; i++) {
        	var newNearest = Math.abs(userLng - safePlaceCoords[i].lng);
        	if(newNearest < diffLng) {
        		diffLng = newNearest;
        		nearestSafeLng = safePlaceCoords[i].lng;
        	}
        }
        console.log(nearestSafeLng);
        console.log(diffLng);

        var absoluteNearest = null;
        if(diffLat < diffLng) {
        	absoluteNearest = diffLat;
        }
        else {
        	absoluteNearest = diffLng;
        }

        for(var i = 0; i < safePlaceCoords.length; i++) {
        	if(absoluteNearest == safePlaceCoords[i].lat) {
        		nearestSafeLat = safePlaceCoords[i].lat;
        		nearestSafeLng = safePlaceCoords[i].lng;
        	}
        	else if(absoluteNearest == safePlaceCoords[i].lng) {
        		nearestSafeLat = safePlaceCoords[i].lat;
        		nearestSafeLng = safePlaceCoords[i].lng;
        	}
        }

        console.log(nearestSafeLat);
        console.log(nearestSafeLng);

        var itemsArr = items;

		var url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + userLat + ',' + userLng + '&destination=' + nearestSafeLat + ',' + nearestSafeLng + '&key=AIzaSyDdHxoeOWJXsBwBVFAXLuSh3RIg3mfli7o';
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
            console.log(data);
            console.log(data.routes[0].legs[1].value)
            return dispatch(addUserJourneyTime());
        })
        .catch(function() {
        	console.log('error');
        });
	}


}

exports.ADD_ITEM = ADD_ITEM;
exports.addItem = addItem;

exports.ADD_USER_LOCATION = ADD_USER_LOCATION;
exports.addUserLocation = addUserLocation;
exports.getLocation = getLocation;

exports.ADD_ESCAPE_Data = ADD_ESCAPE_DATA;
exports.addEscapeData = addEscapeData;

exports.ADD_USER_JOURNEY_TIME = ADD_USER_JOURNEY_TIME;
exports.addUserJourneyTime = addUserJourneyTime;

exports.getUserJourney = getUserJourney;