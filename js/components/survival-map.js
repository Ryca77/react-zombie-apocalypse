var React = require('react');
var connect = require('react-redux').connect;

var SurvivalMap = React.createClass({
	componentDidMount: function() {
		this.generateMap();
	},

	generateMap: function() {
		var mapImage = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 54.559322, lng: -2.5},
			zoom: 6
		});
		
		var latitude = 54.559322;
    	var longitude = -2.5;
    	var userLocation = {lat: latitude, lng: longitude};
    	console.log(userLocation);
		var marker = new google.maps.Marker({
    		position: userLocation,
    		map: mapImage,
    		title: 'Your Location!'
    	});
	},

	render: function() {
		return (
			<div className="map" id="map">Location Error: Reload quickly, the Zombies are coming!</div>
		);
	}

});

var Container = connect()(SurvivalMap);

module.exports = Container;