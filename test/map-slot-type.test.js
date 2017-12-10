const mapSlotType = require('../lib/map-slot-type')

describe('map-slot-type', () => {

    it("maps the 'sex' slot", () => {
        let result = mapSlotType('sex', 'male')
        expect(result).to.equal('M')

        result = mapSlotType('sex', 'female')
        expect(result).to.equal('F')
    })

    it("maps the 'age' slot", () => {
        let result = mapSlotType('age', 'baby')
        expect(result).to.equal('Baby')

        result = mapSlotType('age', 'young')
        expect(result).to.equal('Young')

        result = mapSlotType('age', 'adult')
        expect(result).to.equal('Adult')

        result = mapSlotType('age', 'elderly')
        expect(result).to.equal('Senior')
    })

})
