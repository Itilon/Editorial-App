const express = require('express');

const init = (data) => {
    const app = express();

    require('./config/app.config')(app);

    const controllers = require('../controllers')(data);
    require('./routes')(app, controllers);

    return Promise.resolve(app);
};

module.exports = init;