const be = require('bejs');

module.exports = {
    //String
    email: be.email.bind(this),
    url: be.url.bind(this),
    ip: be.ip.bind(this),
    camelCase: be.camelCase.bind(this),
    capitalized: be.capitalized.bind(this),
    kebabCase: be.kebabCase.bind(this),
    lowerCase: be.lowerCase.bind(this),
    snakeCase: be.snakeCase.bind(this),
    //Number
    min: (v, n) => v >= n,
    max: (v, n) => v <= n,
};