class ValifyError extends Error {
    constructor(...args) {
        super(...args);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValifyError);
        }
        this.fields = args[1];
    }
}

module.exports = ValifyError;