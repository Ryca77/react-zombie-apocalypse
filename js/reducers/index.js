var actions = require('../actions/index');

var initialItemsState = {
    items: ''
};

var escapeReducer = function(state, action) {
    state = state || initialItemsState;
    if(action.type === actions.ADD_ITEM) {
        var userItems = state.items;
        return Object.assign({}, state, {items: userItems});
    }

    return state;
}

exports.escapeReducer = escapeReducer;