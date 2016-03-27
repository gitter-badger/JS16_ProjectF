var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var Api = require('../network/Api');

var dummyPLOD = [{
  character: '56f5c290be62dc6e128084e7',
  plod: '30',
  date: '2016-03-25T22:58:24.796Z',
  algorithm: 'B6'
},{
  character: '56f5c290be62dc6e128084fa',
  plod: '20',
  date: '2016-03-25T22:58:24.796Z',
  algorithm: 'B6'
},{
  character: '56f5c290be62dc6e1280850a',
  plod: '25',
  date: '2016-03-25T22:58:24.796Z',
  algorithm: 'B6'
},{
  character: '56f5c290be62dc6e12808520',
  plod: '30',
  date: '2016-03-25T22:58:24.796Z',
  algorithm: 'B7'
},{
  character: '56f5c292be62dc6e128088b6',
  plod: '10',
  date: '2016-03-25T22:58:24.796Z',
  algorithm: 'B7'
},{
  character: '56f5c292be62dc6e128088b8',
  plod: '6',
  date: '2016-03-25T22:58:24.796Z',
  algorithm: 'B7'
}];

var PLODActions = {

    loadPlodCharacters: function(count) {
        /*Api
            .get('characters/plod/' + count)
            .then(function (characters) {
                // Dispatch an action containing the categories.
                AppDispatcher.handleServerAction({
                    actionType: Constants.RECEIVE_PLOD_CHARACTERS,
                    data: characters
                });
            });*/
        AppDispatcher.handleServerAction({
          actionType: Constants.RECEIVE_PLOD_CHARACTERS,
          data: dummyPLOD.slice(count)
        });
    }
};

module.exports = PLODActions;
