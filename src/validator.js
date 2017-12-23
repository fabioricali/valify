const be = require('bejs');

module.exports = {
    //String
    email: {
        fn: be.email.bind(this),
        msg: '{0} is a not valid email'
    },
    url: {
        fn: be.url.bind(this),
        msg: '{0} is a not valid url'
    },
    ip: {
        fn: be.ip.bind(this),
        msg: '{0} is a not valid IP'
    },
    uuid: {
        fn: be.uuid.bind(this),
        msg: '{0} is a not valid UUID'
    },
    creditCard: {
        fn: be.creditCard.bind(this),
        msg: '{0} is a not valid credit card'
    },
    camelCase: {
        fn: be.camelCase.bind(this),
        msg: 'the string must be in the camelCase format'
    },
    kebabCase: {
        fn: be.kebabCase.bind(this),
        msg: 'the string must be in the kebabCase format'
    },
    snakeCase: {
        fn: be.snakeCase.bind(this),
        msg: 'the string must be in the snakeCase format'
    },
    capitalized: {
        fn: be.capitalized.bind(this),
        msg: 'the string must be capitalized instead it is {0}'
    },
    lowerCase: {
        fn: be.lowerCase.bind(this),
        msg: 'the string must be lowerCase instead it is {0}'
    },
    upperCase: {
        fn: be.upperCase.bind(this),
        msg: 'the string must be upperCase instead it is {0}'
    },
    //Number
    min: {
        fn: be.min.bind(this),
        msg: 'the number must be greater than or equal to {1} instead it is {0}'
    },
    max: {
        fn: be.max.bind(this),
        msg: 'the number must be lesser than or equal to {1} instead it is {0}'
    },
    //Date
    dateBetween: {
        fn: be.dateBetween.bind(this),
        msg: 'the date must be between {1} and {2} instead it is {0}'
    }
};