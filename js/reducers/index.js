var actions = require('../actions/index');

var initialItemsState = {
    items: []
};

var escapeReducer = function(state, action) {
    state = state || initialItemsState;
    if(action.type === actions.ADD_ITEM) {
        console.log(action);
        var userItems = state.items;
        userItems.push(action.item);
        console.log(userItems);
        console.log(state.items);
        return Object.assign({}, state, {items: userItems});
    }
    return state;
}

exports.escapeReducer = escapeReducer;