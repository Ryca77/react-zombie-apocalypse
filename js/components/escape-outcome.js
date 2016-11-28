var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

//show user location name
var EscapeOutcome = function(props) {
	var escapeOutcome = props.escapeOutcome;
    console.log(props);

	return (
		<div className="escape-outcome">{escapeOutcome}</div>
	)
};

var Container = connect()(EscapeOutcome);

module.exports = Container;