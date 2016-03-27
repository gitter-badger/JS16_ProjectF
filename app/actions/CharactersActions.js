var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var Api = require('../network/Api');
var Store = require('../stores/CharactersStore');
import { browserHistory } from 'react-router';
var CharactersActions = {

    loadCharacters: function() {
        if(Store.getCharacters().length >= 1){
            AppDispatcher.handleViewAction({
                actionType: Constants.SEND_CHARACTERS,
                data: null
            });
        } else {
            Api.get('characters')
                .then(function (characters) {
                    // Dispatch an action containing the categories.
                    AppDispatcher.handleServerAction({
                        actionType: Constants.RECEIVE_CHARACTERS,
                        data: characters
                    });
                });
        }
    },
    loadCharacter: function(name) {
        Api
            .get('characters/'+name)
            .then(function (character) {
                // Dispatch an action containing the categories.
                AppDispatcher.handleServerAction({
                    actionType: Constants.RECEIVE_CHARACTER,
                    data: character
                });
            }, function(failed) {
              browserHistory.push('/characters');
            });
    },
    loadCharacterByID: function(id) {
        Api
          .get('characters/byId/'+id)
          .then(function (character) {
              // Dispatch an action containing the categories.
              AppDispatcher.handleServerAction({
                  actionType: Constants.RECEIVE_CHARACTER,
                  data: character
              });
          });
    }
};

module.exports = CharactersActions;
