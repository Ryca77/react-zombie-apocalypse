var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var store = require('../store');

//show user location name
var EscapeOutcome = function(props) {
	var escapeOutcome = null;
	var userTime = (store.getState().userJourneyTime);
	var zombieTime = (store.getState().zombieJourneyTime);
    if(userTime < zombieTime) {
    	escapeOutcome = 'Congratulations, you made it to...'
    }
    else {
    	escapeOutcome = 'Oh dear, the zombies intercepted you x miles from... you\'re one of them now'
    }

	return (
		<div className="escape-outcome">{escapeOutcome}</div>
	)
};

var Container = connect()(EscapeOutcome);

module.exports = Container;