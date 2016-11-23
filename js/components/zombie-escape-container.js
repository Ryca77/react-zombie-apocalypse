var React = require('react');
var connect = require('react-redux').connect;

var SurvivalMap = require('./survival-map');
var UserLocation = require('./user-location');
var Items = require('./items');
var actions = require('../actions/index');

var ZombieEscapeContainer = React.createClass({
    getInitialState: function() {
        return {
            items: []
        }
    },

    addUserLocation: function(event) {
        event.preventDefault();
        this.props.dispatch(actions.addUserLocation());
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
                <UserLocation className="user-location" />
                <br></br>
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
                <SurvivalMap className="map" id="map" /> //this needs to be it's own component with generateMap action
            </div>
        );
    }
});

/*var mapStateToProps = function(state, props) {
    return {
        items: state.items
    };
};*/

var Container = connect()(ZombieEscapeContainer);

module.exports = Container;