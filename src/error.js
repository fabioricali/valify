class ValifyError extends Error {
    constructor(...args) {
        super(...args);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValifyError);
        }
        this.fields = args[1];
        Object.assign(this, args[2]);
    }
}

module.exports = ValifyError;