'use strict';

const Alexa = require('alexa-sdk');

const handlers = {
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
