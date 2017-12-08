const api = require('../lib/petfinder-api')

describe('petfinder-api', () => {

    it('can successfully make a call to pet.find', done => {
        api.find({ location: '48197', animal: 'cat' }) 
            .then( res => {
                done();
            })
            .catch(done)
    })
})
