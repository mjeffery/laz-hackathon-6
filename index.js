'use strict';

const Alexa = require('alexa-sdk');
const _ = require('lodash')

const api = require('./lib/petfinder-api');

const getSlot = (request, slotName) => {
    const slot = request.intent.slots[slotName]
    return slot && slot.value ? slot.value.toLowerCase() : undefined
}

const handlers = {
    findIntent: function() {
        const request = this.event.request;

        let animal = getSlot(request, 'animal')
        const size = getSlot(request, 'size')
        const sex = getSlot(request, 'sex')
        const age = getSlot(request, 'age')

        //TODO fetch the zip code from the device

        api.find({ location: '48197', animal, size, age })
            .then( res => {
                let msg = '';

                const pet = _.sample(res.petfinder.pets.pet)
                if(pet) {
                    animal = _.get(pet, 'animal.$t', false)
                    const name = _.get(pet, 'name.$t', false)
                    const city = _.get(pet, 'contact.city.$t', false)

                    msg = `I found a ${animal} named ${name} nearby in ${city}`
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
    }
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};
