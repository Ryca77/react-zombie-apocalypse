var React = require('react');
var connect = require('react-redux').connect;

var SurvivalMap = React.createClass({
	componentDidMount: function() {
		this.generateMap();
	},

	generateMap: function() {
		var mapImage = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 0, lng: 0},
			zoom: 25
		});
	},

	render: function() {
		return (
			<div className="survival-map">MAP</div>
		);
	}
});

var Container = connect()(SurvivalMap);

module.exports = Container;