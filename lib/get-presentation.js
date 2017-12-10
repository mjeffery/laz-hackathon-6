const fs = require('fs')

const getPresentation = () =>
    new Promise( (resolve, reject) => {
        const filename = require.resolve('../resources/presentation.txt')
        fs.readFile(filename, 'utf-8', (err, text) => {
            if(err) reject(err)
            resolve(text)
        })
    })

module.exports = getPresentation
