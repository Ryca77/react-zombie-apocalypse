var React = require('react');
var connect = require('react-redux').connect;

var SurvivalMap = require('./survival-map');
var UserLocation = require('./user-location');
var Items = require('./items');
var actions = require('../actions/index');

var ZombieEscapeContainer = React.createClass({
    getInitialState: function() {
        return {
            userCoords: {},
            items: []
        }
    },

    addUserLocation: function(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(
            (position) => {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var userCoords = {lat: latitude, lng: longitude};
            console.log(userCoords);
            this.setState({userCoords: userCoords});
            this.props.dispatch(actions.getLocation(userCoords));
            this.props.dispatch(actions.addUserMarker(userCoords));
        });
    },

    addItem: function(event) {
        event.preventDefault();
        var item = this.refs.itemName.value;
        console.log(item);
        this.setState({items: item});
        this.props.dispatch(actions.addItem(item));
        console.log(this.state.items);
    },

    render: function() {
        return (
            <div className="escape-container">
                <h3>Where are you?</h3>
                <button type="button" onClick={this.addUserLocation}>Get My Location</button>
                <UserLocation className="user-location" location={this.state.userCoords} />
                <h3>Do you have any of these immediately available?</h3>
                <select type="text" className="dropdown" ref="itemName">
                    <option value="Car">Car</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Radio">Radio</option>
                    <option value="Map">Map</option>
                    <option value="Bat">Bat</option>
                    <option value="Water">Water</option>
                    <option value="Food">Food</option>
                    <option value="Sleeping Bag">Sleeping Bag</option>
                </select>
                &nbsp;
                <button type="button" onClick={this.addItem}>Add</button>
                <Items className="items" items={this.state.items} />
                <br></br>
                <button type="button">Start Moving!</button>
                <br></br>
                <SurvivalMap className="survival-map" />
            </div>
        );
    }
});

var Container = connect()(ZombieEscapeContainer);

module.exports = Container;