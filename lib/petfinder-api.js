const apiGet = require('./api-get')

const key = process.env['PETFINDER_API_KEY']
if(!key) {
    throw new Error('PETFINDER_API_KEY not found in environemnt variables!')
}

const apiCall = (method, params) => {
    const apiUrl = `http://api.petfinder.com/${method}`;
    const apiParams = Object.assign({ format: 'json', key}, params)

    return apiGet(apiUrl, apiParams)
}

module.exports = {
    find: apiCall.bind(null, 'pet.find')
}
