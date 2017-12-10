const mapSlot = require('../lib/map-slot')

describe('map-slot', () => {

    it('can map a known slot', () => {
        const request =  require('./resources/senior-cat-request.json').request

        const result = mapSlot(request, 'findIntent.age')
        expect(result).to.equal('Senior')
    })

})
