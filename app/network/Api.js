var request = require('superagent');
var Promise = require('es6-promise').Promise;

var json =  require('json!../../config/config.json');
var https = json.gotsent.api.https ? 'https://' : 'http://';
var baseUrl = https + json.gotsent.api.host + json.gotsent.api.prefix;

var Api = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            request
                .get(baseUrl + url)
                .end(function (err, res) {
                    if (res.status === 404) {
                        reject();
                    } else {
                        resolve(JSON.parse(res.text));
                    }
                });
        });
    }
    // ,
    // post: function (url,object) {
    //     return new Promise(function (resolve, reject) {
    //         request
    //             .post(baseUrl + url)
    //             .send(object)
    //             .end(function (err, res) {
    //                 if (res.status === 404) {
    //                     reject();
    //                 } else {
    //                     resolve(JSON.parse(res.text));
    //                 }
    //             });
    //     });
    // }
};

module.exports = Api;