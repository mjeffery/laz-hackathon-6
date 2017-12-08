const http = require('http')

const buildApiCall = require('./build-api-call')

const get = (url, params) =>
    new Promise( (resolve, reject) => {
        
        const apiCall = buildApiCall(url, params)

        http.get(apiCall, res => {
            res.setEncoding('utf-8')
            let body = '';

            res.on('data', data => body += data)
            res.on('error', err => reject(err))
            res.on('end', () => resolve( JSON.parse(body) ))
        })
    })

module.exports = get;

