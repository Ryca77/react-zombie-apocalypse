var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

//show user location on map
var UserLocation = function(props) {
	var lat = props;
	var lng = props;
	return (
		<div className="user-location">Town Name</div>
	)
};

var Container = connect()(UserLocation);

module.exports = Container;