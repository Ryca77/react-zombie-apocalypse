var React = require('react');
var connect = require('react-redux').connect;

var SurvivalMap = React.createClass({		
	getInitialState: function() {
        return {
            userCoords: {},
            infectionCoords: {},
            safeCoords: []
        }
    },

    shouldComponentUpdate: function() {
    	return true;
    },

	componentDidMount: function() {
		navigator.geolocation.getCurrentPosition(
            (position) => {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var userCoords = {lat: latitude, lng: longitude};
            this.setState({userCoords: userCoords});
        });
        //random latitude  51.2 to 54
    	var randomLat = (Math.random()*(54 - 51.2) + 51.2.toFixed() * 1);
    	console.log(randomLat);
        //random longitude -0.1 to 2.2
        var randomLng = (Math.random()*(-0.1 - -2.2) + -2.2.toFixed() * 1);
        console.log(randomLng);
        var infectionCoords = {lat: randomLat, lng: randomLng};
        this.setState({infectionCoords: infectionCoords});
	},

	generateMap: function() {
		var userCoords = this.state.userCoords;
		var infectionCoords = this.state.infectionCoords;
		this.mapImage = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 54.559322, lng: -2.5},
			zoom: 6
		});
		var userIcon = {url: './infection-icon-30px.png'};
		var userMarker = new google.maps.Marker({
    		position: userCoords,
   			map: this.mapImage,
   			title: 'Your Location!',
   			icon: userIcon
   		});
   		var infectionMarker = new google.maps.Marker({
   			position: infectionCoords,
   			map: this.mapImage,
   			title: 'Infection Breakout Point'
   		})
	},

	render: function() {
		return (
			<div>
				<button type="button" className="start-moving">Start Moving!</button>
            	<br></br>
            	<button type="button" className="load-map" onClick={this.generateMap}>Load Map</button>
				<div className="map" id="map"></div>
			</div>
		);
	}

});

var Container = connect()(SurvivalMap);

module.exports = Container;