const buildApiCall = (url, params) => {
    let paramString = 
        Object.entries(params)
        .map( ([key,value]) => {
            let apiKey = encodeURIComponent(key)
            let apiValue = encodeURIComponent(value)

            return `${apiKey}=${apiValue}`
        })
        .join('&');


    return `${url}?${paramString}`;
}

module.exports = buildApiCall;
