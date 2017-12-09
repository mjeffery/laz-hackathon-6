const buildApiCall = require('../lib/build-api-call')

describe('build-api-call', () => {

    it('can build a petfinder api url', () => {
        const url = 'http://api.petfinder.com/pet.find'
        const params = {
            key: 'ztFti4tTtmDPmai2FBe504vhHzDnO4mI',
            location: '48197',
            format: 'json',
            output: 'basic',
            animal: 'cat'
        }

        const result = buildApiCall(url, params)
        const expected = 'http://api.petfinder.com/pet.find?key=ztFti4tTtmDPmai2FBe504vhHzDnO4mI&location=48197&format=json&output=basic&animal=cat'

        expect(result).to.equal(expected)
    })

    it('can build a json placeholder api url', () => {
        const url = 'http://jsonplaceholder.typicode.com/posts'
        const params = { userId: 1 }

        const result = buildApiCall(url, params)
        const expected = 'http://jsonplaceholder.typicode.com/posts?userId=1'

        expect(result).to.equal(expected)
    })

    it('does not include params with undefined values', () => {
        const url = 'http://api.example.com/posts'
        const params = {
            userId: 1,
            format: undefined,
            q: undefined
        }

        const result = buildApiCall(url, params)
        const expected = 'http://api.example.com/posts?userId=1'

        expect(result).to.equal(expected)
    })
})
