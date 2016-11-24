var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

//show list of items
var Items = function(props) {
	var itemList = props.items.map(function(item, index) {
		return (
			<li className="items" key={index}>{item}</li>
		)
	});
	return (
		<div className="item-list">{itemList}</div>
	)
};

//show list of items
/*var Items = function(props) {
	var itemList = [];
	var item = props.items;
	for(var i = 0; i < item.length; i++) {
		itemList.push(<li key={i}>{item[i]}</li>);
	}
    return (
        <div className="items">{itemList}</div>
    );
};*/

var mapStateToProps = function(state, props) {
	return {
		items: state.items
	};
};

var Container = connect(mapStateToProps)(Items);

module.exports = Container;