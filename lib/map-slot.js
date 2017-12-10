const _ = require('lodash')

const model = require('../models/interactionModel.json')
const mapSlotType = require('./map-slot-type')

const intentSlotMappings = {}

for(let intent of model.languageModel.intents) {
    if( !_.isArray(intent.slots) ) continue;

    for(let slot of intent.slots) {
        let key = `${intent.name}.${slot.name}`
        intentSlotMappings[key] = slot.type
    }
}

const getSlotName = (slotKey) => {
    const match = slotKey.match(/\.(.*)$/)
    return match ? match[1] : undefined
}

const mapSlot = (request, slotKey) => {
    const slotName = getSlotName(slotKey)
    const slot = request.intent.slots[slotName]
    if(slot && slot.value) {
        const slotType = intentSlotMappings[slotKey]
        if(!slotType) {
            throw new Error(`Cannot map unknown slot ${slotKey}`)
        }

        const value = _.toLower(slot.value)
        return mapSlotType(slotType, value)
    }        
}

module.exports = mapSlot;
