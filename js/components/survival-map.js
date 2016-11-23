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
	},

	render: function() {
		return (
			<div className="survival-map" id="map">MAP</div>
		);
	}
});

var Container = connect()(SurvivalMap);

module.exports = Container;