var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var store = require('../store');

//show user location name
var EscapeMessage = function(props) {
	var escapeOutcome = null;
	var userTime = (store.getState().userJourneyTime);
	var zombieTime = (store.getState().zombieJourneyTime);
	var nearestSafePlace = (store.getState().nearestSafePlace);
	console.log(nearestSafePlace);

	//determine which safe place the user will see in their outcome
	var safeName = null;
	var safeImage = null;
	var width = null;
	var height = null;
	if(window.innerWidth <= 500) {
		width = 200;
		height = 150;
	}
	else {
		width = 400;
		height = 300;
	}
	if(nearestSafePlace.lat == 51.891796) {
		safeName = 'Colchester Garrison';
		safeImage = 'https://maps.googleapis.com/maps/api/streetview?size=' + width + 'x' + height + '&location=51.8774602,0.8917695&heading=165.48&pitch=-0.76&key=AIzaSyAfmTsg4_4HPNsiVuWJDX-DT6fkTIKRIt4';
	}
	else if(nearestSafePlace.lat == 55.9022) {
		safeName = 'Dreghorn Barracks';
		safeImage = 'https://maps.googleapis.com/maps/api/streetview?size=' + width + 'x' + height + '&location=55.9048346,-3.2379792&heading=201.55&pitch=-0.76&key=AIzaSyAfmTsg4_4HPNsiVuWJDX-DT6fkTIKRIt4';
	}
	else if(nearestSafePlace.lat == 57.583889) {
		safeName = 'Fort George';
		safeImage = 'https://maps.googleapis.com/maps/api/streetview?size=' + width + 'x' + height + '&location=57.5839422,-4.066836&heading=300&pitch=-0.76&key=AIzaSyAfmTsg4_4HPNsiVuWJDX-DT6fkTIKRIt4';
	}
	else if(nearestSafePlace.lat == 54.377634) {
		safeName = 'Catterick Garrison';
		safeImage = 'https://maps.googleapis.com/maps/api/streetview?size=' + width + 'x' + height + '&location=54.3627149,-1.7138478&heading=251.07&pitch=-0.76&key=AIzaSyAfmTsg4_4HPNsiVuWJDX-DT6fkTIKRIt4';
	}
	else if(nearestSafePlace.lat == 52.823333) {
		safeName = 'Beacon Barracks';
		safeImage = 'https://maps.googleapis.com/maps/api/streetview?size=' + width + 'x' + height + '&location=52.8226164,-2.1044658&heading=78.56&pitch=-0.76&key=AIzaSyAfmTsg4_4HPNsiVuWJDX-DT6fkTIKRIt4';
	}
	else if(nearestSafePlace.lat == 51.2599) {
		safeName = 'Aldershot Garrison';
		safeImage = 'https://maps.googleapis.com/maps/api/streetview?size=' + width + 'x' + height + '&location=51.2689223,-0.7519844&heading=310.31&pitch=-0.76&key=AIzaSyAfmTsg4_4HPNsiVuWJDX-DT6fkTIKRIt4';
	}
	console.log(safeName);

	//determine distance of interception by zombies
	console.log(userTime);
	console.log(zombieTime);
	var difference = userTime - zombieTime;
	var miles = null;
	if(difference <= 5000) {
		miles = '5 ';
	}
	else if(difference > 5000 && difference <= 10000) {
		miles = '10 ';
	}
	else if(difference > 10000 && difference <= 20000) {
		miles = '15 ';
	}
	else if(difference > 20000) {
		miles = 'more than 15 ';
	}

	//determine which message and image to show the user based on their outcome
	var zombieImage = null;
    if(userTime < zombieTime) {
    	escapeOutcome = 'You should be fine, you\'ll make it to ' + safeName;
    }
    else {
    	escapeOutcome = 'It\'s not good news, the zombies will intercept you ' + miles + 'miles from ' + safeName
    	safeImage = null;
    	zombieImage = '/assets/images/zombies-cropped-400px.png';
    }

	return (
		<div className="escape-message">
			<div className="message">{escapeOutcome}</div>
			<div className="image-container">
				<img className="safe-image" src={safeImage}></img>
				<img className="zombie-image" src={zombieImage}></img>
			</div>
		</div>
	)
};

var mapStateToProps = function(state, props) {
	return {
		userTime: state.userJourneyTime,
		zombieTime: state.zombieJourneyTime,
	};
};

var Container = connect(mapStateToProps)(EscapeMessage);

module.exports = Container;