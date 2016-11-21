var React = require('react');
var connect = require('react-redux').connect;

var Items = require('./items');
var actions = require('../actions/index');

var ZombieEscapeContainer = React.createClass({
    getInitialState: function() {
        return {
            items: ''
        }
    },

    addItem: function(event) {
        event.preventDefault();
        var item = this.refs.itemName.value;
        console.log(item);
        this.props.dispatch(actions.addItem(item));
    },

    render: function() {
        return (
            <div className="repository-list">
                
                <h3>Where are you?</h3>
                <button type="button">Get My Location</button>
                <br></br>
                <h3>Do you have any of these immediately available?</h3>
                <select type="text" className="dropdown" ref="itemName">
                    <option value="Car">Car</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Radio">Radio</option>
                    <option value="Bat">Bat</option>
                    <option value="Water">Water</option>
                    <option value="Food">Food</option>
                    <option value="Sleeping Bag">Sleeping Bag</option>
                </select>
                &nbsp;
                <button type="button" onClick={this.addItem}>Add</button>
                <br></br>
                <Items className="items" />
                <br></br>
                <button type="button">Start Moving!</button>
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