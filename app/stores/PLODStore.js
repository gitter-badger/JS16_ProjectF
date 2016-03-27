var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var _plodCharacters = [];

function setPlodCharacter(data) {
    _plodCharacters = data;
}

// Merge our store with Node's Event Emitter
var PLODStore = assign({}, EventEmitter.prototype, {

    getPlodCharacters: function() {
        return _plodCharacters;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

PLODStore.dispatchToken = AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case Constants.RECEIVE_PLOD_CHARACTERS:
            setPlodCharacter(action.data);
            break;
        default:
            return true;
    }

    PLODStore.emitChange();
});

module.exports = PLODStore;
