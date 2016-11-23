var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

//show user location on map
var UserLocation = function(props) {
	var latitude = props.location.lat;
    var longitude = props.location.lng;
    var userLocation = {lat: latitude, lng: longitude};
    console.log(userLocation);
    console.log(props);

	return (
		<div className="user-location">Town Name</div>
	)

};

var Container = connect()(UserLocation);

module.exports = Container;