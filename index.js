'use strict';

const Alexa = require('alexa-sdk');

const api = require('./lib/petfinder-api');

const handlers = {
    findIntent: function() {

    }
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
