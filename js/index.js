require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var ZombieEscape = require('./components/zombie-escape-container');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	<Provider store={store}>
    		<ZombieEscape />
    	</Provider>,
    	document.getElementById('app')
    );
});