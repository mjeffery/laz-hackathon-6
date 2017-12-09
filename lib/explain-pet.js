const _ = require('lodash')

const { getPronoun, getDetail, getBreed, getOptions } = require('./pet-accessors')

const explainPet = pet => {
    const animal = _.get(pet, 'animal.$t', false)
    const name = _.get(pet, 'name.$t', false)
    const city = _.get(pet, 'contact.city.$t', false)

    const pronoun = getPronoun(pet)
    const detail = getDetail(pet)
    const breed = getBreed(pet)
    const options = getOptions(pet)

    return `I found a ${animal} named ${name} nearby in ${city}.  ${pronoun} is ${detail} ${breed} who ${options}`
}

module.exports = explainPet
