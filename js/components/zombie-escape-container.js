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
            items: [],
            showLocationButton: false,
            showItems: false,
            showBat: false,
            showMapContainer: false
        }
    },

    componentDidMount: function() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var userCoords = {lat: latitude, lng: longitude};
            console.log(userCoords);
            this.setState({userCoords: userCoords});
            this.setState({showLocationButton: true});
        });
    },

    addUserLocation: function(event) {
        event.preventDefault();
        var userCoords = this.state.userCoords;
        this.setState({showItems: true, showBat: true});
        this.props.dispatch(actions.getLocation(userCoords));    
    },

    addItem: function(event) {
        event.preventDefault();
        var item = this.refs.itemName.value;
        console.log(item);
        this.setState({items: item});
        this.props.dispatch(actions.addItem(item));
    },

    yesBat: function(event) {
        event.preventDefault();
        this.setState({showMapContainer: true});
        this.props.dispatch(actions.addBat(true))
    },

    noBat: function(event) {
        this.setState({showMapContainer: true});
    },

    render: function() {
        return (
            <div className="app">
                <div className="escape-container">
                    <h2 className="header">The zombies are coming - will you survive?</h2>
                    <h3 className="where">Where are you?
                        {this.state.showLocationButton &&
                        <button type="button" className="location" onClick={this.addUserLocation}>Load My Location</button> }
                    </h3>
                    <UserLocation className="user-location" location={this.state.userCoords} />
                    {this.state.showItems &&
                    <h3 className="items">Do you have any of these immediately available?
                        <br></br>
                        <select type="text" className="dropdown" ref="itemName">
                            <option value="Car">Car</option>
                            <option value="Bicycle">Bicycle</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Radio">Radio</option>
                            <option value="Map">Map</option>
                        </select>                
                        <button type="button" className="add" onClick={this.addItem}>Add</button>
                    </h3> }
                    <Items className="items" items={this.state.items} />
                    {this.state.showBat &&
                    <h3 className="bat">Do you have a cricket bat?
                        <button type="button" className="yes" onClick={this.yesBat}>Yes</button>
                        <button type="button" className="no" onClick={this.noBat}>No</button>
                    </h3> }
                </div>
                {this.state.showMapContainer &&
                <SurvivalMap className="survival-map" items={this.state.items} /> }
            </div>
        );
    }
});

var Container = connect()(ZombieEscapeContainer);

module.exports = Container;