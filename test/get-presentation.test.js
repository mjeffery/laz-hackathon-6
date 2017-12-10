const fs = require('fs')
const path = require('path')

const getPresentation = require('../lib/get-presentation')

describe('get-presentation', () => {

    it('gets the presentation', done => {
        getPresentation()
            .then( result => {
                const filename = path.resolve(__dirname, '../resources/presentation.txt')
                const expected = fs.readFileSync(filename, 'utf-8')

                expect(result).to.equal(expected)

                done()
            })
            .catch(done)
    })

})
