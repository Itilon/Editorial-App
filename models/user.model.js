class User {
    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.username === 'string' &&
            model.password.length > 8;
    }
}

module.exports = User;