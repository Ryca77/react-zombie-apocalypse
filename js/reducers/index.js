var actions = require('../actions/index');

var initialItemsState = {
    userLocation: '',
    userCoords: {},
    infectionCoords: {},
    safePlaceCoords: [],
    nearestSafePlace: {},
    userJourneyTime: '',
    zombieJourneyTime: '',
    items: [],
    bat: false
};

var escapeReducer = function(state, action) {
    state = state || initialItemsState;
    if(action.type === actions.ADD_USER_LOCATION) {
        console.log(action);
        var userLocation = action.location;
        return Object.assign({}, state, {userLocation: userLocation});
    }

    else if(action.type === actions.ADD_ITEM) {
        console.log(action);
        var userItems = state.items;
        userItems.push(action.item);
        return Object.assign({}, state, {items: userItems});
    }

    else if(action.type === actions.ADD_BAT) {
        console.log(action);
        var yesBat = action.bat;
        return Object.assign({}, state, {bat: yesBat});
    }

    else if(action.type === actions.ADD_ESCAPE_DATA) {
        console.log(action);
        var userCoords = action.user;
        var infectionCoords = action.infection;
        var safePlaceCoords = action.safe;
        return Object.assign({}, state, {userCoords: userCoords}, {infectionCoords: infectionCoords}, {safePlaceCoords: safePlaceCoords});
    }

    else if(action.type === actions.ADD_NEAREST_SAFE_PLACE) {
        console.log(action);
        var nearestSafePlace = action.nearestSafePlace;
        return Object.assign({}, state, {nearestSafePlace: nearestSafePlace});
    }

    else if(action.type === actions.ADD_USER_JOURNEY_TIME) {
        console.log(action);
        var userJourneyTime = action.userJourneyTime;
        return Object.assign({}, state, {userJourneyTime: userJourneyTime});
    }

    else if(action.type === actions.ADD_ZOMBIE_JOURNEY_TIME) {
        console.log(action);
        var zombieJourneyTime = action.zombieJourneyTime;
        return Object.assign({}, state, {zombieJourneyTime: zombieJourneyTime});
    }

    return state;
}

exports.escapeReducer = escapeReducer;