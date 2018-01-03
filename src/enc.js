// encrypter
const dict = require('./dict.json')

module.exports = input => input.split('').map(x => Object.prototype.hasOwnProperty.call(dict, x) ? dict[x] : x).join('')
