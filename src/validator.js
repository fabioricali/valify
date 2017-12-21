const be = require('bejs');

module.exports = {
    //String
    email: {
        fn: be.email.bind(this),
        msg: 'email not valid'
    },/*
    url: be.url.bind(this),
    ip: be.ip.bind(this),
    camelCase: be.camelCase.bind(this),
    capitalized: be.capitalized.bind(this),
    kebabCase: be.kebabCase.bind(this),
    lowerCase: be.lowerCase.bind(this),
    snakeCase: be.snakeCase.bind(this),*/
    //Number
    min: {
        fn: be.min.bind(this),
        msg: 'the number must be greater than or equal to {0}'
    },
    max: {
        fn: be.max.bind(this),
        msg: 'the number must be greater than or equal to {0}'
    },
};