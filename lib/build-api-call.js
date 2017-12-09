const _ = require('lodash')

const buildApiCall = (url, params) => {
    let paramString = 
        _.map(params, (value, key) => [key, value] )
        .filter( ([key,value]) => !_.isUndefined(value) )
        .map( ([key,value]) => {
            let apiKey = encodeURIComponent(key)
            let apiValue = encodeURIComponent(value)

            return `${apiKey}=${apiValue}`
        })
        .join('&');


    return `${url}?${paramString}`;
}

module.exports = buildApiCall;
