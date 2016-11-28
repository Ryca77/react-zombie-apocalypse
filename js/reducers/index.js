var actions = require('../actions/index');

var initialItemsState = {
    userLocation: '',
    userCoords: {},
    infectionCoords: {},
    safePlaceCoords: [],
    items: []
};

var escapeReducer = function(state, action) {
    state = state || initialItemsState;
    if(action.type === actions.ADD_USER_LOCATION) {
        console.log(action);
        var userLocation = action.location;
        return Object.assign({}, state, {userLocation: userLocation});
    }

    /*else if(action.type === actions.ADD_USER_MARKER) {
        console.log(action);
        var userCoords = action.coords;
        return Object.assign({}, state, {userCoords: userCoords});
    }*/

    else if(action.type === actions.ADD_ITEM) {
        console.log(action);
        var userItems = state.items;
        userItems.push(action.item);
        return Object.assign({}, state, {items: userItems});
    }

    else if(action.type === actions.ADD_ESCAPE_DATA) {
        console.log(action);
        var userCoords = action.user;
        var infectionCoords = action.infection;
        var safePlaceCoords = action.safe;
        return Object.assign({}, state, {userCoords: userCoords}, {infectionCoords: infectionCoords}, {safePlaceCoords: safePlaceCoords})
    }

    return state;
}

exports.escapeReducer = escapeReducer;