const _ = require('lodash')

const PRONOUNS = {
    M: 'he',
    F: 'she',
    _DEFAULT: 'they'
}

const SIZE = {
    S: 'small',
    M: 'medium',
    L: 'large',
    XL: 'extra large',
    _DEFAULT: ''
}

const AGE = {
    Baby: 'a baby',
    Young: 'a young',
    Adult: 'an adult',
    Senior: 'an elderly',
    _DEFAULT: ''
}

const OPTIONS = {
    specialNeeds: 'has special needs',
    noDogs: "doesn't do well with dogs",
    noCats: "doesn't do well with cats",
    noKids: "doesn't do well with kids",
    noClaws: "has been declawed",
    hasShots: 'is up to date on shots',
    housetrained: 'is house trained',
    altered: 'has been sterilized'
}

const template = (prop, values) => (pet) => {
    const value = _.get(pet, prop, false)
    return value ? values[value] : values._DEFAULT
}

const getPronoun = template('sex.$t', PRONOUNS)
const getSize = template('size.$t', SIZE)
const getAge = template('age.$t', AGE)

const getBreed = (pet) => {
    const breed = _.get(pet, 'breeds.breed.$t', false) 
    if(breed) {
        return breed
    } else {
        return _.get(pet, 'animal.$t', false)
    }
}

const getDetail = pet => _.random(0, 1) ? getSize(pet) : getAge(pet)

const getOptions = (pet) => 
    _.chain(pet)
        .get('options.option')
        .map('$t')
        .sampleSize(2)
        .map( option => OPTIONS[option] || option )
        .sampleSize(2)
        .value()
        .join(' and ')

module.exports = {
    getPronoun,
    getSize,
    getAge,
    getDetail,
    getBreed,
    getOptions
}
