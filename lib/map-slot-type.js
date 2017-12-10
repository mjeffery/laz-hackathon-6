const _ = require('lodash')

const model = require('../models/interactionModel.json')

const typeMappings = {}

for(let type of model.languageModel.types) {
    const lookupTable = {}

    for(let valueEntry of type.values) {
        let key = _.toLower(valueEntry.name.value)
        lookupTable[key] = valueEntry.id 

        for(let synonym of valueEntry.name.synonyms || []) {
            key = _.toLower(synonym)
            lookupTable[key] = valueEntry.id
        }
    }

    typeMappings[type.name] = lookupTable;
}

const mapSlotType = (type, rawValue) => {
    const typeMapping = typeMappings[type];
    if(!typeMapping) {
        throw new Error(`Unknown slot type '${type}'`)
    }

    const key = _.toLower(rawValue)

    return typeMapping[key]
}

module.exports = mapSlotType
