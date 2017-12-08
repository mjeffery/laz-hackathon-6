const apiGet = require('../lib/api-get')

describe('api-get', () => {
    
    it('it builds and requests a url', (done) => {

        apiGet('http://jsonplaceholder.typicode.com/posts', { userId: 1 })
            .then( result => {
                const expected = require('./resources/example-response.json')
                expect(result).to.deep.equal(expected)

                done()
            })
            .catch(done)
    })
})
