var React = require('react');
var connect = require('react-redux').connect;

var EscapeOutcome = require('./escape-outcome');
var actions = require('../actions/index');
var store = require('../store');

var SurvivalMap = React.createClass({
	getInitialState: function() {
        return {
            userCoords: {},
            infectionCoords: {},
            safePlaceCoords: []
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
        //random lats and lngs - scotland, wales, west, east
    	var randomLatLng =  [
    		{lat: (Math.random()*(57.468 - 54.965) + 54.965.toFixed() * 1), lng: (Math.random()*(-3.054 - -4.681) + -4.681.toFixed() * 1)},
    		{lat: (Math.random()*(53.186 - 51.713) + 51.713.toFixed() * 1), lng: (Math.random()*(-2.614 - -4.021) + -4.021.toFixed() * 1)},
    		{lat: (Math.random()*(54.495 - 50.875) + 50.875.toFixed() * 1), lng: (Math.random()*(-0.747 - -2.416) + -2.416.toFixed() * 1)},
			{lat: (Math.random()*(52.736 - 50.972) + 50.972.toFixed() * 1), lng: (Math.random()*(-0.593 - -0.746) + -0.746.toFixed() * 1)}
		];
        var infectionCoords = randomLatLng[Math.floor(Math.random() * randomLatLng.length)];
        console.log(infectionCoords);
        this.setState({infectionCoords: infectionCoords});
        //lats and lngs for safe places
        var safePlaceCoords = [
        	{lat: 51.891796, lng: 0.901473},
        	{lat: 55.9022, lng: -3.2395},
        	{lat: 57.583889, lng: -4.070278},
        	{lat: 54.377634, lng: -1.723628},
        	{lat: 52.823333, lng: -2.144722},
        	{lat: 51.2599, lng: -0.7598}
        ];
        this.setState({safePlaceCoords: safePlaceCoords});
	},

	generateMap: function() {
		var userCoords = this.state.userCoords;
		var infectionCoords = this.state.infectionCoords;
		var safePlaceCoords = this.state.safePlaceCoords;
		this.mapImage = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 54.559322, lng: -2.5},
			zoom: 6
		});
		var userIcon = '';
		var userMarker = new google.maps.Marker({
    		position: userCoords,
   			map: this.mapImage,
   			title: 'Your Location'
   		});
   		var infectionIcon = '/assets/images/infection-icon-30px.png'
   		var infectionMarker = new google.maps.Marker({
   			position: infectionCoords,
   			map: this.mapImage,
   			title: 'Infection Breakout Point',
   			icon: infectionIcon,
   			optimized: false,
   		});
   		var safeIcon = '/assets/images/assembly-point-icon-30px.png'
   		for(var i = 0; i < safePlaceCoords.length; i++) {
   			var safePlace = safePlaceCoords[i];
   			var safeMarker = new google.maps.Marker({
    			position: safePlace,
   				map: this.mapImage,
   				title: 'Safe Place',
   				icon: safeIcon
   			});
   		};
	},

	addEscapeOutcome: function(event) {
		event.preventDefault();
		var userCoords = this.state.userCoords;
		var infectionCoords = this.state.infectionCoords;
		var safePlaceCoords = this.state.safePlaceCoords;
		var userItems = (store.getState().items);
		this.props.dispatch(actions.addEscapeData(userCoords, infectionCoords, safePlaceCoords));
		this.props.dispatch(actions.getUserJourney(userCoords, safePlaceCoords, userItems));
		//this.props.dispatch(actions.getZombieJourney(infectionCoords, safePlaceCoords));
	},

	render: function() {
		return (
			<div>
				<button type="button" className="start-moving" onClick={this.addEscapeOutcome}>Start Moving!</button>
            	<br></br>
            	<button type="button" className="load-map" onClick={this.generateMap}>Load Map</button>
				<div className="map" id="map"></div>
				<EscapeOutcome className="escape-outcome" userCoords={this.state.userCoords} infectionCoords={this.state.infectionCoords} safePlaceCoords={this.state.safePlaceCoords} />
			</div>
		);
	}

});

var Container = connect()(SurvivalMap);

module.exports = Container;