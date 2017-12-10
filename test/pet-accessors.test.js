const pet = require('../lib/pet-accessors')

describe('pet-acccessors', () => {

    let examplePet = require('./resources/pet.json')

    it('gets the animal', () => {
        debugger;
        let result = pet.getAnimal(examplePet)
        expect(result).to.equal('cat')
    })

    it('gets the pronoun', () => {
        let result = pet.getPronoun(examplePet)
        expect(result).to.equal('he')
    })

    it("gets 'they' if no gender is defined", () => {
        let result = pet.getPronoun(null)
        expect(result).to.equal('they')
    })

    it('gets the size', () => {
        let result = pet.getSize(examplePet)
        expect(result).to.equal('a medium')
    })

    it('gets the age', () => {
        let result = pet.getAge(examplePet)
        expect(result).to.equal('an adult')
    })

    it('gets the breed', () => {
        let result = pet.getBreed(examplePet)
        expect(result).to.equal('Domestic Short Hair')
    })
})
