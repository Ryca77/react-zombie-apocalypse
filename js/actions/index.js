var ADD_ITEM = 'ADD_ITEM';
var addItem = function(item) {
	return {
		type: ADD_ITEM,
		item: item
	};
};

exports.ADD_ITEM = ADD_ITEM;
exports.addItem = addItem;