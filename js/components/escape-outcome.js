var React = require('react');
var connect = require('react-redux').connect;

var EscapeMessage = require('./escape-message');
var actions = require('../actions/index');
var store = require('../store');

//show user location name
var EscapeOutcome = React.createClass({
	getInitialState: function() {
        return {
        	timesEnabled: false
        }
    },

    componentDidMount: function() {
    	this.setState({timesEnabled: true});
    },

    startAgain: function() {
    	window.location.reload();
    },

    render: function() {
		return (
			<div className="escape-outcome">
				{this.state.timesEnabled &&
				<EscapeMessage className="message-container" /> }
				{this.state.timesEnabled &&
				<button type="button" className="start-again" onClick={this.startAgain}>Start Again</button> }
			</div>
		);
	}
});

var Container = connect()(EscapeOutcome);

module.exports = Container;