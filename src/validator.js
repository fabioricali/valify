const be = require('bejs');

module.exports = {
    email: be.email.bind(this),
    url: be.url.bind(this)
};