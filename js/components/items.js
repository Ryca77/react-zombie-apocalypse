var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Items = function(props) {
	var items = props
	console.log(items);
    return (
        <div className="items">Items: </div>
    );
};

var mapStateToProps = function(state, props) {
	return {
		items: state.items,
	};
};

var Container = connect(mapStateToProps)(Items);

module.exports = Container;