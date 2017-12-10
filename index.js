'use strict';

const Alexa = require('alexa-sdk');
const _ = require('lodash')

const api = require('./lib/petfinder-api')
const mapSlot = require('./lib/map-slot')
const explainPet = require('./lib/explain-pet')
const getPresentation = require('./lib/get-presentation')

const getSlot = (request, slotName) => {
    const slot = request.intent.slots[slotName]
    return slot && slot.value ? slot.value.toLowerCase() : undefined
}

const handlers = {
    findIntent: function() {
        const request = this.event.request;

        let animal = mapSlot(request, 'findIntent.animal')
        const size = mapSlot(request, 'findIntent.size')
        const sex = mapSlot(request, 'findIntent.sex')
        const age = mapSlot(request, 'findIntent.age')

        //TODO fetch the zip code from the device

        api.find({ location: '48197', animal, size, age })
            .then( res => {
                let msg = '';

                const pet = _.sample(res.petfinder.pets.pet)
                if(pet) {
                    msg = explainPet(pet)
                } else {
                    msg = `I couldn't find any ${animal}s near your location`
                }
                
                this.response.speak(msg)
                this.emit(':responseReady')
            })
            .catch( err => {
                console.log(err)

                this.response.speak("Sorry, I'm having a little trouble locating pets right now, try again later")
                this.emit(':responseReady')
            })
    },
    givePresentationIntent: function() {
        getPresentation()
            .then( text => this.response.speak(text) )
            .catch( err => {
                console.err(err)
                this.response.speak("Sorry, I'm having a little trouble with the presentation right now.")
            })
            .then( () => this.emit(':responseReady') )
    }
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
